import Products from '../database/models/products'
import { Iproducts } from '../interfaces'

class ProductService {
  private Products = Products;

  async getProducts(): Promise<Iproducts[]> {
    const products = await this.Products.findAll();
    return products;
  }

  async getProduct(id: number): Promise<Iproducts | null> {
    const product = await this.Products.findByPk(id);
    return product;
  }
}

export { ProductService };