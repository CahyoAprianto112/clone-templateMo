window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    // Cek posisi scroll
    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
};

// Hamburger menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
const navItems = document.querySelectorAll('#nav-items');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Menutup hamburger di layar mana saja
document.addEventListener('click', function (event) {
    const isClickInside = navMenu.contains(event.target) || hamburger.contains(event.target);

    if (!isClickInside) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// Pastikan nav menu tetap tersembunyi pada layar md ke atas kecuali hamburger di klik
window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) {
        navMenu.classList.add('hidden');
        hamburger.classList.remove('hamburger-active');
    }
});
