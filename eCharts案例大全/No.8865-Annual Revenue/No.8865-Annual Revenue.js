option = {
     title: {
        text: 'Annual Revenues',
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
        data: ['2017', '2018', '2019', '2020'],
        axisPointer: {
            type: 'shadow'
        }
    }],
    yAxis: [{
            type: 'value',
            name: 'Revenue',
            min: 0,
            max: 15000000,
            interval: 3000000,
            axisLabel: {
                formatter: '￥{value}'
            }
        },
        {
            type: 'value',
            name: 'Hold',
            min: 0,
            max: 4.00,
            interval: 0.8,
            axisLabel: {
                formatter: '{value}%'
            }
        }
    ],
    series: [{
            name: 'Revenue',
            type: 'bar',
            data: [11600000, 12800000, 12600000, 1200000]
        },
        {
            name: 'Hold',
            type: 'line',
            yAxisIndex: 1,
            data: [3.8, 3.7, 3.6, 3.7]
        }
    ]
};