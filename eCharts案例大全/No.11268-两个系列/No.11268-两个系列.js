option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'bar',
        data: [220, 182, '-', 234, 290, 330, 310],
        barWidth: '80%'
    }, {
        type: 'bar',
        data: ['-', '-', 200, '-', '-', '-', '-'],
        barWidth: '80%',
        barGap: '-100%'
    }]
};