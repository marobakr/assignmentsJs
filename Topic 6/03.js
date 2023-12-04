let a = 20;
let b = 30;
let c = 10;

// Solution 01
assignment3_1.innerHTML += (a != b && a > c) || a < b // true

// Solution 02
assignment3_2.innerHTML += a < b && a > c // true

// Solution 03
assignment3_3.innerHTML += !(a > b) && !(a == b) && !(a == c) && !(a <= c)// true

