import Products from '../database/models/products'
import { Iproducts } from '../interfaces'

class ProductService {
  private Products = Products;

  async getProducts(): Promise<Iproducts[]> {
    const products = await this.Products.findAll();
    return products;
  }
}

export { ProductService };