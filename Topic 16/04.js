let DivOne = document.querySelector('.one');
let DivTow = document.querySelector('.two');

// Store the old value of class to make swapping
let temp = DivOne.classList.value;

DivOne.classList.value = DivTow.classList.value;
DivTow.classList.value = temp;
DivOne.innerHTML += 2;
