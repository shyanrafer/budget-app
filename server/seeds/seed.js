// import mongoose and the required models for the given application
const mongoose = require('mongoose');
const Quote = require('../models/Quotes');
const quotes = require('./quoteSeeds')

// create a callback function to seed the data
const seedData = async () => {
  // await the connection to db (can copy db url from connection.js)
  await mongoose.connect('mongodb://127.0.0.1:27017/budget-app');


  await Quote.insertMany(quotes);
  process.exit();
}

seedData();