import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import arcjetMiddleware from './middlewares/arcjet.middleware.js';
import errorMiddleware from './middlewares/error.middleware.js';

import { PORT } from './config/env.js';
import connectToDatabase from './database/mongodb.js';
import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';

dotenv.config();
console.log("🌍 MONGO_URI is:", process.env.DB_URI);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(arcjetMiddleware); // ✅ Protects all APIs after this

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/user', userRouter);
app.use('/api/v1/subscription', subscriptionRouter);

app.get('/', (req, res) => {
    res.send("welcome to subscription tracker");
});

app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Server connected at ${PORT}`);
    connectToDatabase();
});

export default app;
