import { NodeType } from "@prisma/client";
import { Node } from "../node/node";

export class Client extends Node {
    public static async init(uuid: string): Promise<Client> {
        return super.init(uuid, NodeType.CLIENT);
    }
}