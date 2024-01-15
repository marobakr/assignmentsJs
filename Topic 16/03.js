let input = document.querySelector('input');
let result = document.querySelector('.result');

input.addEventListener('input', function () {
  let values = this.value;
  let resDollar = values * 15.6;
  result.innerHTML = `{${values}} USD Dollar = {${resDollar.toFixed(
    2
  )}} Egyptian Pound`;
});
