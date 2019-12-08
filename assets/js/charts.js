
/* ========================================= LINE CHART======================================== */

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
          ticks: {
              max: 2200,
              min: 1000,
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
              var lbl = data.datasets[tooltipItem.datasetIndex].label || '';
                return lbl + ": $" + Number(tooltipItem.yLabel).toFixed(0).replace(/./g, function(c, i, a) {
                    return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
                });
            }
        }
    }

  }


};

//calls the line chart on scroll
var inView = false;

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}

$(window).scroll(function() {
    if (isScrolledIntoView('#linechart')) {
        if (inView) { return; }
        inView = true;
        new Chart("linechart", chartObj);
    } else {
        inView = false;  
    }
});




/* ========================================= BAR CHART ======================================== */

var inView2 = false;

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
}

$(window).scroll(function() {
    if (isScrolledIntoView('#barChart')) {
        if (inView2) { return; }
        inView2 = true;
        new Chart('barChart', {
            type: 'bar',
            data: {
                labels: ['2014', '2015', '2016', '2017', '2018'],
                datasets: [{
                     data: [2.32, 2.06, 2.18, 2.82, 2.43],
                    backgroundColor: [
                        'rgba(0, 111, 81, 1)',
                        'rgba(0, 111, 81, 1)',
                        'rgba(0, 111, 81, 1)',
                        'rgba(0, 111, 81, 1)',
                        'rgba(0, 111, 81, 1)'
                    ],
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            stepSize: 1
                        }
                    }]
                },
                legend: {
                    position: 'bottom',
                },
                title: {
                    display: true,
                    text: ['Earnings Per Share', '(2014 - 2018)', ' '],
                    fontSize: 16,
                    fontStyle: 'normal'
                },
                legend: {
                    display: false
                },
                tooltips: {
                   
                    displayColors: false,
            
                    callbacks: {
                        label: function(tooltipItem, data) {
                          var lbl = data.datasets[tooltipItem.datasetIndex].label || '';
                            return lbl + " $" + Number(tooltipItem.yLabel).toFixed(2).replace(/./g, function(c, i, a) {
                                return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
                            });
                        }
                    }
                }
            }
        });

    } else {
        inView2 = false;  
    }
});


new Chart(document.getElementById("pieChart"), {
    type: 'pie',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [2478,5267,734,784,433]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});

(function() { // self calling function replaces document.ready()

//adding event listenr to button
    document.querySelector('#pop-in-test').addEventListener('click',function(){

    chart.destroy();
    chart = new Chart(ctx, config);
});


