// меню бургер

const menuBurger = document.querySelector('.header_content_center_menu_burger');
const burgerList = document.querySelector('.header_content_center_menu_burger_list');
const burgerSub = document.querySelector('.header_content_center_menu_burger_sub > li > span');
const burgerSearch = document.querySelector('.header_content_right_search');
if (menuBurger) {
    menuBurger.addEventListener('click' , function (e) {
        burgerList.classList.add('_active');
        burgerSearch.classList.add('_active');
        document.body.classList.add('_lock');
    });
}

burgerSub.addEventListener('click' , function (e) {
    burgerList.classList.remove('_active');
    burgerSearch.classList.remove('_active');
    document.body.classList.remove('_lock');
});


const burgerMenuFirst = document.getElementById('burger_sub');
const menuFirst = burgerMenuFirst.addEventListener('click' ,function (el) {
    if (el.target.tagName != 'LI') return;
    el.target.classList.toggle('_opened');
})

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
    var mySwiper = new Swiper('.main_discount_container', {
        slidesPerView: 1,
        spaceBetween: 15,
        loop: true,
    });
}
else if (window.outerWidth > 421) {
    mainDiscountCont.classList.remove('swiper');
    mainDiscount.classList.remove('swiper-wrapper');
    mainDiscountImage1.classList.remove('swiper-slide');
    mainDiscountImage2.classList.remove('swiper-slide');
    mainDiscountImage3.classList.remove('swiper-slide');
    mainDiscountImage4.classList.remove('swiper-slide');
    // mainDiscountImage5.classList.remove('swiper-slide');
    mainDiscountImage6.classList.remove('swiper-slide');
    if (typeof mySwiper != 'undefined') {
        mySwiper.destroy();
        mySwiper = undefined;
    }
}

// slider Swiper2

const mainStock = document.querySelector('.main_stock');
const mainStockBlocks = document.querySelector('.main_stock_blocks');

new Swiper('.main_stock', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
            // slidesPerColumn: 3,
            // slidesPerGroup: 6,
            // slidesPerColumnFill: 'row',
            autoHeight: false,
            loop: true,
            grid: {
                rows:2,
                fill: "rows"
            }
        },
        720: {
            slidesPerView: 4,
            // slidesPerColumn: 3,
            // slidesPerGroup: 6,
            spaceBetween: 27,
            loop: true,
            // autoHeight: false,
            grid: {
                rows: 2,
                fill: "rows"
            }
        }
    }
});

// sleder3
const swiperNum3 = new Swiper('.main_sesonal' , {
    navigation: {
        nextEl: '.main_sesonal_arrowR',
        prevEl: '.main_sesonal_arrowL',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
            autoHeight: false,
            loop: true,
            grid: {
                rows: 2,
                fill: "rows"
            }
        },
        720: {
            slidesPerView: 4,
            spaceBetween: 27,
            loop: true,
            grid: {
                rows: 2,
                fill: "rows"
            }
        }
    }
});

// slider4

const swiperNum4 = new Swiper('.main_gift', {
    navigation: {
        nextEl: '.main_gift_arrowR',
        prevEl: '.main_gift_arrowL',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
            autoHeight: false,
            loop: true,
            grid: {
                rows: 2,
                fill: "rows"
            }
        },
        720: {
            slidesPerView: 4,
            spaceBetween: 27,
            loop: true,
            grid: {
                rows: 2,
                fill: "rows"
            }
        }
    }
});

// slider5

const mainForum = document.querySelector('.main_forum');
const mainForumBlocks = document.querySelector('.main_forum_blocks');
const mainForumBlocksCard = document.querySelectorAll('.main_forum_blocks_card');

if (window.outerWidth < 421) {
    mainForum.classList.add('swiper');
    mainForumBlocks.classList.add('swiper-wrapper');
    mainForumBlocksCard.forEach((el) => {
        el.classList.add('swiper-slide');
    });
    var mySwiper2 = new Swiper('.main_forum', {
        slidesPerView: 1,
        spaceBetween: 15,
        loop: true,
    });
}
else if (window.outerWidth > 421) {
    mainForum.classList.remove('swiper');
    mainForumBlocks.classList.remove('swiper-wrapper');
    mainForumBlocksCard.forEach((el) => {
        el.classList.remove('swiper-slide');
    });
    if (typeof mySwiper2 != 'undefined') {
        mySwiper2.destroy();
        mySwiper2 = undefined;
    }
}

// footer menu

let footerArrow = document.querySelectorAll('.footer_top_right_menu_arrow');
for (let i = 0; i < footerArrow.length; i++) {
    let footerMenu = footerArrow[i].parentElement;
    let footerMenu2 = footerMenu.parentElement;
    let thisArrow = footerArrow[i];
    console.log(footerMenu2);
    footerArrow[i].addEventListener('click' , function() {
        thisArrow.classList.toggle('active');
        footerMenu2.classList.toggle('open');
    });

};


