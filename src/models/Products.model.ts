import { Pool } from 'mysql2/promise';
import connection from './connection';

export default class ProductsModel {
  private connection: Pool;
  
  constructor() {
    this.connection = connection;
  }
}