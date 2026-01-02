function sales(carsSold) {
  const total = {};

  carsSold.forEach((car) => {
    if (total[car.make]) {
      total[car.make] += car.price;
    }
    total[car.make] = car.price;
  });
}

module.exports = sales;
