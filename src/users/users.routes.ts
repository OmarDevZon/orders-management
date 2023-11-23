import express from 'express';
import { createUserControllers, getAllUserControllers, getUserByIdControllers } from './users.controller';

const router = express.Router();

router.post('/', createUserControllers);
router.get('/', getAllUserControllers);
router.get('/:id', getUserByIdControllers);

export const userRoutes = router;
