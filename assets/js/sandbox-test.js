var ctx = document.getElementById('myChart');

var myChart = new Chart(ctx, {
    type: 'line',
     data: {
        labels: ["2013", "2014", "2015", "2016", "2017", "2018"],

        datasets: [{
            label: 'Dataset One',
            data: [15, 35, 22, 42, 48],
            fill:false,
            backgroundColor: '#ffcccc',
            borderColor: '#ff9999',
            borderWidth: 3,
            lineTension: 0,
            pointRadius: 1,
            },
            {
              label: 'Dataset Two',
              data: [8, 20, 29, 35, 50],
              fill:false,
              backgroundColor: '#33ccff',
              borderColor: '#3399ff',
              borderWidth: 3,
              lineTension: 0,
              pointRadius: 1,
            }

        ]
    },
    options: {
        legend: {
                    position: 'bottom',
                },
    
scales: {
        yAxes: [{
            ticks: {
                max: 100,
                min: 0,
                stepSize: 10
            }
        }]
    }
  }
});



