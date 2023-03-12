option = {
     animation: true,
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    dataZoom: [
        {
            type: 'slider',
            show: true,
            xAxisIndex: [0],
            start: 1,
            end: 35
        },
       
    ],
    series: [{
        type: 'line',
        data:[220, 182, 191, 234, 290, 330, 310]
    }]
};