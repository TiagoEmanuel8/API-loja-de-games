import Products from '../database/models/products.model';
import { IproductsDTO, Iproducts } from '../interfaces';
import { NotFound, BadRequest } from '../errors';

class ProductService {
  private Products = Products;

  public async getProducts(): Promise<Iproducts[]> {
    const products = await this.Products.findAll();
    return products;
  }

  public async getProduct(id: number): Promise<Iproducts | null> {
    const product = await this.Products.findOne({ where: { id }});
    if (!product) {
      throw new NotFound('Product not found');
    }
    return product;
  }

  public async createProduct(createProduct: IproductsDTO): Promise<Iproducts> {
    const { name, type, price, quantity } = createProduct;
    const newProduct = await this.Products.create({ name, type, price, quantity });
    return newProduct;
  }

  public async editProduct(id: number, dataProduct: IproductsDTO): Promise<Iproducts | null> {
    const { name, type, price, quantity } = dataProduct;

    const product = await this.Products.findOne({ where: { id }});
    if (!product) {
      throw new NotFound('Product not found');
    }
    
    await this.Products.update({ name, type, price, quantity }, { where: { id } });
    const edited = await this.Products.findOne({ where: { id }});
    return edited;
  } 

  public async excludeProduct(id: number): Promise<boolean | null> {
    const product = await this.Products.findOne({ where: { id }});
    if (!product) {
      throw new NotFound('Product not found');
    }

    await this.Products.destroy({ where: { id } });
    return true;
  }
}

export { ProductService };