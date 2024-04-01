import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    enum: ['1', '2', '3', '4'],
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'in progress', 'completed'],
    default: 'active',
    required: true
  },
  expired_date: {
    type: Date,
    required: true
  }
});

export default mongoose.model('Task', TaskSchema);
