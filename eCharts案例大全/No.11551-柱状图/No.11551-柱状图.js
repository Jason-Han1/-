option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        itemStyle: {
            barBorderRadius: [50,50,0,0],
            color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#8dd670'},
                        {offset: 1, color: '#0abdb4'}
                    ]
                ),
        emphasis: {
            color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                     {offset: 0, color: '#8dd679'},
                     {offset: 1, color: '#067b76'}
                ]
            )
        },
        },
    },]
};
