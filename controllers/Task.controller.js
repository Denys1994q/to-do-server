import {StatusCodes} from 'http-status-codes';
import {INTERNAL_SERVER_ERROR} from '../constants/errors.js';
import * as TaskService from '../services/task.service.js';

export const getTasks = async (req, res) => {
  try {
    const tasks = await TaskService.getAllTasks();

    return res.status(StatusCodes.OK).json(tasks);
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR.status).json({message: INTERNAL_SERVER_ERROR.message});
  }
};

export const createTask = async (req, res) => {
  try {
    const {title, priority, tags, expired_date} = req.body;
    const savedTask = await TaskService.createTask({title, priority, tags, expired_date});

    return res.status(StatusCodes.CREATED).json(savedTask);
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR.status).json({message: INTERNAL_SERVER_ERROR.message});
  }
};
