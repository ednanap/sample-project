import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";

const client = new ApolloClient ({
  cache: new InMemoryCache(),
  uri:"http://localhost:4012/graphql"
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
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
)