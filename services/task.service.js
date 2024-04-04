import Task from '../models/Task.js';
import {INTERNAL_SERVER_ERROR} from '../constants/errors.js';

export const getAllTasks = async () => {
  try {
    const tasks = await Task.find();

    return tasks;
  } catch (error) {
    throw new Error(INTERNAL_SERVER_ERROR.message);
  }
};

export const createTask = async (data) => {
  try {
    const newTask = new Task({...data});
    const savedTask = await newTask.save();

    return savedTask;
  } catch (error) {
    throw new Error(INTERNAL_SERVER_ERROR.message);
  }
};

export const getTaskById = async (id) => {
  try {
    const task = await Task.findById(id);
    return task;
  } catch (error) {
    throw new Error(INTERNAL_SERVER_ERROR.message);
  }
};
