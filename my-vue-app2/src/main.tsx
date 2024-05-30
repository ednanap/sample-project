import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient ({
  cache: new InMemoryCache(),
  uri:"http://localhost:4101/graphql"
})

client
  .query({
    query: gql `
      query GetClientDetail() {
      clients {
        id
        name
        age
        gender
       additionalInfo
         }
  }
`,}).then((result) => console.log(result));


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);