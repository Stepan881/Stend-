document.addEventListener('DOMContentLoaded', function () {
  const reviewsSlider = new Swiper('.js-reviews__slider', {
    slidesPerView: 2,
    // centeredSlides: true,
    wrapperClass: 'js-wrapper',
    slideClass: 'slide-review',

    pagination: {
      el: ".pagination__fraction",
      type: "fraction",
      renderCustom: function (swiper, current, total) {

        return `<span>${current}</span><span>/</span><span>${total}</span>`;

      }
    },
    breakpoints: {
      0: {
        spaceBetween: 27,
        navigation: {
          prevEl: '.pagination__prew',
          nextEl: '.pagination__next',
        },
      },
      768: {
        spaceBetween: 45,
        navigation: {
          prevEl: '.slider-reviews__prew',
          nextEl: '.slider-reviews__next',
        },
      }
    },


  });

  const sliderReviewsBig = new Swiper('.js-slider-reviews-big', {
    slidesPerView: 1,
    centeredSlides: true,
    wrapperClass: 'page-review__block',
    slideClass: 'slide-review',
    slideActiveClass: 'active',

    pagination: {
      el: ".pagination__fraction",
      type: "fraction",
      renderCustom: function (swiper, current, total) {

        return `<span>${current}</span><span>/</span><span>${total}</span>`;

      }
    },
    navigation: {
      prevEl: '.pagination__prew',
      nextEl: '.pagination__next',
    },


  });

  const sliderBoolets = new Swiper('.js-slider-boolets', {
    freeMode: true,
    watchSlidesProgress: true,
    centeredSlides: true,
    slidesPerView: 5,
    loop: true,
    direction: "vertical",
    wrapperClass: 'js-slider-wrapper',
    slideClass: 'js-slide',

  });

  const sliderHistory = new Swiper('.js-slider-history', {
    loop: true,
    wrapperClass: 'js-wrapper',
    slideClass: 'js-slide',
    navigation: {
      prevEl: '.js-prev',
      nextEl: '.js-next',
    },
    thumbs: {
      swiper: sliderBoolets,
    },

  });

  const sliderPortfolio = new Swiper('.js-slider-portfolio', {
    grid: {
      rows: 2,
    },

    slidesPerView: 1,
    wrapperClass: 'js-wrapper',
    slideClass: 'js-slide',
    navigation: {
      prevEl: '.pagination__prew',
      nextEl: '.pagination__next',
    },
    pagination: {
      el: ".pagination__fraction",
      type: "fraction",
      renderCustom: function (swiper, current, total) {

        return `<span>${current}</span><span>/</span><span>${total}</span>`;

      }
    },
    breakpoints: {
      0: {
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 131,
        grid: {
          rows: 1,
        },
        navigation: {
          prevEl: '.js-prev',
          nextEl: '.js-next',
        },
      }
    },
  });

  const sliderCommand = new Swiper('.js-slider-command', {
    loop: true,
    wrapperClass: 'js-wrapper',
    slideClass: 'js-slide',
    centeredSlides: true,
    slideActiveClass: 'active',
    pagination: {
      el: ".pagination__fraction",
      type: "fraction",
      renderCustom: function (swiper, current, total) {

        return `<span>${current}</span><span>/</span><span>${total}</span>`;

      }
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        initialSlide: 1,
        navigation: {
          prevEl: '.pagination__prew',
          nextEl: '.pagination__next',
        },
      },

      768: {
        initialSlide: 2,
        slidesPerView: 3,
        navigation: {
          prevEl: '.js-prev',
          nextEl: '.js-next',
        },
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

  const articleSlider = new Swiper('.js-article-slider', {
    slidesPerView: "auto",

    wrapperClass: 'js-wrapper',
    slideClass: 'js-slide',
    slideActiveClass: 'active',

    pagination: {
      el: ".pagination__fraction",
      type: "fraction",
      renderCustom: function (swiper, current, total) {
        return `<span>${current}</span><span>/</span><span>${total}</span>`;
      }
    },
    breakpoints: {
      0: {
        centeredSlides: true,
        loop: true,
        spaceBetween: 30,
        navigation: {
          prevEl: '.pagination__prew',
          nextEl: '.pagination__next',
        },
      },
      768: {
        spaceBetween: 63,
        slidesPerView: 4,
        centeredSlides: false,
        navigation: {
          prevEl: '.article-slider__prev',
          nextEl: '.article-slider__next',
        },
      }
    },
  });
  const articleOtherSlider = new Swiper('.js-article-other-slider', {
    slidesPerView: "auto",
    loop: true,
    wrapperClass: 'js-wrapper',
    slideClass: 'banquet',
    slideActiveClass: 'active',

    pagination: {
      el: ".pagination__fraction",
      type: "fraction",
      renderCustom: function (swiper, current, total) {
        return `<span>${current}</span><span>/</span><span>${total}</span>`;
      }
    },
    breakpoints: {
      0: {
        slidesPerView: 2,
        loop: true,
        spaceBetween: 30,
        // grid: {
        //   rows: 2,
        // },
        navigation: {
          prevEl: '.pagination__prew',
          nextEl: '.pagination__next',
        },
      },
      768: {
        spaceBetween: 5,
        slidesPerView: 4,
        centeredSlides: false,
        navigation: {
          prevEl: '.article-other__prev',
          nextEl: '.article-other__next',
        },
      }
    },
  });


});