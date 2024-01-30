// 01 assignment => Create Articelts File

// 02 assignment
let data = new XMLHttpRequest();
data.open('get', './artickes.json');
data.send();
data.onreadystatechange = function () {
  if (data.readyState === 4 && data.status === 200) {
    console.log('Data Loaded');
    updateData(data.response);
  }
};

// 03 assignment
function updateData(data) {
  // Convert To JS Object
  let mainData = JSON.parse(data);
  mainData.forEach((obj) => {
    obj.category = 'All';
  });
  console.log(mainData);

  // Convert JSON Object
  let updatedData = JSON.stringify(mainData);
  console.log(updatedData);
  displayData(updatedData);
}

// 04 assignment
function displayData(updatedData) {
  // Convert To JS Object
  let dataJs = JSON.parse(updatedData);
  let ParentData = document.createElement('div');
  document.body.appendChild(ParentData);
  ParentData.id = 'data';

  // Cartona For HTML Element
  let domElement = ``;
  dataJs.forEach((ob) => {
    // Distruction
    let { author, section, content, category } = ob;
    domElement += ` 
   <div>
      <h2>${author}</h2>
      <p>${section}</p>
      <p>${content}</p>
      <p>Category: ${category}</p>
  </div>`;
  });
  // Add To Body
  ParentData.innerHTML = domElement;
}
