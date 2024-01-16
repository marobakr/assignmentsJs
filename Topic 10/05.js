/* 
Output
  "1 => Sayed"
  "2 => Eman"
  "3 => Mahmoud"
  "4 => Osama"
  "5 => Sameh"
*/

let friends = ['Ahmed', 'Sayed', 'Eman', 'Mahmoud', 'Ameer', 'Osama', 'Sameh'];
let letter = 'a';
for (i = letter.length; i < friends.length; i++) {
  if (friends[i].startsWith(letter.toUpperCase())) {
    friends.splice(friends[i], letter.length);
  }
  console.log(`${i} ${friends[i]} `);
}
