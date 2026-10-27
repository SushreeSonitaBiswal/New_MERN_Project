import express from 'express';
import User from '../models/userModel.js';
import { generateToken, protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// @desc    Register a new user
// @route   POST /api/auth/register
router.post('/register', async (req, res, next) => {
  try {
    const { name, email, password, role, phone, ward } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ success: false, message: 'User already exists with this email' });
    }

    const user = await User.create({
      name,
      email,
      password,
      role: role || 'citizen',
      phone: phone || '',
      ward: ward || 'Ward 04 - Oakwood District',
    });

    res.status(201).json({
      success: true,
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        ward: user.ward,
        token: generateToken(user._id),
      },
    });
  } catch (error) {
    next(error);
  }
});

// @desc    Authenticate user & get token
// @route   POST /api/auth/login
router.post('/login', async (req, res, next) => {
  try {
    const { identifier, email, password } = req.body;
    const searchVal = identifier || email;

    if (!searchVal || !password) {
      return res.status(400).json({ success: false, message: 'Please provide identifier and password' });
    }

    // Match by email or phone
    const user = await User.findOne({
      $or: [{ email: searchVal.toLowerCase() }, { phone: searchVal }],
    }).select('+password');

    if (user && (await user.matchPassword(password))) {
      res.json({
        success: true,
        data: {
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          ward: user.ward,
          department: user.department,
          token: generateToken(user._id),
        },
      });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    next(error);
  }
});

// @desc    Get current user profile
// @route   GET /api/auth/me
router.get('/me', protect, async (req, res) => {
  res.json({
    success: true,
    data: req.user,
  });
});

export default router;
