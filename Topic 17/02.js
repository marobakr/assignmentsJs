const addClass = document.querySelector('.classes-to-add');
const removeClass = document.querySelector('.classes-to-remove');
const containerClass = document.querySelector('h5');
const display = document.getElementById('result');

// Init Logic Add Class
let initClass = ['current', 'elemmnts'];
let finalResult = [];

// ADD And Display Class
addClass.addEventListener('blur', function () {
  if (this.value != '') {
    let text = this.value.toLowerCase().trim().split(' ').sort();
    // Remove Any White Spaces
    finalResult = text.filter((isWhitSpace) => {
      return isWhitSpace != '';
    });
    // Add Class to Items
    finalResult.map((char) => {
      containerClass.classList.add(char);
    });
    displayClass(finalResult);
  }
  this.value = '';
});

function displayClass(finalResult) {
  finalResult.forEach((item) => {
    // Add Class To Element
    containerClass.classList.add(item);
    // Create Span With The Same Val Of Class
    display.innerHTML += `<span>${item}</span>`;
  });
}
// Call Fun With Init Value
displayClass(initClass);

// Deleted class

removeClass.addEventListener('blur', function () {
  // Get Value
  let val = this.value;
  // Convert To An Array
  let searchVal = val.split(' ');
  // Search For The Removed Classes In Container Class List
  let arrClass = containerClass.classList;
  // Remove Class
  searchVal.filter((item) => {
    return arrClass.contains(item) ? containerClass.classList.remove(item) : '';
  });
  let spans = Array.from(document.querySelectorAll('span'));
  console.log(spans);
  console.log();
  for (let i = 0; i < searchVal.length; i++) {
    for (let k = 0; k < spans; k++) {
      console.log(spans[k]);
    }
  }
  // Remove span with insted Loop
  spans.forEach((span) => {
    searchVal.filter((val) => {
      return span.innerHTML === val ? span.remove() : '';
    });
  });
  removeClass.value = '';
});

/* another Method to Remove */

// for (let i = 0; i < searchVal.length; i++) {
//   for (let k = 0; k < spans.length; k++) {
//     if (spans[k].innerHTML === searchVal[i]) {
//       spans[k].remove();
//     }
//   }
// }
