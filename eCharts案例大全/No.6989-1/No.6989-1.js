option = {
    backgroundColor:'#fff',
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(0,0,250,0.2)'
    },
    radar: {
        indicator: [
            { text: '绩效奖金', max: 100},
            { text: '带薪年假', max: 100},
            { text: '补充医疗保险', max: 100},
            { text: '年底双薪', max: 100},
            { text: '员工旅游', max: 100}
        ],
        splitArea: {                       
                show: true,
                areaStyle: {                   
                    color: '#fff',    
                    
                }
        },
        axisLine:{
            show:false,
        },
        axisLabel:{
             rotate:30
        },
        name: {                             // (圆外的标签)雷达图每个指示器名称的配置项。
                formatter: '{value}',
                textStyle: {
                    fontSize: 10,
                    color: '#333'
                }
            },
    },
    series: {
        type: 'radar',
        symbolSize:10,
        symbol:"circle",
        areaStyle:{
            color: "#246CFF",
            opacity: 0.3
        },
        lineStyle:{
            color: "#246CFF ",
            opacity: 0.8,
            width: 2
        },
        itemStyle:{
            color: "#246CFF ",
            borderColor:"#246CFF",
            opacity: 0.8
        },
        label:{
            show: true,
            formatter:"{c} %",
            color: "#333",
            fontSize:15
        },
        data:[
            {
                value:[45,50,49,43,39]
            }
        ]
    }
};