import { Response } from 'express';

export const success = (res: Response, result?: any, message?: string) => {
  res.status(200).json({
    success: true,
    data: result,
    message: message,
  });
};

export const errorFun = (res: Response, error?: any) => {
  res.status(500).json({
    success: false,
    data: error,
    message: 'Something is wrong',
  });
};
