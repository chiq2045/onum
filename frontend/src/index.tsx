import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { client } from 'utils';
import { App } from './app';
import './index.css';

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
);
