option = {
    backgroundColor: 'transparent',
    series: [{
        type: 'gauge',
        name: '业务指标',
        radius: '70%',
        startAngle: '0',
        endAngle: '-359.99',
        splitNumber: '240',
        pointer: {
            show: false
        },
        title: {
            show: false
        },
        detail: {
            show: false
        },
        data: [{
            value: 0,
            name: ''
        }],
        axisLine: {
            show: false,
            lineStyle: {
                color: [
                    [1, new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                        offset: 0,
                        color: 'rgba(4, 234,255, 1)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(74, 87,254, 1)'
                    }, {
                        offset: 1,
                        color: 'rgba(59, 119,254, 1)'
                    }])]
                ],
                width: 20,
                opacity: 1
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            length: 20,
            lineStyle: {
                color: 'rgba(255,255,255,1)',
                width: 2,
                type: 'solid',
            },
        },
        axisLabel: {
            show: false
        }
    }]
};