import CommonRoutesConfig from './common.routes.config';

class SwaggerRoutes extends CommonRoutesConfig {
  constructor() {
    super();
    this.configureRoutes()
  }

  configureRoutes() {
      this.router.get('/redocly', (req, res) => {
        return res.sendFile(process.cwd() + '/src/docs/swagger.json');
      });

      this.router.get('/documentation', (req, res) => {
        return res.sendFile(process.cwd() + '/public/index.html');
      });
  }
}

export { SwaggerRoutes }