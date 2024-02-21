"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const client_1 = require("../../src/client/client");
const server_1 = require("../../src/server/server");
describe("Server", () => {
    describe("validateClientListUniqueness", () => {
        test("single client has no duplicates", () => {
            const server = new server_1.Server(["foo", "bar"]);
            const client = new client_1.Client((0, crypto_1.randomUUID)(), ["baz"]);
            server.addClient(client);
            expect(server.validateClientListUniqueness([client.getId()])).toBe(true);
        });
        test("single client has duplicates", () => {
            const server = new server_1.Server(["foo", "bar"]);
            const client = new client_1.Client((0, crypto_1.randomUUID)(), ["baz", "foo"]);
            server.addClient(client);
            expect(server.validateClientListUniqueness([client.getId()])).toBe(false);
        });
    });
});
