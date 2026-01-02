let convertToNewRoman = require("./convert-to-new-roman");

test("returns I if passed 1 as an argument", function () {
  // Arrange
  const result = convertToNewRoman(1);
  // Act
  // Assert
  expect(result).toBe("I");
});

test("returns V if passed 5 as an argument", function () {
  const result = convertToNewRoman(5);
  expect(result).toBe("V");
});

test("returns X if passed 10 as an argument", function () {
  const result = convertToNewRoman(10);
  expect(result).toBe("X");
});

test("returns IV if passed 4 as an argument", function () {
  const result = convertToNewRoman(4);
  expect(result).toBe("IV");
});

test("returns IX if passed 9 as an argument", function () {
  const result = convertToNewRoman(9);
  expect(result).toBe("IX");
});

test("returns XIV if passed 14 as an argument", function () {
  const result = convertToNewRoman(14);
  expect(result).toBe("XIV");
});

test("returns XLIV if passed 44 as an argument", function () {
  const result = convertToNewRoman(44);
  expect(result).toBe("XLIV");
});

test("returns XCIX if passed 99 as an argument", function () {
  const result = convertToNewRoman(99);
  expect(result).toBe("XCIX");
});

test("returns CD if passed 400 as an argument", function () {
  const result = convertToNewRoman(400);
  expect(result).toBe("CD");
});

test("returns CMXLIV if passed 944 as an argument", function () {
  const result = convertToNewRoman(944);
  expect(result).toBe("CMXLIV");
});

test("returns MCMXCIV if passed 1994 as an argument", function () {
  const result = convertToNewRoman(1994);
  expect(result).toBe("MCMXCIV");
});

test("returns MMM if passed 3000 as an argument", function () {
  const result = convertToNewRoman(3000);
  expect(result).toBe("MMM");
});
