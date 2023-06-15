window.addEventListener('load', function() {
    document.getElementById('loader').style.display = 'none';
});

document.addEventListener('contextmenu', function (event) {
    if (event.target.closest('#logo-svg')) {
      event.preventDefault();
    }
  });