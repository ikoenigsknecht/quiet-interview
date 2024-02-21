import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
import { RecordModel, UpdateWithSkippedOutput } from "../types/db.types";

export class RecordDBConnector {
    constructor(private client: PrismaClient) {}

    public async getRecordsForNode(nodeUuid: string, select?: Prisma.RecordSelect): Promise<RecordModel[]> {
        return this.client.record.findMany({
            select,
            where: {
                nodeUuid
            }
        })
    }

    public async addRecord(createInput: Prisma.RecordCreateInput): Promise<
        Prisma.Prisma__RecordClient<RecordModel, never, DefaultArgs>
    > {
        return this.client.record.create({
            data: createInput
        });
    }

    public async addRecords(createInputs: Prisma.RecordCreateManyInput[]): Promise<number> {
        const output = await this.client.record.createMany({
            data: createInputs
        });

        return output.count;
    }

    public async addNodeToRecords(nodeUuid: string, recordUuids: string[], outputUuids: boolean = true): Promise<UpdateWithSkippedOutput> {
        const updateOutput = await this.client.record.updateMany({
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

        const skipped = recordUuids.length - updateOutput.count;
        let uuids: string[] | undefined;
        if (outputUuids && skipped > 0) {
            uuids = recordUuids;
        } else if (outputUuids && skipped === 0) {
            uuids = (await this.getRecordsForNode(nodeUuid, {
                uuid: true
            })).map(record => record.uuid);
        }

        return {
            updated: updateOutput.count,
            skipped,
            uuids
        }
    }

    public async removeNodeFromRecords(recordUuids: string[]): Promise<UpdateWithSkippedOutput> {
        const updateOutput = await this.client.record.updateMany({
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
        }
    }
}