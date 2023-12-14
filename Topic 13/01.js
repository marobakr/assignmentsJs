function getDetails(zNameArrg, zAgeArrg, zCountry) {
  function namePattern(zName) {
    return `${zName.split(' ', 1)} ${zName.split(' ')[1][0].toUpperCase()}. `;
  }

  function ageWithMessage(zAge) {
    return `Your Age Is ${parseInt(zAge)}`;
  }
  function countryTwoLetters(zCountry) {
    return zCountry.slice(0, 2).toUpperCase();
  }
  function fullDetails() {
    return `Hello ${namePattern(zNameArrg)},${ageWithMessage(
      zAgeArrg
    )} ,${countryTwoLetters(zCountry)}`;
  }

  return fullDetails(); // Do Not Edit This
}

console.log(getDetails('Osama Mohamed', '38 Is My Age', 'Egypt'));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails('Ahmed ali', '32 Is The Age', 'Syria'));
// Hello Ahmed A., Your Age Is 32, You Live In SY
