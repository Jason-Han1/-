option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value',
        interval : 100,
    },
    series: [{
        data: [99, {
            value: 89,
            itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#D92B2A',
              },
              {
                offset: 1,
                color: '#FC8888',
              },
            ]),
            }
        }, 88, 55, 66, 77, 44],
        
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: '#0D57C7',
              },
              {
                offset: 1,
                color: '#52C3FE',
              },
            ]),
        type: 'bar'
    }]
};