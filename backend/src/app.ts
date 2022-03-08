/* eslint-disable import/first */
import { config } from 'dotenv';
config();

import Koa from 'koa';
import logger from 'koa-logger';
import mount from 'koa-mount';
import graphqlHTTP from 'koa-graphql';
import cors from '@koa/cors';
import { schema } from './schema';
import { resolvers } from './resolvers';
import { prodDb, testDatabase } from './database';

const { NODE_ENV } = process.env;
const devMode = NODE_ENV === 'test' || NODE_ENV === 'development';

const app = new Koa();
const context = async () => (devMode ? await testDatabase() : await prodDb());

app.use(logger());
app.use(cors());
app.use(
  mount(
    `/${devMode ? 'dev' : 'graphql'}`,
    graphqlHTTP({
      schema,
      rootValue: resolvers,
      graphiql: true,
      context
    })
  )
);

export { app };
