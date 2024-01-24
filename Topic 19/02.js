const userValue = document.getElementById('username');
const fNameValue = document.getElementById('fname');
const lNameValue = document.getElementById('lname');
const select = document.getElementById('option');
// Get Value From Input
function storeDataInput() {
  let userName = '';
  let fName = '';
  let lName = '';
  let indexOption = 0;
  // UserName
  userValue.addEventListener('input', (e) => {
    userName = e.target.value;
    window.sessionStorage.setItem('username', `${userName}`);
  });

  // FirstName
  fNameValue.addEventListener('input', (e) => {
    fName = e.target.value;
    window.sessionStorage.setItem('firstname', `${fName}`);
  });

  // LastName
  lNameValue.addEventListener('input', (e) => {
    lName = e.target.value;
    window.sessionStorage.setItem('lastname', `${lName}`);
  });

  // Option Selection
  select.addEventListener('click', (e) => {
    indexOption = select.selectedIndex;
    window.sessionStorage.setItem('select', `${indexOption}`);
  });
}
storeDataInput();

/* Validaion Form */
/*//! If SessionStorage Have Any data To Display it */
if (
  sessionStorage.username ||
  sessionStorage.firstname ||
  sessionStorage.lastname ||
  sessionStorage.select
) {
  let isUser =
    sessionStorage.username != undefined ? sessionStorage.username : '';

  let isFirstName =
    sessionStorage.firstname != undefined ? sessionStorage.firstname : '';

  let isLastName =
    sessionStorage.lastname != undefined ? sessionStorage.lastname : '';

  let isOption =
    sessionStorage.select != undefined ? sessionStorage.select : '';

  displayFromSessionStorge(isUser, isFirstName, isLastName, isOption);
}

// Get Data From SessionStorge And Display It
function displayFromSessionStorge(user, first, last, index) {
  userValue.value = user;
  fNameValue.value = first;
  lNameValue.value = last;
  select.selectedIndex = index;
}
