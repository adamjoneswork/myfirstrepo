// window.addEventListener('load', function() {
//     document.getElementById('loader').style.display = 'none';
// });

window.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
    }, 10000); // 10000 milliseconds = 10 seconds
});

document.addEventListener('contextmenu', function (event) {
    if (event.target.closest('#logo-svg')) {
      event.preventDefault();
    }
});