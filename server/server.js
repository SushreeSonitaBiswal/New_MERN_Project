import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';

import connectDB from './src/config/db.js';
import { seedDatabase } from './src/utils/seedData.js';
import { notFound, errorHandler } from './src/middleware/errorMiddleware.js';

// Route Imports
import authRoutes from './src/routes/authRoutes.js';
import complaintRoutes from './src/routes/complaintRoutes.js';
import categoryRoutes from './src/routes/categoryRoutes.js';
import staffRoutes from './src/routes/staffRoutes.js';
import analyticsRoutes from './src/routes/analyticsRoutes.js';
import notificationRoutes from './src/routes/notificationRoutes.js';
import settingsRoutes from './src/routes/settingsRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB & Seed Initial Data
connectDB().then(() => {
  seedDatabase();
});

// Security & Core Middleware
app.use(helmet({ contentSecurityPolicy: false }));
app.use(morgan('dev'));
app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
  })
);

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 300, // limit each IP to 300 requests per window
  message: { success: false, message: 'Too many requests from this IP, please try again later' },
});
app.use('/api', limiter);

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health Check API
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    app: 'FixMyArea Civic API',
    version: '2.4.0',
    timestamp: new Date().toISOString(),
  });
});

// Mount Modular API Routes
app.use('/api/auth', authRoutes);
app.use('/api/complaints', complaintRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/settings', settingsRoutes);

// Root Route
app.get('/', (req, res) => {
  res.json({
    message: 'FixMyArea Municipal Operations REST API',
    documentation: '/api/health',
  });
});

// Error Handlers
app.use(notFound);
app.use(errorHandler);

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 FixMyArea Backend API running on http://localhost:${PORT}`);
});
