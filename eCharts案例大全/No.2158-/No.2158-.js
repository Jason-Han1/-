option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: {
            show: true,
            lineStyle: {
                color: '#626c85',
            },
        },
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#626c85',
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: [5, 10],
                dashOffset: 5,
                color: '#626c85',
            },
        },
    },
    series: [
        {
            data: [99, 88, 55, 66, 77, 44],
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                    offset: 0,
                    color: '#52C3FE',
                },
                {
                    offset: 1,
                    color: '#0D57C7',
                },
            ]),
            type: 'bar',
        },
    ],
};
