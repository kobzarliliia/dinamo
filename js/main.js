const btnMenu = document.querySelector('.header__btn-menu');
const menu = document.querySelector('.header__nav');

btnMenu.addEventListener('click', function() {
    btnMenu.classList.toggle('header__btn-menu--active');
    menu.classList.toggle('header__nav--open');
});

const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 5,
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const allBtnMenu = document.querySelectorAll('.menu__btn-modal');
const menuModal = document.querySelector('.menu-modal');
const btnClose = document.querySelector('.menu-modal__close');

btnClose.addEventListener('click', function() {
    menuModal.classList.remove('menu-modal--open');
});

allBtnMenu.forEach(el => {
    el.addEventListener('click', function(e) {
        e.preventDefault();
        menuModal.classList.add('menu-modal--open');
    });
});
