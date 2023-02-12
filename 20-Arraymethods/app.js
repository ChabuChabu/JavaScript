/************* FILTER METHODS ***************/
// const scores = [10, 30, 15, 25, 50, 40, 5];

// const filtredScores = scores.filter((score) => {
//   return score > 20;
// });

// console.log(filtredScores);

const users = [
  { name: "shaun", premium: true },
  { name: "yoshi", premium: false },
  { name: "mario", premium: false },
  { name: "chun-li", premium: true },
];

const premiumUsers = users.filter((user) => user.premium);
// console.log(premiumUsers);

/************* MAPS METHODS ***************/

const prices = [20, 10, 30, 25, 40, 40, 80, 5];

const salePrices = prices.map((price) => price / 2);

// console.log(salePrices);

const products = [
  { name: "gold star", price: 20 },
  { name: "mushroom", price: 40 },
  { name: "green shells", price: 30 },
  { name: "banana skin", price: 10 },
  { name: "red shells", price: 50 },
  { name: "purple shells", price: 31 },
];

// console.log(products);

// const salesProducts = products.map((product) => {
//   if (product.price > 30) {
//     return { name: product.name, price: product.price / 2 };
//   } else {
//     return product;
//   }
// });

// console.log(salesProducts);

/************* FIND METHODS ***************/

const scores = [10, 5, 0, 40, 60, 10, 20, 70];

const firstHighScore = scores.find((score) => {
  return score > 50;
});

console.log(firstHighScore);

/************* FIND METHODS ***************/
