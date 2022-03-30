import { Request, Response, NextFunction } from 'express';

const treatement = (req: Request, res: Response, next: NextFunction) => {
  let { level } = req.body;
  
  if (level) {
    level = Number(level);
    
    req.body = {
      ...req.body,
      level,
    };
  }
  return next();
};

export default treatement;