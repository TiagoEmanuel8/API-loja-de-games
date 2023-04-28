import Products from '../database/models/products.model';
import { IproductsDTO, Iproducts, IReqUsers } from '../interfaces';
import { NotFound, Forbidden, BadRequest } from '../errors/index.error';

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

  public async createProduct(createProduct: IproductsDTO, dataUserReq: IReqUsers): Promise<Iproducts> {
    if (dataUserReq.role === 'client') {
      throw new Forbidden('Only admins or sellers can create products');
    };

    const { name, type, price, quantity } = createProduct;

    const checkFieldsNotNull = name && type && price;
    if (!checkFieldsNotNull) {
      throw new BadRequest('the fields "name", "type", "price" need to be filled');
    }

    if(typeof price !== 'number') {
      throw new BadRequest('the "price" field must be a number');
    }

    const newProduct = await this.Products.create({ name, type, price, quantity });
    return newProduct;
  }

  public async editProduct(id: number, dataProduct: IproductsDTO, dataUserReq: IReqUsers): Promise<Iproducts | null> {
    const { name, type, price, quantity } = dataProduct;

    if (dataUserReq.role === 'client') {
      throw new Forbidden('Only admins or sellers can create products');
    };
  
    const product = await this.Products.findOne({ where: { id }});
    if (!product) {
      throw new NotFound('Product not found');
    }
    
    await this.Products.update({ name, type, price, quantity }, { where: { id } });
    const edited = await this.Products.findOne({ where: { id }});
    return edited;
  } 

  public async excludeProduct(id: number, dataUserReq: IReqUsers): Promise<boolean | null> {
    if (dataUserReq.role === 'client') {
      throw new Forbidden('Only admins or sellers can delete products');
    };

    const product = await this.Products.findOne({ where: { id }});
    if (!product) {
      throw new NotFound('Product not found');
    }

    await this.Products.destroy({ where: { id } });
    return true;
  }
}

export { ProductService };