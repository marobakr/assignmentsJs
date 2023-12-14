let needle = 'JS';
let haystack = ['PHP', 'JS', 'Python'];

// Solution 1
if (haystack.includes(needle)) {
  console.log('Found');
}
// Solution 2
if (haystack[1] === needle) {
  console.log('Found');
}
// Solution 3
if (
  haystack
    .slice(haystack.indexOf('JS'), haystack.indexOf('Python'))
    .toString() === needle
) {
  console.log('Found');
}

