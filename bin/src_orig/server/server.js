"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const lodash_1 = __importDefault(require("lodash"));
const list_utils_1 = require("../utils/list_utils");
class Server {
    constructor(list) {
        this.list = list;
        this.clients = [];
    }
    addClient(client) {
        this.clients.push(client);
    }
    validateClientListUniqueness(clientLists) {
        const aggregateList = lodash_1.default.flattenDeep([this.list, clientLists]);
        return !(0, list_utils_1.listHasDuplicates)(aggregateList);
    }
}
exports.Server = Server;
