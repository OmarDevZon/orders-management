import express from 'express';
import { ordersControllers } from './orders.controller';


const router = express.Router();

router.put('/:id/orders', ordersControllers);


export const ordersRoutes = router;
