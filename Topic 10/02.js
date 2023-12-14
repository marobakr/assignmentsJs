/* 
Output
 10
 09
 08
 07
 06
 05
 04
 03
*/

let start = 10;
let end = 0;
let stop = 3;
for (var i = start; i > end; i--) {
  if (i === start) {
    console.log(i);
  } else console.log(`${end}${i}`);
  // Print number 3 before checked to print number 3
  if (i === stop) {
    break;
  }
}
