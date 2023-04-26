import { ProductsController } from '../controllers';
import CommonRoutesConfig from './common.routes.config';

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
      this.router.put('/products/:id', this.ProductsController.editProduct);
      this.router.delete('/products/:id', this.ProductsController.excludeProduct);
  }
}

export { ProductsRoutes };