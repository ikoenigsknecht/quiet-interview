"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const server_1 = require("./server/server");
const client_1 = require("./client/client");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const server = yield server_1.Server.init((0, crypto_1.randomUUID)());
        console.log(server.getNodeType());
        const client1 = yield client_1.Client.init((0, crypto_1.randomUUID)());
        const client2 = yield client_1.Client.init((0, crypto_1.randomUUID)());
    });
}
main();
