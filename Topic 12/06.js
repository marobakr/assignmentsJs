function multiply(...num) {
  var result = 1
  for (var i = 0; i < num.length; i++) {
    if (typeof num[i] === 'string') {
      continue
    }
    // If Number Not Integer
    if (Number.isInteger(num[i]) == false) {
      // Convert To Integer
      num[i] = parseInt(num[i])
    }
    result *= num[i]
  }
  console.log(result)
}
multiply(10, 20) // 200
multiply('A', 10, 30) // 300
multiply(100.5, 10, 'B') // 1000
