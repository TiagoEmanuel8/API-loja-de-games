import { NextFunction, Request, Response } from 'express';
import { ProductService } from '../services/index.service';
import { StatusCodes } from 'http-status-codes';
import { IRequest, IReqUsers } from '../interfaces';

class ProductsController {
  private ProductService: ProductService;

  constructor() {
     this.ProductService = new ProductService();
     this.getProducts = this.getProducts.bind(this);
     this.getProduct = this.getProduct.bind(this);
     this.createProduct = this.createProduct.bind(this);
     this.editProduct = this.editProduct.bind(this);
     this.excludeProduct = this.excludeProduct.bind(this);
  }

  public async getProducts(_req: Request, res: Response) {
    const products = await this.ProductService.getProducts();
    res.status(StatusCodes.OK).json(products);
  }

  public async getProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const product = await this.ProductService.getProduct(Number(id));
      res.status(StatusCodes.OK).json(product);
    } catch (error) {
      next(error);
    }
  }

  public async createProduct(req: IRequest, res: Response, next: NextFunction) {
    const createProduct = req.body;
    const dataUserReq = req.user as unknown as IReqUsers;

    try {
      const product = await this.ProductService.createProduct(createProduct, dataUserReq);
      res.status(StatusCodes.OK).json(product);
    } catch (error) {
      next(error);
    }
  }

  public async editProduct(req: IRequest, res: Response, next: NextFunction) {
    const { id } = req.params;
    const dataProduct = req.body;
    const dataUserReq = req.user as unknown as IReqUsers;

    try {
      const edited = await this.ProductService.editProduct(Number(id), dataProduct, dataUserReq)
      res.status(StatusCodes.OK).json(edited);
    } catch (error) {
      next(error);
    }
  }

  public async excludeProduct(req: IRequest, res: Response, next: NextFunction) {
    const { id } = req.params;
    const dataUserReq = req.user as unknown as IReqUsers;

    try {
      await this.ProductService.excludeProduct(Number(id), dataUserReq);
      res.status(StatusCodes.NO_CONTENT).end()
    } catch (error) {
      next(error);
    }
  }
};

export { ProductsController };