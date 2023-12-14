function ageInTime(theAge) {
  if (theAge >= 100 || theAge <= 10) {
    console.log('Age Out Of Range')
  } else {
    var year = theAge
    var months = year * 12
    var weeks = months * 4
    var days = weeks * 7
    var hours = days * 24
    var minutes = hours * 60
    var seconds = minutes * 60
    console.log(`Your Age Is ${year} Years`)
    console.log(`Your Age Is ${months} Months`)
    console.log(`Your Age Is ${weeks} Weeks`)
    console.log(`Your Age Is ${days} Days`)
    console.log(`Your Age Is ${hours} Hours`)
    console.log(`Your Age Is ${minutes} Minutes`)
    console.log(`Your Age Is ${seconds} Seconds`)
  }
}

// Needed Output
ageInTime(10) // Age Out Of Range
ageInTime(38) // Months Example => 456 Months
