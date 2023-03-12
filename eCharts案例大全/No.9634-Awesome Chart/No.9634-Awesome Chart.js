option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    dataZoom: [{
        type: 'slider'
    }, {
        type: 'inside'
    }],
    series: [{
        type: 'bar',
        barWidth: '98%',
        barMaxWidth: 30,
        data:[220, 182, 191, 234, 290, 330, 310]
    }]
};