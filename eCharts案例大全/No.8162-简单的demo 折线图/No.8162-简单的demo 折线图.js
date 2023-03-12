
option = {
    title: {
        text: '',
        subtext: ''
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['参与程度',],
        x:'center',
        y:15,
    },
    grid: {
    left: '10%',
    bottom:'20%'
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: true,
        data: ['讨论协作备课任务要求','商讨协作备课的主题','制定小组备课计划','执行小组任务','关注小组备课进度','评价小组备课作品','反思、改进备课作品'],
        axisLabel: {
         interval:0,
          rotate:40
         },
    },
    yAxis: {
        type: 'value',
        min:4,max:5,
    },
    series: [
        {
            name:'参与程度',
            type:'line',        
            symbol: "circle",
            symbolSize: 10,
            data:[4.83, 4.83, 4.33, 4.83, 4.33, 4.17, 4.5],
            itemStyle : { normal: {
                label : {show: true,color:'white',backgroundColor:'black',fontSize:14},
            },
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        
    ]
};
