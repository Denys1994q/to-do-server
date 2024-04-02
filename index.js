import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db.js';
import taskRoutes from './routes/task.routes.js';
import {PAGE_NOT_FOUND_ERROR} from './constants/errors.js';

const app = express();

app.use(express.json());

const corsOptions = {
  origin: ['https://to-do-list-jthm.vercel.app', 'http://localhost:5157'],
  credentials: true
};

app.use(cors(corsOptions));

dotenv.config();
connectDB();

app.use('/task', taskRoutes);

app.use((req, res) => {
  res.status(PAGE_NOT_FOUND_ERROR.status).json({message: PAGE_NOT_FOUND_ERROR.message});
});

const PORT = process.env.PORT || process.env.DEFAULT_PORT;

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('Server OK');
});
