option = {
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },
    series: [{
        name: '',
        type: 'gauge',
        center: ['50%', '25%'], // 默认全局居中
        radius: '40%',
        axisLine: {
            show: false,
            lineStyle: { // 属性lineStyle控制线条样式
                color: [
                    [0.8, '#0193cf'],
                    [1, 'rgba(1, 147, 207, 0.3)']
                ],
                width: 10
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        pointer: {
            show: false,
            length: '0',
            width: '0'
        },
        detail: {
            formatter: '{value}%',
            offsetCenter: [0, '5%']
        },
        data: [{
            value: 80,
            label: {
                textStyle: {
                    fontSize: 12
                }
            }
        }]
    }, {
        name: '',
        type: 'gauge',
        center: ['25%', '75%'], // 默认全局居中
        radius: '40%',
        axisLine: {
            show: false,
            lineStyle: { // 属性lineStyle控制线条样式
                color: [
                    [0.8, '#02000c'],
                    [1, 'rgba(2, 0, 12, 0.3)']
                ],
                width: 10
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        pointer: {
            show: false,
            length: '0',
            width: '0'
        },
        detail: {
            formatter: '{value}%',
            offsetCenter: [0, '5%']
        },
        data: [{
            value: 80,
            label: {
                textStyle: {
                    fontSize: 12
                }
            }
        }]
    }, {
        name: '',
        type: 'gauge',
        center: ['75%', '75%'], // 默认全局居中
        radius: '40%',
        axisLine: {
            show: false,
            lineStyle: { // 属性lineStyle控制线条样式
                color: [
                    [0.8, '#b6c0c9'],
                    [1, 'rgba(154, 171, 184, 0.3)']
                ],
                width: 10
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        pointer: {
            show: false,
            length: '0',
            width: '0'
        },
        detail: {
            formatter: '{value}%',
            offsetCenter: [0, '5%']
        },
        data: [{
            value: 80,
            label: {
                textStyle: {
                    fontSize: 12
                }
            }
        }]
    }]
};