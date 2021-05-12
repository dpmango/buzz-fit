$(document).ready(function () {
  //menu mob
  $('.header-bar').on('click', function () {
    $('.header').toggleClass('header-active');
  });

  //footer
  $('.footer-subtitle').on('click', function () {
    $(this).next('ul').slideToggle();
  });

  //accordeons
  $('.accordeon .accordeon-block')
    .hide()
    .prev()
    .click(function () {
      if ($(this).parents('.accordeon').hasClass('accordeon-active')) $('.accordeon').removeClass('accordeon-active');
      else {
        $('.accordeon').removeClass('accordeon-active');
        $(this).parents('.accordeon').addClass('accordeon-active');
      }

      $(this).parents().find('.accordeon-block').not(this).slideUp().prev();
      $(this).next().not(':visible').slideDown().prev().parents();
    });

  //steps-slider
  $('.steps-row').slick({
    infinite: true,
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 700,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1160,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  //testimonials-slider
  $('.testimonials-slider').slick({
    arrows: true,
    dots: false,
    fade: true,
    nextArrow:
      '<button class="slick-arrow slick-next"><svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.24414 8.07812L21.2441 8.07813" stroke="#7C808A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.2441 1.07812L21.2441 8.07812L14.2441 15.0781" stroke="#7C808A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    prevArrow:
      '<button class="slick-arrow slick-prev"><svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.2441 8.07812L1.24414 8.07813" stroke="#7C808A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.24414 1.07812L1.24414 8.07812L8.24414 15.0781" stroke="#7C808A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 700,
    autoplaySpeed: 10000,
    autoplay: true,
  });

  //actions-slider
  $('.actions-slider').slick({
    infinite: true,
    arrows: true,
    dots: false,
    nextArrow:
      '<button class="slick-arrow slick-next"><svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.24414 8.07812L21.2441 8.07813" stroke="#7C808A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.2441 1.07812L21.2441 8.07812L14.2441 15.0781" stroke="#7C808A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    prevArrow:
      '<button class="slick-arrow slick-prev"><svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.2441 8.07812L1.24414 8.07813" stroke="#7C808A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.24414 1.07812L1.24414 8.07812L8.24414 15.0781" stroke="#7C808A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 700,
    responsive: [
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  //steps-slider
  $('.industry-slider').slick({
    arrows: true,
    dots: false,
    nextArrow:
      '<button class="slick-arrow slick-next"><svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.24414 8.07812L21.2441 8.07813" stroke="#7C808A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.2441 1.07812L21.2441 8.07812L14.2441 15.0781" stroke="#7C808A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    prevArrow:
      '<button class="slick-arrow slick-prev"><svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.2441 8.07812L1.24414 8.07813" stroke="#7C808A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.24414 1.07812L1.24414 8.07812L8.24414 15.0781" stroke="#7C808A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 700,
  });

  //howItWorks-slider
  $('.howItWorks-slider').slick({
    arrows: true,
    dots: true,
    fade: true,
    nextArrow:
      '<button class="slick-arrow slick-next"><svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.24414 8.07812L21.2441 8.07813" stroke="#7C808A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.2441 1.07812L21.2441 8.07812L14.2441 15.0781" stroke="#7C808A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    prevArrow:
      '<button class="slick-arrow slick-prev"><svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.2441 8.07812L1.24414 8.07813" stroke="#7C808A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.24414 1.07812L1.24414 8.07812L8.24414 15.0781" stroke="#7C808A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 700,
    adaptiveHeight: true,
  });

  //addressing-slider
  $('.addressing-slider').slick({
    arrows: true,
    dots: false,
    fade: true,
    nextArrow:
      '<button class="slick-arrow slick-next"><svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.24414 8.07812L21.2441 8.07813" stroke="#7C808A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.2441 1.07812L21.2441 8.07812L14.2441 15.0781" stroke="#7C808A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    prevArrow:
      '<button class="slick-arrow slick-prev"><svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.2441 8.07812L1.24414 8.07813" stroke="#7C808A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.24414 1.07812L1.24414 8.07812L8.24414 15.0781" stroke="#7C808A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 700,
  });

  //programing-slider
  $('.programing-slider').slick({
    arrows: true,
    dots: false,
    nextArrow:
      '<button class="slick-arrow slick-next"><svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.24414 8.07812L21.2441 8.07813" stroke="#7C808A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.2441 1.07812L21.2441 8.07812L14.2441 15.0781" stroke="#7C808A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    prevArrow:
      '<button class="slick-arrow slick-prev"><svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.2441 8.07812L1.24414 8.07813" stroke="#7C808A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.24414 1.07812L1.24414 8.07812L8.24414 15.0781" stroke="#7C808A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 700,
    rows: 2,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          rows: 3,
        },
      },
    ],
  });

  if ($(window).width() <= 767) {
    $('.plug-slider').slick({
      arrows: false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 700,
    });
  }
});
