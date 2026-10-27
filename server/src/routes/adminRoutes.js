import express from 'express';
import Complaint from '../models/complaintModel.js';
import User from '../models/userModel.js';
import Category from '../models/categoryModel.js';
import Notification from '../models/notificationModel.js';
import SystemSetting from '../models/systemSettingModel.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

// Strict Admin Protection for all routes under /api/admin
router.use(protect, authorize('admin'));

// @desc    Admin KPI Dashboard Summary
// @route   GET /api/admin/dashboard
router.get('/dashboard', async (req, res, next) => {
  try {
    const totalComplaints = await Complaint.countDocuments();
    const resolvedComplaints = await Complaint.countDocuments({ status: { $in: ['resolved', 'closed'] } });
    const inProgressComplaints = await Complaint.countDocuments({ status: { $in: ['dispatched', 'in-progress'] } });
    const pendingReview = await Complaint.countDocuments({ status: 'submitted' });
    const totalStaff = await User.countDocuments({ role: 'staff' });
    const totalCitizens = await User.countDocuments({ role: 'citizen' });

    const recentComplaints = await Complaint.find()
      .populate('category', 'name code icon color')
      .populate('assignedStaff', 'name department')
      .sort({ createdAt: -1 })
      .limit(8);

    const categoriesBreakdown = await Complaint.aggregate([
      { $group: { _id: '$categoryName', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ]);

    const wardBreakdown = await Complaint.aggregate([
      { $group: { _id: '$location.ward', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ]);

    res.json({
      success: true,
      data: {
        kpis: {
          totalComplaints,
          resolvedComplaints,
          inProgressComplaints,
          pendingReview,
          totalStaff,
          totalCitizens,
          resolutionRate: totalComplaints > 0 ? `${Math.round((resolvedComplaints / totalComplaints) * 100)}%` : '0%',
        },
        recentComplaints,
        categoriesBreakdown,
        wardBreakdown,
      },
    });
  } catch (error) {
    next(error);
  }
});

// @desc    Admin full complaints query with status overrides & mass filtering
// @route   GET /api/admin/complaints
router.get('/complaints', async (req, res, next) => {
  try {
    const { status, priority, ward, search, page = 1, limit = 50 } = req.query;
    const query = {};

    if (status && status !== 'all') query.status = status;
    if (priority && priority !== 'all') query.priority = priority;
    if (ward && ward !== 'all') query['location.ward'] = new RegExp(ward, 'i');

    if (search) {
      query.$or = [
        { ticketId: new RegExp(search, 'i') },
        { title: new RegExp(search, 'i') },
        { 'location.address': new RegExp(search, 'i') },
        { 'citizenContact.name': new RegExp(search, 'i') },
      ];
    }

    const total = await Complaint.countDocuments(query);
    const complaints = await Complaint.find(query)
      .populate('category', 'name code icon color')
      .populate('assignedStaff', 'name email department phone')
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.json({
      success: true,
      total,
      count: complaints.length,
      data: complaints,
    });
  } catch (error) {
    next(error);
  }
});

// @desc    Admin Dispatch / Reassign Complaint
// @route   PUT /api/admin/complaints/:id/dispatch
router.put('/complaints/:id/dispatch', async (req, res, next) => {
  try {
    const { staffId, priority, status } = req.body;
    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).json({ success: false, message: 'Complaint not found' });
    }

    if (staffId) {
      const staffMember = await User.findById(staffId);
      if (staffMember) {
        complaint.assignedStaff = staffMember._id;
        complaint.assignedDepartment = staffMember.department || 'Public Works';
      }
    }

    if (priority) complaint.priority = priority;
    if (status) complaint.status = status;

    complaint.timeline.push({
      status: complaint.status,
      message: `Admin dispatched ticket to field staff (Priority: ${complaint.priority})`,
      actionBy: `${req.user.name} (Administrator)`,
      timestamp: new Date(),
    });

    await complaint.save();

    // Notify staff
    if (staffId) {
      await Notification.create({
        recipient: staffId,
        title: `New Dispatch Assignment: #${complaint.ticketId}`,
        message: `You have been assigned to: ${complaint.title} (${complaint.location.address})`,
        complaintId: complaint._id,
        ticketId: complaint.ticketId,
        type: 'assignment',
      });
    }

    res.json({ success: true, message: 'Ticket dispatched successfully', data: complaint });
  } catch (error) {
    next(error);
  }
});

// @desc    Admin Manage Staff Members (CRUD)
// @route   GET /api/admin/staff
router.get('/staff', async (req, res, next) => {
  try {
    const staff = await User.find({ role: 'staff' }).select('-password');
    const enrichedStaff = await Promise.all(
      staff.map(async (s) => {
        const activeCount = await Complaint.countDocuments({
          assignedStaff: s._id,
          status: { $in: ['dispatched', 'in-progress'] },
        });
        const resolvedCount = await Complaint.countDocuments({
          assignedStaff: s._id,
          status: { $in: ['resolved', 'closed'] },
        });
        return {
          ...s.toObject(),
          activeCount,
          resolvedCount,
        };
      })
    );

    res.json({ success: true, data: enrichedStaff });
  } catch (error) {
    next(error);
  }
});

// @desc    Admin Create Staff Member
// @route   POST /api/admin/staff
router.post('/staff', async (req, res, next) => {
  try {
    const { name, email, phone, password, department, ward } = req.body;
    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ success: false, message: 'Staff member with this email already exists' });
    }

    const newStaff = await User.create({
      name,
      email,
      phone,
      password: password || 'Staff123!',
      role: 'staff',
      department: department || 'Field Operations',
      ward: ward || 'Ward 04 - Oakwood North',
    });

    res.status(201).json({ success: true, data: newStaff });
  } catch (error) {
    next(error);
  }
});

export default router;
