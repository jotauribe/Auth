var mongoose = require('mongoose');

var CodeSchema = new mongoose.Schema({
  value: { type: String, required: true },
  redirectionURL: { type: String, required: true },
  userId: { type: String, required: true },
  clientId: { type: String, required: true }
});

// Export the Mongoose model
module.exports = mongoose.model('Code', CodeSchema);
