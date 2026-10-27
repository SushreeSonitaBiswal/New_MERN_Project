import express from 'express';
import User from '../models/userModel.js';
import Complaint from '../models/complaintModel.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

// @desc    Get all staff members with assigned active ticket counts
// @route   GET /api/staff
router.get('/', protect, authorize('admin', 'staff'), async (req, res, next) => {
  try {
    const { department, status } = req.query;
    const filter = { role: 'staff' };
    if (department) filter.department = department;
    if (status) filter.status = status;

    const staffList = await User.find(filter).select('-password');

    // Aggregate active workloads
    const staffWithWorkload = await Promise.all(
      staffList.map(async (member) => {
        const activeTicketsCount = await Complaint.countDocuments({
          assignedStaff: member._id,
          status: { $in: ['dispatched', 'in-progress'] },
        });

        const completedCount = await Complaint.countDocuments({
          assignedStaff: member._id,
          status: { $in: ['resolved', 'closed'] },
        });

        return {
          ...member.toObject(),
          activeTicketsCount,
          completedCount,
        };
      })
    );

    res.json({ success: true, count: staffWithWorkload.length, data: staffWithWorkload });
  } catch (error) {
    next(error);
  }
});

// @desc    Get workbench tasks for currently logged in staff
// @route   GET /api/staff/workbench
router.get('/workbench', protect, authorize('staff'), async (req, res, next) => {
  try {
    const tasks = await Complaint.find({
      assignedStaff: req.user._id,
      status: { $in: ['dispatched', 'in-progress'] },
    })
      .populate('category', 'name code icon color')
      .sort({ priority: -1, createdAt: 1 });

    res.json({ success: true, count: tasks.length, data: tasks });
  } catch (error) {
    next(error);
  }
});

// @desc    Get completed work history for logged in staff
// @route   GET /api/staff/history
router.get('/history', protect, authorize('staff'), async (req, res, next) => {
  try {
    const history = await Complaint.find({
      assignedStaff: req.user._id,
      status: { $in: ['resolved', 'closed'] },
    })
      .populate('category', 'name code')
      .sort({ 'completionEvidence.completedAt': -1 });

    res.json({ success: true, count: history.length, data: history });
  } catch (error) {
    next(error);
  }
});

export default router;
