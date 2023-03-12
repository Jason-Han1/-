option = {
    tooltip: {
        formatter: "{c}%"
    },
    series: [{
            name: '优化率',
            radius: '80%',
            startAngle: 180,
            endAngle: 0,
            splitNumber: '4',
            center: ['50%', '70%'],
            axisLine: {
                lineStyle: {
                    width: 10,
                    color: [
                        [0.35, '#ef4764'],
                        [0.35, '#2ec259'],
                        [1, '#2ec259']
                    ]
                }
            },
            splitLine: {
                show: false,
                length: 20,
                lineStyle: {
                    color: '#999',
                    width: 1
                }
            },
            axisTick: {
                show: false,
                length: 20
            },
            axisLabel: {
                distance: 2,
                color: '#999'
            },
            pointer: {
                length: '50%',
                width: 6
            },
            itemStyle: {
                color: '#E6E6E6'
            },
            type: 'gauge',
            detail: {
                formatter: '{value}%',
                fontWeight: '200',
                fontSize: 14,
                offsetCenter: [0, '30%']
            },
            data: [{
                value: 87.5,
                name: ''
            }]
        }

    ]
};