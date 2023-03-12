option = {
    title: {
        text: 'Revenue by Brand',
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
        data: ['Casino_1', 'Casino_2', 'Casino_3', 'Casino_4'],
        axisPointer: {
            type: 'shadow'
        }
    }],
    yAxis: [{
            type: 'value',
            name: 'Revenue',
            min: 0,
            max: 100000,
            interval: 20000,
            axisLabel: {
                formatter: '￥{value}'
            }
        },
        {
            type: 'value',
            name: 'Hold',
            min: 0,
            max: 60,
            interval: 12,
            axisLabel: {
                formatter: '{value}%'
            }
        }
    ],
    series: [{
            name: 'Revenue',
            type: 'bar',
            data: [88000, 58000, 72000, 35000]
        },
        {
            name: 'Hold',
            type: 'line',
            yAxisIndex: 1,
            data: [30, 20, 50, 55]
        }
    ]
};