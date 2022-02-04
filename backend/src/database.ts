import { MongoMemoryServer } from 'mongodb-memory-server';
import { MongoClient, Db } from 'mongodb';

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
      .insertOne({ id: 1, message: 'Hello, World' });
  }

  return database;
};
