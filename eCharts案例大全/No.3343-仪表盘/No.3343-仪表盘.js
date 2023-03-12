option = {
    series: [
        {
            type: 'gauge',
            progress: {
                show: true,
                width: 12,
            },
            itemStyle: {
                color: 'red',
            },
            pointer: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    width: 12
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                length: 5,
                distance: -15,
                lineStyle: {
                    width: 2,
                    color: '#999',
                },
            },
            axisLabel: {
                show: true,
                distance: -20,
                color: '#999',
                fontSize: 12,
            },
            anchor: {
                show: false,
                showAbove: true,
                size: 15,
                itemStyle: {
                    borderWidth: 5,
                },
            },
            title: {
                show: true,
                offsetCenter: [0, '-10%'],
                textStyle: {
                    fontSize: 15,
                    color: 'rgb(196,202,204)',
                },
            },
            detail: {
                valueAnimation: true,
                fontSize: 25,
                fontWeight: '400',
                color: 'rgb(51,51,51)',
                offsetCenter: [0, '40%'],
            },
            data: [
                {
                    value: 56.23,
                    name: '产量',
                },
            ],
        },
    ],
};
