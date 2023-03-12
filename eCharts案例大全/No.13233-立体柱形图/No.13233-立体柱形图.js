option = {
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'bar',
        barWidth:17,
        itemStyle:{
            normal: {
                color:'#0072dd',
                barBorderRadius:[0,0,0,180]
            }
        },
        data:[220, 182, 191, 234, 290, 330, 310]
    },{ 
            name:'a',
            tooltip:{
               show:false 
            },
            type: 'bar',
            barWidth:17,
            itemStyle:{ 
                normal:{
                    color:'#5c93fc',
                    barBorderRadius:[0,0,180,0]
                }
            },
            data: [220, 182, 191, 234, 290, 330, 310],
            barGap:0
        },{ 
            name:'b',
            tooltip:{
               show:false 
            },
            type: 'pictorialBar',
            itemStyle: {
                 normal: {
                    color: '#3c93fc', 
                    borderWidth:1,
                    borderColor:'#3c93fc'
                }
            },
            symbol: 'rect',
            symbolRotate:45,
            symbolSize: ['24','24'],
            symbolOffset:['0','-11'],
            symbolPosition: 'end',
            data: [220, 182, 191, 234, 290, 330, 310],
            z:3
        }]
};