option = {
    tooltip: {
        trigger: 'axis',
        /*axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }*/
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    visualMap: {
        show: false,
        type: 'piecewise',
        seriesIndex: 0, //控制series 对应的区域
        pieces: [{
            gt: 920,
            color: 'green'
        }, {
            gt: 0,
            lt: 920,
            color: 'red'
        }]
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        smooth: true,
        type: 'line'
    }]
};