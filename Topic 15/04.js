// The Object To Work With
let myFavGames = {
  'Trinity Universe': {
    publisher: 'NIS America',
    price: 40,
  },
  'Titan Quest': {
    publisher: 'THQ',
    bestThree: {
      one: 'Immortal Throne',
      two: 'Ragnarök',
      three: 'Atlantis',
    },
    price: 50,
  },
  YS: {
    publisher: 'Falcom',
    bestThree: {
      one: 'Oath in Felghana',
      two: 'Ark Of Napishtim',
      three: 'origin',
    },
    price: 40,
  },
};

// Get Property Name of myFavGames object
let objectLength = Object.keys(myFavGames);

for (let i = 0; i < objectLength.length; i++) {
  console.log(`The Game Name Is ${objectLength[i]}`);
  console.log(`The Publisher Is ${myFavGames[objectLength[i]].publisher}`);
  console.log(`The Price Is ${myFavGames[objectLength[i]].price}`);

  // Check If Nested Object Has Property (bestThree)
  if (myFavGames[objectLength[i]].bestThree) {
    /*
- ⭐⭐ this plus for me to get all PropertyName of best Three ⭐⭐
  
 --Start Here ⭐ 
*/
    // Get PropertyName of best Three
    childOfBestThreeLength = Object.keys(myFavGames[objectLength[i]].bestThree);

    for (j = 0; j < childOfBestThreeLength.length; j++) {
      let x = childOfBestThreeLength[j];
      console.log(myFavGames[objectLength[i]].bestThree[x]);
    }
    // End Here ⭐

    console.log('- Game Has Releases');
    console.log(`First => ${myFavGames[objectLength[i]].bestThree.one}`);
    console.log(`Second =>  ${myFavGames[objectLength[i]].bestThree.two}`);
    console.log(`Third =>  ${myFavGames[objectLength[i]].bestThree.three}`);
  }
  console.log('#'.repeat(20));
}

// Ouput

// "The Game Name Is Trinity Universe"
// "The Publisher Is NIS America"
// "The Price Is 40"
// "####################"
// "The Game Name Is Titan Quest"
// "The Publisher Is THQ"
// "The Price Is 50"
// "- Game Has Releases"
// "First => Immortal Throne"
// "Second => Ragnarök"
// "Third => Atlantis"
// "####################"
// "The Game Name Is YS"
// "The Publisher Is Falcom"
// "The Price Is 40"
// "- Game Has Releases"
// "First => Oath in Felghana"
// "Second => Ark Of Napishtim"
// "Third => origin"
// "####################"
