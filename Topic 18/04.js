const el = document.createElement('div');
el.innerHTML = 10;
document.body.appendChild(el);

setInterval(function () {
   el.innerHTML -= 1;
  if (el.innerHTML <= 5) {
    window.location.href = 'https://elzero.org';
    return
  }

}, 1000);
