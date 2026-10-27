import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import connectDB from './src/config/db.js';
import itemRoutes from './src/routes/itemRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check API
app.get('/api/health', (req, res) => {
  const dbState = mongoose.connection.readyState;
  const states = ['Disconnected', 'Connected', 'Connecting', 'Disconnecting'];
  
  res.json({
    status: 'OK',
    message: 'Backend API is running smoothly',
    timestamp: new Date().toISOString(),
    database: states[dbState] || 'Unknown'
  });
});

// API Routes
app.use('/api/items', itemRoutes);

// Root Route
app.get('/', (req, res) => {
  res.send('MERN Stack API Server is running');
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
