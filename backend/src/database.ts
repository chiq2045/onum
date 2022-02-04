import { MongoMemoryServer } from 'mongodb-memory-server';
import { MongoClient, Db } from 'mongodb';
import { LoremIpsum } from 'lorem-ipsum';
import { nanoid } from 'nanoid';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const {
  DB_PREFIX: prefix,
  DB_USER: user,
  DB_PASS: password,
  DB_NAME: name,
  DB_OPTIONS: options
} = process.env;

let database: Db = null;

export const prodDb = async () => {
  const client = new MongoClient(
    `${prefix}${user}:${encodeURIComponent(password)}@${name}${options}`
  );
  await client.connect();
  return client.db();
};

export const testDatabase = async () => {
  const mongo = await MongoMemoryServer.create();
  const mongodbUrl = mongo.getUri();
  const client = new MongoClient(mongodbUrl);
  if (!database) {
    await client.connect();
    database = client.db();
    await database
      .collection('hello')
      .insertOne({ id: nanoid(), message: 'Hello, World' });
    await database.collection('notes').insertMany([
      {
        id: nanoid(),
        note: lorem.generateParagraphs(1),
        date: new Date(2022, 0, 29)
      },
      {
        id: nanoid(),
        note: lorem.generateParagraphs(1),
        date: new Date(2022, 1, 1)
      },
      {
        id: nanoid(),
        note: lorem.generateParagraphs(1),
        date: new Date(2022, 1, 2)
      },
      {
        id: nanoid(),
        note: lorem.generateParagraphs(1),
        date: new Date(2022, 1, 3)
      },
      {
        id: nanoid(),
        note: lorem.generateParagraphs(1),
        date: new Date(2022, 1, 4)
      }
    ]);
  }

  return database;
};
