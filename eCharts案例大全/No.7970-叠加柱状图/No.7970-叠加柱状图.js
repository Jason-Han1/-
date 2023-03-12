option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: [{
        type: 'value'
    }],
    tooltip:{
        show:true
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        barWidth:50,
        yAxisIndex:0,
        itemStyle:{
            color:new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    {offset: 0, color: 'green'},
                    
                    {offset: 1, color: '#ddd'}
                ]
            )

        }
        
    },{
        data: [100, 100, 100, 80, 60, 100, 120],
        type: 'bar',
        barWidth:30,
        yAxisIndex:0,
        z: 10,
        barGap :'-80%',
        itemStyle:{
            color:new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    {offset: 0, color: 'red'},
                 
                    {offset: 1, color: '#ddd'}
                ]
            )

        }
    }]
};
