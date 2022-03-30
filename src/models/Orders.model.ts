import { Pool, RowDataPacket } from 'mysql2/promise';
import IOrders from '../interfaces/Orders.interface';
import connection from './connection';

interface IOrdersModel {
  getAll: () => Promise<IOrders[]>
}

export default class OrdersModel implements IOrdersModel {
  private connection: Pool;

  constructor() {
    this.connection = connection;
  }

  getAll = async () => {
    const query = 'SELECT o.id, o.userId, p.id AS products FROM Trybesmith.Orders AS o'
    + ' INNER JOIN Trybesmith.Products AS p ON o.id = p.orderId';
    
    const result = await this.connection
      .execute<RowDataPacket[]>(query);

    const [data] = result;

    if (data.length !== 0) {
      const manipulated = data.map((item) => ({
        id: item.id,
        userId: item.userId,
        products: [item.products],
      }));
      return manipulated;
    }

    return data as IOrders[];
  };
}
