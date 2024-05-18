window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    // cek scroll position
    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
}

// hamburger menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
const navItems = document.querySelectorAll('#nav-items');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// menutup hamberger di layar mana saja
document.addEventListener('click', function (event) {
    const isClickInside = navMenu.contains(event.target) || hamburger.contains(event.target);

    if (!isClickInside) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});