option = {
    series: [
        {
            name: '内环',
            type: 'gauge',
            splitNumber: 100,
            radius: '30%',
            center: ['50%', '50%'],
            startAngle: 0,
            endAngle: 360,
            detail: {
                show: true,
                formatter: '{value}%',
                offsetCenter: ['0', '0%'],
                fontWeight: 'bold',
                fontSize: 40,
                color: '#17bbf0',
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: [[1, '#17bbf0']],
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                length: 20,
                lineStyle: {
                    color: 'auto',
                    // width: 2.5,
                },
            },
            axisLabel: {
                show: false,
            },
            title: {
                show: false,
            },
            pointer: {
                show: false,
            },
            data: [
                {
                    value: 40,
                },
            ],
        },
    ],
};
