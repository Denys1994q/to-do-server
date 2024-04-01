import express from 'express';
import {getTasks} from '../controllers/Task.controller.js';

const router = express.Router();

router.get('/all', getTasks);

export default router;
