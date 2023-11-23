import { Request, Response } from 'express';
import { errorFun, success } from '../config/response.config';
import { ordersService } from './orders.services';

export const ordersControllers = async (req: Request, res: Response) => {
  const { id }: { id?: number | null | undefined } = req.params;
  const product = req.body;
  try {
    const result = await ordersService( id, product);

    const message = 'User Update successfully!';
    success(res, result, message);

    // if (result?.modifiedCount === (1 as number)) {
    //   const message = 'User Update successfully!';
    //   success(res, result, message);
    // } else {
    //   const message = 'User not found';
    //   const error = {
    //     code: 404,
    //     description: 'User not found!',
    //   };
    //   errorFun(res, error, message);
    // }
  } catch (error) {
    errorFun(res, error);
  }
};
