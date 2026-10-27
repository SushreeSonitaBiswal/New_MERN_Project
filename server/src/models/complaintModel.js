import mongoose from 'mongoose';

const complaintSchema = new mongoose.Schema(
  {
    ticketId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      index: true,
    },
    title: {
      type: String,
      required: [true, 'Please provide an issue title'],
      trim: true,
      maxlength: 120,
    },
    description: {
      type: String,
      required: [true, 'Please provide detailed description'],
      trim: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    categoryName: {
      type: String,
      required: true,
    },
    citizen: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: false, // Allows anonymous or guest reports
    },
    citizenContact: {
      name: { type: String, default: '' },
      email: { type: String, default: '' },
      phone: { type: String, default: '' },
      isAnonymous: { type: Boolean, default: false },
    },
    location: {
      address: { type: String, required: true },
      ward: { type: String, required: true, default: 'Ward 04 - Oakwood' },
      landmark: { type: String, default: '' },
      coordinates: {
        latitude: { type: Number, default: 0 },
        longitude: { type: Number, default: 0 },
      },
    },
    status: {
      type: String,
      enum: ['submitted', 'verified', 'dispatched', 'in-progress', 'resolved', 'closed', 'rejected'],
      default: 'submitted',
      index: true,
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high', 'critical'],
      default: 'medium',
      index: true,
    },
    assignedStaff: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
    assignedDepartment: {
      type: String,
      default: 'Public Works',
    },
    slaTargetDate: {
      type: Date,
    },
    photos: [
      {
        url: { type: String },
        caption: { type: String, default: '' },
        uploadedAt: { type: Date, default: Date.now },
      },
    ],
    completionEvidence: {
      photos: [{ url: String, uploadedAt: { type: Date, default: Date.now } }],
      completionNotes: { type: String, default: '' },
      completedAt: { type: Date },
    },
    citizenRating: {
      score: { type: Number, min: 1, max: 5 },
      feedback: { type: String, default: '' },
      ratedAt: { type: Date },
    },
    timeline: [
      {
        status: { type: String, required: true },
        message: { type: String, required: true },
        actionBy: { type: String, default: 'System' },
        timestamp: { type: Date, default: Date.now },
      },
    ],
    upvotes: {
      type: Number,
      default: 0,
    },
    upvotedBy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Auto-generate human-friendly ticket ID (e.g. FMA-4829)
complaintSchema.pre('validate', function () {
  if (!this.ticketId) {
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    this.ticketId = `FMA-${randomDigits}`;
  }
});

const Complaint = mongoose.model('Complaint', complaintSchema);
export default Complaint;
