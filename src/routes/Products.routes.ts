import express, { Request, Response } from 'express';
import ProductsController from '../controllers/Products.controller';
import validatBody from '../middlewares/validateBody.middleware';
import ProductsSchema from '../schemas/Products.schema';

const productsRoutes = express.Router();
const productsController = new ProductsController();

productsRoutes.get('/', async (req: Request, res: Response) => {
  await productsController.getAll(req, res);
});

productsRoutes.post('/', validatBody(ProductsSchema), async (req: Request, res: Response) => { 
  await productsController.create(req, res);
});

export default productsRoutes;
