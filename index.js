import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db.js';
import taskRoutes from './routes/task.routes.js';
import {PAGE_NOT_FOUND_ERROR} from './constants/errors.js';
import {routes} from './constants/routes.js';

const app = express();

app.use(express.json());

const corsOptions = {
  origin: ['https://to-do-list-g2fy-git-s16stylesadjustment-denys1994q.vercel.app', 'http://localhost:5173'],
  credentials: true
};

app.use(cors(corsOptions));

dotenv.config();
connectDB();

app.use(`${routes.root}${routes.task}`, taskRoutes);

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
