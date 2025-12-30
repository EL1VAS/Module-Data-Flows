function add(numbers) {
  if (numbers === "") {
    // If we have no input return 0
    return 0;
  }
  const numbersArray = numbers.split(","); // Created an array out of a string by splitting were the , is
  let sum = 0; // We will be adding to that sum below
  const negatives = []; // Created an empty array to push the negatives if located

  for (let i = 0; i < numbersArray.length; i++) {
    const num = parseInt(numbersArray[i]);
    if (num < 0) {
      // Checking for negatives
      negatives.push(num); // Pushing them to the empty array
    }
    if (num <= 1000) {
      //Checking for numbers over 1000
      sum += num;
    }
  }

  if (negatives.length > 0) {
    // Throwing an error if negatives are present
    throw new Error(`negatives not allowed: ${negatives.join(",")}`);
  }
  return sum; // returns the sum of the numbers pushed to the sum array
}

module.exports = add;
