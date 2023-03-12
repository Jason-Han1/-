option = {
    title: {
        text: 'Revenue by Game',
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
        data: ['GAME_1', 'GAME_2', 'GAME_3', 'GAME_4', 'GAME_5', 'GAME_6', 'GAME_7', 'GAME_8', 'GAME_9', 'GAME_10'],
        axisPointer: {
            type: 'shadow'
        }
    }],
    yAxis: [{
            type: 'value',
            name: 'Revenue',
            min: -10000,
            max: 30000,
            interval: 5000,
            axisLabel: {
                formatter: '￥{value}'
            }
        },
        {
            type: 'value',
            name: 'Hold',
            min: 0,
            max: 4.00,
            interval: 0.5,
            axisLabel: {
                formatter: '{value}%'
            }
        }
    ],
    series: [{
            name: 'Revenue',
            type: 'bar',
            data: [22000, 5800, -7200, 13000, 17000, 7000, -2000, 25000, 11000, -8000]
        },
        {
            name: 'Hold',
            type: 'line',
            yAxisIndex: 1,
            data: [3.7, 3.9, 3.5, 3.7, 3.6, 3.8, 3.1, 3.8, 3.6, 3.9]
        }
    ]
};