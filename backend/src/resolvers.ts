import { Db } from 'mongodb';
import { Note } from './types';

export const resolvers = {
  hello: async (_: any, context: any) => {
    const db: Db = await context();
    return db.collection('hello').find().toArray();
  },
  helloWorld: () => 'Hello World',
  notes: async (_: Partial<Note>, context: any) => {
    const db: Db = await context();
    return db.collection('notes').find().toArray();
  },
  note: async ({ id }: Pick<Note, 'id'>, context: any) => {
    const db: Db = await context();
    return db.collection('notes').findOne({ id });
  }
};
