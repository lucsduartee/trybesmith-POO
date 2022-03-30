import IProduct from '../interfaces/Product.interface';
import ProductsModel from '../models/Products.model';

interface IProductsService {
  getAll: () => Promise<IProduct[]>;
  create: (product: IProduct) => Promise<IProduct>;
}

export default class ProductsService implements IProductsService {
  private productsModel: ProductsModel;

  constructor() {
    this.productsModel = new ProductsModel();
  }

  getAll = async () => {
    const products = await this.productsModel.getAll();
    
    return products as IProduct[];
  };

  create = async (product: IProduct) => {
    const productCreated = this.productsModel.create(product);

    return productCreated;
  };
}