import express from 'express';
import {getTasks, createTask, getTaskById} from '../controllers/Task.controller.js';
import {createTaskValidation} from '../validation/task.validation.js';
import handleValidationErrorsUtil from '../utils/handleValidationErrors.util.js';
import {routes} from '../constants/routes.js';
import handleIdErrorUtil from '../utils/handleIdError.util.js';

const router = express.Router();

router.get(`${routes.root}`, getTasks);
router.post(`${routes.root}`, createTaskValidation, handleValidationErrorsUtil, createTask);
router.get(`${routes.root}:id`, handleIdErrorUtil, getTaskById);

export default router;
