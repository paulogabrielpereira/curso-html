window.onload = function() {
    var menuOptions = document.getElementsByClassName('options');
    var menu = document.getElementsByClassName('pages');
    var menuOpen = document.getElementsByClassName('open');


    menuOpen[0].addEventListener('click', function() {
        menuOptions[0].classList.toggle('exp');
    });
};