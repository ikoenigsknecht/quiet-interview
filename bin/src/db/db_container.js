"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBContainer = void 0;
const client_1 = require("@prisma/client");
const nodes_1 = require("./nodes");
const records_1 = require("./records");
class DBContainer {
    constructor() {
        const client = new client_1.PrismaClient();
        const nodes = new nodes_1.NodeDBConnector(client);
        const records = new records_1.RecordDBConnector(client);
        this.dbConnectors = {
            nodes,
            records
        };
    }
    static getInstance() {
        if (!DBContainer.instance) {
            DBContainer.instance = new DBContainer();
        }
        return DBContainer.instance;
    }
    getConnector(type) {
        return this.dbConnectors[type];
    }
}
exports.DBContainer = DBContainer;
