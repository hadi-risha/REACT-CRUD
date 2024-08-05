import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
// import cors from 'cors';
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js';
const port = process.env.PORT || 5000;
import userRoutes from './routes/userRoutes.js';
import adminRoutes from './routes/adminAuthRoutes.js'



connectDB();

const app = express();
// app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use(cookieParser());

app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.use(notFound);
app.use(errorHandler);

app.listen(port, ()=> console.log(`Server is running on http://localhost:${port}`) );