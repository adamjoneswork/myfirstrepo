// window.addEventListener('load', function() {
//     document.getElementById('loader').style.display = 'none';
// });

window.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const loaderSVG = document.getElementById('load-img');
        loaderSVG.style.opacity = '1';
    }, 1000);

    setTimeout(function() {
        const loader = document.getElementById('loader');
        loader.style.display = 'none';
        document.body.style.opacity = '1';
    }, 4000);
});

document.addEventListener('contextmenu', function (event) {
    if (event.target.closest('#logo-svg')) {
      event.preventDefault();
    }
});