import { Request, Response, NextFunction } from 'express';
import ErrorMessage from '../enums/ErrorMessage';
import HttpStatusCode from '../enums/HttpStatusCode';

export default (err: unknown, _req: Request, res:Response, _next: NextFunction) => {
  console.log(err);

  return res.status(HttpStatusCode.SERVER_ERROR)
    .json(ErrorMessage.SERVER_ERROR);
};