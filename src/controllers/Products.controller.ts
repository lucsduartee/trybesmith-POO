import { Request, Response } from 'express';
import HttpStatusCode from '../enums/HttpStatusCode';
import ProductsService from '../services/Products.service';

export default class ProductsController {
  private productsService: ProductsService;

  constructor() {
    this.productsService = new ProductsService();
  }

  getAll = async (_req: Request, res: Response) => {
    const result = await this.productsService.getAll();

    return res.status(HttpStatusCode.OK).json(result);
  };

  create = async (req: Request, res: Response) => {
    const created = await this.productsService.create(req.body);
    
    return res.status(HttpStatusCode.CREATED).json({
      item: {
        ...created,
      },
    });
  };
}