import express from 'express';
import {getTasks} from '../controllers/Task.controller.js';

const router = express.Router();

router.get('/', getTasks);

export default router;
