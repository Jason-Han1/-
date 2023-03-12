option = {
    grid: [{
            x: '7%',
            y: '10%',
            show: true,

            width: '100%',
            height: '38%',
            left: '5%'
        }, {
            x: '7%',
            y: '10%',
            width: '100%',
            height: '38%',
            left: '5%',
            top: '48%',
        },

    ],
    tooltip: {
        formatter: 'Group {a}: ({c})'
    },
    xAxis: [{
            gridIndex: 0,
            type: 'category',
            axisLine: {
                onZero: true
            },
            data: [1, 2, 3, 4, 5, 6, 7]
        }, {
            gridIndex: 1,
            min: 0,
            max: 20,
            axisLabel: {
                show: false
            }, //不显示坐标值
            splitLine: {
                show: false
            }, //不显示区域分割线
            axisTick: {
                show: false
            }, //不显示刻度
            type: 'value'
        },

    ],
    yAxis: [{
            gridIndex: 0,
            type: 'value',
            min: 0,
            max: 15,
            axisLabel: {
                formatter: function(value, index) {
                    return value >= 0 ? value : '';
                },

            }
        },

        {
            gridIndex: 1,
            top: '100',
            type: 'category',
            axisTick: {
                show: false
            }, //不显示刻度
            data: ['CPU', 'DISK', 'MEM'],


        },

    ],
    series: [{
        name: 'I',
        type: 'line',
        xAxisIndex: 0,
        yAxisIndex: 0,
        data: [1, 2, 3, 4, 5]

    }, {
        name: 'II',
        type: 'bar',
        barWidth: 20,
        xAxisIndex: 1,
        yAxisIndex: 1,
        label: {
            normal: {
                show: true,
                position: 'right',
            }
        },
        data: [2, 4, 5, ]

    }, ]
};