import { Client } from "../client/client";
import _ from "lodash";
import { listHasDuplicates } from "../utils/list_utils";

export class Server {
    private clients: Client[] = [];

    constructor(public list: string[]) {}

    public addClient(client: Client) {
        this.clients.push(client);
    }

    public validateClientListUniqueness(clientLists: string[][]): boolean {
        const aggregateList = _.flattenDeep([this.list, clientLists]);
        return !listHasDuplicates(aggregateList);
    }
}