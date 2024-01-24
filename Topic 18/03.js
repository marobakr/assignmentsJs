const el = document.createElement('div');
el.innerHTML = 10;
document.body.appendChild(el);

setInterval(function () {
  el.innerHTML -= 1;

  if (el.innerHTML <= 0) {
    return;
  }
}, 1000);
