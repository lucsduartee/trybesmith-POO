import { Pool, RowDataPacket } from 'mysql2/promise';
import connection from './connection';
import IProduct from '../interfaces/Product.interface';

interface IProductsModel {
  getAll: () => Promise<IProduct[]>
}

export default class ProductsModel implements IProductsModel {
  private connection: Pool;
  
  constructor() {
    this.connection = connection;
  }

  getAll = async () => {
    const query = 'SELECT * FROM Trybesmith.Products';

    const result = await this.connection
      .execute<RowDataPacket[]>(query);

    const [rows] = result;

    return rows as IProduct[];
  };
}