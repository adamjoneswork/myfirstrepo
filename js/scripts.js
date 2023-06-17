/* 
© Adam Jones, 2023.
www.adamjones.work
*/

window.onload = function() {
    const loaderSVG = document.getElementById('load-img');
  
    let opacity = 0;
    const intervalId = setInterval(function() {
      opacity += 0.01;
      loaderSVG.style.opacity = opacity.toFixed(2);
  
      if (opacity >= 1) {
        clearInterval(intervalId);
        showPageContent();
      }
    }, 20);
  
    function showPageContent() {
      const body = document.body;
      body.style.opacity = '1';
      body.style.visibility = 'visible';
  
      const loader = document.getElementById('loader');
      loader.style.opacity = '0';
  
      setTimeout(function() {
        loader.style.display = 'none';
      }, 1000);
    }
  }
  
  document.addEventListener('contextmenu', function (event) {
    if (event.target.closest('#logo-svg')) {
      event.preventDefault();
    }
  });