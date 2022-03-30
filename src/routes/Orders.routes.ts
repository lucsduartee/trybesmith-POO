import express, { Request, Response } from 'express';
import OrdersControllers from '../controllers/Orders.controller';

const ordersRoutes = express.Router();
const ordersControllers = new OrdersControllers();

ordersRoutes.get('/', async (req: Request, res: Response) => {
  await ordersControllers.getAll(req, res);
});

export default ordersRoutes;