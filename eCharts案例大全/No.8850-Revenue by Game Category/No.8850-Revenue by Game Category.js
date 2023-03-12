option = {
    title: {
        text: 'Revenue by Game Category',
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
        data: ['Baccarat', 'Roulette', 'Sicbo', 'Dragon Tiger', 'Texus', 'Black Jack', 'Bingo', 'Table Games', 'Lottery', 'Slots', 'Bingo', 'Video Poker'],
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
            min: -4,
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
            data: [22000, 5800, -7200, 13000, 17000, 7000, -2000, 25000, 11000, -8000, 6500, -2000]
        },
        {
            name: 'Hold',
            type: 'line',
            yAxisIndex: 1,
            data: [3.7, 3.9, 3.5, 3.7, 3.6, 3.8, 3.1, 3.8, 3.6, 3.9, -1.2,-3.5]
        }
    ]
};