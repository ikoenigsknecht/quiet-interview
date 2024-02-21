import { NodeType } from "@prisma/client";
import { DBContainer } from "../db/db_container";
import { CreateOrFindOutput, NodeModel, UpdateWithSkippedOutput } from "../types/db.types";
import { NodeDBConnector } from "../db/nodes";
import { RecordDBConnector } from "../db/records";

export class Node {
    protected constructor(private uuid: string, private type: NodeType, private recordIds: string[], private dbContainer: DBContainer) {}

    public static async init(uuid: string, type: NodeType): Promise<Node> {
        const dbContainer: DBContainer = DBContainer.getInstance();
        const createNodeOutput = await Node.addNodeIfMissing(uuid, type, dbContainer, true);
        const recordIds = createNodeOutput.model.records ? createNodeOutput.model.records.map(record => record.uuid) : [];
        return new Node(uuid, type, recordIds, dbContainer);
    }

    public static async addNodeIfMissing(
        uuid: string, 
        type: NodeType,
        dbContainer: DBContainer, 
        includeRecords: boolean = true
    ): Promise<CreateOrFindOutput<NodeModel>> {
        return (dbContainer.getConnector("nodes") as NodeDBConnector).addNodeIfMissing({
             uuid,
             type
        }, includeRecords);
     }
 
    public async addToRecords(recordUuids: string[]): Promise<UpdateWithSkippedOutput> {
         const output = await (this.dbContainer.getConnector("records") as RecordDBConnector).addNodeToRecords(this.uuid, recordUuids, true);
         this.recordIds.push(...output.uuids || []);
         return output;
     }

    public getUuid(): string {
        return this.uuid;
    }

    public getRecordIds(): string[] {
        return this.recordIds;
    }

    public getNodeType(): NodeType {
        return this.type;
    }
}