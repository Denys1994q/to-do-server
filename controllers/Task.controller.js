import {StatusCodes} from 'http-status-codes';
import * as TaskService from '../services/task.service.js';
import {handleServerError, handleNotFoundError} from '../utils/handleServerError.uril.js';

export const getTasks = async (req, res) => {
  try {
    const tasks = await TaskService.getAllTasks();

    return res.status(StatusCodes.OK).json(tasks);
  } catch (error) {
    return handleServerError(res);
  }
};

export const createTask = async (req, res) => {
  try {
    const {title, priority, tags, expired_date} = req.body;
    const savedTask = await TaskService.createTask({title, priority, tags, expired_date});

    return res.status(StatusCodes.CREATED).json(savedTask);
  } catch (error) {
    return handleServerError(res);
  }
};

export const getTaskById = async (req, res) => {
  try {
    const {id} = req.params;
    const task = await TaskService.getTaskById(id);
    if (!task) {
      return handleNotFoundError(res);
    }

    return res.status(StatusCodes.OK).json(task);
  } catch (error) {
    return handleServerError(res);
  }
};

export const updateTask = async (req, res) => {
  try {
    const {id} = req.params;
    const {title, priority, tags, expired_date} = req.body;
    const task = await TaskService.getTaskById(id);
    if (!task) {
      return handleNotFoundError(res);
    }
    const updatedTask = await TaskService.updateTask(id, {title, priority, tags, expired_date});

    return res.status(StatusCodes.OK).json(updatedTask);
  } catch (error) {
    return handleServerError(res);
  }
};
