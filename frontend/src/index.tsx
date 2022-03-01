import React from 'react';
import { render } from 'react-dom';
import { App } from './app';
import { ApolloProvider } from '@apollo/client';
import { client } from 'utils/constants';
import 'uikit/dist/css/uikit.css';
import 'uikit/dist/js/uikit.js';
import 'uikit/dist/js/uikit-icons';

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
);
