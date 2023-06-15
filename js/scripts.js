// window.addEventListener('load', function() {
//     document.getElementById('loader').style.display = 'none';
// });

window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
        document.querySelector('body').style.visibility = 'visible';
    }, 5000);
});

document.addEventListener('contextmenu', function (event) {
    if (event.target.closest('#logo-svg')) {
      event.preventDefault();
    }
});