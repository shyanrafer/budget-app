
// define key value pairs here
const typeDefs = `#graphql
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