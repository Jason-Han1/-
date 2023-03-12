option = {
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'bar',
        barWidth:37,
        itemStyle:{
            normal: {
                borderWidth:1,
                borderColor:'#18CEE2',
                barBorderRadius: 28,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 1, 0,
                    [
                        {offset: 0, color: '#2dc3db'},
                        {offset: 1, color: '#0f88c0'}
                    ]
                )
            },
            emphasis: {
                barBorderRadius: 13,
                shadowBlur: 18,
                shadowColor: 'rgba(218,170, 58, 0.7)'
            }
        },
        data:[220, 182, 191, 234, 290, 330, 310]
    },{
            name:'a',
            tooltip:{
               show:false 
            },
            type: 'pictorialBar',
            itemStyle: {
                 normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 1, 0,
                        [
                            {offset: 0, color: '#2bc6dd'},
                            {offset: 1, color: '#18cde1'}
                        ]
                    ), 
                    borderWidth:1,
                    borderColor:'#18CEE2'
                }
            },
            symbol: 'circle',
            symbolSize: ['38', '22'],
            symbolPosition: 'end',
            data: [220, 182, 191, 234, 290, 330, 310],
            z:3
        }]
};