option = {
    xAxis: [{
        type: 'category',
        data: ['2021-01-01', '2021-01-02', '2021-01-03', '2021-01-04',
        '2021-01-05', '2021-01-06', '2021-01-07']
    },
    {
        type: 'category',
        bottom:20,
         axisLine: {onZero: true},
        data: ['2021-03-01', '2021-03-02', '2021-03-03', '2021-03-04',
        '2021-03-05', '2021-03-06', '2021-03-07', '2021-03-07'],
        position:"bottom",
        offset:50
    }],
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
        xAxisIndex:0
    },
    {
        data: [150, 230, 224, 218, 135, 147, 260,202],
        type: 'line',
        xAxisIndex:1
    }]
};