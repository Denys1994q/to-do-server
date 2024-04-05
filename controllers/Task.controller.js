import {StatusCodes} from 'http-status-codes';
import {INTERNAL_SERVER_ERROR, NOT_FOUND_ERROR} from '../constants/errors.js';
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

export const getTaskById = async (req, res) => {
  try {
    const {id} = req.params;
    const task = await TaskService.getTaskById(id);
    if (!task) {
      return res.status(NOT_FOUND_ERROR.status).json({message: NOT_FOUND_ERROR.message});
    }

    return res.status(StatusCodes.OK).json(task);
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR.status).json({message: INTERNAL_SERVER_ERROR.message});
  }
};
