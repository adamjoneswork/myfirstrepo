// window.addEventListener('load', function() {
//     document.getElementById('loader').style.display = 'none';
// });

window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
    }, 5000);  // Delay hiding the loader for 5000ms (or 5 seconds)
});

document.addEventListener('contextmenu', function (event) {
    if (event.target.closest('#logo-svg')) {
      event.preventDefault();
    }
});