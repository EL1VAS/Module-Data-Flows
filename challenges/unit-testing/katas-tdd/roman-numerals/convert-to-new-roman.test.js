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
