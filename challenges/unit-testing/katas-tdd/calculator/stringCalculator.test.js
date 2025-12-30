const add = require("./stringCalculator");

describe("String calculator", () => {
  test("returns 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  test("returns the number itself for single number", () => {
    expect(add("5")).toBe(5);
  });

  test("returns sum of two numbers seperated by comma", () => {
    expect(add("5,6")).toBe(11);
  });

  test("handles multiple numbers", () => {
    expect(add("3,5,7")).toBe(15);
  });
});
