import express from 'express';
import SystemSetting from '../models/systemSettingModel.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

// @desc    Get all system settings
// @route   GET /api/settings
router.get('/', async (req, res, next) => {
  try {
    const settings = await SystemSetting.find();
    const settingsMap = {};
    settings.forEach((s) => {
      settingsMap[s.key] = s.value;
    });

    // Provide sensible defaults if not yet customized
    const defaultSettings = {
      slaAmberThreshold: 75,
      autoDispatchEnabled: true,
      publicTransparencyFeed: true,
      citizenRatingRequired: true,
      notificationSmsEnabled: true,
      jurisdictionName: 'Oakwood Metropolitan District',
      emergencyHelpline: '311',
      ...settingsMap,
    };

    res.json({ success: true, data: defaultSettings });
  } catch (error) {
    next(error);
  }
});

// @desc    Update system settings (Admin only)
// @route   PUT /api/settings
router.put('/', protect, authorize('admin'), async (req, res, next) => {
  try {
    const updates = req.body;
    for (const [key, value] of Object.entries(updates)) {
      await SystemSetting.findOneAndUpdate(
        { key },
        { key, value },
        { upsert: true, new: true, setDefaultsOnInsert: true }
      );
    }

    res.json({ success: true, message: 'Settings saved successfully', data: updates });
  } catch (error) {
    next(error);
  }
});

export default router;
