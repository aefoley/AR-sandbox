



      // The basic ScrollMagic design pattern is one controller, which has one or more scenes attached to it.
      // Each scene is used to define what happens when the container is scrolled to a specific offset.

(function($) {

//first section - fade in and up on load

var introtext = $('div.introtext');
var introtwo = $('div.introtwo');
var presidentText = $('div.presidentText');

TweenLite.to(introtext, 1, {opacity:1, y:-50});
TweenLite.to(introtwo, 1, {opacity:1, y:-50, delay: 0.8});


  

// Init ScrollMagic
var controller = new ScrollMagic.Controller();


var twChart1 = TweenMax.staggerFromTo(".chart1t", 2, {y:80, opacity:0}, {y:0, opacity:1}, 0.8);

// build scene
var scene = new ScrollMagic.Scene({triggerElement: ".trigger1", duration: 400})
      .setTween(twChart1)
      .addTo(controller)
      //.addIndicators({name: 'fade and rise gnomes'});

var twChart2 = TweenMax.staggerFromTo(".chart2t", 2, {y:50, opacity:1}, {y:0, opacity:1}, 0.8);

// build scene
var scene = new ScrollMagic.Scene({triggerElement: ".trigger2", duration: 400})
      .setTween(twChart2)
      .addTo(controller);


var twChart3 = TweenMax.staggerFromTo(".chart3t", 2, {y:50, opacity:0}, {y:0, opacity:1}, 0.8);

// build scene
var scene = new ScrollMagic.Scene({triggerElement: ".trigger3", duration: 400})
      .setTween(twChart3)
      .addTo(controller);

var twChart4 = TweenMax.staggerFromTo(".chart4t", 2, {y:50, opacity:0}, {y:0, opacity:1}, 0.8);

// build scene
var scene = new ScrollMagic.Scene({triggerElement: ".trigger4", duration: 400})
      .setTween(twChart4)
      .addTo(controller);

var twChart5 = TweenMax.staggerFromTo(".chart5t", 2, {y:50, opacity:0}, {y:0, opacity:1}, 0.8);

// build scene
var scene = new ScrollMagic.Scene({triggerElement: ".trigger5", duration: 400})
      .setTween(twChart5)
      .addTo(controller);






//utilities - scroll to, get current year in footer



  // ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(500);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(500);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});




$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top - 49
        }, 1000);
    }
});


  //gets current year in footer
  var currentYear = (new Date).getFullYear();
  $('.year').text(currentYear);


   $('a#chart-click').click(function(){

  var charttab = $('.charttab');
  if (charttab.hasClass('visible')){
      charttab.animate({"left":"-490px"}, "slow").removeClass('visible');
  } else {
      charttab.animate({"left":"-20px"}, "slow").addClass('visible');
  }
  });


  $('[data-fancybox="gallery"]').fancybox({
   loop: true,
  });

})($);