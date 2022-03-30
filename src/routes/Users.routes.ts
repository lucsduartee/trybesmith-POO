import express, { Request, Response } from 'express';
import UsersControllers from '../controllers/Users.controller';
// import treatement from '../middlewares/treatement.middeware';
import validatBody from '../middlewares/validateBody.middleware';
import UsersSchema from '../schemas/Users.schema';

const usersRoutes = express.Router();
const usersControllers = new UsersControllers();

usersRoutes.post(
  '/',
  validatBody(UsersSchema),
  async (req: Request, res: Response) => {
    await usersControllers.create(req, res);
  },
);

export default usersRoutes;
