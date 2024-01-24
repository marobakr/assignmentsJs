const el = document.createElement('div');
el.innerHTML = 10;
document.body.appendChild(el);

let id = setInterval(function () {
  el.innerHTML -= 1;
  if (el.innerHTML == 5) {
    window.open(
      'https://elzero.org',
      '_blank',
      'top=0,left=1000,width=400,height=500'
    );
  }
  if (el.innerHTML <= 0) {
    clearInterval(id);
  }
}, 1000);
