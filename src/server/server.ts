import { NodeType } from "@prisma/client";
import { Node } from "../node/node";

export class Server extends Node {
    public static async init(uuid: string): Promise<Server> {
        return super.init(uuid, NodeType.SERVER);
    }
}