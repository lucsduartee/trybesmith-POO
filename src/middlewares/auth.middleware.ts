import { Request, Response, NextFunction } from 'express';
import Jwt, { JwtPayload } from 'jsonwebtoken';
import ErrorMessage from '../enums/ErrorMessage';
import HttpStatusCode from '../enums/HttpStatusCode';

const SECRET = process.env.JWT_SECRET || 'secret';

export default async (req: Request, _res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  
  if (!token) {
    return next({ code: HttpStatusCode.UNAUTHORIZED, error: ErrorMessage.TOKEN_NOT_FOUND });
  }

  try {
    const decoded = Jwt.verify(token, SECRET) as JwtPayload;
    req.dataDecoded = decoded.data;

    return next();
  } catch (err: unknown) {
    if (err instanceof Error && err.name.includes('Token')) {
      return next({ code: HttpStatusCode.UNAUTHORIZED, error: ErrorMessage.INVALID_TOKEN });
    }
    return next(err);
  }
};