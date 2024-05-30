import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema';
//reading from file
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

const{ url }= await startStandaloneServer(server,{
    listen: { port: 4101}
})

console.log('server ready at port 4000')