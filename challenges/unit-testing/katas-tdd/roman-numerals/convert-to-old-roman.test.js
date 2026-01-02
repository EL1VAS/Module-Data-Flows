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
