
var data = {
    labels: [
        "Red",
        "Blue",
        "Yellow"
    ],
    datasets: [
        {
            data: [300, 50, 100],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
};

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
    if (isScrolledIntoView('#canvas')) {
        if (inView) { return; }
        inView = true;
        new Chart(
            document.getElementById("canvas").getContext("2d"),
            {type: 'pie', data: data });
    } else {
        inView = false;  
    }
});



















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



