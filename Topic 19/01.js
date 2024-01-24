// Create Selecte Font Size Box
function CreateFontSize() {
  const selectSize = document.getElementById('size');
  for (let i = 16; i <= 30; i++) {
    let option = document.createElement('option');
    let optionCaption = document.createTextNode(i);
    option.append(optionCaption);
    selectSize.appendChild(option);
    // Add Class defultFor First Option
    document.querySelector('#size option').classList.add('defult');
  }
  // defultColor = document.querySelector('#size option');
  let allultDefult = document.querySelectorAll('.defult');
  // Distrauct Item From An Array
  let [family, size, color] = allultDefult;
  // Pass Defult Value Style To Qury
  getQery(size, color, family);
}
CreateFontSize();

// Get Value From Option
function getQery(colorParam, sizeParam, fontParam) {
  let fFamily = document.getElementById('fonts');
  let colors = document.getElementById('colors');
  let fsize = document.getElementById('size');
  let color = colorParam.value;
  let fontSize = sizeParam.value;
  let fontFamily = fontParam.value;

  if (!localStorage.fonts) {
    // Pass Defult Value To LocalStorge
    addLocalStorge(color, fontSize, fontFamily);
  }
  // Get Font Family
  fFamily.addEventListener('click', function (e) {
    // Update Fonst
    // Set Item To LocalStorge
    fontParam = e.target.value;
    // Set Item To LocalStorge
    localStorage.setItem('fonts', `${fontParam}`);
    // Update Value From LocalStorge
    excutionToBody();
  });
  // Get Color
  colors.addEventListener('click', function (e) {
    // Update Color
    colorParam = e.target.value;
    // Set Item To LocalStorge
    localStorage.setItem('colors', `${colorParam}`);
    // Update Value From LocalStorge
    excutionToBody();
  });
  // Get Font Size
  fsize.addEventListener('click', function (e) {
    // Update Size
    sizeParam = e.target.value;
    // Set Item To LocalStorge
    localStorage.setItem('size', `${sizeParam}`);
    // Update Value From LocalStorge
    excutionToBody();
  });
}
function excutionToBody() {
  let { colors, size, fonts } = localStorage;
  document.body.style.backgroundColor = colors;
  document.body.style.fontSize = `${size}px`;
  document.body.style.fontFamily = fonts;

  // Update Index selecte Option
  document.getElementById('colors').selectedIndex =
    GetIndexFromOption('colors');
  document.getElementById('fonts').selectedIndex = GetIndexFromOption('fonts');
  document.getElementById('size').selectedIndex = GetIndexFromOption('size');
}

excutionToBody();

// Add Defult Valur To LocalStorge
function addLocalStorge(color, fontSize, FontFamily) {
  localStorage.setItem('fonts', `${FontFamily}`);
  localStorage.setItem('size', `${fontSize}`);
  localStorage.setItem('colors', `${color}`);
}

// get Index From Option To Upadate Selecte
function GetIndexFromOption(id) {
  let options = document.getElementById(`${id}`).options;
  for (var i = 0; i < options.length; i++) {
    if (localStorage.getItem(id) === options[i].value) {
      return i;
    }
  }
}
