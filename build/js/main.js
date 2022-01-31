document.addEventListener('DOMContentLoaded', function () {
  const reviewsSlider = new Swiper('.js-reviews__slider', {
   
    slidesPerView: 2,
    // centeredSlides: true,
    wrapperClass: 'js-wrapper',
    slideClass: 'slide-review',
    navigation: {
      prevEl: '.slider-reviews__prew',
      nextEl: '.slider-reviews__next',
    },

    breakpoints: {
      0: {
        spaceBetween: 20,
      },
      768: {
        spaceBetween: 45,
      }
    },


  });


  const openFilter = () => {
    const openFilters = document.querySelectorAll(`.js-filter-open`);
    openFilters.forEach(el => {
      el.addEventListener(`click`, (evt) => {
        evt.preventDefault();
        const btn = evt.target.closest(`.js-filter-open`);
        const list = btn.nextSibling.nextSibling;
        
        list.classList.toggle(`disable`)

      })
    })
  }

  openFilter();

});