option = {
    title: {
        text: 'Revenue by Day',
        subtext: '',
        left: 'left'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    legend: {
        data: ['Revenue', 'Hold']
    },
    xAxis: [{
        type: 'category',
        data: ['2019-12-25', '2019-12-26', '2019-12-27', '2019-12-28', '2019-12-29', '2019-12-30', '2019-12-31', '2020-01-01', '2020-01-02'],
        axisPointer: {
            type: 'shadow'
        }
    }],
    yAxis: [{
            type: 'value',
            name: 'Revenue',
            min: 0,
            max: 30000,
            interval: 3000,
            axisLabel: {
                formatter: '￥{value}'
            }
        },
        {
            type: 'value',
            name: 'Hold',
            min: 0,
            max: 4.00,
            interval: 0.4,
            axisLabel: {
                formatter: '{value}%'
            }
        }
    ],
    series: [{
            name: 'Revenue',
            type: 'bar',
            data: [3000, 22000, 7200, 13000, 17000, 7000, 2000, 25000, 11000]
        },
        {
            name: 'Hold',
            type: 'line',
            yAxisIndex: 1,
            data: [3.7, 3.9, 3.5, 3.7, 3.6, 3.8, 3.1, 3.8, 3.6]
        }
    ]
};