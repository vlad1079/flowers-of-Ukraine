// меню бургер

const menuBurger = document.querySelector('.header_content_center_menu_burger');
const burgerList = document.querySelector('.header_content_center_menu_burger_list');
const burgerSub = document.querySelector('.header_content_center_menu_burger_sub span');
if (menuBurger) {
    menuBurger.addEventListener('click' , function (e) {
        burgerList.classList.add('_active');
    });
}

burgerSub.addEventListener('click' , function (e) {
    burgerList.classList.remove('_active');
});