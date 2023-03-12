option = {
color: ['#3398DB'],
    xAxis : [
        {
            type : 'category',
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        {
            type : 'category',
            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
    ],
    yAxis : [
        {
            type : 'value'
        },
        {
            type: 'value',
            axisLabel: {
                formatter: '{value} %'
            },
            min: 10, max: 80
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            // barWidth: '60%',
            data:[1000, -520, -2000, -3340, 3900, -330, -5220]
        },
        {
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: []
        }
    ]
}