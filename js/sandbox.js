// Treehouse quiz js


var qAndA = [

  ['What is the big dog\'s name?', 'Frankie'],
  ['What is the little dog\'s name?', 'Prince'],
  ['What is the house number?', '227']
]

//prompt for the first, 
// store in a var, 
//and compare to the second
//if matches, save to correct var
//if doesn't match, save to incorrect var
//after all three, print message with num of var

function print(message) {
  var outputDiv =  document.getElementById('output');
  outputDiv.innerHTML = message;                                         
}

function printScore(theArr) {
  var correct = 0;
  var incorrect = 0;
  for (i = 0; i < 3; i++ ){
  var question = theArr[i][0];
  var answer = theArr[i][1];
  var response = prompt(question);
  
    if (response === answer ){
      correct = correct += 1;

      }  else {
        incorrect = incorrect += 1;
      }
  }
  var results = "Congratulations. You have gotten through this grueling 3 item quiz.  You have " + correct + " items correct and " + incorrect + " items incorrect";
  print(results);
}

printScore(qAndA);



  

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