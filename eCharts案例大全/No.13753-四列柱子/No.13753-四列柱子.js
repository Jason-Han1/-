option = {
    legend: {},
    tooltip: {},
    dataset: {
        source: [
            ['product', '2012', '2013', '2014', '2015'],
            ['aaaaa', 86.5, 92.1, 85.7, 83.1],
            ['wewe', 24.1, 67.2, 79.5, 70.4],
            ['Cheese', 24.1, 67.2, 79.5, 56.4],
            ['Coc3oa', 24.1, 67.2, 79.5, 86.4]
        ]
    },
    xAxis: [{
            gridIndex: 0,
            max: 86.5,
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false
            }
        },
        {
            gridIndex: 1,
            max: 92.1,
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false
            }
        },
        {
            gridIndex: 2,
            max: 85.7,
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false
            }
        },
        {
            gridIndex: 3,
            max: 86.4,
            axisTick: {
                show: false,
            },
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false
            }
        }
    ],
    yAxis: [{
            type: 'category',
            gridIndex: 0,
            axisTick: {
                show: false,
            }
        },
        {
            type: 'category',
            gridIndex: 1,
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
            }
        },
        {
            type: 'category',
            gridIndex: 2,
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
            }
        },
        {
            type: 'category',
            gridIndex: 3,
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
            }
        },
    ],
    grid: [{
        left: 50,
        right: '78%',
        bottom: '50%'
    }, {
        left: '25%',
        right: '53%',
        bottom: '50%'
    }, {
        left: '50%',
        right: '28%',
        bottom: '50%'
    }, {
        left: '75%',
        right: 50,
        bottom: '50%'
    }],
    series: [{
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0
        },
        {
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1
        },
        {
            type: 'bar',
            xAxisIndex: 2,
            yAxisIndex: 2
        },
        {
            type: 'bar',
            xAxisIndex: 3,
            yAxisIndex: 3
        }
    ]
};