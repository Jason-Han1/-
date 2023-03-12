option = {
    backgroundColor: '#ffc107', //背景色
    grid: {
        left: 'left',
        right: '0',
        bottom: '0'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        show: false
    },
    yAxis: {
        type: 'value',
        show: false
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        symbolSize: 8,   //设定实心点的大小
        type: 'line',
        areaStyle: {
            opacity: 0.4
        },
        itemStyle: {
            normal: {
                color: '#fff',
                lineStyle: {
                    color: '#fff',
                    opacity: 0.8
                    
                }
            },
        },

    }]
};