import express from 'express';
import { createUserControllers, deleteUserByIdControllers, getAllUserControllers, getUserByIdControllers } from './users.controller';

const router = express.Router();

router.post('/', createUserControllers);
router.get('/', getAllUserControllers);
router.get('/:id', getUserByIdControllers);
router.delete('/:id', deleteUserByIdControllers);

export const userRoutes = router;
