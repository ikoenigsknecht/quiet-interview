import { Prisma, PrismaClient } from "@prisma/client";
import { CreateOrFindOutput, NodeModel } from "../types/db.types";

export class NodeDBConnector {
    constructor(private client: PrismaClient) {}

    public async addNodeIfMissing(createInput: Prisma.NodeCreateInput, includeRecords: boolean): Promise<CreateOrFindOutput<NodeModel>> {
        try {
            const newModel = await this.client.node.create({
                data: createInput
            });
            return {
                model: newModel,
                created: true
            };
        } catch(e) {
            const model = await this.client.node.findUnique({
                include: {
                    records: includeRecords
                },
                where: {
                    uuid: createInput.uuid
                }
            });
    
            return {
                model: model!,
                created: false
            };
        }
    }

    public async removeNodeForUuid(uuid: string) {
        return this.client.node.delete({
            where: {
                uuid
            }
        });
    }
}