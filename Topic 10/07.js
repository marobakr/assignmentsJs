/* 
Output
 2
 3
 4
*/

let start = 0
let mix = [1, 2, 3, 'A', 'B', 'C', 4]

for (var i = mix[start] ; i<mix.length ;i++) {
 if (typeof mix[i] === "string") {
  continue
 }
 console.log(mix[i])
}

