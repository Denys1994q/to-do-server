import express from 'express';
import {getTasks, createTask, getTaskById, updateTask, updateTaskStatus, deleteTask} from '../controllers/Task.controller.js';
import {createTaskValidation} from '../validation/task.validation.js';
import handleValidationErrorsUtil from '../utils/handleValidationErrors.util.js';
import {routes} from '../constants/routes.js';
import handleIdErrorUtil from '../utils/handleIdError.util.js';

const router = express.Router();

router.get(`${routes.root}`, getTasks);
router.post(`${routes.root}`, createTaskValidation, handleValidationErrorsUtil, createTask);
router.get(`${routes.root}:id`, handleIdErrorUtil, getTaskById);
router.put(`${routes.root}:id`, handleIdErrorUtil, createTaskValidation, handleValidationErrorsUtil, updateTask);
router.patch(`${routes.root}:id${routes.root}${routes.complete}`, handleIdErrorUtil, updateTaskStatus);
router.delete(`${routes.root}:id`, handleIdErrorUtil, deleteTask);

export default router;
