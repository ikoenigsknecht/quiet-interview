import { listHasDuplicates } from "../../src_orig/utils/list_utils"

describe("test list_utils", () => {
    describe("listHasDuplicates", () => {
      test("listHasDuplicates returns false when no dupes", () => {
        const input = ["foo", "bar"];
        const expected = false;
        expect(listHasDuplicates(input)).toBe(expected);
      });

      test("listHasDuplicates returns true when dupes", () => {
        const input = ["foo", "bar", "foo"];
        const expected = true;
        expect(listHasDuplicates(input)).toBe(expected);
      });
    })
})