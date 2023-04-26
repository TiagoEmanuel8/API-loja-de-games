import { Request, Response } from 'express';
import { ProductService } from '../services';
import { StatusCodes } from 'http-status-codes';

class ProductsController {
  private ProductService: ProductService;

  constructor() {
     this.ProductService = new ProductService();
     this.getProducts = this.getProducts.bind(this);
     this.getProduct = this.getProduct.bind(this);
     this.editProduct = this.editProduct.bind(this);
     this.excludeProduct = this.excludeProduct.bind(this);
  }

  public async getProducts(_req: Request, res: Response) {
    const products = await this.ProductService.getProducts();
    res.status(StatusCodes.OK).json(products);
  }

  public async getProduct(req: Request, res: Response) {
    const { id } = req.params;
    const product = await this.ProductService.getProduct(Number(id));
    res.status(StatusCodes.OK).json(product);
  }

  public async editProduct(req: Request, res: Response) {
    const { id } = req.params;
    const { name, type, price, quantity } = req.body;
    const edited = await this.ProductService.editProduct(Number(id), name, type, Number(price), Number(quantity))
    res.status(StatusCodes.OK).json(edited);
  }

  public async excludeProduct(req: Request, res: Response) {
    const { id } = req.params;
    await this.ProductService.excludeProduct(Number(id));
    res.status(StatusCodes.NO_CONTENT).end()
  }
};

export { ProductsController };