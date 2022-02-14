import { ApolloClient, InMemoryCache } from '@apollo/client';
import urls from './urls.json';

export const client = new ApolloClient({
  uri: urls.prod,
  cache: new InMemoryCache()
});

export const devClient = new ApolloClient({
 uri: urls.dev,
  cache: new InMemoryCache()
});
