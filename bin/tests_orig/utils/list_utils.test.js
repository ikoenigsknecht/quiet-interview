"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const list_utils_1 = require("../../src_orig/utils/list_utils");
describe("test list_utils", () => {
    describe("listHasDuplicates", () => {
        test("listHasDuplicates returns false when no dupes", () => {
            const input = ["foo", "bar"];
            const expected = false;
            expect((0, list_utils_1.listHasDuplicates)(input)).toBe(expected);
        });
        test("listHasDuplicates returns true when dupes", () => {
            const input = ["foo", "bar", "foo"];
            const expected = true;
            expect((0, list_utils_1.listHasDuplicates)(input)).toBe(expected);
        });
    });
});
