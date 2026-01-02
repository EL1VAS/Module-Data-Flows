let convertToOldRoman = require("./convert-to-old-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  const input = 1;
  // Act
  const result = convertToOldRoman(input);
  // Assert
  expect(result).toBe("I");
});

test("returns V if passed 5 as an argument", function () {
  const input = 5;
  const result = convertToOldRoman(input);
  expect(result).toBe("V");
});

test("returns X if passed 5 as an argument", function () {
  const input = 5;
  const result = convertToOldRoman(input);
  expect(result).toBe("V");
});

test("returns V if passed 5 as an argument", function () {
  const input = 5;
  const result = convertToOldRoman(input);
  expect(result).toBe("V");
});

test("returns X if passed 10 as an argument", function () {
  const input = 10;
  const result = convertToOldRoman(input);
  expect(result).toBe("X");
});

test("returns L if passed 50 as an argument", function () {
  const input = 50;
  const result = convertToOldRoman(input);
  expect(result).toBe("L");
});

test("returns C if passed 100 as an argument", function () {
  const input = 100;
  const result = convertToOldRoman(input);
  expect(result).toBe("C");
});

test("returns D if passed 500 as an argument", function () {
  const input = 500;
  const result = convertToOldRoman(input);
  expect(result).toBe("D");
});

test("returns M if passed 1000 as an argument", function () {
  const input = 1000;
  const result = convertToOldRoman(input);
  expect(result).toBe("M");
});

test("returns XV if passed 15 as an argument", function () {
  const result = convertToOldRoman(15);
  expect(result).toBe("XV");
});

test("returns XVIII if passed 18 as an argument", function () {
  const result = convertToOldRoman(18);
  expect(result).toBe("XVIII");
});

test("returns XXII if passed 22 as an argument", function () {
  const result = convertToOldRoman(22);
  expect(result).toBe("XXII");
});

test("returns CXXIII if passed 123 as an argument", function () {
  const result = convertToOldRoman(123);
  expect(result).toBe("CXXIII");
});

test("returns DCCLXXXVIII if passed 788 as an argument", function () {
  const result = convertToOldRoman(788);
  expect(result).toBe("DCCLXXXVIII");
});

test("returns MMDCCCXXXXVI if passed 2846 as an argument", function () {
  const result = convertToOldRoman(2846);
  expect(result).toBe("MMDCCCXXXXVI");
});
