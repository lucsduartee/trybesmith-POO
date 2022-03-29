import IProduct from '../interfaces/Product.interface';
import ProductsModel from '../models/Products.model';

export default class ProductsService {
  private productsModel: ProductsModel;

  constructor() {
    this.productsModel = new ProductsModel();
  }

  getAll = async (): Promise<IProduct[]> => {
    const products = await this.productsModel.getAll();
    
    return products as IProduct[];
  };
}