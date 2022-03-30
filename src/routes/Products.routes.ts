import express, { Request, Response } from 'express';
import ProductsController from '../controllers/Products.controller';

const productsRoutes = express.Router();
const productsController = new ProductsController();

productsRoutes.get('/', async (req: Request, res: Response) => {
  await productsController.getAll(req, res);
});

export default productsRoutes;
