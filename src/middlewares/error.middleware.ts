import { Request, Response, NextFunction } from 'express';
import ErrorMessage from '../enums/ErrorMessage';
import HttpStatusCode from '../enums/HttpStatusCode';
import ICustomError from '../interfaces/CustomError.interface';

export default (err: unknown, _req: Request, res:Response, _next: NextFunction) => {
  console.log(err);
  if ((err as ICustomError).code) {
    return res.status((err as ICustomError).code)
      .json({ error: (err as ICustomError).error });
  }
  return res.status(HttpStatusCode.SERVER_ERROR)
    .json(ErrorMessage.SERVER_ERROR);
};