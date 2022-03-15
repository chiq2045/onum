import { ApolloClient, InMemoryCache } from '@apollo/client';
import urls from './urls.json';

const prodClient = new ApolloClient({
  uri: urls.prod,
  cache: new InMemoryCache()
});

const devClient = new ApolloClient({
  uri: urls.dev,
  cache: new InMemoryCache()
});

const devMode =
  process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test';

export const client = devMode ? devClient : prodClient;
