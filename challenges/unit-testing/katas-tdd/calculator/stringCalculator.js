function add(numbers) {
  if (numbers === "") {
    return 0;
  }
  const numbersArray = numbers.split(",");
  let sum = 0;
  const negatives = [];

  for (let i = 0; i < numbersArray.length; i++) {
    const num = parseInt(numbersArray[i]);
    if (num < 0) {
      negatives.push(num);
    }
    if (num <= 1000) {
      sum += num;
    }
  }

  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(",")}`);
  }
  return sum;
}

module.exports = add;
