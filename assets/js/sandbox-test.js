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
    },
    plugins: {
      deferred: {
        xOffset: 150  // defer until 150px of the canvas width are inside the viewport
        // yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
        // delay: 500      // delay of 500 ms after the canvas is considered inside the viewport
      }
    }


  },


};



