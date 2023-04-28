import { ProductsController } from '../controllers/index.controller';
import CommonRoutesConfig from './common.routes.config';
import { valitadeToken } from '../middlewares/index.middleware';

class ProductsRoutes extends CommonRoutesConfig {
  private ProductsController: ProductsController

  constructor() {
    super();
    this.ProductsController = new ProductsController();
    this.configureRoutes()
  }

  configureRoutes() {
      this.router.get('/products', this.ProductsController.getProducts);
      this.router.get('/products/:id', this.ProductsController.getProduct);
      this.router.post('/products', valitadeToken, this.ProductsController.createProduct);
      this.router.put('/products/:id', valitadeToken, this.ProductsController.editProduct);
      this.router.delete('/products/:id', valitadeToken, this.ProductsController.excludeProduct);
  }
}

export { ProductsRoutes };