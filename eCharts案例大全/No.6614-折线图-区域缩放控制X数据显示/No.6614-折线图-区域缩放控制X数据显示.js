var timeData = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
option = {
    title: {
        text: 'Awesome Chart'
    },
    xAxis: {
        data: timeData
    },
    dataZoom:[{startValue:'Fri',endValue:'Sat'}],
    yAxis: {},
    series: [{
        type: 'line',
        data: [220, 182, 191, 234, 290, 330, 310]
    }]
};