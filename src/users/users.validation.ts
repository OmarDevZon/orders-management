import config from '../config';
import User from './users.interface';
import bcrypt from 'bcrypt';

import Joi from 'joi';

export const userJoiSchema = Joi.object({
  userId: Joi.number().required().messages({
    'any.required': 'User id is required',
    'number.base': 'User id must be a number',
  }),

  username: Joi.string().required().messages({
    'any.required': 'Name is required',
    'string.base': 'Name must be a string',
  }),

  password: Joi.string().required().messages({
    'any.required': 'Password is required',
    'string.base': 'Password must be a string',
  }),

  fullName: Joi.object({
    firstName: Joi.string()
      .required()
      .pattern(/^[A-Za-z]+$/)
      .messages({
        'any.required': 'First Name is required',
        'string.base': 'First Name must be a string',
        'string.pattern.base': 'Your Name only contain alphabetical characters',
      }),
    lastName: Joi.string()
      .required()
      .pattern(/^[A-Za-z]+$/)
      .messages({
        'any.required': 'Last Name is required',
        'string.base': 'Last Name must be a string',
        'string.pattern.base': 'Your Name only contain alphabetical characters',
      }),
  }).required(),

  age: Joi.number().required().messages({
    'any.required': 'Age is required',
    'number.base': 'Age must be a number',
  }),

  email: Joi.string().email().required().messages({
    'any.required': 'Email is required',
    'string.email': 'Email must be a valid email address',
  }),

  isActive: Joi.boolean(),

  hobbies: Joi.array().items(Joi.string()),

  address: Joi.object({
    street: Joi.string().required().messages({
      'any.required': 'Street is required',
      'string.base': 'Street must be a string',
    }),
    city: Joi.string().required().messages({
      'any.required': 'City is required',
      'string.base': 'City must be a string',
    }),
    country: Joi.string().required().messages({
      'any.required': 'Country is required',
      'string.base': 'Country must be a string',
    }),
  }).required(),
});


export const userUpdateJoiSchema = Joi.object({
  
  username: Joi.string().required().messages({
    'any.required': 'Name is required',
    'string.base': 'Name must be a string',
  }),

  fullName: Joi.object({
    firstName: Joi.string()
      .required()
      .pattern(/^[A-Za-z]+$/)
      .messages({
        'any.required': 'First Name is required',
        'string.base': 'First Name must be a string',
        'string.pattern.base': 'Your Name only contain alphabetical characters',
      }),
    lastName: Joi.string()
      .required()
      .pattern(/^[A-Za-z]+$/)
      .messages({
        'any.required': 'Last Name is required',
        'string.base': 'Last Name must be a string',
        'string.pattern.base': 'Your Name only contain alphabetical characters',
      }),
  }).required(),

  age: Joi.number().required().messages({
    'any.required': 'Age is required',
    'number.base': 'Age must be a number',
  }),

  email: Joi.string().email().required().messages({
    'any.required': 'Email is required',
    'string.email': 'Email must be a valid email address',
  }),

  isActive: Joi.boolean(),

  hobbies: Joi.array().items(Joi.string()),

  address: Joi.object({
    street: Joi.string().required().messages({
      'any.required': 'Street is required',
      'string.base': 'Street must be a string',
    }),
    city: Joi.string().required().messages({
      'any.required': 'City is required',
      'string.base': 'City must be a string',
    }),
    country: Joi.string().required().messages({
      'any.required': 'Country is required',
      'string.base': 'Country must be a string',
    }),
  }).required(),
});

// export function passwordPlashing(userModel: User) {
//   userModel.pre('save', async function (next) {
//     this.password = await bcrypt.hash(
//       this?.password,
//       Number(config.BCRYPT_ROUNDS),
//     );
//     next();
//   });
// }
