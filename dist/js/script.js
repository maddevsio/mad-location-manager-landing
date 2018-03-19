//jQuery is required to run this code
$(document).ready(function () {

  $('.geohash_slider').slick({
    dots: true,
    autoplay: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [{
      breakpoint: 576,
      settings: {
        arrows: false
      }
    }]
  });

  // Page scroll to id
  $("a[href*='#']").mPageScroll2id();

  (function show_hide_main_menu() {
    var btn = $('.main-menu_btn-toggle'),
      menu = $('.main-menu');

    $('.main-menu_list a').on('click', function (e) {
      $(menu).fadeOut(100);
      $('body').removeClass('scroll_off');
      scrollToggle(menu);
    });

    $(document).keydown(function (e) {
      if ($(menu).is(":visible")) {
        if (e.keyCode == 27) {
          $(menu).fadeOut(100);
          $('body').removeClass('scroll_off');
          scrollToggle(menu);
        }
      }
    });

    $(btn).on('click', function () {
      if ($(menu).is(":hidden")) {
        $(menu).fadeIn(100);
        $('body').addClass('scroll_off');
        scrollToggle(menu);
      } else {
        $(menu).fadeOut(100);
        $('body').removeClass('scroll_off');
        scrollToggle(menu);
      }
    });

  })();

  // Animation svg line
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > $('#why-is-this').offset().top - ($(window).height() / 2)) {
      $('.svg-line').addClass('path');
      $('.svg-line').addClass('dashoffset');
    } else {
      $('.svg-line').removeClass('path');
      $('.svg-line').removeClass('dashoffset');
    }

  })
  
  if ($(window).scrollTop() > $('#why-is-this').offset().top + $(window).height()) {
    $('.svg-line').addClass('path');
    $('.svg-line').addClass('dashoffset');
  }

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > $('#how-it-work').offset().top - ($(window).height() / 2)) {
      $('.how-it-work_svg-line').addClass('path');
      $('.how-it-work_svg-line').addClass('dashoffset');
    } else {
      $('.how-it-work_svg-line').removeClass('path');
      $('.how-it-work_svg-line').removeClass('dashoffset');
    }

  });
  
  if ($(window).scrollTop() > $('#how-it-work').offset().top + $(window).height()) {
    $('.how-it-work_svg-line').addClass('path');
    $('.how-it-work_svg-line').addClass('dashoffset');
  }

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > $('#android-sensors').offset().top - ($(window).height() - 150)) {
      $('.android-sensors_svg-line').addClass('android-path');
      $('.android-sensors_svg-line').addClass('dashoffset-android-sensors');
    } else {
      $('.android-sensors_svg-line').removeClass('android-path');
      $('.android-sensors_svg-line').removeClass('dashoffset-android-sensors');
    }
  });

  if ($(window).scrollTop() > $('#android-sensors').offset().top + $(window).height() - 150) {
    $('.android-sensors_svg-line').removeClass('android-path');
    $('.android-sensors_svg-line').removeClass('dashoffset-android-sensors');      
  }

  (function responsive_svg() {
    $(window).resize(function (e) {
      let path_width = 200;
      if ($('.container').width() < 980) {
        $('.decision-pointer_path').parent().css('width', '340px')
        $('.decision-pointer_path').attr('d', 'm 342,160 c 0,0 -11.58999,-39.6479 -24.11374,-55.4339 -6.15559,-7.759 -14.58849,-13.3623 -23.83657,-16.9073 -9.35689,-3.5867 -19.91353,-3.6203 -29.93429,-3.6032 -83.24827,0.1419 -156.64797,1.4376 -200.474368,0.6141 -9.81242,-0.098 -20.71135,-1.2929 -29.65712,-5.326 -9.32815,-4.2055 -18.51609004,-10.77586 -23.5594,-19.679 -4.6965,-8.2909 -7.28226,-14.55329 -8.86942,-28.54845 -1.11417,-9.82446 -0.55434,-29.65713 -0.55434,-29.65713');
      } else if ($('.container').width() > 980) {
        $('.decision-pointer_path').parent().css('width', '430px')
        $('.decision-pointer_path').attr('d', 'm 430,160 c 0,0 -11.58999,-39.6479 -24.11374,-55.4339 -6.15559,-7.759 -14.58849,-13.3623 -23.83657,-16.9073 -9.35689,-3.5867 -19.91353,-3.6203 -29.93429,-3.6032 -83.24827,0.1419 -156.64797,1.4376 -270.474368,0.6141 -9.81242,-0.098 -20.71135,-1.2929 -29.65712,-5.326 -9.32815,-4.2055 -18.51609004,-10.77586 -23.5594,-19.679 -4.6965,-8.2909 -7.28226,-14.55329 -8.86942,-28.54845 -1.11417,-9.82446 -0.55434,-29.65713 -0.55434,-29.65713');
      }

      if ($(window).width() < 992 && $(window).width() > 592) {
        path_width = Math.round(path_width - (Math.abs($(window).width() - 992) / 2));
        $('.decision-pointer_path').attr('d', `m 340,160 c 0,0 -11.58999,-39.6479 -24.11374,-55.4339 -6.15559,-7.759 -14.58849,-13.3623 -23.83657,-16.9073 -9.35689,-3.5867 -19.91353,-3.6203 -29.93429,-3.6032 -83.24827,0.1419 -156.64797,1.4376 -${path_width}.474368,0.6141 -9.81242,-0.098 -20.71135,-1.2929 -29.65712,-5.326 -9.32815,-4.2055 -18.51609004,-10.77586 -23.5594,-19.679 -4.6965,-8.2909 -7.28226,-14.55329 -8.86942,-28.54845 -1.11417,-9.82446 -0.55434,-29.65713 -0.55434,-29.65713`);
      }
    })

    if ($(window).width() > 768 && $(window).width() < 950) {
      $('.decision-pointer_path').parent().css('width', '260px')
      $('.decision-pointer_path').attr('d', 'm 262,160 c 0,0 -11.58999,-39.6479 -24.11374,-55.4339 -6.15559,-7.759 -14.58849,-13.3623 -23.83657,-16.9073 -9.35689,-3.5867 -19.91353,-3.6203 -29.93429,-3.6032 -83.24827,0.1419 -156.64797,1.4376 -120.474368,0.6141 -9.81242,-0.098 -20.71135,-1.2929 -29.65712,-5.326 -9.32815,-4.2055 -18.51609004,-10.77586 -23.5594,-19.679 -4.6965,-8.2909 -7.28226,-14.55329 -8.86942,-28.54845 -1.11417,-9.82446 -0.55434,-29.65713 -0.55434,-29.65713');
    }
    
    if ($(window).width() > 950 && $(window).width() < 1440) {
      $('.decision-pointer_path').parent().css('width', '360px')
      $('.decision-pointer_path').attr('d', 'm 362,160 c 0,0 -11.58999,-39.6479 -24.11374,-55.4339 -6.15559,-7.759 -14.58849,-13.3623 -23.83657,-16.9073 -9.35689,-3.5867 -19.91353,-3.6203 -29.93429,-3.6032 -83.24827,0.1419 -156.64797,1.4376 -200.474368,0.6141 -9.81242,-0.098 -20.71135,-1.2929 -29.65712,-5.326 -9.32815,-4.2055 -18.51609004,-10.77586 -23.5594,-19.679 -4.6965,-8.2909 -7.28226,-14.55329 -8.86942,-28.54845 -1.11417,-9.82446 -0.55434,-29.65713 -0.55434,-29.65713');
    }
    
    if ($(window).width() > 1440) {
      $('.decision-pointer_path').parent().css('width', '430px')
      $('.decision-pointer_path').attr('d', 'm 432,160 c 0,0 -11.58999,-39.6479 -24.11374,-55.4339 -6.15559,-7.759 -14.58849,-13.3623 -23.83657,-16.9073 -9.35689,-3.5867 -19.91353,-3.6203 -29.93429,-3.6032 -83.24827,0.1419 -156.64797,1.4376 -270.474368,0.6141 -9.81242,-0.098 -20.71135,-1.2929 -29.65712,-5.326 -9.32815,-4.2055 -18.51609004,-10.77586 -23.5594,-19.679 -4.6965,-8.2909 -7.28226,-14.55329 -8.86942,-28.54845 -1.11417,-9.82446 -0.55434,-29.65713 -0.55434,-29.65713');
    }

    if ($(window).scrollTop() > ($('#why-is-this').offset().top / 2)) {
      $('.svg-line').addClass('path');
      $('.svg-line').addClass('dashoffset');
    }

    if ($(window).scrollTop() > ($('#how-it-work').offset().top / 2)) {
      $('.how-it-work_svg-line').addClass('path');
      $('.how-it-work_svg-line').addClass('dashoffset');
    }
    
  })();
  
  // Translate all text on page

  // Toggle scroll
  function scrollToggle(box) {
    if ($(window).height() > 570) {
    $('body').on('touchmove', function(e){
      if ($(box).is(':hidden')) {
        return true;
      } else {
          e.preventDefault();
        }
      });
    }
  }

  // Set copy right years
  $('#copyright_years').text( (new Date).getFullYear() )

});