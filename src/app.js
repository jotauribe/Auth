var Express = require('express');
var BodyParser = require('body-parser');
var ClientController = require('./controllers/client');
var Router = require('express');

const sever = Express();

sever.use(BodyParser.urlencoded({ extended: true }));
sever.use(BodyParser.json());
/* 
// Create endpoint handlers for /clients
router
  .route('/clients')
  .post(authController.isAuthenticated, ClientController.addClients)
  .get(authController.isAuthenticated, ClientController.getClients); */
