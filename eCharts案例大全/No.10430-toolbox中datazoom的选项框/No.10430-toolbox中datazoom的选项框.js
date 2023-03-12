option = {
    title: {
        text: 'Awesome Chart'
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
        }
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310]
    }]
};