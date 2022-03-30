import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';

const validatBody = (schema: ObjectSchema) => (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body);
  
  const { error: err } = schema.validate(req.body);

  if (err) {
    const [code, error] = err.message.split('|');
    return next({
      code: Number(code),
      error,
    });
  }

  return next();
};

export default validatBody;