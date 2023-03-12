option = {
    legend: {
        data: ['Forest', 'Steppe', 'Desert', 'Wetland']
    },
    xAxis: [{
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            show: true,
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            }

        },
        {
            show: true,
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            gridIndex: 1
        },
        {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            gridIndex: 2
        }
    ],
    yAxis: [{
            type: 'value',
            splitLine: {
                lineStyle: {
                    type: 'dash'
                }
            },
            // boundaryGap : false
            axisLabel: {
                showMaxLabel: false,
                showMinLabel: false
            },
            axisLine: {
                // show: false
            },
            axisTick: {
                show: false
            },
            nameLocation: 'center',
            nameGap: 30
        },
        {
            type: 'value',
            gridIndex: 1,
            nameLocation: 'middle',
            axisLabel: {
                showMaxLabel: false,
                showMinLabel: false
            },
        },
        {
            type: 'value',
            gridIndex: 2,
            axisLabel: {
                showMaxLabel: false,
                showMinLabel: false
            },
        }
    ],
    grid: [{
            top: '60',
            bottom: '557',
            show: false,
        }, {
            top: '350',
            show: false,
            bottom: '308'
        },
        {
            top: '597',
            show: false,
            bottom: '60'
        }
    ],
    series: [{
            name: 'Forest',
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
        },
        {
            name: 'Steppe',
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1
        },
        {
            name: 'Desert',
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            xAxisIndex: 2,
            yAxisIndex: 2
        }
    ]
};