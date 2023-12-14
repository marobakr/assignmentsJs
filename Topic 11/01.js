/* 
Output
 "1 => Sayed"
 "2 => Mahmoud"
*/
let friends = ['Ahmed', 'Sayed', 'Ali', 1, 2, 'Mahmoud', 'Amany'];
let index = 0;
let counter = 0;
A_Letter = friends[index][index];
while (counter < friends.length) {
  if (
    typeof friends[counter] === 'string' &&
    !friends[counter].startsWith(A_Letter)
  ) {
    console.log(`${++index} => ${friends[counter]}`);
    
  } else false;
  counter++;
}
