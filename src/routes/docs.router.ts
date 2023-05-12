import CommonRoutesConfig from './common.routes.config';
import * as swaggerUi from 'swagger-ui-express';
const swaggerDocument = require('../docs/swagger.json');

class DocsRoutes extends CommonRoutesConfig {
  constructor() {
    super();
    this.configureRoutes()
  }

  configureRoutes() {
      this.router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }
}

export { DocsRoutes }