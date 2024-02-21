"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const client_1 = require("@prisma/client");
const node_1 = require("../node/node");
class Server extends node_1.Node {
    constructor() {
        super(...arguments);
        this.TYPE = client_1.NodeType.SERVER;
    }
}
exports.Server = Server;
