import { Request, Response } from 'express'; 
import ErrorMessage from '../enums/ErrorMessage';
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

  login = async (req: Request, res: Response) => {
    const result = await this.usersService.login(req.body);
    console.log('nocontroler', result);

    if (result.length === 0) {
      return res.status(HttpStatusCode.UNAUTHORIZED).json({ error: ErrorMessage.INVALID_LOGIN });
    }

    const tkn = token(result[0]);
    return res.status(HttpStatusCode.OK).json({ token: tkn });
  };
}