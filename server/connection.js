// Import mongoose to use methods from mongoose
const mongoose = require('mongoose');
// Same with dotenv i believe
require("dotenv").config();
// Connects using local host and the name of the database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/budget-app');
// Export db connection
module.exports = mongoose.connection;
