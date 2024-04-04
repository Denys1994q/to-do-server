import express from 'express';
import {getTasks, createTask} from '../controllers/Task.controller.js';
import {createTaskValidation} from '../validation/task.validation.js';
import handleValidationErrorsUtil from '../utils/handleValidationErrors.util.js';
import {routes} from '../constants/routes.js';

const router = express.Router();

router.get(`${routes.root}`, getTasks);
router.post(`${routes.root}`, createTaskValidation, handleValidationErrorsUtil, createTask);

export default router;
