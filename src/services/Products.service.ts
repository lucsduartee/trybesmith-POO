import IProduct from '../interfaces/Product.interface';
import ProductsModel from '../models/Products.model';

interface IProductsService {
  getAll: () => Promise<IProduct[]>
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
}