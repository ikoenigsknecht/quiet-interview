"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const client_1 = require("@prisma/client");
const node_1 = require("../node/node");
class Client extends node_1.Node {
    constructor() {
        super(...arguments);
        this.TYPE = client_1.NodeType.CLIENT;
    }
}
exports.Client = Client;
