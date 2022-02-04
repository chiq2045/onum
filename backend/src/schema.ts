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
    notes: [Note]!
    note(id: Int!): Note
  }

  type NoteReturnMessage {
    message: String!
    note: Note
  }

  type Mutation {
    addNote(note: String, date: String): NoteReturnMessage
    editNote(id: ID, note: String, date: String): NoteReturnMessage
    deleteNote(id: ID): NoteReturnMessage
  }
`);
