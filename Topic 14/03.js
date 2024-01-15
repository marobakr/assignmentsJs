// Flating Array
let myArray = ['E', 'l', 'z', ['e', 'r'], 'o'];
let result = myArray
  .reduce(function (acc, curre) {
    return acc + curre;
  })
  .split(',')
  .reduce(function (acc, curre) {
    return acc + curre;
  });

console.log(result);
