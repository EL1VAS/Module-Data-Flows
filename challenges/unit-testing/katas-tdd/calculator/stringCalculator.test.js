const add = require("./stringCalculator");

describe("String calculator", () => {
  test("returns 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  test("returns the number itself for single number", () => {
    expect(add("5")).toBe(5);
  });
});
