
  

(function($) {
  	var img = $('img');
  	 h1 = $('h1');
  	 h2 = $('h2');
  	 h3 = $('h3');
  	 p = $('p');
  	 tl = new TimelineLite();
     tl2 = new TimelineLite();
     btn = $('.btn');



  	
    //using a timeline
    tl
    .add('btn')
    //the last one is the timeline position parameter - you can leave a gap or start it early
    //.to(btn, 0.3, { y: 70, autoAlpha:7, ease:Power1.easeOut})

   // .from(img, 0.3, {x: 100, autoAlpha:0, ease:Power1.easeOut}, 1.5)
    //'-=1' - that relative positioning - relative to the one before
    .from(h1, 0.3, {y: -15, autoAlpha:0, ease:Power1.easeOut, delay:0.4}, '-=1')
    //this one will run at the 3 second mark - it's called absolute position
    .from(h3, 0.3, {y: -15, autoAlpha:0, ease:Power1.easeOut, delay:0.6}, 2.5)
    //.from(p, 0.3, {y: -15, autoAlpha:0, ease:Power1.easeOut}, 'btn-+.5' );


$(".box").on("mouseenter", function() {
  var duration = 1;
  TweenMax.to(this, duration / 4, {y:-50, ease:Power2.easeOut});
  TweenMax.to(this, duration / 2, {y:0, ease:Bounce.easeOut, delay:duration / 4});
});



 $('path').qtip({
  content: {
   text: 'foo!' // Tell qTip2 to look inside this attr for its content
  },
  position: {
    my: 'top left',
    at: 'bottom right'
  }
});

 $('polygon').qtip({
  content: {
    attr: 'data-tooltip' // Tell qTip2 to look inside this attr for its content
  },
  position: {
    my: 'top left',
    at: 'bottom right'
  }
});


$("[data-fancybox]").fancybox({
    iframe : {
        css : {
            width  : '800px',
            height : '600px'
        }
    }
});

})(jQuery);