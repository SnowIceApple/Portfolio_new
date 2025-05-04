$(document).ready(function(){

  AOS.init();

  $(window).on('scroll', function(){
    var wintop = $(window).scrollTop(),
    docheight = $(document).height(),
    winheight = $(window).height();
    var scrolled = (wintop / (docheight - winheight)) * 100;

    $('.progressBar').css('width', (scrolled + '%'));
  });
  
    const swiper1 = new Swiper('.main_slide', {
        // Optional parameters
        direction: 'horizontal',
        watchOverflow: true,
        speed: 900,
        loop: true,
        slidesPerView: 1,
        disableOnInteration: false,
        autoplay: {
          delay: 6000,
        },

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
        disableOnInteration: false,
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
            $('html').css('overflow', 'auto');
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
        // $('body').addClass('modal_active');
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

      $('.cc_detail_close button').on('click', function(){
        $('body').removeClass('nav_active modal_active');
        $('html').css('overflow', 'visible');
        $(this).closest('li').removeClass('active');
      }); 


      $(window).on('scroll', function(){
        var scrollTpZ = 80;

        if($(window).scrollTop() >= scrollTpZ){
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
        if($('.gallery_pic_container').has(e.target).length === 0 && $('.gallery_site_link').has(e.target).length === 0){
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

    var startPos = 0;
    var pagePos = 0;
    var scrollY = 0;
    var standPos = 0;
    var scrollPrevented = false;
    var winHeight = window.document.documentElement.clientHeight;

    $(window).on('scroll', function(){
      var scrollTop = $(window).scrollTop();
      console.log(scrollTop);
    });

    $('.mobile_nav_btn').each(function(){

        $(this).on('touchstart', function(e){
          var winHeight = window.document.documentElement.clientHeight;

            startPos = pagePos;
    
            $(this).on('touchmove', function(e2){
                $('.mNav_box').addClass('onSlide');
                scrollY = e.originalEvent.targetTouches[0].pageY;
                pagePos = startPos + scrollY - e2.originalEvent.targetTouches[0].pageY;
                if(pagePos >= winHeight){
                    pagePos = winHeight;
                }
                else if(pagePos <= 65){
                    pagePos = 65;
                }
                
                if(scrollPrevented == false){
                    scrollPrevented = true;
                    $('.mNav_box').on('touchmove', function(e){
                        e.preventDefault();        
                    });
                }

    
                // console.log(startPos);
                // console.log(pagePos);
    
                $('.mNav_box').css({
                    top: - pagePos + 'px',
                });

                $(this).off('touchend').on('touchend', function(){
                    $('.mNav_box').removeClass('onSlide');

                    if(startPos - pagePos > 0 && pagePos <= winHeight - 100){
                        $(this).addClass('mNav_slideDown');
                        $(this).removeClass('mNav_slideUp');
                        pagePos = 65;
                    }
                    if(startPos - pagePos > 0 && pagePos > winHeight - 100){
                        pagePos = winHeight;
                        $(this).removeClass('mNav_slideDown');
                        $(this).addClass('mNav_slideUp');
                    }

                    if(startPos - pagePos < 0 && pagePos >= 100){
                        $(this).addClass('mNav_slideUp');
                        $(this).removeClass('mNav_slideDown');
                        pagePos = winHeight;

                    }
                    if(startPos - pagePos < 0 && pagePos < 100){
                        pagePos = 65;
                        $(this).removeClass('mNav_slideUp');
                        $(this).addClass('mNav_slideDown');
                    }

                    $('.mNav_box').css({
                      top: - pagePos + 'px',
                    }); 

                    // window.scrollBy(0, 100);
                    // window.scrollBy(0, -100);

                    if($(this).hasClass('mNav_slideUp')){
                      var scrollTop = $(window).scrollTop();
                      $('#content_box').css({
                        position: 'fixed',
                        top: - scrollTop + 'px',
                    });
                      $('body').addClass('mNav_active');
                    }
                    else{
                      var scrollTop2 = parseInt($('#content_box').css('top')) * -1;
                      console.log(scrollTop2);
                        $('body').removeClass('mNav_active');
                          $('#content_box').css({
                            position: 'relative',
                          });
                          setTimeout(() => {
                            $(window).scrollTop(scrollTop2);
                            $('#content_box').css({
                              top: 0,
                            });
                          }, 50);

                    }
                    // console.log(pagePos);
    
                    startPos = pagePos;

                });

            });

            $(this).off('touchend').on('touchend', function() {
                scrollPrevented = false;

                // console.log(standPos);

            });
    
        });

    });

    $('#mobile_nav > ul > li > a').on('click', function(){
      pagePos = 65;
      $('.mNav_box').css({
        top: - pagePos + 'px',
      });

      $('.mobile_nav_btn').removeClass('mNav_slideUp');
      $('.mobile_nav_btn').addClass('mNav_slideDown');
      $('body').removeClass('mNav_active');
      $('#content_box').css({
        position: 'relative',
        top: 0,
      });

      // window.scrollBy(0, 100);
      // window.scrollBy(0, -100);
      
    });

    $('.mobile_nav_btn').on('click', function(){
      var winHeight = window.document.documentElement.clientHeight;
      window.scrollBy(0, 100);
      window.scrollBy(0, -100);
      if($(this).hasClass('mNav_slideDown')){
        pagePos = winHeight;
        $('.mNav_box').css({
          top: - pagePos + 'px',
        });
        $(this).removeClass('mNav_slideDown');
        $(this).addClass('mNav_slideUp');
        $(this).children().find('.hidden_text').text('전체메뉴 닫기');
      }
      else if($(this).hasClass('mNav_slideUp')){
        pagePos = 65;
        $('.mNav_box').css({
          top: - pagePos + 'px',
        });
        $(this).addClass('mNav_slideDown');
        $(this).removeClass('mNav_slideUp');
        $(this).children().find('.hidden_text').text('전체메뉴 열기');
      }
      
      if($(this).hasClass('mNav_slideUp')){
        var scrollTop = $(window).scrollTop();
        $('#content_box').css({
          position: 'fixed',
          top: - scrollTop + 'px',
      });
      $('body').addClass('mNav_active');
      }
      else{
        var scrollTop2 = parseInt($('#content_box').css('top')) * -1;
        console.log(scrollTop2);
        $('body').removeClass('mNav_active');
            $('#content_box').css({
              position: 'relative',
            });
            setTimeout(() => {
              $(window).scrollTop(scrollTop2);
              $('#content_box').css({
                top: 0,
              });
            }, 50);

      }
      

    });

    // console.log(winHeight);

// $(window).on('scroll', function(){

//   // console.log(winHeight);

//   var scrollBottom = $('body').height() - $(window).height() - $(window).scrollTop();
//   console.log(scrollBottom);
//   if(scrollBottom < 42){
//     $('#footer').addClass('active');
//   }
//   else if($('#footer').hasClass('active') && scrollBottom > 42){
//     $('#footer').removeClass('active');
//   }
// });



});