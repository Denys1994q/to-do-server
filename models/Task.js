import mongoose from 'mongoose';
import {PriorityEnum, StatusEnum, TagsEnum} from '../constants/task.enum.js';

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  priority: {
    type: Number,
    enum: Object.values(PriorityEnum),
    default: PriorityEnum.LOW,
    required: true
  },
  status: {
    type: Number,
    enum: Object.values(StatusEnum),
    default: StatusEnum.NEW,
    required: true
  },
  tags: {
    type: [
      {
        type: Number,
        enum: Object.values(TagsEnum)
      }
    ],
    default: []
  },
  expired_date: {
    type: Date,
    required: true
  }
});

export default mongoose.model('Task', TaskSchema);
