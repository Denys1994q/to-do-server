import Task from '../models/Task.js';

export const getAllTasks = async () => {
  try {
    const tasks = await Task.find();
    return tasks;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw new Error('Error fetching tasks');
  }
};
