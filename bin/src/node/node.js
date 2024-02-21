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
exports.Node = void 0;
const db_container_1 = require("../db/db_container");
class Node {
    constructor(uuid, recordIds, dbContainer) {
        this.uuid = uuid;
        this.recordIds = recordIds;
        this.dbContainer = dbContainer;
    }
    static init(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            const dbContainer = db_container_1.DBContainer.getInstance();
            const createNodeOutput = yield Node.addNodeIfMissing(uuid, dbContainer, true);
            const recordIds = createNodeOutput.model.records ? createNodeOutput.model.records.map(record => record.uuid) : [];
            return new Node(uuid, recordIds, dbContainer);
        });
    }
    static addNodeIfMissing(uuid, dbContainer, includeRecords = true) {
        return __awaiter(this, void 0, void 0, function* () {
            return dbContainer.getConnector("nodes").addNodeIfMissing({
                uuid,
                type: Node.TYPE
            }, includeRecords);
        });
    }
    addToRecords(recordUuids) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dbContainer.getConnector("records").addNodeToRecords(this.uuid, recordUuids);
        });
    }
    getUuid() {
        return this.uuid;
    }
    getRecordIds() {
        return this.recordIds;
    }
    getNodeType() {
        return Node.TYPE;
    }
}
exports.Node = Node;
