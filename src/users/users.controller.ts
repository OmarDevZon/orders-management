import { Request, Response } from 'express';
import { errorFun, success } from '../config/respone.config';
import { addUserService } from './users.services';

export const createUser = async (req: Request, res: Response) => {
  try {
    const User = req.body;
    const result = await addUserService(User);
    const message = 'User created successfully!';
    success(res, result, message);
  } catch (error) {
    errorFun(res, error);
  }
};
