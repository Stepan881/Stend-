document.addEventListener('DOMContentLoaded', function() {

    const popular = new Swiper('.popular__container', {
        slidesPerView: 4,
        direction: 'horizontal',
        slideClass: 'popular__slide ',
        loop: true,
        spaceBetween: 40,
        wrapperClass: 'popular__swiper-wrapper',
        navigation: {
            nextEl: '.popular-button-next',
            prevEl: '.popular-button-prev',
        },

        breakpoints: {
            // when window width is >= 320px
            768: {
                slidesPerView: 4,

            },

        },

    });


});


// слайдер портфоло


document.addEventListener('DOMContentLoaded', function() {

    const portfolio = new Swiper('.portfolio__container', {
        slidesPerView: 1,
        direction: 'horizontal',
        slideClass: 'portfolio__slide',
        loop: true,
        wrapperClass: 'portfolio__swiper-wrapper',
        navigation: {
            nextEl: '.portfolio-button-next',
            prevEl: '.portfolio-button-prev',
        },



    });


});



// слайдер отзывы


document.addEventListener('DOMContentLoaded', function() {

    const feedBack = new Swiper('.letter__swiper-container', {
        slidesPerView: 2,
        direction: 'horizontal',
        slideClass: 'letter__slide',

        loop: true,
        wrapperClass: 'letter__wrapper-slider',
        navigation: {
            nextEl: '.letter-button-next',
            prevEl: '.letter-button-prev',
        },



    });


});


// слайдер фото


document.addEventListener('DOMContentLoaded', function() {

    const photo = new Swiper('.photo__swiper', {
        slidesPerView: 2,
        direction: 'horizontal',
        slideClass: 'photo__slide',
        spaceBetween: 50,


        loop: true,
        wrapperClass: 'photo__wrapper-swiper',
        navigation: {
            nextEl: '.photo-button-next',
            prevEl: '.photo-button-prev',
        },



    });


});


// Сток слайдер 


document.addEventListener('DOMContentLoaded', function() {

    const stocMarket = new Swiper('.stock__swiper-slider', {
        slidesPerView: 3,
        direction: 'horizontal',
        slideClass: 'stock__slider',
        spaceBetween: 42,


        loop: true,
        wrapperClass: 'stock__swiper-wrapper',
        navigation: {
            nextEl: '.stock-button-next',
            prevEl: '.stock-button-prev',
        },



    });


});



// Продуткы слайдер 


document.addEventListener('DOMContentLoaded', function() {

    const productMarket = new Swiper('.product__swiper', {
        slidesPerView: 4,
        direction: 'horizontal',
        slideClass: 'product__slide',
        spaceBetween: 14,
        loop: true,
        wrapperClass: 'product__wrapper-swiper',
        navigation: {
            nextEl: '.product-button-next',
            prevEl: '.product-button-prev',
        },



    });


});



// табуляция в вопросах


function faq(parent, i = 0) {
    try {
        let p = parent
        let t = p.querySelectorAll('.catalog-item-js')
        let b = p.querySelectorAll('.catalog-display-js')

        function tabActive(index) {
            t.forEach(item => {
                item.classList.remove('active')
            });
            t[index].classList.add('active')
            b.forEach(item => {
                item.classList.remove('active-block')
            });
            b[index].classList.add('active-block')
        }



        t.forEach((element, index) => {
            element.addEventListener('click', function(e) {
                e.preventDefault()
                tabActive(index)
            })
        });
    } catch {
        console.log('tabs error')
    }
}

if (document.querySelector('.catalog__left')) {
    let myTabs = document.querySelectorAll('.catalog__left')
    myTabs.forEach(element => {
        faq(element)
    });
}







// табуляция спрятанных фильтров
