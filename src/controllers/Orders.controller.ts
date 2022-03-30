import { Request, Response } from 'express';
import HttpStatusCode from '../enums/HttpStatusCode';
import OrdersService from '../services/Orders.service';

export default class OrdersControllers {
  private ordersServices: OrdersService;

  constructor() {
    this.ordersServices = new OrdersService();
  }

  getAll = async (_req: Request, res: Response) => {
    const orders = await this.ordersServices.getAll();

    return res.status(HttpStatusCode.OK).json(orders);
  };
}