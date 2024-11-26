$(document).ready(function(){
    const swiper1 = new Swiper('.main_slide', {
        // Optional parameters
        direction: 'horizontal',
        watchOverflow: true,
        speed: 1300,
        loop: true,

        navigation: {
          nextEl: '.msc_next',
          prevEl: '.msc_prev',
        },

        a11y: {
            prevSlideMessage: '이전 슬라이드',
            nextSlideMessage: '다음 슬라이드',
        },

      });

      const swiper2= new Swiper('.main_support_slide', {
        // Optional parameters
        direction: 'horizontal',
        watchOverflow: true,
        speed: 1300,
        loop: true,
        // calculateHeight: true,

      });

      swiper1.controller.control = swiper2;
      swiper2.controller.control = swiper1;
});