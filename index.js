import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();

app.use(express.json());

const corsOptions = {
  origin: ['https://to-do-list-jthm.vercel.app', 'http://localhost:5157'],
  credentials: true
};

app.use(cors(corsOptions));

dotenv.config();

mongoose
  .connect('mongodb+srv://Denys1994:pp74tvVguAJTZZa@cluster0.l8hygki.mongodb.net/todo-db?retryWrites=true&w=majority')
  .then(() => console.log('DB Ok'))
  .catch((err) => console.log('ERROR', err));

app.use((req, res, next) => {
  res.status(404).json({message: 'Page not found'});
});

app.listen('4444', (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('Server OK');
});
