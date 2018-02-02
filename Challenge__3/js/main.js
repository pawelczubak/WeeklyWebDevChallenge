$(document).ready(function () {

  /*  -----  NAV TOGGLE  -----  */



  $(".nav__toggle").click(function () {
    $(".nav__navbar").slideToggle();
    $(this).toggleClass("active");
  });


  if ($(window).width() <= 768) {
    $('nav a').click(function () {
      $(".nav__navbar").slideToggle();
      $(".nav__toggle").toggleClass("active");
    });
  }




  /*  -----  FIXED NAV  -----  */



  $(window).scroll(function () {
    if ($(document).scrollTop() > 300) {
      $('#nav').addClass('nav--fixed');
    } else {
      $('#nav').removeClass('nav--fixed');
    }
  });



  /*  ----- SCROLL NAV -----  */



  $('nav a').click(function (event) {
    var id = $(this).attr("href");
    var offset = 0;
    var target = $(id).offset().top;

    $('html, body').animate({
      scrollTop: target
    }, 500);
    event.preventDefault();
  });



});
