
      // The basic ScrollMagic design pattern is one controller, which has one or more scenes attached to it.
      // Each scene is used to define what happens when the container is scrolled to a specific offset.

(function($) {

  //basic  ------------------------------------------------------------------------  
  
  // // Init ScrollMagic
  var controller = new ScrollMagic.Controller();

  // facebook
  var gnomeScene = new ScrollMagic.Scene({
      triggerElement: '.fb-row-ibright',
      duration:0, //the scene should last for a scroll of 300px
      triggerHook: .8 //at .7 of viewport height
  })
  .setClassToggle('.fb-img-ibright', 'fade-in')
  // .addIndicators({
  //   name: 'fade and rise fbs',
  //   colorTrigger: 'gray',
  //   colorStart:'gray',
  //   colorEnd: 'gray'
  // })
  .addTo(controller);


  // teaser brochure
  var tbrochScene = new ScrollMagic.Scene({
      triggerElement: '.tbroch-row-ibright',
      duration:0, //the scene should last for a scroll of 300px
      triggerHook: .7 //at .7 of viewport height

  })
  .setClassToggle('.tbroch-img-ibright', 'fade-in')
  // .addIndicators({
  //   name: 'fade and rise tbroch',
  //   colorTrigger: 'pink',
  //   colorStart:'pink',
  //   colorEnd: 'pink'
  // })
  .addTo(controller);


  // demo box
  var boxDemo = new ScrollMagic.Scene({
      triggerElement: '.box-demo-row',
      duration:0, //the scene should last for a scroll of 300px
      triggerHook: .7 //at .7 of viewport height

  })
  .setClassToggle('.box-demo-img', 'fade-in')
  // .addIndicators({
  //   name: 'box demo',
  //   colorTrigger: 'red',
  //   colorStart: 'red',
  //   colorEnd: 'red'
  // })
  .addTo(controller);

  // system brochure
  var sysBroch = new ScrollMagic.Scene({
      triggerElement: '.sysbroch-row',
      duration:0, //the scene should last for a scroll of 300px
      triggerHook: .7 //at .7 of viewport height

  })
  .setClassToggle('.sysbroch-img', 'fade-in')
  // .addIndicators({
  //   name: 'box demo',
  //   colorTrigger: 'red',
  //   colorStart: 'red',
  //   colorEnd: 'red'
  // })
  .addTo(controller);

// ---------------------------   fade in vid/email clicks

var HTThumbAppear = TweenMax.staggerTo(".htthumb", 1, {y:"-=50", opacity:1}, 0.5);

var circleFadeIn = new ScrollMagic.Scene({
              triggerElement: "#trigger-htthumbs",
              triggerHook: .5,
              //duration:50
            })
            .setTween(emThumbAppear)
            // .addIndicators({
            //   name: 'email thumbs',
            //   colorTrigger: 'orange',
            //   colorStart:'orange',
            //   colorEnd: 'orange'
            // })
            .addTo(controller);



var FBThumbAppear = TweenMax.staggerTo(".fbthumb", 1, {y:"-=50", opacity:1}, 0.5);

var circleFadeIn = new ScrollMagic.Scene({
              triggerElement: "#trigger-fbthumbs",
              triggerHook: .5,
              //duration:50
            })
            .setTween(emThumbAppear)
            // .addIndicators({
            //   name: 'email thumbs',
            //   colorTrigger: 'orange',
            //   colorStart:'orange',
            //   colorEnd: 'orange'
            // })
            .addTo(controller);


var emThumbAppear = TweenMax.staggerTo(".emthumb", 1, {y:"-=50", opacity:1}, 0.5);

var circleFadeIn = new ScrollMagic.Scene({
              triggerElement: "#trigger-emthumbs",
              triggerHook: .5,
              //duration:50
            })
            .setTween(emThumbAppear)
            // .addIndicators({
            //   name: 'email thumbs',
            //   colorTrigger: 'orange',
            //   colorStart:'orange',
            //   colorEnd: 'orange'
            // })
            .addTo(controller);











var $circle = $('#circle'),
    $circle2 = $('#circle2'),
    $circle3 = $('#circle3'),
    duration = 1
  ;

 var circleBounce1 = TweenMax.to($circle, .1, {className: '+=bounce3', ease:Power4.easeOut});
 var circleBounce2 = TweenMax.to($circle2, .1, {className: '+=bounce3', ease:Power4.easeOut, delay:.5});
 var circleBounce3 = TweenMax.to($circle3, .1, {className: '+=bounce3', ease:Power4.easeOut, delay:.75});

 var sceneCircle1 = new ScrollMagic.Scene({
              triggerElement: "#trigger3",
              triggerHook: .5, 
              reverse: false
            })
            .setTween(circleBounce1)                
            .addTo(controller);

 var sceneCircle2 = new ScrollMagic.Scene({
              triggerElement: "#trigger3",
              triggerHook: .5, 
              reverse: false
            })
            .setTween(circleBounce2)                
            .addTo(controller);

  var sceneCircle3 = new ScrollMagic.Scene({
              triggerElement: "#trigger3",
              triggerHook: .5, 
              reverse: false
            })
            .setTween(circleBounce3)                
           .addTo(controller);



















  //with a loop ------------------------------------------------------------------------

$('.looprow').each(function(){

  var balloonScene = new ScrollMagic.Scene({
    triggerElement: this.children[0],
    duration:200,
    triggerHook: .5
  })

    .setClassToggle(this, 'scoot')
    // .addIndicators({
    //     name: 'scooter',
    //     colorTrigger: 'green',
    //     colorStart:'green',
    //     colorEnd: 'green'
    // })
    .addTo(controller);

}) //ends looprow function





})(jQuery);