import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  type Hello {
    id: ID!
    message: String!
  }

  type Note {
    id: ID!
    note: String!
    date: String!
  }

  type Query {
    hello: [Hello!]!
    helloWorld: String!
    notes: [Note]
    note(id: Int!): Note
  }
`);
