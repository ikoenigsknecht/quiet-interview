import { randomUUID } from "crypto";
import { Server } from "./server/server";
import { Client } from "./client/client";
import { DBContainer } from "./db/db_container";
import { RecordDBConnector } from "./db/records";
import { Prisma } from "@prisma/client";

async function main() {
    const records = DBContainer.getInstance().getConnector("records") as RecordDBConnector;
    const recordIds: string[] = []
    const createInputs: Prisma.RecordCreateManyInput[] = []
    for (let i = 0; i < 10; i++) {
        const uuid = randomUUID();
        recordIds.push(uuid);
        createInputs.push({
            uuid
        });
    }

    await records.addRecords(createInputs);

    const server = await Server.init(randomUUID());
    await server.addToRecords(recordIds.slice(0,2));

    const client1 = await Client.init(randomUUID());
    await client1.addToRecords(recordIds.slice(2, 5));

    const client2 = await Client.init(randomUUID());
    await client2.addToRecords(recordIds.slice(5));

    console.log(server.getRecordIds());
    console.log(client1.getRecordIds());
    console.log(client2.getRecordIds());

    const serverClone = await Server.init(server.getUuid());
    console.log(serverClone.getRecordIds());
}

main();