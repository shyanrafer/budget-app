const { gql } = require('apollo-server-express')

// define key value pairs here
const typeDefs = gql`
type Quote {
  _id: ID
  quote: String
}

type Query {
  getQuote: [Quote]
}

type Mutation {
  addQuote(quote: String!): Quote
}
`;

module.exports = typeDefs;