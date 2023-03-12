option = {
    backgroundColor: '#fff',
    color: ['#37A2DA'],
    xAxis: [{
        show: true,
        axisLabe: {
            fontSize: 16,
        },
        axisLine: {
            lineStyle: {
                color: '#999',
            }
        },
        data: ['A', 'B', 'C', 'D', 'E'],
        axisPointer: {
            type: 'shadow'
        },
    }],

    yAxis: [{
            type: 'value',
            axisLabel: {
                fontSize: 16,
            },
            axisLine: {
                lineStyle: {
                    color: '#999'
                }
            },
            min: 0,
            max: 30,
            interval: 10,

        },

    ],
    series: [{
        type: 'bar',
        barWidth: '64%',
        data: [{
                value: 28,
            },
            {
                value: 19,
            },
            {
                value: 25,
            }, {
                value: 12,
            }, {
                value: 15,
            },
        ]
    }, ]
};