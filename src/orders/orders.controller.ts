import { Request, Response } from 'express';
import { errorFun, success } from '../config/response.config';
import { getUserOrdersService, ordersService } from './orders.services';

export const ordersControllers = async (req: Request, res: Response) => {
  const { id }: { id?: number | null | undefined } = req.params;
  const product = req.body;
  try {
    const result = await ordersService(id, product);
    
    
    if (result) {
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

export const getUserOrdersControllers = async (req: Request, res: Response) => {
  try {
    const { id }: { id?: number | null | undefined } = req.params;

    const result = await getUserOrdersService(id);
    if (result) {
      const message = 'Order fetched successfully!';
      success(res, result, message);
    } else {
      const message = 'Order not found';
      const error = {
        code: 404,
        description: 'Order not found!',
      };
      errorFun(res, error, message);
    }
  } catch (error) {
    const message = 'server is wick';
    errorFun(res, error, message);
  }
};
