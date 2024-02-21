import { $Enums } from "@prisma/client"
import { NodeDBConnector } from "../db/nodes"
import { RecordDBConnector } from "../db/records"

export type DBConnectors = {
    nodes: NodeDBConnector,
    records: RecordDBConnector
}

export type UpdateWithSkippedOutput = {
    updated: number;
    skipped?: number;
    uuids?: string[];
}

export type NodeModel = {
    id: number,
    uuid: string,
    type: $Enums.NodeType,
    records?: RecordModel[]
};

export type RecordModel = {
    id: number,
    uuid: string,
    nodeUuid: string | null
};

export type CreateOrFindOutput<T> = {
    model: T,
    created: boolean;
};