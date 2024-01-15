/* 
Assignments 01
 - update src and alt atrr for all images
 */

let images = document.querySelectorAll('img');
for (i = 0; i < images.length; i++) {
  // Solution 1
  var newSrc = 'https://elzero.org/wp-content/themes/elzero/imgs/logo.png';
  images[i].src = newSrc;
  images[i].alt = 'Elzero Logo';
  // Solution 2
  images[i].setAttribute('src', newSrc);
  images[i].setAttribute('alt', 'newAlt');
}

/* 
Assignments 02
 - created this element for 10
 */

let iteration = document.querySelector('div');
for (i = 0; i < 10; i++) {
  let el = iteration.cloneNode(true);
  el.innerHTML = `iam ${i + 1} div`;
  document.body.appendChild(el);
}
