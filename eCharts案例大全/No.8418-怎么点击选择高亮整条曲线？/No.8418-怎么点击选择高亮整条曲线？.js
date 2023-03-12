option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
            type: 'line',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            type: 'line',
            data: [120, 282, 291, 134, 190, 230, 110]
        },
        {
            type: 'line',
            data: [160, 262, 261, 174, 130, 270, 10]
        }
    ]
};
myChart.on('click', 'series', function(params) {

    for (var i = 0; i < 3; i++) {
        if (i == params.seriesIndex)
            option.series[i].color = 'red';
        else
            option.series[i].color = 'gray';
    }
    myChart.setOption(option);


});