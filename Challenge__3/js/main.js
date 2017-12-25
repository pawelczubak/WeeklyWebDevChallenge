$(".nav__toggle").click(function () {
  $(".nav__navbar").slideToggle();
  $(this).toggleClass("active");
});

if ($(".nav__toggle").css('display') == 'block') {
  $(".nav__navbar a").click(function () {
    $(".nav__navbar").slideToggle();
  });
}
