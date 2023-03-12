option = {
    xAxis: {
        type: 'category',
        data: ['Mon']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [120],
        type: 'bar',
        itemStyle: {
               normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                       offset: 0,
                       color: '#ae0066'
                   }, {
                       offset: 0.25,
                       color: '#ae0066'
                   },
                   {
                       offset: 0.25,
                       color: 'red'
                   },
                   {
                       offset: 0.5,
                       color: 'red'
                   },
                   {
                       offset: 0.5,
                       color: 'yellow'
                   },
                   {
                       offset: 0.75,
                       color: 'yellow'
                   },
                   {
                       offset: 0.75,
                       color: 'grey'
                   },
                   {
                       offset: 1,
                       color: 'grey'
                   }
                   ])
               }
           }
    }]
};
