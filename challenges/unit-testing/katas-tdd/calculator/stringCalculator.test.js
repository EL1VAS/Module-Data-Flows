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

  test("ignores numbers bigger than 1000", () => {
    expect(add("5,1001")).toBe(5);
  });

  test("ignores numbers bigger than 1000 and sums the rest", () => {
    expect(add("5,1001,5,3")).toBe(13);
  });

  test("throws error for single negative number and displays the negative number", () => {
    expect(() => add("-1,5,6")).toThrow("negatives not allowed: -1");
  });

  test("throws error for multiple negative numbers and display all negative numbers", () => {
    expect(() => add("-1,-5,8,10")).toThrow("negatives not allowed: -1,-5");
  });
});
