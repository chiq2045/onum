import React from 'react';
import { render } from 'react-dom';
import { App } from './app';
import { ApolloProvider } from '@apollo/client';
import { client, devClient } from 'utils/constants';
import 'uikit/dist/css/uikit.css';
import 'uikit/dist/js/uikit.js';
import 'uikit/dist/js/uikit-icons';

render(
  <ApolloProvider
    client={
      process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test'
        ? devClient
        : client
    }
  >
    <App />
  </ApolloProvider>,
  document.getElementById('app')
);
