import { PrismaClient } from "@prisma/client";
import { DBConnectors } from "../types/db.types";
import { NodeDBConnector } from "./nodes";
import { RecordDBConnector } from "./records";

export class DBContainer {
    private dbConnectors: DBConnectors;
    private static instance: DBContainer;

    private constructor() {
        const client = new PrismaClient();
        const nodes = new NodeDBConnector(client);
        const records = new RecordDBConnector(client);
        this.dbConnectors = {
            nodes,
            records
        };
    }

    public static getInstance(): DBContainer {
        if (!DBContainer.instance) {
            DBContainer.instance = new DBContainer();
        }

        return DBContainer.instance;
    }

    public getConnector(type: keyof DBConnectors): NodeDBConnector | RecordDBConnector {
        return this.dbConnectors[type];
    }
}