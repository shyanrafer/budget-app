// import these NPM packs for models
const { Schema, model } = require('mongoose');

// next step is to create an instance of the given schema
const quoteSchema = new Schema({
  // then insert the key value pairs here
  quote: {
    type: String,
    required: true,
  }
});

const Quote = model('Quote', quoteSchema);

module.exports = Quote;