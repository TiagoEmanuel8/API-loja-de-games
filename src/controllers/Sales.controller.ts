import { NextFunction, Request, Response } from 'express';
import { SaleService } from "../services/Sales.service";
import { StatusCodes } from 'http-status-codes';

class SalesController {
  private SaleService: SaleService;

  constructor() {
    this.SaleService = new SaleService();
    this.getSales = this.getSales.bind(this);
    this.getSale = this.getSale.bind(this);
  }

  public async getSales(_req: Request, res: Response) {
    // try {
      const sales = await this.SaleService.getSales();
      res.status(StatusCodes.OK).json(sales);
    // } catch(error) {
      // console.log(error);
      // return res.status(500).json({ message: 'internal error' });
    // }
  }

  public async getSale(req: Request, res: Response) {
    const { id } = req.params;
    const sales = await this.SaleService.getSale(Number(id));
    res.status(StatusCodes.OK).json(sales);
  }

}

export { SalesController };
