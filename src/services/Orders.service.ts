import IOrders from '../interfaces/Orders.interface';
import OrdersModel from '../models/Orders.model';

interface IOrdersService {
  getAll: () => Promise<IOrders[]>
}

export default class OrdersService implements IOrdersService {
  private ordersModel: OrdersModel;

  constructor() {
    this.ordersModel = new OrdersModel();
  }

  getAll = async () => {
    const orders = await this.ordersModel.getAll();

    return orders;
  };
}