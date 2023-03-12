option = {
    title: {
        text: 'Awesome Chart'
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {
        min: 0,
        max: 2000
    },
    series: [{
            type: 'line',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            type: 'line',
            data: [221, 282, 311, 245, 390, 230, 410]
        }
    ]
};