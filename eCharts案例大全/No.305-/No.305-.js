option = {
    backgroundColor: "#fff",
    toolbox: {
        feature: {
            restore: {},
            saveAsImage: {}
        }
    },
    animationDuration:5000,
    series: [
     
        {
            name: "放款",
            type: 'gauge',
            min: 0,
            max: 2000,
            radius: "90%",
            splitNumber: 1, //刻度数量
            startAngle: 180,
            endAngle: 0,
            axisLine: {
                show: false,
                lineStyle: {
                    width: 1,
                    color: [
                        [1, 'rgba(0,0,0,0)']
                    ]
                }
            },
            //分隔线样式。
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: true,
                color: "#9b9b9b",
                formatter: "{value}",
                distance: -65,
                padding: [0, 0, 0, 0],
            },
            axisTick: {
                show: false
            },
            pointer: {
                show: true,
                width:6,
                length:"110%"
            },
            itemStyle:{
                color:"red"
            },
            detail: {
                show: false,
            },
            title: {
                show: false,
            },
            data: [{
                value: 1072
            }]

        },
        {
            type: "pie",
            radius: ["80%", "90%"],
            hoverAnimation: false,
            startAngle:180,
            animation: false,
            label: {
                show:false
            },
            labelLine: {
              show: false
            },
            data: [
                {
                    value: 1075,
                    itemStyle:{
                        color:'#e8e8e8'
                    }
                },{
                    value: 2000,
                    itemStyle: {
                        opacity:0
                    },
                }
            ]
            
        },
        {
            type: "pie",
            radius: ["75%", "78%"],
            hoverAnimation: false,
            startAngle:180,
            animation: false,
            label: {
                show:false,
            },
            labelLine: {
              show: false
            },
           
            
        },
        {
            type: "pie",
            radius: ["69%", "72%"],
            hoverAnimation: false,
            startAngle:180,
            animation: false,
            label: {
                show:true,
                position:"inside",
                color:'#0799f3'
            },
            labelLine: {
              show: false
            },
            
            
        },
        {
            type: "pie",
            radius: ["69%", "72%"],
            hoverAnimation: false,
            startAngle:180,
            animation: false,
            label: {
                show:true,
                position:"inside",
                color:'#0799f3'
            },
            labelLine: {
              show: false
            },
            
            
        },
        {
            type: "pie",
            radius: ["0", "70%"],
            hoverAnimation: false,
            animation: false,
            startAngle:180,
            label: {
                show:true,
                position:"center",
                formatter: function(params){
                    return ["{b|"+params.value+"}","{c|放款 万/小时}","{d|}"].join("\n")
                },
                rich: {
                    a: {
                        color: "#000000",
                        fontWeight: 1000,
                        fontSize: 24,
                        lineHeight: 30
                    },
                    b: {
                        color: "#000000",
                        fontWeight: 1000,
                        fontSize: 40,
                        lineHeight: 60
                    },
                    c: {
                        color: "#9b9b9b",
                        lineHeight: 20
                    },
                    d: {
                        color: "#9b9b9b",
                        fontSize: 40,
                        lineHeight: 70
                    }
                }
            },
            labelLine: {
              show: false
            },
            data: [{
                    value:2000,
                    itemStyle: {
                        color:"#fff"
                    },
                }
            ]
            
        },
        {
            type: "pie",
            radius: ["80%", "90%"],
            // animationDuration:((1200-300)*2)/(960-300)*5000,
            hoverAnimation: false,
            startAngle:180,
            label: {
                show:false
            },
            labelLine: {
              show: false
            },
            data: [
                {
                    name:"",
                    value: 1075,
                    itemStyle:{
                        color: new echarts.graphic.LinearGradient(
                                0, 0, 1, 0, [{
                                        offset: 0,
                                        color: '#0799f3'
                                    }
                                   
                                ]
                            )
                    }
                }, {
                    value:2000,
                    itemStyle: {
                        opacity:0
                    },
                }
            ]
            
        },
    ]
};