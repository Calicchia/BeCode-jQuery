//$(function(){

  // configuration
//  var width = 720;
//  var animationSpeed = 2000;
//  var pauze = 3000;
//  var currentSlide = 1;

  //cache DOM
//  var $slider = $("#slider");
//  var $slideContainer = $slider.find(".slides");
//  var $slides = $slideContainer.find(".slide");

//  var interval;

//  function startSlider() {
//      interval = setInterval(function() {
//        $slideContainer.animate({"margin-left": "-="+width}, animationSpeed, function(){
//          currentSlide++;
//      if (currentSlide == $slides.length) {
//          currentSlide = 1;
//          $slideContainer.css("margin-left", 0);
//        }
//    });
//  }, pauze);
//}

//function stopSlider(){
//  clearInterval(interval);
//}
//$slider.on("mouseenter", stopSlider).on("mouseleave", startSlider);
//});

$(document).ready(function() {

  var interval;

  var image = $('.slide img');

  var imageArray = [];

  image.each(function() {
    imageArray.push($(this).attr('src'));
  });

  var imagePosition = 0;

  image.attr('src', imageArray[imagePosition]);

  function startSliding (counter) {

    interval = setInterval(function() {
      image.attr('src', imageArray[counter]);
      imagePosition = counter;
      counter++;

      if(counter > imageArray.length - 1) {
        counter = 0;
      }
    }, 2000);
  }

  startSliding(imagePosition);

  $('.prev').click(function() {
    clearInterval(interval);
    imagePosition = imagePosition - 1;
    if (imagePosition < 0) {
      imagePosition = imageArray.length - 1;
    }
    image.attr('src', imageArray[imagePosition]);
    startSliding(imagePosition+1);
  });

  $('.slide').on("mouseenter", function() {
    clearInterval(interval);
  });


});

// https://www.youtube.com/watch?v=l3jtmn4Kdmk
