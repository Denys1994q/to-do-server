import express from 'express';
import {getTasks, createTask} from '../controllers/Task.controller.js';
import {createTaskValidation} from '../validation/task.validation.js';
import handleValidationErrorsUtil from '../utils/handleValidationErrors.util.js';

const router = express.Router();

router.get('/', getTasks);
router.post('/create', createTaskValidation, handleValidationErrorsUtil, createTask);

export default router;
