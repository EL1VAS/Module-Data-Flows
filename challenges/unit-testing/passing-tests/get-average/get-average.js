// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
  let numericValues = numbers.filter((item) => typeof item === "number");

  let sum = 0;
  for (i = 0; i < numericValues.length; i++) {
    sum += numericValues[i];
  }
  return sum / numericValues.length;
}

module.exports = average;
