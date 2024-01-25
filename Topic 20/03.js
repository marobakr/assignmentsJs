let arr1 = ['Ahmed', 'Sameh', 'Sayed'];
let arr2 = ['Mohamed', 'Gamal', 'Amir'];
let arr3 = ['Haytham', 'Shady', 'Mahmoud'];

let allfrind = [arr1, arr2, arr3];
let [[c], , [, b, a]] = allfrind;

console.log(`My Best Friends: ${b}, ${a}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed
