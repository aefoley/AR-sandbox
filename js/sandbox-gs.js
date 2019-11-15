

// jQuery(function(){
// 	var img = $('img');

// 	TweenLite.to(img, 2, {width:20});
// });
  

(function($) {
  	var img = $('img');
  	 h1 = $('h1');
  	 h2 = $('h2');
  	 h3 = $('h3');
  	 p = $('p');
  	 tl = new TimelineLite();
     tl2 = new TimelineLite();
     btn = $('.btn');


 //  	TweenLite.to(img, 2, {width:150});
 //  	// TweenLite.to(img, 1, {x: 200});
 //  	//TweenLite.fromTo(img, 1, {x:-200}, {x:200});
 //  	 TweenLite.from(img, 3, {x:-100, delay:1.5, ease:Power0.easeNone,
 //  	 	// onStart: alertOne, //callback functions call functions below
 //  	 	// onComplete: alertTwo
 //  	 });

	// function alertOne(){
 //  	 	alert('this is the first alert!!')
 //  	 }

 //  	 function alertTwo(){
 //  	 	alert('this is the second alert!!')
 //  	 }

  	 //a bunch of tweens in sequence
  	 // TweenLite.from(h1, 0.3, {y: -15, autoAlpha:0, ease:Power1.easeOut, delay:0.2});
  	 // TweenLite.from(h2, 0.3, {y: -15, autoAlpha:0, ease:Power1.easeOut, delay:0.4});
  	 // TweenLite.from(h3, 0.3, {y: -15, autoAlpha:0, ease:Power1.easeOut, delay:0.6});
  	 // TweenLite.from(p, 0.3, {y: -15, autoAlpha:0, ease:Power1.easeOut, delay:0.8});

  	 //using a timeline
  	 tl
        .add('btn')
        //the last one is the timeline position parameter - you can leave a gap or start it early
        .to(btn, 0.3, { y: 70, autoAlpha:7, ease:Power1.easeOut})
        
  	 	.from(img, 0.3, {x: 100, autoAlpha:0, ease:Power1.easeOut}, 1.5)
        //'-=1' - that relative positioning - relative to the one before
  	 	.from(h1, 0.3, {y: -15, autoAlpha:0, ease:Power1.easeOut, delay:0.4}, '-=1')
        //this one will run at the 3 second mark - it's called absolute position
  	 	.from(h3, 0.3, {y: -15, autoAlpha:0, ease:Power1.easeOut, delay:0.6}, 2.5)
  		.from(p, 0.3, {y: -15, autoAlpha:0, ease:Power1.easeOut}, 'btn-+.5' );

    // tl2
    //     .play(6)
    //     .to(h3, 0.3, {css:{color:"#ffcccc"}, y: 100, ease:Power1.easeOut, delay:0.6}, 2.5);
        // .add('btn')
        // .to(btn, 0.3, {y: 70, autoAlpha:7, ease:Power1.easeOut}, 3 )
        // .to(h1, 1, {css:{color:"ffcccc"}, ease:Back.easeOut});





  




})(jQuery);