function sales(carsSold) {
  const total = {};

  carsSold.forEach((car) => {
    if (total[car.make]) {
      total[car.make] += car.price; // If the car make already exists we add value of car.price
    } else {
      total[car.make] = car.price; // If it doesn't exist yet we define its value as car.price
    }
  });
  return total;
}

module.exports = sales;
