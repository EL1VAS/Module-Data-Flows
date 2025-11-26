let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

function calculateReceipt({quantity, itemName, unitPricePence}) {
  const unitPrice = (unitPricePence / 100); // Converts to pounds
  const unitTotal = unitPrice * quantity; // Calculates the total of the unit
  return {
    line:
  `${quantity.toString().padEnd(8)}${itemName.toString().padEnd(16)}${unitTotal}${unitTotal.toFixed(2).padStart(4)}`,
unitTotal // Line refers to strings so we created this format to match with the expected outcome
} // Padding creates the spaces between columns
};

console.log("QTY     ITEM                TOTAL"); // I used the same distances as I used in paddings

let totalCost = 0; // Made a variable to add all the unitTotals in
for (const item of order) { // Iterating within the order objects
  const {line, unitTotal} = calculateReceipt(item);
  console.log(line); 
  totalCost += unitTotal; // Adding the unitTotal to the total
};

console.log("\nTotal:"+totalCost); // Total is loged in the console with a break above it
