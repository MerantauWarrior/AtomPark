$(document).ready(function () {

  var marqueeW = $("#marqueeW");
  var marqueeB = $("#marqueeB");
  function marquee(marquee) {
    marquee.css({"overflow": "hidden", "width": "100%"});
    marquee.wrapInner("<span>");
    marquee.find("span").css({ "width": "50%", "display": "inline-block", "text-align":"center" });
    marquee.append(marquee.find("span").clone());
    marquee.wrapInner("<div>");
    marquee.find("div").css("width", "200%");
    var reset = function() {
      $(this).css("margin-left", "0%");
      $(this).animate({ "margin-left": "-100%" }, 30000, 'linear', reset);
    };
    reset.call(marquee.find("div"));
  }
  marquee(marqueeW);
  marquee(marqueeB);

  function slide(target) {
    if(target === '#black'){
      $('#white').animate({left: '-100%'},400);
      $('#black').animate({left: '-100%'},400);
    }
    if(target === '#white'){
      $('#black').animate({left: '100%'},400);
      $('#white').animate({left: '0'},400);
    }
  }
  $('.ss-redirect__link').click(function (e) {
    e.preventDefault();
    var target = $(this).attr('href');
    slide(target);
  });

  slide(window.location.hash);

});