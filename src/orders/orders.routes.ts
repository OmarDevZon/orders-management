import express from 'express';
import { getUserOrdersControllers, ordersControllers } from './orders.controller';


const router = express.Router();

router.put('/:id/orders', ordersControllers);
router.get('/:id/orders', getUserOrdersControllers);


export const ordersRoutes = router;
