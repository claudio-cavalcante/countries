import "@pathofdev/react-tag-input/build/index.css";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import Pages from './pages';
require('dotenv').config({path: __dirname + '/.env'});


const {
  REACT_APP_GRAPH_COUNTRIES_URL
} = process.env

const client = new ApolloClient({
  uri: REACT_APP_GRAPH_COUNTRIES_URL,
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={client} >
    <React.StrictMode>
      <Pages />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
