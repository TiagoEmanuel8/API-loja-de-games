import { SalesController } from '../controllers/Sales.controller';
import CommonRoutesConfig from './common.routes.config';
import { valitadeToken } from '../middlewares/index.middleware';

class SalesRoutes extends CommonRoutesConfig {
  private SalesController: SalesController

  constructor() {
    super();
    this.SalesController = new SalesController();
    this.configureRoutes();
  }

  configureRoutes() {
    this.router.get('/sales', this.SalesController.getSales);
    this.router.get('/sales/:id', this.SalesController.getSale);
  }
}

export { SalesRoutes }