// put this code in HTML into script tag
window.onload = function () {
  let allLinks = document.querySelectorAll('a');
  for (let link of allLinks) {
    if (link.className != 'open' || link.innerHTML != 'Elzero') {
      console.log(link);
      link.addEventListener('click', (e) => {
        e.preventDefault();
      });
    }
  }
};
