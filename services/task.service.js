import Task from '../models/Task.js';

export const getAllTasks = async () => {
  try {
    const tasks = await Task.find();
    return tasks;
  } catch (error) {
    throw new Error('Error fetching tasks');
  }
};

export const createTask = async (data) => {
  try {
    const newTask = new Task({...data});
    const savedTask = await newTask.save();
    return savedTask;
  } catch (error) {
    throw new Error('Error creating tasks');
  }
};
