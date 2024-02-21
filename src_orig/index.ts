import { Client } from "./client/client";
import { Server } from "./server/server";

 function main() {
    const server = new Server(["foo", "bar"]);
    const client = new Client(["baz"]);
    const isUnique = server.validateClientListUniqueness([client.uniqueList]);
 }

 main();