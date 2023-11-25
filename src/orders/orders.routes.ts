import express from 'express';
import {
  getUserOrdersControllers,
  ordersControllers,
  totalPriceForSpecificUserControllers,
} from './orders.controller';

const router = express.Router();

router.put('/:userId/orders', ordersControllers);
router.get('/:userId/orders', getUserOrdersControllers);
router.get('/:userId/orders/total-price', totalPriceForSpecificUserControllers);

export const ordersRoutes = router;
