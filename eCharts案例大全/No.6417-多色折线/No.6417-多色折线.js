option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, null, 934, 1290, 1330, 1320],
        type: 'line',
        showSymbol: false
    }, {
        data: [null, 932, 901, 934, null, null, null],
        type: 'line',
        showSymbol: false
    }]
};
