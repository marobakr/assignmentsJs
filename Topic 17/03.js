// Remove P
document.querySelector('p').remove();
let centerElement = document.querySelector('.our-element');

const arr = ['start', 'end'];

arr.forEach((elment, index) => {
  // Create First Element
  let createdElement = document.createElement('div');
  // Add Class
  elment.classList = elment;
  // Add Attribute Title
  elment.title = `${elment} Element`;
  // Add Custom Attribute
  createdElement.setAttribute('data-value', `${elment}`);
  // Append to the parent
  let text = document.createTextNode(`${elment}`);
  createdElement.appendChild(text);
  if (index === 1) {
    centerElement.append(createdElement);
  }
  if (index === 0) {
    centerElement.prepend(createdElement);
  }
});
