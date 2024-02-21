"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("../../src_orig/client/client");
const server_1 = require("../../src_orig/server/server");
describe("Server", () => {
    describe("validateClientListUniqueness", () => {
        test("single client has no duplicates", () => {
            const server = new server_1.Server(["foo", "bar"]);
            const client = new client_1.Client(["baz"]);
            expect(server.validateClientListUniqueness([client.uniqueList])).toBe(true);
        });
        test("single client has duplicates", () => {
            const server = new server_1.Server(["foo", "bar"]);
            const client = new client_1.Client(["baz", "foo"]);
            expect(server.validateClientListUniqueness([client.uniqueList])).toBe(false);
        });
    });
});
