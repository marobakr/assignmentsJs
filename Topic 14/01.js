// Exception Numbers From An Array
let mix = [1, 2, 3, 'E', 4, 'l', 'z', 'e', 'r', 5, 'o'];

let Resutl = mix
  .map(function (item) {
    return typeof item == 'string' ? item : '';
  })
  .reduce(function (acc, curr) {
    return acc + curr;
  });
console.log(Resutl); // Elzero
