import { Request, Response } from 'express';
import { errorFun, success } from '../config/response.config';
import {
  addUserService,
  deleteUserByIdService,
  getAllUserService,
  getUserByIdService,
  updateUserByIdService,
} from './users.services';

export const createUserControllers = async (req: Request, res: Response) => {
  const user = req.body;
  try {
    const result = await addUserService(user);
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

export const getUserByIdControllers = async (req: Request, res: Response) => {
  try {
    const { id }: { id?: number | null | undefined } = req.params;

    const result = await getUserByIdService(id);
    if (result) {
      const message = 'Users fetched successfully!';
      success(res, result, message);
    } else {
      const message = 'User not found';
      const error = {
        code: 404,
        description: 'User not found!',
      };
      errorFun(res, error, message);
    }
  } catch (error) {
    const message = 'server is wick';
    errorFun(res, error, message);
  }
};

export const updateUserByIdControllers = async (
  req: Request,
  res: Response,
) => {
  const { id }: { id?: number | null | undefined } = req.params;
  const user = req.body;
  try {
    const result = await updateUserByIdService(user, id);
    if (result?.modifiedCount === (1 as number)) {
      const message = 'User Update successfully!';
      success(res, result, message);
    } else {
      const message = 'User not found';
      const error = {
        code: 404,
        description: 'User not found!',
      };
      errorFun(res, error, message);
    }
  } catch (error) {
    errorFun(res, error);
  }
};

export const deleteUserByIdControllers = async (
  req: Request,
  res: Response,
) => {
  try {
    const { id }: { id?: number | null | undefined } = req.params;

    const result = await deleteUserByIdService(id);
    if (result?.deletedCount) {
      const message = 'User deleted successfully!';
      success(res, result, message);
    } else {
      const message = 'User not found';
      const error = {
        code: 404,
        description: 'User not found!',
      };
      errorFun(res, error, message);
    }
  } catch (error) {
    const message = 'server is wick';
    errorFun(res, error, message);
  }
};
