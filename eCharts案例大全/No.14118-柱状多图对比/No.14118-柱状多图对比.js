option = {
    grid: [
        {
            top: 50,
            width: '50%',
            bottom: '45%',
            left: 0,
            containLabel: true
        }, {
            top: 50,
            width: '50%',
            bottom: '45%',
            left: '50%',
            containLabel: true
        }, {
            top: 50,
            width: '100%',
            bottom: '45%',
            left: '0%',
            containLabel: true
        }
    ],
    xAxis: [
        {
            type: 'category',
            gridIndex: 0,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                show: false
            }
        },
        {
            type: 'category',
            gridIndex: 1,
            data: ['Sun', 'Sat',  'Fri', 'Thu', 'Wed','Tue','Mon' ],
            axisTick: {
                show: false
            }
        },
        {
            type: 'category',
            gridIndex: 2,
            data: ['.'],
            axisLabel: {
                show: true,
                color: 'rgba(0, 0, 0, 0)'
            },
            axisTick: {
                show: false
            }
        } 
    ],
    yAxis: [
        {
            type: 'value',
            gridIndex: 0,
            show: false
        },
        {
            type: 'value',
            gridIndex: 1,
            show: false
        },
        {
            type: 'value',
            gridIndex: 2,
            show: false
        }
    ],
    series: [
        {
            data: [60, 70, 80, 95, 110, 120, 130],
            type: 'bar',
             gridIndex: 0,
            xAxisIndex: 0,
            yAxisIndex: 0,
        },
        {
            data: [130, 120, 110, 95, 80, 70, 60],
            type: 'bar',
             gridIndex: 1,
             xAxisIndex: 1,
            yAxisIndex: 1,
        },
        {
            data: [],
            type: 'bar',
             gridIndex: 2,
             xAxisIndex: 2,
            yAxisIndex: 2,
        },
    ]
};
