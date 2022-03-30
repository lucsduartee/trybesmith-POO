import IUser from '../interfaces/User.interface';
import UsersModel from '../models/Users.model';

interface IUsersServices {
  create: (user: IUser) => Promise<IUser>;
  login: (user: IUser) => Promise<IUser[]>;
}

export default class UsersService implements IUsersServices {
  private usersModel: UsersModel;

  constructor() {
    this.usersModel = new UsersModel();
  }

  create = async (user: IUser) => {
    const userCreated = await this.usersModel.create(user);

    return userCreated;
  };

  login = async (user: IUser) => {
    const loginResult = await this.usersModel.login(user);
    console.log(loginResult);
    
    return loginResult;
  };
}