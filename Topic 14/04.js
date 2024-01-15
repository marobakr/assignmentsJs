// Exception Numbers From An Array and convert negative to positive Number and positive to negative

let numsAndStrings = [1, 10, -10, -20, 5, 'A', 3, 'B', 'C'];

let reslut = numsAndStrings
  .filter(function (item) {
    return parseInt(item);
  })
  .map(function (item) {
    return -item;
  });
console.log(reslut);
