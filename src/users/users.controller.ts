import { Request, Response } from 'express';
import { errorFun, success } from '../config/response.config';
import { addUserService, getAllUserService } from './users.services';

export const createUserControllers = async (req: Request, res: Response) => {
  try {
    const User = req.body;
    const result = await addUserService(User);
    const message = 'User created successfully!';
    success(res, result, message);
  } catch (error) {
    errorFun(res, error);
  }
};
export const getAllUserControllers = async (req: Request, res: Response) => {
  try {
    const result = await getAllUserService();
    const message = 'Users fetched successfully!';
    success(res, result, message);
  } catch (error) {
    errorFun(res, error);
  }
};
