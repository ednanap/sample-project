"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
exports.typeDefs = "#graphql\n  type Client {\n    id: ID!\n    name: String!\n    age: Int!\n    gender: String\n    additionalInfo: AdditionalInfo\n}\n\ntype AdditionalInfo {\n  company: String\n  email: String\n  phone: String\n  address: String\n}\ntype Query {\n    clients: [Client]\n  }\n\n";
