let num1 = 9
let str = '9'
let str2 = '20'

if (num1 == str) {
  // Solution 01
  assignment2_1.innerHTML += ` ${num1} Is The Same Value As ${str}`
} else if (num1 == str && typeof num1 !== typeof str) {
  // Solution 02
  assignment2_2.innerHTML += ` ${num1} Is The Same Value As ${str} But Not The Same Type`
} else if (num1 !== str2) {
  // Solution 03
  assignment2_3.innerHTML += ` ${num1} Is Not The Same Value Or The Same Type As${str}`
} else if (str != str2 && typeof str === typeof str2) {
  // Solution 04
  assignment2_3.innerHTML += `${str} Is The Same Type As ${str2} But Not The Same Value`
}
