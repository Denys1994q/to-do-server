import mongoose from 'mongoose';
import {PriorityEnum, StatusEnum} from '../constants/task.enum.js';

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  priority: {
    type: Number,
    enum: Object.values(PriorityEnum),
    required: true
  },
  status: {
    type: Number,
    enum: Object.values(StatusEnum),
    default: 1,
    required: true
  },
  expired_date: {
    type: Date,
    required: true
  }
});

export default mongoose.model('Task', TaskSchema);
