import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();

import { notFound, errorHandler } from './middlewares/error.middleware.js';
import connectDB from './config/db.js';

const app = express();
const PORT = process.env.PORT || 5000;

import userRoutes from './routes/user.routes.js';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`🚀 Server started at http://localhost:${PORT}`);
  connectDB();
});