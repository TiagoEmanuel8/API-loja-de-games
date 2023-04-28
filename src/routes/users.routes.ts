import { UsersController } from '../controllers/index.controller';
import CommonRoutesConfig from './common.routes.config';
import { valitadeToken } from '../middlewares/index.middleware';

class UsersRoutes extends CommonRoutesConfig {
  private UsersController: UsersController

  constructor() {
    super();
    this.UsersController = new UsersController();
    this.configureRoutes()
  }

  configureRoutes() {
    this.router.get('/users', valitadeToken, this.UsersController.getUsers);
    this.router.get('/users/:id', valitadeToken, this.UsersController.getUser);
    this.router.post('/users', this.UsersController.createUser);
    this.router.patch('/users/:id', valitadeToken, this.UsersController.editUser);
    this.router.delete('/users/:id', valitadeToken, this.UsersController.excludeUser);
  }
}

export { UsersRoutes }