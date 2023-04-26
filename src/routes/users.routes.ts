import { UsersController } from '../controllers';
import CommonRoutesConfig from './common.routes.config';

class UsersRoutes extends CommonRoutesConfig {
  private UsersController: UsersController

  constructor() {
    super();
    this.UsersController = new UsersController();
    this.configureRoutes()
  }

  configureRoutes() {
    this.router.get('/users', this.UsersController.getUsers);
  }
}

export { UsersRoutes }