option = {
    backgroundColor:"white",
    xAxis: {
        type: 'category',
        data: ['13:01:05', '13:05:06', '13:30:00', '13:31:00', '13:35:00', '13:40:00', '13:50:00']
    },
    yAxis: {
        type: 'value',
        name:'CPU使用率/%',
        splitLine:{
            show:false
        }
    },
    series: [{
        symbolSize:0,
        data: [60, 61.5, 62.5, "-", "-", "-", "-"],
        type: 'line',
        smooth: true,
        itemStyle:{
            color:'red'
        },
        markLine:{
            symbolSize:0,
            label:{
                distance :[-100,-100 ,-100,-100],
                // position:'insideEndTop',
                formatter:param=>{
                    return param.name+'                                     '
                }
            },
            lineStyle:{type:'dotted'},
            data:[
                {
                    name:'冒烟测试',
                    xAxis:'13:30:00',
                },
                 {
                    name:'基本信息检查',
                    xAxis:'13:35:00',
                },
                 {
                    name:'老化测试',
                    xAxis:'13:50:00',
                }
                ]}
        
    },{
                symbolSize:0,
        data: ["-","-", 62.5, 55, 53, '-', "-"],
        type: 'line',
        smooth: true,
        itemStyle:{
            color:'yellow'
        }
    },{
                symbolSize:0,
        data: ["-", "-", "-","-", 53, 55, 60],
        type: 'line',
        smooth: true,
        itemStyle:{
            color:'blue'
        }
    }]
};
