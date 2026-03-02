import mongoose from 'mongoose';

// Placeholder for User Model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Placeholder for StudyPlan Model
const studyPlanSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  subjects: [String],
  schedule: Object,
  createdAt: { type: Date, default: Date.now },
});

// In a real app, these would be in separate files in /server/models
export const User = mongoose.model('User', userSchema);
export const StudyPlan = mongoose.model('StudyPlan', studyPlanSchema);
