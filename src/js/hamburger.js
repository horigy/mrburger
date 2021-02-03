const burger = document.querySelector('.hamburger-menu-link');
const fixedMenu = document.querySelector('#hamburger-menu');
const close = document.querySelector ('.hamburger-menu__close')

burger.addEventListener('click', function (e) {
    e.preventDefault();
    fixedMenu.classList.add('visible');
})

close.addEventListener('click', function (e) {
    e.preventDefault();
    fixedMenu.classList.remove('visible');
})