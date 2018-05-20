const router = require('express').Router();
const ClientController = require('./controllers/client');

// Create endpoint handlers for /clients
router
  .route('/clients')
  .post(authController.isAuthenticated, ClientController.addClients)
  .get(authController.isAuthenticated, ClientController.getClients);

module.exports = router;
