const { Router } = require('express');
const statusMonitor = require('express-status-monitor');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');

const clientService = require('../../app/services/clientService');

module.exports = ({ config }) => {
  const mainRouter = Router();

  /* istanbul ignore if */
  if (config.env === 'development') {
    mainRouter.use(statusMonitor());
  }

  const clientRouter = Router();

  clientRouter
    .use(cors())
    .use(bodyParser.json())
    .use(compression());

  /*
   * Add your API routes here
   *
   * You can use the `controllers` helper like this:
   * apiRouter.use('/users', controller(controllerPath))
   *
   * The `controllerPath` is relative to the `interfaces/http` folder
   */

  clientRouter.use('/clients', clientService.getClients);

  mainRouter.use('/api', clientRouter);

  return mainRouter;
};

/* router
  .route('/clients')
  .post(authController.isAuthenticated, ClientController.addClients)
  .get(authController.isAuthenticated, ClientController.getClients); */
