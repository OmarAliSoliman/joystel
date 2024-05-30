$(document).ready(function () {
  var currentDir = $("body").css("direction");

  var scene = document.getElementById('scene');
  var parallaxInstance = new Parallax(scene);

  if($(".advanges_program_card").length){
    $(".advanges_program_card span.num").counterUp();
  }

  AOS.init();
});

$(window).on("load", function () {
  var currentDir = $("body").css("direction");
  // setTimeout(() => {
  //   animateFromLeft();
  // }, 2000);
});
