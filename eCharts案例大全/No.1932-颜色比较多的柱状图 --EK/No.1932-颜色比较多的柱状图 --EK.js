option = {
    backgroundColor: '#132759',
    xAxis: [
        {
            type: 'category',
            data: [
                {
                    value: '奖学金1',
                    textStyle: {
                        color: '#f3605e',
                    },
                },
                {
                    value: '奖学金2',
                    textStyle: {
                        color: '#ed9d46',
                    },
                },
                {
                    value: '奖学金3',
                    textStyle: {
                        color: '#85c85e',
                    },
                },
                {
                    value: '奖学金4',
                    textStyle: {
                        color: '#4edbb3',
                    },
                },
                {
                    value: '奖学金5',
                    textStyle: {
                        color: '#00ccff',
                    },
                },
                {
                    value: '奖学金6',
                    textStyle: {
                        color: '#dc69aa',
                    },
                },
            ],
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                },
            },
            axisTick: false,
        },
        {
            type: 'category',
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'red',
                },
            },
            axisTick: false,
            splitLine: false,
            data: [
                {
                    value: 120,
                    textStyle: {
                        color: '#f3605e',
                    },
                },
                {
                    value: 200,
                    textStyle: {
                        color: '#ed9d46',
                    },
                },
                {
                    value: 150,
                    textStyle: {
                        color: '#85c85e',
                    },
                },
                {
                    value: 80,
                    textStyle: {
                        color: '#4edbb3',
                    },
                },
                {
                    value: 70,
                    textStyle: {
                        color: '#00ccff',
                    },
                },
                {
                    value: 110,
                    textStyle: {
                        color: '#dc69aa',
                    },
                },
            ],
        },
    ],
    yAxis: [
        {
            type: 'value',
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'solid',
                    color: '#3C548B',
                },
            },
        },
    ],
    series: [
        {
            type: 'bar',
            barWidth: 50,
            data: [
                {
                    value: 120,
                    itemStyle: {
                        color: '#f3605e',
                    },
                },
                {
                    value: 200,
                    itemStyle: {
                        color: '#ed9d46',
                    },
                },
                {
                    value: 150,
                    itemStyle: {
                        color: '#85c85e',
                    },
                },
                {
                    value: 80,
                    itemStyle: {
                        color: '#4edbb3',
                    },
                },
                {
                    value: 70,
                    itemStyle: {
                        color: '#00ccff',
                    },
                },
                {
                    value: 110,
                    itemStyle: {
                        color: '#dc69aa',
                    },
                },
            ],
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                        position: 'top',
                        textStyle: {
                            fontSize: 16,
                        },
                    },
                },
            },
            showBackground: true,
            backgroundStyle: {
                color: 'rgba(180, 180, 180, 0.2)',
            },
        },
    ],
};
