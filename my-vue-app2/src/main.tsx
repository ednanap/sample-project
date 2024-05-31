import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { ClientProvider } from './components/context/clientcontext';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient ({
  cache: new InMemoryCache(),
  uri:"http://localhost:4000/graphql",
})

client
  .query({
    query: gql `
      query GetClientDetail{
      clients {
        id
        name
        age
        gender
        additionalInfo
      }
  }
`,})
.then((result) => console.log(result))



// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
     <ClientProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </ClientProvider>
   </ApolloProvider>
 </React.StrictMode>
)