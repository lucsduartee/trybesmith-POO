import ILogin from '../../interfaces/Login.interface';

declare module 'express-serve-static-core' {
  interface Request {
    dataDecoded?: ILogin;
  }
}