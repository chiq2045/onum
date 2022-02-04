import { Db } from 'mongodb';
import { Note } from './types';
import { nanoid } from 'nanoid';

export const resolvers = {
  hello: async (_: any, context: any) => {
    const db: Db = await context();
    return db.collection('hello').find().toArray();
  },
  helloWorld: () => 'Hello World',
  addNote: async (
    { note, date }: Pick<Note, 'note' | 'date'>,
    context: any
  ) => {
    const db: Db = await context();
    await db.collection('notes').find().toArray();
    const id = nanoid();
    return db
      .collection('notes')
      .insertOne({
        id,
        note,
        date
      })
      .then(() => ({
        message: 'Note Added',
        note: db.collection('notes').findOne({ id })
      }));
  },
  notes: async (_: Partial<Note>, context: any) => {
    const db: Db = await context();
    return db.collection('notes').find().toArray();
  },
  note: async ({ id }: Pick<Note, 'id'>, context: any) => {
    const db: Db = await context();
    return db.collection('notes').findOne({ id });
  },
  editNote: async ({ id, note, date }: Note, context: any) => {
    const db: Db = await context();
    return db
      .collection('notes')
      .findOneAndUpdate(
        { id },
        {
          $set: {
            note,
            date
          }
        }
      )
      .then(() => ({
        message: 'Note Edited',
        note: db.collection('notes').findOne({ id })
      }));
  },
  deleteNote: async ({ id }: Pick<Note, 'id'>, context: any) => {
    const db: Db = await context();
    return db
      .collection('notes')
      .findOneAndDelete({ id })
      .then(() => ({
        message: 'Note Deleted'
      }));
  }
};
