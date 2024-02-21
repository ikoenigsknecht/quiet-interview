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
exports.NodeDBConnector = void 0;
class NodeDBConnector {
    constructor(client) {
        this.client = client;
    }
    addNodeIfMissing(createInput, includeRecords) {
        return __awaiter(this, void 0, void 0, function* () {
            const newModel = yield this.client.node.create({
                data: createInput
            });
            if (newModel) {
                return {
                    model: newModel,
                    created: true
                };
            }
            const model = yield this.client.node.findUnique({
                include: {
                    records: includeRecords
                },
                where: {
                    uuid: createInput.uuid
                }
            });
            return {
                model: model,
                created: false
            };
        });
    }
    removeNodeForUuid(uuid) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.client.node.delete({
                where: {
                    uuid
                }
            });
        });
    }
}
exports.NodeDBConnector = NodeDBConnector;
