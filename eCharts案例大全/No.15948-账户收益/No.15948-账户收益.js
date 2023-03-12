option = {
    title: {
        text: '账户收益',
        left: 'center'
    },
    xAxis: {
        boundaryGap: false,
        axisLine: {
            onZero: false
        },
        axisTick: {
            show: false  
        },
        data: ['04-18', '04-25', '05-02', '05-09', '05-16']
    },
    yAxis: {
        splitNumber: 6,
        axisLabel: {
            formatter: '{value} %'  
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    series: [{
        type: 'line',
        symbolSize: 10,
        data:[0, -1, 1, 1.8, 2.8]
    }, {
        type: 'line',
        symbolSize: 10,
        data:[0, -1.8, -1.2, -5, -4]
    }, {
        type: 'line',
        symbolSize: 10,
        data:[0, -3, -2, -7, -6]
    }]
};