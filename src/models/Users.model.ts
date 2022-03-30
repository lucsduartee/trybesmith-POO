import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUser from '../interfaces/User.interface';
import connection from './connection';

interface IUserModel {
  create: (user: IUser) => Promise<IUser>;
}

export default class UsersModel implements IUserModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  create = async (user: IUser) => {
    const { username, classe, level, password } = user;
    const query = 'INSERT INTO Trybesmith.Users (username, classe, level, password)'
      + ' VALUES (?, ?, ?, ?)';
    const result = await this.connection
      .execute<ResultSetHeader>(query, [username, classe, level, password]);
    
    const [data] = result;
    return {
      id: data.insertId,
      ...user,
    };
  };
}
