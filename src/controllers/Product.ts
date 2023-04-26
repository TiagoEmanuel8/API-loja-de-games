import { Request, Response } from 'express';
import { ProductService } from '../services';
import { StatusCodes } from 'http-status-codes';

class ProductsController {
  private ProductService: ProductService;

  constructor() {
     this.ProductService = new ProductService();
     this.getProducts = this.getProducts.bind(this);
  }

  public async getProducts(_req: Request, res: Response) {
    const products = await this.ProductService.getProducts();
    res.status(StatusCodes.OK).json(products)
  }
};

export { ProductsController };