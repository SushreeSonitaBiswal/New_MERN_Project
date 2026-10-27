import express from 'express';
import Notification from '../models/notificationModel.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// @desc    Get current user notifications
// @route   GET /api/notifications
router.get('/', protect, async (req, res, next) => {
  try {
    const notifications = await Notification.find({ recipient: req.user._id }).sort({ createdAt: -1 });
    const unreadCount = await Notification.countDocuments({ recipient: req.user._id, isRead: false });

    res.json({
      success: true,
      unreadCount,
      count: notifications.length,
      data: notifications,
    });
  } catch (error) {
    next(error);
  }
});

// @desc    Mark notification as read
// @route   PATCH /api/notifications/:id/read
router.patch('/:id/read', protect, async (req, res, next) => {
  try {
    const notification = await Notification.findOneAndUpdate(
      { _id: req.params.id, recipient: req.user._id },
      { isRead: true },
      { new: true }
    );

    if (!notification) {
      return res.status(404).json({ success: false, message: 'Notification not found' });
    }

    res.json({ success: true, data: notification });
  } catch (error) {
    next(error);
  }
});

// @desc    Mark all user notifications as read
// @route   PATCH /api/notifications/read-all
router.patch('/read-all', protect, async (req, res, next) => {
  try {
    await Notification.updateMany({ recipient: req.user._id, isRead: false }, { isRead: true });
    res.json({ success: true, message: 'All notifications marked as read' });
  } catch (error) {
    next(error);
  }
});

export default router;
