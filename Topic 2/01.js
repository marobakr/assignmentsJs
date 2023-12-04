// Add Variables Here
var numberOne = 10
var numberTwo = 20

var legacyJs = numberOne + '' + numberTwo
console.log(legacyJs)
// Normal Concatenate => 1020

console.log(typeof legacyJs)
// Normal Concatenate => String

var Es6 = `${numberOne}${numberTwo}`

console.log(Es6)
// Template Literals Way => 1020

console.log(`${typeof Es6}`)
// Template Literals Way => String

console.log(numberOne + '\n' + numberTwo)
/*
  Normal Concatenate
  20
  10
*/
console.log(`${numberOne}\n${numberTwo}`)
/*
  Template Literals Way
  20
  10
*/
