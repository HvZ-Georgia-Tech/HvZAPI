import { ApolloServer, gql } from 'apollo-server';
import fs from 'fs';
import path from 'path';


const typeDefs = `#graphql
  type Game {
    title: String
    author: String
  }

  type Query {
    games: [Game]
  }
`

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const resolvers = {
    Query: {
      games: () => books,
    },
  };


const server = new ApolloServer({
    typeDefs,
    resolvers,
});


server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
});
