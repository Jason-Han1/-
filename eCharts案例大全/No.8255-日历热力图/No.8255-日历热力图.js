var getData = [{
        day: '2020-01-01',
        count: 16
    },
    {
        day: '2020-01-02',
        count: 61
    },
    {
        day: '2020-01-03',
        count: 26
    },
    {
        day: '2020-01-04',
        count: 62
    },
    {
        day: '2020-01-05',
        count: 36
    },
    {
        day: '2020-01-06',
        count: 64
    },
    {
        day: '2020-01-07',
        count: 56
    },
    {
        day: '2020-01-08',
        count: 66
    },
    {
        day: '2020-01-09',
        count: 67
    },
    {
        day: '2020-01-10',
        count: 69
    },
    {
        day: '2020-01-11',
        count: 60
    },
    {
        day: '2020-01-12',
        count: 11
    },
    {
        day: '2020-01-13',
        count: 23
    },
    {
        day: '2020-01-14',
        count: 34
    },
    {
        day: '2020-01-15',
        count: 41
    },
    {
        day: '2020-01-16',
        count: 51
    },
    {
        day: '2020-01-17',
        count: 13
    },
    {
        day: '2020-01-18',
        count: 6
    },
    {
        day: '2020-01-19',
        count: 65
    },
    {
        day: '2020-01-20',
        count: 0
    },
    {
        day: '2020-01-21',
        count: 1
    },
    {
        day: '2020-01-22',
        count: 2
    },
    {
        day: '2020-01-23',
        count: 77
    },
    {
        day: '2020-01-24',
        count: 77
    },
    {
        day: '2020-01-25',
        count: 89
    },
    {
        day: '2020-01-26',
        count: 34
    },
    {
        day: '2020-01-27',
        count: 22
    },
    {
        day: '2020-01-28',
        count: 26
    },
    {
        day: '2020-01-29',
        count: 36
    },
    {
        day: '2020-01-30',
        count: 76
    },
    {
        day: '2020-01-31',
        count: 16
    },
    {
        day: '2020-02-01',
        count: 16
    }
]
var data1 = []
for (var i = 0; i < getData.length; i++) {
    data1.push([getData[i].day, getData[i].count])
}
option = {
    backgroundColor: '#1D1D2D',
    tooltip: {
        trigger: 'item',
        formatter: '{a}<br/>{c}'
    },
    calendar: [{
        top: 90,
        left: 'center',
        range: [data1[0][0], data1[data1.length - 1][0]],
        orient: 'vertical',
        cellSize: 70,
        itemStyle: {
            color: '#1D1D2D'
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#204371',
                width: 5,
                type: 'solid'
            }
        },
        yearLabel: {
            margin: 60,
            show: false,
            color: '#ffffff'
        },
        monthLabel: {
            show: false,
            firstDay: 1,
            nameMap: 'cn',
            margin: 30,
            color: '#ffffff'
        },
        dayLabel: {
            firstDay: 1,
            nameMap: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
            textStyle: {
                color: '#ffffff'
            }
        }
    }],
    series: [{
        name: '预警统计',
        type: 'effectScatter',
        coordinateSystem: 'calendar',
        data: data1,
        symbolSize: function(val) {
            val = val[1] / 5
            val = val < 5 ? 5 : Math.min(val, 30)
            return val
        },
        itemStyle: {
            normal: {
                color: '#f4e925'
            }
        },
        label: {
            show: true,
            formatter(params) {
                return params.value[0].split('-')[2]
            },
            offset: [25, -20],
            color: '#ffffff'
        }
    }]
}