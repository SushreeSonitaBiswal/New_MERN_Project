import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Category name is required'],
      unique: true,
      trim: true,
    },
    code: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    },
    description: {
      type: String,
      default: '',
    },
    department: {
      type: String,
      required: true,
      default: 'Public Works',
    },
    defaultPriority: {
      type: String,
      enum: ['low', 'medium', 'high', 'critical'],
      default: 'medium',
    },
    slaHours: {
      type: Number,
      default: 48, // 48 hours standard SLA
    },
    icon: {
      type: String,
      default: 'report_problem',
    },
    color: {
      type: String,
      default: '#0f766e',
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model('Category', categorySchema);
export default Category;
