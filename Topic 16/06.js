let numCreate = document.querySelector('.input');
let textNode = document.querySelector('[type="text"]');
let typeOption = document.querySelector('select');
let Form = document.querySelector('form');
let submitBtn = document.querySelector('[type="submit"] ');
let results = document.querySelector('.results');
let arr = [];
/* Start Style  */
Form.style.cssText = `
 width:50%; 
 margin:auto;
 margin-top:50px;
 display:flex;
 flex-direction: column;
 gap:20px
`;
numCreate.style.cssText = `
padding : 10px;
`;
textNode.style.cssText = `
padding : 10px;
`;
submitBtn.style.cssText = `
padding: 10px;
background-color: rgb(255, 152, 0);
border: none;
color: #fff;
cursor:pointer
`;
results.style.cssText = `
display: flex;
justify-content: space-between;
 align-items: center;
text-align: center;
gap: 15px
flex-wrap: wrap;

`;

function addStyle(element) {
  element.style.cssText = `
       background-color: orange;
        color: white;
        padding: 5px 25px;
        width:25%;
        margin:10px 0;
     `;
}
function add() {
  let item = {
    number: numCreate.value,
    value: textNode.value,
    type: typeOption.value,
  };
  arr.push(item);
  // clear Inputs
  clear();
}

function clear() {
  numCreate.value = '';
  textNode.value = '';
}
function displayAndCreate() {
  // whay i clear this array
  arr = [];
  add();
  // Clear result
  results.innerHTML = '';
  for (i = 0; i < +arr[0].number; i++) {
    let text = document.createTextNode(`${arr[0].value} ${typeOption.value} `);
    let element = document.createElement('div');
    // Add some attr as elemnts
    element.className = 'box';
    element.title = 'Element';
    element.id = `id-${i + 1}`;
    // Append text to elemnts
    element.appendChild(text);
    // Add some Style
    addStyle(element);
    results.appendChild(element);
  }
  
}

submitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  displayAndCreate();
});
