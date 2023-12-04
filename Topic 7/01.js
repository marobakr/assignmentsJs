// Test Case 1
let num = 9 // "009"

// Test Case 2

// let num = 9; // "020"

// Test Case 3

// let num = 9; // "110"

if (num < 10) {
  assignment1_1.innerHTML += '00' + num // "009"
} else if (num > 10 && num < 100) {
  assignment1_2.innerHTML += '0' + num // "020"
} else if (num >= 100) {
  assignment1_3.innerHTML += num // "110"
}
