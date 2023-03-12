option = {
    tooltip:{},
    color: ['#59f'],
    xAxis: [{
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        offset: 20,
        axisTick:{
            length: 20
        }
    },
    {
        type: 'category',
        data: ['1', '2', '3', '1', '2', '3', '1','2', '3', '1', '2', '3', '1', '2', '3', '1','2', '3'],
        position: 'bottom'
    }],
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320,820, 932, 901, 934, 1290, 1330, 1320,820, 932,  1320, 22],
        type: 'bar',
        xAxisIndex: 1
    }]
};
