import Joi from 'joi';

enum Errors {
  USERNAME_REQUIRED = '400|Username is required',
  USERNAME_STRING = '422|Username must be a string',
  USERNAME_LENGTH = '422|Username must be longer than 2 characters',
  CLASSE_REQUIRED = '400|Classe is required',
  CLASSE_STRING = '422|Classe must be a string',
  CLASSE_LENGTH = '422|Classe must be longer than 2 characters',
  LEVEL_REQUIRED = '400|Level is required',
  LEVEL_NUMBER = '422|Level must be a number',
  LEVEL_LENGTH = '422|Level must be greater than 0',
  PASSWORD_REQUIRED = '400|Password is required',
  PASSWORD_STRING = '422|Password must be a string',
  PASSWORD_LENGTH = '422|Password must be longer than 7 characters',
}

export default Joi.object({
  username: Joi.string().min(3).required().messages({
    'string.base': Errors.USERNAME_STRING,
    'string.min': Errors.USERNAME_LENGTH,
    'any.required': Errors.USERNAME_REQUIRED,
  }),
  classe: Joi.string().min(3).required().messages({
    'string.base': Errors.CLASSE_STRING,
    'string.min': Errors.CLASSE_LENGTH,
    'any.required': Errors.CLASSE_REQUIRED,
  }),
  level: Joi.number().min(1).required()
    .messages({
      'any.required': Errors.LEVEL_REQUIRED,
      'number.base': Errors.LEVEL_NUMBER,
      'number.min': Errors.LEVEL_LENGTH,
    }),
  password: Joi.string().min(8).required().messages({
    'any.required': Errors.PASSWORD_REQUIRED,
    'string.base': Errors.PASSWORD_STRING,
    'string.min': Errors.PASSWORD_LENGTH,
  }),
});