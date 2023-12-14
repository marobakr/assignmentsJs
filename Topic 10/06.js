/* 
Output
"ELzERo"

*/

let start = 0;
let swappedName = 'elZerO';
var result = '';
for (i = start; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toUpperCase()) {
    result += swappedName[i].toLowerCase();
  }
  if (swappedName[i] === swappedName[i].toLowerCase()) {
    result += swappedName[i].toUpperCase();
  }
}
console.log(result);

// Output
('ELzERo');
