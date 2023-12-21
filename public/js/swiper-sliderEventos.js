var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
        481: {
          slidesPerView: 1,
          spaceBetween: 30,
        },

        600: {
          slidesPerView: 2,
          spaceBetween: 5,
        },

        769: {
          slidesPerView: 3,
          spaceBetween: 5,
        },

        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },

    });