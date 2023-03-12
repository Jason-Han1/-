option = {

    xAxis: [{
        type: 'category',
        axisLine: {
            lineStyle: {
                color: '#65C6E7'
            }
        },
        axisLabel: {
            fontSize: 14
        },
        data: ['铰接车', '大型车', '小型车', '摩托车', '非机动车', ],
    }],
    yAxis: [{
        type: 'value',
        min: 0,
        splitLine: {
            lineStyle: {
                color: '#65C6E7'
            }
        },
        splitNumber: 5,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            fontSize: 14,
            color: '#65C6E7'
        },

    }],
    series: [{
        z: 1,
        name: '平峰',
        type: 'bar',

        data: [0, 0, 0, 0]

    }]
}