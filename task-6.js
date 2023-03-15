const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроїд", price: 400, quantity: 7 },
  { name: "Захоплення", price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  let sum = 0;

  for (let product of allProdcuts) {
    if (product.name == productName) {
      sum = product.quantity * product.price;
    }
  }
  return sum;
};

console.log(calculateTotalPrice(products, "Радар")); // 5200

console.log(calculateTotalPrice(products, "Дроїд")); // 2800
