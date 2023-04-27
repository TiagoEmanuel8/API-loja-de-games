import CommonRoutesConfig from './common.routes.config';
import { LoginController } from '../controllers/Login.controller';

class LoginRoutes extends CommonRoutesConfig {
  private LoginController: LoginController

  constructor() {
    super();
    this.LoginController = new LoginController();
    this.configureRoutes()
  }

  configureRoutes() {
      this.router.post('/login', this.LoginController.login);
  }
}

export { LoginRoutes }