import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
import { Provider } from 'react-redux';
import { store } from "./components/store/store"
import { client } from "./graphql/index"
import { ApolloProvider } from '@apollo/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    </Provider>
  </React.StrictMode>
);