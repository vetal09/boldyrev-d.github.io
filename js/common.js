$(document).ready(function() {

  $(".header-text h1").animated("fadeInDown", "fadeOutUp");
  $(".header-text p").animated("fadeInUp", "fadeOutDown");
  $(".section-header-wrap").animated("fadeInDown", "fadeOutUp");

  $(".about-img-wrap").animated("fadeInLeft", "fadeOutRight");
  $(".about-text-wrap").animated("fadeInRight", "fadeOutLeft");

  $(".top-menu-toggle-button, .top-menu ul a").click(function() {
    $(".sandwich").toggleClass("active");
    $(".top-menu").fadeOut(600);
  });

  $(".top-menu-toggle-button").click(function() {
    if ($(".top-menu").is(":visible")) {
      $(".top-menu").fadeOut(600);
      $(".top-menu li a").removeClass("fadeInUp animated");
    } else {
      $(".top-menu").fadeIn(600);
      $(".top-menu li a").addClass("fadeInUp animated");
    };
  });

  $(".popup").magnificPopup({type:"image"});

  $("input, select, textarea").jqBootstrapValidation();

  $(".top-menu a").mPageScroll2id();

});

$(window).load(function() {

  $(".loader_inner").fadeOut();
  $(".loader").delay(400).fadeOut("slow");



});