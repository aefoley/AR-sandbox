
// var labels = ["2013", "2014", "2015", "2016", "2017", "2018"];
// var valOne = [15, 35, 22, 42, 48];
// var valTwo = [8, 20, 29, 35, 50];

// var config = {
//   type: 'line',
//   datasets: [{
//     label: 'Dataset One',
//     data: valOne,
//     backgroundColor: '#ffcccc',
//     borderColor: '#ff9999',
//     borderWidth: 3,
//     lineTension: 0,
//     pointRadius: 1,
//   },
//   {
//     label: 'Dataset Two',
//     data: valTwo,
//     backgroundColor: '#33ccff',
//     borderColor: '#3399ff',
//     borderWidth: 3,
//     lineTension: 0,
//     pointRadius: 1,
//   }]

// }

// var ctx = document.getElementById('testChart').getContext('2d');

// var newChart = Chart(ctx, config);

var ctx = document.getElementById('testChart');
var myChart = new Chart(ctx, {
    type: 'line',
    maintainAspectRatio: false,  //you can set container height, to make it shorter
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
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});