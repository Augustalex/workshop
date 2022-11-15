import { toRomanNumerals } from "./toRomanNumerals";

describe("toRomanNumerals", () => {
  it("converts 1 to I", () => {
    expect(toRomanNumerals(1)).toBe("I");
  });
});
