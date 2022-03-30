import Joi from 'joi';

enum Errors {
  USERNAME_REQUIRED = '400|Username is required',
  USERNAME_STRING = '422|Username must be a string',
  USERNAME_LENGTH = '422|Username must be longer than 2 characters',
  CLASSE_REQUIRED = '400|Classe is required',
  CLASSE_STRING = '422|Classe must be a string',
  CLASSE_LENGTH = '422|Classe must be longer than 2 characters',
  LEVEL_REQUIRED = '400|Level is required',
  LEVEL_STRING = '422|Level must be a number',
  LEVEL_LENGTH = '422|Level must be greater than 0',
  PASSWORD_REQUIRED = '400|Password is required',
  PASSWORD_STRING = '422|Password must be a string',
  PASSWORD_LENGTH = '422|Password must be longer than 7 characters',
}

export default Joi.object({
  username: Joi.string().min(2).required().messages({
    'any.required': Errors.USERNAME_REQUIRED,
    'string.base': Errors.USERNAME_STRING,
    'string.min': Errors.USERNAME_LENGTH,
  }),
  classe: Joi.string().min(2).required().messages({
    'any.required': Errors.CLASSE_REQUIRED,
    'string.base': Errors.CLASSE_STRING,
    'string.min': Errors.CLASSE_LENGTH,
  }),
  level: Joi.number().positive().required().messages({
    'any.required': Errors.LEVEL_REQUIRED,
    'number.base': Errors.LEVEL_STRING,
    'number.positive': Errors.LEVEL_LENGTH,
  }),
  password: Joi.string().min(7).required().messages({
    'any.required': Errors.LEVEL_REQUIRED,
    'string.base': Errors.LEVEL_STRING,
    'string.min': Errors.LEVEL_LENGTH,
  }),
});