import Products from '../database/models/products'
import { Iproducts } from '../interfaces'

class ProductService {
  private Products = Products;

  public async getProducts(): Promise<Iproducts[]> {
    const products = await this.Products.findAll();
    return products;
  }

  public async getProduct(id: number): Promise<Iproducts | null> {
    const product = await this.Products.findOne({ where: { id }});
    return product;
  }

  public async editProduct(
    id: number, name: string, type: string, price: number, quantity: number
  ): Promise<Iproducts | null> {
    await this.Products.update({ name, type, price, quantity }, { where: { id } });
    const edited = await this.Products.findOne({ where: { id }});
    return edited;
  } 

  public async excludeProduct(id: number): Promise<boolean | null> {
    await this.Products.destroy({ where: { id } });
    return true;
  }
}

export { ProductService };