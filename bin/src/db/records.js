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
exports.RecordDBConnector = void 0;
class RecordDBConnector {
    constructor(client) {
        this.client = client;
    }
    getRecordsForNode(nodeUuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.record.findMany({
                where: {
                    nodeUuid
                }
            });
        });
    }
    addRecord(createInput) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.record.create({
                data: createInput
            });
        });
    }
    addNodeToRecords(nodeUuid, recordUuids) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateOutput = yield this.client.record.updateMany({
                where: {
                    uuid: {
                        in: recordUuids
                    },
                    nodeUuid: {
                        equals: null
                    }
                },
                data: {
                    nodeUuid
                }
            });
            return {
                updated: updateOutput.count,
                skipped: recordUuids.length - updateOutput.count
            };
        });
    }
    removeNodeFromRecords(recordUuids) {
        return __awaiter(this, void 0, void 0, function* () {
            const updateOutput = yield this.client.record.updateMany({
                where: {
                    uuid: {
                        in: recordUuids
                    },
                    nodeUuid: {
                        not: null
                    }
                },
                data: {
                    nodeUuid: null
                }
            });
            return {
                updated: updateOutput.count,
                skipped: recordUuids.length - updateOutput.count
            };
        });
    }
}
exports.RecordDBConnector = RecordDBConnector;
