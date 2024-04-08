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

export const updateTask = async (id, {title, priority, tags, expired_date}) => {
  try {
    const updatedTask = await Task.updateOne(
      {
        _id: id
      },
      {
        title: title,
        priority: priority,
        tags: tags,
        expired_date: expired_date
      }
    );

    return updatedTask;
  } catch (error) {
    throw new Error(INTERNAL_SERVER_ERROR.message);
  }
};
