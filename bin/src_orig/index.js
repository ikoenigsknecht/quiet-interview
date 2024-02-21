"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("./client/client");
const server_1 = require("./server/server");
function main() {
    const server = new server_1.Server(["foo", "bar"]);
    const client = new client_1.Client(["baz"]);
    const isUnique = server.validateClientListUniqueness([client.uniqueList]);
}
main();
