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
});
