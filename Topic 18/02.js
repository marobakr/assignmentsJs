function createPopup() {
  // Style Parent
  const styles = `
    background-color: #787878;
    border: 1px solid #181818;
    text-align: center;
    width: 50%;
    margin: 50px auto;
    position: relative;
  `;

  const parent = document.createElement('div');
  parent.style.cssText = styles;
  // Call Function Create Elements
  const h2 = createElementWithText('h2', 'Welcome');
  const p = createElementWithText('p', 'Welcome to Elzero Web School');
  const close = createCloseButton();
  // APPend To Body
  parent.append(h2, p, close);
  document.body.appendChild(parent);
  // Remove Popup
  close.addEventListener('click', () => parent.remove());
}

// Create Elements
function createElementWithText(tag, text) {
  const element = document.createElement(tag);
  element.appendChild(document.createTextNode(text));
  return element;
}
// Create Close Btn
function createCloseButton() {
  const close = createElementWithText('div', 'x');
  close.style.cssText = `
    position: absolute;
    top: 0;
    right: 0;
    background-color: red;
    color: #fff;
    padding: 10px;
    margin: 0;
    border-radius: 50%;
    transform: translateY(-50%);
  `;
  return close;
}
// Set Time To Call Function
setTimeout(createPopup, 5000);
