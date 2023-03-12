option = {
    series: [{
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        splitNumber: 100,
        axisLine: {
            lineStyle: {
                width: 80,
                color: [
                    [0.6, '#ccc'],
                    [0.70, '#FDDD60'],
                    [0.85, '#58D9F9'],
                    [1, '#7CFFB2']
                ]
            }
        },
        pointer: {
            width: 10,
            itemStyle: {
                color: 'auto'
            }
        },
        axisTick: {
            show: false,
            length: 12,
            lineStyle: {
                color: 'auto',
                width: 10
            }
        },
        splitLine: {
            show: false,
            length: 20,
            lineStyle: {
                color: 'auto',
                width: 5
            }
        },
        axisLabel: {
            color: '#464646',
            fontSize: 20,
            distance: 0,
            formatter: function (value) {
                if (value === 94) {
                    return '优秀';
                }
                else if (value === 80) {
                    return '良好';
                }
                else if (value === 67) {
                    return '一般';
                }
                else if (value === 30) {
                    return '较差';
                }
            }
        },
        title: {
            offsetCenter: ['-20%', '30%'],
            fontSize: 30
        },
        detail: {
            fontSize: 50,
            offsetCenter: ['30%', '30%'],
            valueAnimation: true,
            formatter: function (value) {
                return Math.round(value);
            },
            color: 'red'
        },
        data: [{
            value: 70,
            name: '整体满意度'
        }]
    }]
};