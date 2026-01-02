function convertToOldRoman(n) {
  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 500, numeral: "D" },
    { value: 100, numeral: "C" },
    { value: 50, numeral: "L" },
    { value: 10, numeral: "X" },
    { value: 5, numeral: "V" },
    { value: 1, numeral: "I" },
  ];

  let result = "";
  let remaining = n;

  for (let i = 0; i < romanNumerals.length; i++) {
    const { value, numeral } = romanNumerals[i];
    const count = Math.round(remaining / value); // How many times the value fits to the remaining

    for (let j = 0; j < count; j++) {
      // Add the numeral that many times
      result += numeral;
    }
    remaining = remaining % value; // Update remaining
  }
  return result;
}

module.exports = convertToOldRoman;
