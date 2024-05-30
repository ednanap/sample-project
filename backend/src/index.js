"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("@apollo/server");
var standalone_1 = require("@apollo/server/standalone");
var schema_1 = require("./schema");
//reading from file
var fs = require("fs");
var url_1 = require("url");
var path = require("path");
var __dirname = path.dirname((0, url_1.fileURLToPath)(import.meta.url));
var filePath = path.join(__dirname, './data.json');
var data = fs.readFileSync(filePath, 'utf8');
var clientsData = JSON.parse(data);
//creating resolver
var resolvers = {
    Query: {
        clients: function () {
            return clientsData.clients;
        }
    }
};
//server setup
var server = new server_1.ApolloServer({
    typeDefs: schema_1.typeDefs,
    resolvers: resolvers
});
var url = (await (0, standalone_1.startStandaloneServer)(server, {
    listen: { port: 4101 }
})).url;
console.log('server ready at port 4000');
