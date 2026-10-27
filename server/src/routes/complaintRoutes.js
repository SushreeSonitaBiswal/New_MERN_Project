import express from 'express';
import Complaint from '../models/complaintModel.js';
import Category from '../models/categoryModel.js';
import Notification from '../models/notificationModel.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

// @desc    Get all complaints with filters, search, and pagination
// @route   GET /api/complaints
router.get('/', async (req, res, next) => {
  try {
    const { status, category, priority, ward, search, page = 1, limit = 20 } = req.query;
    const query = {};

    if (status) query.status = status;
    if (category) query.category = category;
    if (priority) query.priority = priority;
    if (ward) query['location.ward'] = new RegExp(ward, 'i');

    if (search) {
      query.$or = [
        { ticketId: new RegExp(search, 'i') },
        { title: new RegExp(search, 'i') },
        { description: new RegExp(search, 'i') },
        { 'location.address': new RegExp(search, 'i') },
      ];
    }

    const total = await Complaint.countDocuments(query);
    const complaints = await Complaint.find(query)
      .populate('category', 'name code icon color')
      .populate('assignedStaff', 'name email phone department')
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.json({
      success: true,
      count: complaints.length,
      total,
      page: Number(page),
      pages: Math.ceil(total / limit),
      data: complaints,
    });
  } catch (error) {
    next(error);
  }
});

// @desc    Track single complaint by ticket ID or MongoDB ID
// @route   GET /api/complaints/:idOrTicket
router.get('/:idOrTicket', async (req, res, next) => {
  try {
    const { idOrTicket } = req.params;
    let complaint;

    if (idOrTicket.startsWith('FMA-') || idOrTicket.includes('-')) {
      complaint = await Complaint.findOne({ ticketId: idOrTicket.toUpperCase() });
    } else {
      complaint = await Complaint.findById(idOrTicket);
    }

    if (!complaint) {
      return res.status(404).json({ success: false, message: 'Ticket not found' });
    }

    await complaint.populate([
      { path: 'category', select: 'name code icon color slaHours' },
      { path: 'assignedStaff', select: 'name department phone avatar' },
    ]);

    res.json({ success: true, data: complaint });
  } catch (error) {
    next(error);
  }
});

// @desc    Create a new civic complaint
// @route   POST /api/complaints
router.post('/', async (req, res, next) => {
  try {
    const {
      title,
      description,
      categoryId,
      categoryName,
      location,
      citizenContact,
      photos,
      priority,
    } = req.body;

    let targetCategory;
    if (categoryId) {
      targetCategory = await Category.findById(categoryId);
    } else if (categoryName) {
      targetCategory = await Category.findOne({ name: new RegExp(categoryName, 'i') });
    }

    const catName = targetCategory ? targetCategory.name : categoryName || 'General Civic Issue';
    const slaTarget = new Date(Date.now() + (targetCategory?.slaHours || 48) * 3600 * 1000);

    const complaint = await Complaint.create({
      title,
      description,
      category: targetCategory?._id || null,
      categoryName: catName,
      location: location || { address: 'General Locality', ward: 'Ward 04 - Oakwood' },
      citizenContact: citizenContact || {},
      citizen: req.user?._id || null,
      priority: priority || targetCategory?.defaultPriority || 'medium',
      slaTargetDate: slaTarget,
      photos: photos || [],
      timeline: [
        {
          status: 'submitted',
          message: 'Complaint submitted by citizen and logged into municipal queue',
          actionBy: citizenContact?.name || req.user?.name || 'Citizen',
        },
      ],
    });

    res.status(201).json({ success: true, data: complaint });
  } catch (error) {
    next(error);
  }
});

// @desc    Update complaint status & timeline (Staff or Admin)
// @route   PATCH /api/complaints/:id/status
router.patch('/:id/status', protect, authorize('staff', 'admin'), async (req, res, next) => {
  try {
    const { status, note, evidencePhotos } = req.body;
    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).json({ success: false, message: 'Complaint not found' });
    }

    complaint.status = status;
    complaint.timeline.push({
      status,
      message: note || `Status updated to ${status}`,
      actionBy: `${req.user.name} (${req.user.role})`,
      timestamp: new Date(),
    });

    if (status === 'resolved' || status === 'closed') {
      complaint.completionEvidence = {
        photos: evidencePhotos || [],
        completionNotes: note || 'Resolved by field staff',
        completedAt: new Date(),
      };
    }

    await complaint.save();

    // Create notification if associated with user
    if (complaint.citizen) {
      await Notification.create({
        recipient: complaint.citizen,
        title: `Ticket ${complaint.ticketId} Updated`,
        message: `Your complaint has been updated to "${status}". Note: ${note || 'No notes added'}`,
        complaintId: complaint._id,
        ticketId: complaint.ticketId,
      });
    }

    res.json({ success: true, data: complaint });
  } catch (error) {
    next(error);
  }
});

// @desc    Assign complaint to staff member
// @route   PATCH /api/complaints/:id/assign
router.patch('/:id/assign', protect, authorize('admin', 'staff'), async (req, res, next) => {
  try {
    const { staffId, department } = req.body;
    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).json({ success: false, message: 'Complaint not found' });
    }

    complaint.assignedStaff = staffId;
    if (department) complaint.assignedDepartment = department;
    complaint.status = 'dispatched';
    complaint.timeline.push({
      status: 'dispatched',
      message: `Assigned to dispatch crew (ID: ${staffId})`,
      actionBy: `${req.user.name} (Admin)`,
      timestamp: new Date(),
    });

    await complaint.save();
    res.json({ success: true, data: complaint });
  } catch (error) {
    next(error);
  }
});

// @desc    Rate resolved complaint
// @route   POST /api/complaints/:id/rate
router.post('/:id/rate', async (req, res, next) => {
  try {
    const { score, feedback } = req.body;
    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).json({ success: false, message: 'Complaint not found' });
    }

    complaint.citizenRating = {
      score: Number(score),
      feedback: feedback || '',
      ratedAt: new Date(),
    };

    complaint.timeline.push({
      status: 'rated',
      message: `Citizen submitted rating: ${score} / 5 stars`,
      actionBy: 'Citizen',
      timestamp: new Date(),
    });

    await complaint.save();
    res.json({ success: true, message: 'Rating submitted successfully', data: complaint });
  } catch (error) {
    next(error);
  }
});

// @desc    Upvote complaint
// @route   POST /api/complaints/:id/upvote
router.post('/:id/upvote', async (req, res, next) => {
  try {
    const complaint = await Complaint.findById(req.params.id);
    if (!complaint) {
      return res.status(404).json({ success: false, message: 'Complaint not found' });
    }

    complaint.upvotes += 1;
    await complaint.save();

    res.json({ success: true, upvotes: complaint.upvotes });
  } catch (error) {
    next(error);
  }
});

export default router;
