import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import App from './App';
import { config } from './config';

import './index.scss';

config.init().then(() => {
  const apolloCLient = new ApolloClient({
    uri: config.api.uri,
    cache: new InMemoryCache(),
  });

  render(
    <React.StrictMode>
      <ApolloProvider client={apolloCLient}>
        <App />
      </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
});
