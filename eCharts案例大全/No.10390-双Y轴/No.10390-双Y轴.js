option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: [{
        type: 'value',
        name: 's1'
    },
    {
        type: 'value',
        name: 's2'
    }
    ],
    series: [{
        name: 's1',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        yAxisIndex: 0
    },
    {
        name: 's2',
        data: [10, 14, 16, 20, 49, 30, 32],
        type: 'line',
        yAxisIndex: 1
    }]
};
