option = {
    title: {
        text: '梯形条形图'
    },
    xAxis: {
        type: 'category',
        // boundaryGap: false,
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'line',
        step: 'start',
        data: [220, 182, 191, 234, 290, 330, 310]
    }]
};