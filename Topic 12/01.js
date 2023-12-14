function sayHello(theName, theGender) {
  if (theGender == 'Male') {
    theGender = 'Mr'
  } else if (theGender == 'Female') {
    theGender = 'Miss'
  } else if ((theGender === undefined)) {
   theGender=""
  }
  var result = `Hello ${theGender} ${theName} `
  console.log(result)
}

// Needed Output
sayHello('Osama', 'Male') // "Hello Mr Osama"
sayHello('Eman', 'Female') // "Hello Miss Eman"
sayHello('Sameh') // "Hello Sameh"

// Switch Case
function sayHelloSwitch(theName, theGender) {
  // Write Your Code Here
  switch (theGender) {
    case 'Male':
      console.log(`Hello Mr ${theName}`)
      break
    case 'Female':
      console.log(`Hello Miss ${theName}`)
      break
    default:
      console.log(`Hello ${theName}`)
  }
}
sayHelloSwitch('Osama', 'Male') // Output => "Hello Mr Osama"
sayHelloSwitch('Eman', 'Female') // Output => "Hello Miss Eman"
sayHelloSwitch('Sameh') // Output => "Hello Sameh"
