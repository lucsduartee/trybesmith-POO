import Joi from 'joi';

enum Errors {
  NAME_REQUIRED = '400|Username is required',
  PASSWORD_REQUIRED = '400|Password is required',
}

export default Joi.object({
  username: Joi.string().required().messages({
    'any.required': Errors.NAME_REQUIRED,
  }),
  password: Joi.string().required().messages({
    'any.required': Errors.PASSWORD_REQUIRED,
  }),
});