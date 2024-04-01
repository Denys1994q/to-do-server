import Task from '../models/Task.js';
import {StatusCodes} from 'http-status-codes';
import {INTERNAL_SERVER_ERROR} from '../constants/errors.js';

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    return res.status(StatusCodes.OK).json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return res.status(INTERNAL_SERVER_ERROR.status).json({message: INTERNAL_SERVER_ERROR.message});
  }
};
