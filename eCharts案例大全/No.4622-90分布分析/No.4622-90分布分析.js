var scatterdata1 = [168,178,165,188,153,166,173];
var scatterdata2 = [68,90,75,80,85,92,78];
option = {
    title: {
        text: '分布分析'
    },
    xAxis: {
        type:"category",
        data: ['单位1', '单位2', '单位3', '单位4', '单位5', '单位6', '单位7'],
        axisTick:{
            alignWithLabel:true
        }
        // boundaryGap :false
    },
    legend:{
        data:[
            {
                name:"优秀",
                icon: 'circle',
            },
             {
                name:"正常",
                icon: 'circle',
            },
             {
                name:"异常",
                icon: 'circle',
            }
        ]
    },
    tooltip:{
        show:true
    },
    yAxis: {
        type:"value",
        min:0,
        max:200
    },
    series: [
        {
            name:"正常",
            type: 'bar',
            itemStyle:{
                color:"#97d7f3"
            },
            // data:[220, 182, 191, 234, 290, 330, 310],
            markArea:{
                itemStyle:{
                    color:"#97d7f3"
                },
                data:[
                     [{
                        x: '10%',
                        yAxis: 100
                    }, {
                        x: '95%',
                        yAxis:140
                    }]
                ]
            }
            
        },
        {
            name: "异常",
            type: "effectScatter",
            data: scatterdata1,
            symbolSize: 5,
            itemStyle: {
              color: "#ff6000",
            },
            rippleEffect:{
              color:'#ff6000',
              period:4,
              scale:2.5,
              brushType:"stroke"
            },
            
        },
        {
            name: "优秀",
            type: "effectScatter",
            data: scatterdata2,
            symbolSize: 5,
            itemStyle: {
              color: "#1f73aa",
            },
            rippleEffect:{
              color:'#1f73aa',
              period:4,
              scale:2.5,
              brushType:"stroke"
            },
            
        }
    ]
};