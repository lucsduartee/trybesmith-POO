import { Request, Response } from 'express'; 
import HttpStatusCode from '../enums/HttpStatusCode';
import token from '../helpers/jwtGenerator';
import UsersService from '../services/Users.service';

export default class UsersControllers {
  private usersService: UsersService;

  constructor() {
    this.usersService = new UsersService();
  }

  create = async (req: Request, res: Response) => {
    const { level } = req.body;

    if (level && typeof level === 'string') {
      return res.status(422).json({ error: 'Level must be a number' });
    }

    const created = await this.usersService.create(req.body);

    const tkn = token(created);

    return res.status(HttpStatusCode.CREATED).json({ token: tkn });
  };
}