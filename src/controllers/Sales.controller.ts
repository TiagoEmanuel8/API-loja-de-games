import { NextFunction, Request, Response } from 'express';
import { SaleService } from "../services/Sales.service";
import { StatusCodes } from 'http-status-codes';

class SalesController {
  private SaleService: SaleService;

  constructor() {
    this.SaleService = new SaleService();
    this.getSales = this.getSales.bind(this);
    this.getSale = this.getSale.bind(this);
    this.createSale = this.createSale.bind(this);
  }

  public async getSales(_req: Request, res: Response) {
    try {
      const sales = await this.SaleService.getSales();
      res.status(StatusCodes.OK).json(sales);
    } catch(error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error });
    }
  }

  public async getSale(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const sales = await this.SaleService.getSale(Number(id));
      res.status(StatusCodes.OK).json(sales);
    } catch(error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error });
    }
  }

  public async createSale(req: Request, res: Response) {
    try {
      const dataSales = req.body;
      const newSale = await this.SaleService.createSale(dataSales);
      return res.status(StatusCodes.CREATED).json(newSale);
    } catch(error) {
      console.log(error)
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error });
    }
  }

}


export { SalesController };
