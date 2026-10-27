import express from 'express';
import Category from '../models/categoryModel.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

// @desc    Get all active categories
// @route   GET /api/categories
router.get('/', async (req, res, next) => {
  try {
    const categories = await Category.find({ isActive: true }).sort({ name: 1 });
    res.json({ success: true, count: categories.length, data: categories });
  } catch (error) {
    next(error);
  }
});

// @desc    Create a category
// @route   POST /api/categories
router.post('/', protect, authorize('admin'), async (req, res, next) => {
  try {
    const { name, code, department, defaultPriority, slaHours, icon, color, description } = req.body;
    const category = await Category.create({
      name,
      code,
      department,
      defaultPriority,
      slaHours,
      icon,
      color,
      description,
    });
    res.status(201).json({ success: true, data: category });
  } catch (error) {
    next(error);
  }
});

// @desc    Update category
// @route   PUT /api/categories/:id
router.put('/:id', protect, authorize('admin'), async (req, res, next) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!category) {
      return res.status(404).json({ success: false, message: 'Category not found' });
    }
    res.json({ success: true, data: category });
  } catch (error) {
    next(error);
  }
});

// @desc    Delete/Deactivate category
// @route   DELETE /api/categories/:id
router.delete('/:id', protect, authorize('admin'), async (req, res, next) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, { isActive: false }, { new: true });
    if (!category) {
      return res.status(404).json({ success: false, message: 'Category not found' });
    }
    res.json({ success: true, message: 'Category deactivated successfully' });
  } catch (error) {
    next(error);
  }
});

export default router;
