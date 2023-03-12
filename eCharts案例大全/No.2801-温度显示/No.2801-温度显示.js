option = {
    backgroundColor: '#031529',
    color: '#66b41d',
    series: [
        {
            type: 'gauge',
            min: -10,
            max: 60,
            pointer: {
                show: false,
            },
            progress: {
                show: true,
                width: 22,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: true,
                color: '#464646',
                fontSize: 14,
                distance: -35,
                formatter: function (value) {
                    if (value === -10) {
                        return -10;
                    } else if (value === 25) {
                        return 25;
                    } else if (value === 60) {
                        return 60;
                    }
                },
            },
            axisLine: {
                lineStyle: {
                    color: [[1, '#0d2948']],
                },
            },
            anchor: {
                show: false,
                showAbove: true,
            },
            title: {
                show: true,
                color: '#fff',
                fontSize: 18,
                offsetCenter: ['0', '50%'],
            },
            detail: {
                valueAnimation: true,
                fontSize: 48,
                offsetCenter: ['0', '0'],
                color: '#fff',
            },
            data: [
                {
                    name: '温度(℃)',
                    value: 26,
                },
            ],
        },
    ],
};
