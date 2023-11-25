import Joi from 'joi';

const orderItemSchema = Joi.object({
  productName: Joi.string().required().messages({
    'any.required': 'Product Name is required',
    'string.base': 'Product Name must be a string',
  }),
  price: Joi.number().required().messages({
    'any.required': 'Price is required',
    'number.base': 'Price must be a number',
  }),
  quantity: Joi.number().required().messages({
    'any.required': 'Quantity is required',
    'number.base': 'Quantity must be a number',
  }),
});

export const ordersSchema = Joi.object({
  orders: Joi.array().items(orderItemSchema).required().messages({
    'any.required': 'Orders array is required',
    'array.base': 'Orders must be an array',
  }),
});
