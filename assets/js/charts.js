
Chart.defaults.global.elements.line.fill = false;


Chart.scaleService.updateScaleDefaults('linear', {
    ticks: {
        callback: function (value, index, values) {
            return '$' + value.toLocaleString();
        }
    }
});
/* ========================================= LINE CHART ======================================== */


var ctx = document.getElementById("linechart");

var config = {
  type: 'line',
  data: {
    labels: ["2013", "2014", "2015", "2016", "2017", "2018"],
    datasets: [
      {
        label: 'MGEE',
        data: [1000, 1230, 1280, 1890, 1860, 1750],
        fill:false,
        backgroundColor:"green", //fill color of bars
        borderColor:"green",
        borderWidth: 3,
        lineTension: 0,
        pointRadius: 1     
      },{
        label: 'S&P 500',
        data: [1000, 1140, 1160, 1305, 1610,1540],
        fill:false,
        backgroundColor:'maroon',
        borderColor:'maroon',
        borderWidth: 3,
        lineTension: 0,
        pointRadius: 1 
      },{
        label: 'EEI Investor-Owned Electrics',
        data: [1000, 1305, 1240, 1480, 1660, 1730],
        fill:false,
        backgroundColor:"#fcc201", //fill color of bars
        borderColor:"#fcc201",
        borderWidth: 3,
        lineTension: 0,
        pointRadius: 1
      },{
        label: 'Russel 2000',
        data: [1000, 1040, 1010, 1220, 1410, 1250],
        fill:false,
        backgroundColor:"#545F9E", //fill color of bars
        borderColor:"#545F9E",
        borderWidth: 3,
        lineTension: 0,
        pointRadius: 1
      }
    ]//datasets
  },
  
  options: {
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
    },
    plugins: {
      deferred: {
        yOffset: 350 // defer until 50% of the canvas height are inside the viewport
      }
    }//plugins
  }


};

var chart = new Chart(ctx, config);


/* ========================================= BAR CHART ======================================== */


var ctx2 = document.getElementById("barChart");

var config2 = {
  type: 'bar',
  data: {
    labels: ['2014', '2015', '2016', '2017', '2018'],
    datasets: [{
        data: [2.32, 2.06, 2.18, 2.82, 2.43],
        backgroundColor: [
          'rgba(105, 158, 115, 1)',
          'rgba(105, 158, 115, 1)',
          'rgba(105, 158, 115, 1)',
          'rgba(105, 158, 115, 1)',
          'rgba(0, 111, 81, 1)'
        ],
     }
    ]//datasets
  }, 
  
  options: {
    showAllTooltips: true,

    legend: {
        display: false,
               
    },
    maintainAspectRatio: false,  //you can set container height, to make it shorter

    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                stepSize: 1
            }
        }]
    },
    
    title: {
        display: true,
        text: ['Earnings Per Share', '(2014 - 2018)', ' '],
        fontSize: 16,
        fontStyle: 'normal'
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
        },
    },

    plugins: {
      deferred: {
        yOffset: 350 // defer until 50% of the canvas height are inside the viewport
      }
    }//plugins
  },
};



var chart2 = new Chart(ctx2, config2);



//Animate pullout chart in connections on click
(function(){ // self calling function replaces document.ready()
    document.querySelector('#chart-click').addEventListener('click',function(){
      setTimeout(function(){
        var ctx = document.getElementById("pieChart");

          var config = {
            type: 'pie',
            data: {
                labels: ["Coal", "Natural Gas", "Nuclear", "Other Renewables", "Hydroelectric", "Petroleum (only 2 GWh)"],
                datasets: [{
                  label: "Wisconsin power sources, 2015",
                  backgroundColor: ["#F2C311", "#E94D3B","#18BD9C","#3598DC","#9D57B5", "#333"],
                  data: [2503,897,865,285,170,2]
                }]
              },
              options: {
                title: {
                  display: true,
                  text: "Wisconsin power sources, 2015"
                },
                legend: {
                  position:'bottom'
                  }
              }
          };

          var chart = new Chart(ctx, config);
      }, 800);

      });
})();




