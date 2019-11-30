


let labels = ["2013", "2014", "2015", "2016", "2017", "2018"];

let valuesMGEE = [1000, 1230, 1280, 1890, 1860, 1750];
let valuesSP = [1000, 1140, 1160, 1305, 1610,1540];
let valuesEEI = [1000, 1305, 1240, 1480, 1660, 1730];
let valuesRUS = [1000, 1040, 1010, 1220, 1410, 1250];

Chart.defaults.global.elements.line.fill = false;


Chart.scaleService.updateScaleDefaults('linear', {
    ticks: {
        callback: function (value, index, values) {
            return '$' + value.toLocaleString();
        }
    }
});

const dataObj = {
  labels: labels,
  datasets: [
    {
      label: "MGEE",
      data: valuesMGEE,
      backgroundColor:"green", //fill color of bars
      borderColor:"green",
      borderWidth: 3,
      lineTension: 0,
      pointRadius: 1,
    }, 
    {
      label: "S&P 500",
      data: valuesSP,
      backgroundColor:'maroon',
      borderColor:'maroon',
      borderWidth: 3,
      lineTension: 0,
      pointRadius: 1,
    },
    {
      label: "EEI Investor-Owned Electrics",
      data: valuesEEI,
      backgroundColor:"#fcc201", //fill color of bars
      borderColor:"#fcc201",
      borderWidth: 3,
      lineTension: 0,
      pointRadius: 1,

    },
    {
      label: "Russell 2000",
      data: valuesRUS,
      backgroundColor:"#545F9E", //fill color of bars
      borderColor:"#545F9E",
      borderWidth: 3,
      lineTension: 0,
      pointRadius: 1,

    },


  ]
}

//const canvasObj = document.getElementById("linechart");

const chartObj = {
  type: "line",
  data: dataObj,
  options:{
     legend: {
                    position: 'bottom',
                },
    maintainAspectRatio: false,  //you can set container height, to make it shorter

    scales: {
      yAxes: [{
        //display: true,
        //stacked: true,
        
          ticks: {
              max: 2200,
              min: 1000,
              //stepSize: 200
          }
      }]
    },//end scales
    
    title: {
      display: true,
      text: ['Cumulative Total Return Comparison', '(Assumes $1,000 investment on 12/31/13 with dividends reinvested)', ' '],
      fontSize: 16,
      fontStyle: 'normal'
    },
    
    tooltips: {
          callbacks: {
                label: function(tooltipItem, data) {
                    var value = data.datasets[1].data[tooltipItem.index];
                    if(parseInt(value) >= 1000){
                               return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            } else {
                               return '$' + value;
                            }
                }
          } // end callbacks:
    }, //end tooltips

  }


};


// const context = canvas.getContext("2d");
 
new Chart("linechart", chartObj);








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


/////////////////////////////////////////////////




  

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