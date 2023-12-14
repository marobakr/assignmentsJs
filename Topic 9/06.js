let arr1 = ['A', 'C', 'X'];
let arr2 = ['D', 'E', 'F', 'Y'];
let allArrs = [];

allArrs = allArrs
  .concat(arr1, arr2)
  .sort()
  .splice(arr2.length)
  .join('')
  .toLowerCase();
// Your Code Here

console.log(allArrs); // fxy
