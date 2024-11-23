// define routes here
// import model as instance
const Quote = require('../models/Quotes')

const resolvers = {
  Query: {
    getQuotes: async () => {
      // logic
      return await Quote.find();
    }
  },
  Mutation: {
    addQuote: async (_, { quote}) => {
      const newQuote = new Quote({quote});
      await newQuote.save();
      return newQuote;
    }
  }
};

module.exports = resolvers;