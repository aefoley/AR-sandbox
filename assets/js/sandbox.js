
      // The basic ScrollMagic design pattern is one controller, which has one or more scenes attached to it.
      // Each scene is used to define what happens when the container is scrolled to a specific offset.

(function($) {

//first section - fade in and up on load

var introtext = $('div.introtext');
var introtwo = $('div.introtwo');
  TweenLite.to(introtext, 1, {opacity:1, y:-50});
  TweenLite.to(introtwo, 1, {opacity:1, y:-50, delay: 0.8});


  

// Init ScrollMagic
  var controller = new ScrollMagic.Controller();

  // // //build a scene
  // var gnomeScene = new ScrollMagic.Scene({
  //     triggerElement: '.charts',
  //     duration:600, //the scene should last for a scroll of 300px
  //     triggerHook: .5 //at .7 of viewport height


  // })

  // .setClassToggle('.chart1', 'fade-in')
  // .addIndicators({
  //   name: 'fade and rise gnomes',
  //   colorTrigger: 'gray',
  //   colorStart:'gray',
  //   colorEnd: 'gray'
  // })
  // .addTo(controller);

   

  var twChart1 = TweenMax.staggerFromTo(".chart1t", 2, {y:80, opacity:0}, {y:0, opacity:1}, 0.8);

  // build scene
  var scene = new ScrollMagic.Scene({triggerElement: ".trigger1", duration: 400})
        .setTween(twChart1)
        .addTo(controller)
        //.addIndicators({name: 'fade and rise gnomes'});

var twChart2 = TweenMax.staggerFromTo(".chart2t", 2, {y:50, opacity:0}, {y:0, opacity:1}, 0.8);

  // build scene
  var scene = new ScrollMagic.Scene({triggerElement: ".trigger2", duration: 400})
        .setTween(twChart2)
        .addTo(controller);















  

  // //pinning  ------------------------------------------------------------------------  

  // var pinnerScene = new ScrollMagic.Scene({
  //   triggerElement: '.symphony',
  //   triggerHook: 0,
  //   duration: '30%'
  // })
  // .setPin('.symphony')
  // .addIndicators({
  //       name: 'pinner',
  //       colorTrigger: 'salmon',
  //       colorStart:'salmon',
  //       colorEnd: 'salmon'
  //   })
  // .addTo(controller);


  //parallax scene ---------------------------------------------------------------------

// var parallaxTl = new TimelineMax();
// parallaxTl
//     //.from('content-wrapper', 1, {autoAlpha: 0, ease:Power0.easeNone}, 0.3) 
//     .from('.content-wrapper', 0.3, {autoAlpha: 0, ease:Power0.easeNone}, 0.2)
//     .from('.bcg', 2, {y:'-80%', ease:Power0.easeNone}, 0) 
//     ;

// var slideParallaxScene = new ScrollMagic.Scene({
//       triggerElement: '.bcg-parallax',
//       triggerHook: 1,
//       duration: '200%' //1 - over the duration of 100% of the scrolling


//    })

//    .setTween(parallaxTl) //2 - we will play the contents of parallaxTl, which has 2 tweens on it.
//    .addIndicators({
//         name: 'parallax',
//         colorTrigger: 'orange',
//         colorStart:'orange',
//         colorEnd: 'orange'
//     })
//    .addTo(controller);



  //with a loop ------------------------------------------------------------------------

// $('.looprow').each(function(){

//   var balloonScene = new ScrollMagic.Scene({
//     triggerElement: this.children[0],
//     duration:200,
//     triggerHook: .5
//   })

//     .setClassToggle(this, 'scoot')
//     .addIndicators({
//         name: 'scooter',
//         colorTrigger: 'green',
//         colorStart:'green',
//         colorEnd: 'green'
//     })
//     .addTo(controller);

// }) //ends looprow function

  
//   	var img = $('img');
//   	 h1 = $('h1');
//   	 h2 = $('h2');
//   	 h3 = $('h3');
//   	 p = $('p');
//   	 tl = new TimelineLite();
//      tl2 = new TimelineLite();
//      btn = $('.btn');



  	
    // //using a timeline
    // tl
    // .add('btn')
    // //the last one is the timeline position parameter - you can leave a gap or start it early
    // //.to(btn, 0.3, { y: 70, autoAlpha:7, ease:Power1.easeOut})

    // .from(img, 0.3, {x: 100, autoAlpha:0, ease:Power1.easeOut}, 1.5)
    // //'-=1' - that relative positioning - relative to the one before
    // .from(h1, 0.3, {y: -15, autoAlpha:0, ease:Power1.easeOut, delay:0.4}, '-=1')
    // //this one will run at the 3 second mark - it's called absolute position
    // .from(h3, 0.3, {y: -15, autoAlpha:0, ease:Power1.easeOut, delay:0.6}, 2.5)
    // //.from(p, 0.3, {y: -15, autoAlpha:0, ease:Power1.easeOut}, 'btn-+.5' );


//utilities - scroll to, get current year in footer

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});


  //gets current year in footer
  var currentYear = (new Date).getFullYear();
  $('.year').text(currentYear);
 



























})($);