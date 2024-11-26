$(document).ready(function(){
    const swiper1 = new Swiper('.main_slide', {
        // Optional parameters
        direction: 'horizontal',
        watchOverflow: true,
        speed: 900,
        loop: true,

        navigation: {
          nextEl: '.msc_next',
          prevEl: '.msc_prev',
        },

        a11y: {
            prevSlideMessage: '이전 슬라이드',
            nextSlideMessage: '다음 슬라이드',
        },

        breakpoints: {
            768: {
                speed: 1300,
            },
        },

      });

      const swiper2= new Swiper('.main_support_slide', {
        // Optional parameters
        direction: 'horizontal',
        watchOverflow: true,
        speed: 1300,
        loop: true,
        // calculateHeight: true,
        touchRatio: 0,

      });

      swiper1.controller.control = swiper2;
      swiper2.controller.control = swiper1;

      $('.il_floor1 > li > a').on('click', function(e){
        e.preventDefault();
        $(this).parent().addClass('active');
        $('body').addClass('fixed nav_active modal_active');
      });

      $(document).on('mouseup', function(e){
        if($('.career_inner').has(e.target).length === 0 && $('body').hasClass('modal_active') == true){
            $('.il_floor1 > li').removeClass('active');
            $('body').removeClass('fixed nav_active modal_active');
        }
      });   

      $(window).on('scroll', function(){
        if($(window).scrollTop() > 80){
            $('.go_top').addClass('active');
        }
        else{
            $('.go_top').removeClass('active');
        }
      });

      $(".career_list ul").mCustomScrollbar(
        {
            theme:"dark",
            scrollInertia: 300,
        }
      );

      $('.mobile_nav_btn button').on('click', function(){
        $('.mobile_nav_box').toggleClass('active');
      });

      $('.go_top button').on('click', function(){
        $('.header_inner').focus();
        $('html, body').animate({
            scrollTop: 0,
        }, 300);
      });



      $(window).on('scroll', function(){
        $('section').each(function(){
            if($(this).offset().top < $(window).scrollTop() + 1){
                var idx = $(this).index();
                $('#nav > ul > li').eq(idx).addClass('active').siblings().removeClass('active');
                $('#mobile_nav > ul > li').eq(idx).addClass('active').siblings().removeClass('active');
            }
        });
      });
});