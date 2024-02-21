import _ from "lodash";

export function listHasDuplicates(list: string[]): boolean {
    return _.uniq(list).length < list.length;
}