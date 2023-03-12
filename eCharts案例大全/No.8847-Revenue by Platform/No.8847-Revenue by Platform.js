option = {
    title: {
        text: 'Revenue by Platform',
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
        data: ['OG', 'AG', 'AB', 'PT', 'HB'],
        axisPointer: {
            type: 'shadow'
        }
    }],
    yAxis: [{
            type: 'value',
            name: 'Revenue',
            min: 0,
            max: 50000,
            interval: 10000,
            axisLabel: {
                formatter: '￥{value}'
            }
        },
        {
            type: 'value',
            name: 'Hold',
            min: 0,
            max: 20,
            interval: 4,
            axisLabel: {
                formatter: '{value}%'
            }
        }
    ],
    series: [{
            name: 'Revenue',
            type: 'bar',
            data: [18000, 38000, 10000, 35000, 46000]
        },
        {
            name: 'Hold',
            type: 'line',
            yAxisIndex: 1,
            data: [10, 8, 15, 10, 18]
        }
    ]
};