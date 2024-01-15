// Use Filter Function To Remove The Duplicated Letters
let myString = 'EElllzzzzzzzeroo';
console.log(myString.indexOf('E')); // 0
let word = myString
  .split('')
  .filter(function (el, index) {
    return myString.indexOf(el) === index;
  })
  .join('');

// console.log(word); // Output => "Elzero"
