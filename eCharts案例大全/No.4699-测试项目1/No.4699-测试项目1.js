var option = {
    color: ['#4F78A5'],
    grid: [{
            x: '7%',
            y: '7%',
            width: '38%',
            height: '38%'
        },
        {
            x: '45%',
            y: '7%',
            width: '38%',
            height: '38%'
        }
    ],
    xAxis: [{
            gridIndex: 0,
            type: 'value'
        },
        {
            gridIndex: 1,
            type: 'value'
        },
    ],
    yAxis: [{
            gridIndex: 0,
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        {
            gridIndex: 1,
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
    ],
    series: [{
            name: 'bar1',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
        },
        {
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
        }
    ]
};