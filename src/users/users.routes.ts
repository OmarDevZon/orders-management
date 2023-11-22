import express from 'express';
import { createUserControllers, getAllUserControllers } from './users.controller';

const router = express.Router();

router.post('/', createUserControllers);
router.get('/', getAllUserControllers);

export const userRoutes = router;
