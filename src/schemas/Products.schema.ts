import Joi from 'joi';

enum Errors {
  NAME_REQUIRED = '400|Name is required',
  NAME_STRING = '422|Name must be a string',
  NAME_LENGTH = '422|Name must be longer than 2 characters',
  AMOUNT_REQUIRED = '400|Amount is required',
  AMOUNT_STRING = '422|Amount must be a string',
  AMOUNT_LENGTH = '422|Amount must be longer than 2 characters',
}

export default Joi.object({
  name: Joi.string().min(2).required().messages({
    'any.required': Errors.NAME_REQUIRED,
    'string.base': Errors.NAME_STRING,
    'string.min': Errors.NAME_LENGTH,
  }),
  amount: Joi.string().min(2).required().messages({
    'any.required': Errors.AMOUNT_REQUIRED,
    'string.base': Errors.AMOUNT_STRING,
    'string.min': Errors.AMOUNT_LENGTH,
  }),
});