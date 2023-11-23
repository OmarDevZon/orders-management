import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import config from './config';
import { databaseConnecting } from './config/database.config';
import { userRoutes } from './users/users.routes';
import { ordersRoutes } from './orders/orders.routes';
const app: Application = express();

app.use(express.json());
app.use(cors());

databaseConnecting();

const startServer = (req: Request, res: Response) => {
  try {
    res.send(`${config.WELCOME_MESSAGE}`);
  } catch (error) {
    console.log('server not start');
  }
};

app.get('/', startServer);
app.use('/api/users', userRoutes);
app.use('/api/users', ordersRoutes);

export default app;
