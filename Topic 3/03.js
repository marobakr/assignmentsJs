let num = '10'
var zero = +null
var empty = ' '
// Solution One
assignment3_1.innerHTML += +num + +num + '' // 20 string

// Solution Two
assignment3_2.innerHTML += (num * num) / +num + +num + '' // 20 string

// Solution Three
assignment3_3.innerHTML += ++num * true + true - --num + '' + zero // 20 string

// Solution Four
assignment3_4.innerHTML += +num * (true + true) + empty // 20 string
