import { Request, Response } from 'express';
import { errorFun, success } from '../config/response.config';
// import { ordersSchema } from './orders.validation';
import {
  getUserOrdersService,
  // getUserOrdersService,
  ordersService, totalPriceForSpecificUserService,
  // totalPriceForSpecificUserService,
} from './orders.services';

export const ordersControllers = async (req: Request, res: Response) => {
  const { userId }: { userId?: number | null | undefined } = req.params;
  const product = req.body;

  // const { error } = ordersSchema.validate(product);
  // if (error) {
  //   const message = error?.details[0]?.message;
  //   return errorFun(res, error, message);
  // }

  try {
    const result = await ordersService(userId, product);
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
    const { userId }: { userId?: number | null | undefined } = req.params;

    const result = await getUserOrdersService(userId);
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
export const totalPriceForSpecificUserControllers = async (
  req: Request,
  res: Response,
) => {
  try {
    const { userId }: { userId?: number | null | undefined } = req.params;

    const result = await totalPriceForSpecificUserService(userId);
    if (result) {
      const message = 'Total price calculated successfully!';
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
