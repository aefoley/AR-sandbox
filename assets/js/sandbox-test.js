
Chart.scaleService.updateScaleDefaults('linear', {
    ticks: {
        callback: function (value, index, values) {
            return '$' + value.toLocaleString();
        }
    }
});

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
    if (isScrolledIntoView('#myChart')) {
        if (inView2) { return; }
        inView2 = true;
        new Chart('myChart', {
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



