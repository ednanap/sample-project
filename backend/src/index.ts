import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';  // Ensure the correct import
import * as fs from 'fs';
import { fileURLToPath } from 'url';
import * as path from 'path';




const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filePath = path.join(__dirname, './data.json');
const data = fs.readFileSync(filePath, 'utf8');
const clientsData = JSON.parse(data);
//creating resolver
const resolvers={
    Query:{
        clients(){
            return clientsData.clients
        }
    }
}

//server setup
const server = new ApolloServer({
typeDefs,resolvers})

await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req }) => ({ token: req.headers.token }),
    cors: {
      origin: 'http://localhost:5173/', // Adjust this as needed for your specific CORS requirements
      credentials: true,
    },
  });
  
  console.log('Server ready at http://localhost:4000/graphql');