import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import connection from './connection';
import IProduct from '../interfaces/Product.interface';

interface IProductsModel {
  getAll: () => Promise<IProduct[]>;
  create: (product: IProduct) => Promise<IProduct>;
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

  create = async (product: IProduct) => {
    const { name, amount } = product;
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';

    const result = await this.connection
      .execute<ResultSetHeader>(query, [name, amount]);

    const [data] = result;

    return {
      id: data.insertId,
      ...product,
    };
  };
}