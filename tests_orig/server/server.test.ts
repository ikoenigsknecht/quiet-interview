import { Client } from "../../src_orig/client/client";
import { Server } from "../../src_orig/server/server";

describe("Server", () => {
    describe("validateClientListUniqueness", () => {
        test("single client has no duplicates", () => {
            const server = new Server(["foo", "bar"]);
            const client = new Client(["baz"]);
            expect(server.validateClientListUniqueness([client.uniqueList])).toBe(true);
        });

        test("single client has duplicates", () => {
            const server = new Server(["foo", "bar"]);
            const client = new Client(["baz", "foo"]);
            expect(server.validateClientListUniqueness([client.uniqueList])).toBe(false);
        });
    });
});