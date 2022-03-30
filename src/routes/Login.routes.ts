import express, { Request, Response } from 'express';
import UsersController from '../controllers/Users.controller';
import validatBody from '../middlewares/validateBody.middleware';
import LoginSchema from '../schemas/Login.schema';

const loginRoutes = express.Router();
const usersController = new UsersController();

loginRoutes.post('/', validatBody(LoginSchema), async (req: Request, res: Response) => { 
  await usersController.login(req, res);
});

export default loginRoutes;
