// меню бургер

const menuBurger = document.querySelector('.header_content_center_menu_burger');
const burgerList = document.querySelector('.header_content_center_menu_burger_list');
const burgerSub = document.querySelector('.header_content_center_menu_burger_sub span');
if (menuBurger) {
    menuBurger.addEventListener('click' , function (e) {
        burgerList.classList.add('_active');
        document.body.classList.add('_lock');
    });
}

burgerSub.addEventListener('click' , function (e) {
    burgerList.classList.remove('_active');
    document.body.classList.remove('_lock');
});

// slider Swiper


const mainDiscountCont = document.querySelector('.main_discount_container');
const mainDiscount = document.querySelector('.main_discount');
const mainDiscountImage1 = document.querySelector('.main_discount1');
const mainDiscountImage2 = document.querySelector('.main_discount2');
const mainDiscountImage3 = document.querySelector('.main_discount3');
const mainDiscountImage4 = document.querySelector('.main_discount4');
const mainDiscountImage5 = document.querySelector('.main_discount5');
const mainDiscountImage6 = document.querySelector('.main_discount6');


if (window.outerWidth < 421) {
    mainDiscountCont.classList.add('swiper');
    mainDiscount.classList.add('swiper-wrapper');
    mainDiscountImage1.classList.add('swiper-slide');
    mainDiscountImage2.classList.add('swiper-slide');
    mainDiscountImage3.classList.add('swiper-slide');
    mainDiscountImage4.classList.add('swiper-slide');
    // mainDiscountImage5.classList.add('swiper-slide');
    mainDiscountImage6.classList.add('swiper-slide');
}
else if (window.outerWidth > 421) {
    mainDiscountCont.classList.remove('swiper');
    mainDiscountCont.classList.remove('swiper-wrapper');
    mainDiscountImage1.classList.remove('swiper-slide');
    mainDiscountImage2.classList.remove('swiper-slide');
    mainDiscountImage3.classList.remove('swiper-slide');
    mainDiscountImage4.classList.remove('swiper-slide');
    // mainDiscountImage5.classList.remove('swiper-slide');
    mainDiscountImage6.classList.remove('swiper-slide');
}

new Swiper('.main_discount_container');