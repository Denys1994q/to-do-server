import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db.js';
import {NOT_FOUND_ERROR} from './constants/errors.js';

const app = express();

app.use(express.json());

const corsOptions = {
  origin: ['https://to-do-list-jthm.vercel.app', 'http://localhost:5157'],
  credentials: true
};

app.use(cors(corsOptions));

dotenv.config();

connectDB();

app.use((req, res) => {
  res.status(NOT_FOUND_ERROR.code).json({message: NOT_FOUND_ERROR.message});
});

const PORT = process.env.PORT || 4444;

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('Server OK');
});
