$(document).ready(function(){

  AOS.init();
  
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

      const swiper2 = new Swiper('.main_support_slide', {
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
        $('body').addClass('nav_active modal_active');
        $('html').css('overflow', 'hidden');
      });

      $(document).on('mouseup', function(e){
        if($('.modal').has(e.target).length === 0 && $('body').hasClass('modal_active') == true){
            $('.il_floor1 > li').removeClass('active');
            $('.ccl_floor1 > li').removeClass('active');
            $('html').css('overflow', 'visible');
            $('body').removeClass('nav_active modal_active');
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
            setHeight: '100%',
        }
      );

      $('.mobile_nav_btn button').on('click', function(){
        $('.mobile_nav_box').toggleClass('active');
        if($(this).parent().parent().hasClass('active')){
          $(this).children('.hidden_text').text('전체메뉴 닫기');
        }
        else{
          $(this).children('.hidden_text').text('전체메뉴 열기');
        }
      });

      $('.go_top button').on('click', function(){
        $('.header_inner').focus();
        $('html, body').animate({
            scrollTop: 0,
        }, 300);
      });

      $('.career_list_close button').on('click', function(){
        $('html').css('overflow', 'visible');
        $('body').removeClass('nav_active modal_active');
        $(this).closest('li').removeClass('active');
      }); 

      $('.career_list_close button').on('blur', function(){
        if($(this).closest('li').hasClass('active')){
          $(this).focus();
        }
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

      $('.cc_detail_img.type1 a picture').on('scroll', function(){
        if($(this).scrollTop() > 0){
          $(this).closest('.cc_detail_img').addClass('active');
        }
        else{
          $(this).closest('.cc_detail_img').removeClass('active');
        }
      });

      $('.ccl_floor1 > li > a:not(.normal_link)').on('click', function(e){
        e.preventDefault();
        $('body').addClass('modal_active');
        $('html').css('overflow', 'hidden');
        $(this).parent('li').addClass('active');
        // $('.cdc_inner').each(function(){
        //   if($(this).children().find('.cdc_floor2').height() > 150){
        //     $(this).addClass('more');
        //   }
        // });
        $('.cdc_overlay').each(function(){
          var tg = $(this);
          var height = tg.siblings('.cc_desc_card').children('li:last-child').height();
          tg.css({
            height : height,
          });
          $(window).on('resize', function(){
            var height = tg.siblings('.cc_desc_card').children('li:last-child').height();
            tg.css({
              height : height,
            });
          });
        });
      });

      $('.cc_detail_img a').each(function(e){
        var tg = $(this);
        tg.on('click', function(e){
          if($(window).width() > 1300){
            tg.unbind(e);
          }
          
          if($(window).width() <= 1300){
            e.preventDefault();
          }
        });

      });


      // $('.cdc_inner').each(function(){
      //   $(this).children('.cdc_list').css({
      //     'max-height': $('.cdc_inner').height() - 50,
      //   });
      //   $(window).on('resize', function(){
      //     $('.cdc_list').css({
      //       'max-height': $('.cdc_inner').height() - 50,
      //     });
      //   });
      //   $(this).on('mouseenter focus', function(){
      //     var cdcHeight = $(this).children().find('.cdc_floor2').height();
      //     console.log(cdcHeight);
      //     $(this).children('.cdc_list').animate({
      //       'max-height': cdcHeight,
      //     }, 300);
      //   });
      //   $(this).on('mouseleave blur', function(){
      //     $(this).children('.cdc_list').animate({
      //       'max-height': $('.cdc_inner').height() - 50,
      //     }, 200);
      //   });
      // });

      $('.cc_detail_close').on('click', function(){
        $('body').removeClass('nav_active modal_active');
        $('html').css('overflow', 'visible');
        $(this).closest('li').removeClass('active');
      }); 

      $(window).on('scroll', function(){
        if($(window).scrollTop() > 0){
          $('body').addClass('overZero');
        }
        else{
          $('body').removeClass('overZero');
        }
      });

      $('#mobile_nav ul li:last-child a').on('blur', function(e){
        if($('.mobile_nav_box').hasClass('active')){
          $('.mobile_nav_btn button').focus();
        }
      });

      $('.gallery_open button').on('click', function(){
        $('.gallery_container').addClass('wide');
        $('.cc_detail_close').hide();
      });


      $('.gallery_close button').on('click', function(){
        $('.gallery_container').removeClass('wide');
        $('.cc_detail_close').show();
      });

      $(document).on('mouseup', function(e){
        if($('.gallery_pic').has(e.target).length === 0 && $('.gallery_site_link').has(e.target).length === 0){
          $('.gallery_container').removeClass('wide');
          $('.cc_detail_close').show();
        }
      });   

      $('.gallery_pic').on('scroll', function(){

        var gpc = $('.gallery_pic_container');
        if($(this).scrollTop() > 0){
          gpc.addClass('active');
        }
        else{
          gpc.removeClass('active');
        }
      });
});