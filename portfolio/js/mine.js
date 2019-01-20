
$('.hamburger').click(function(e){
  e.preventDefault();
  $(this).toggleClass('is-active');
});

$(document).ready(function () {
  $(".hamburger").click(function() {
    $("#slid").animate({ right: "0px" });
    $("#slid").css("display", "block");
  });
  $(".fa-search").click(function () {
    $(".icon").css("display", "none");
    $("#search").fadeIn(1000);
  });
  $(".btn-block").click(function() {
    $("#slid").animate({ right: "-400px" }, "slow");
    $("#slid").css("display", "none");
  });
  $(window).scroll(function () {

    var scrlTop = $(window).scrollTop();

    if (scrlTop > 30) {
      $("nav").css("position", "fixed"),
      $("nav").css("margin-top","0px"),
      $("nav").css("width", "98%"),
      $("nav").css("background-color", "rgba(0,0,0,0.3)");
    }
    else{
      $("nav").css("position", "relative"),
      $("nav").css("width", "90%"),
      $("nav").css("margin", "auto"),
       $("nav").css("margin-top", "50px"),
       $("nav").css("background-color", "#121D30");
    }
  })

});

