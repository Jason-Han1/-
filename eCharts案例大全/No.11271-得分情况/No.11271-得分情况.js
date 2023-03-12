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
        
        // {
        //     name: '刻度',
        //     type: 'gauge',
        //     min: 480,
        //     max: 1020,
        //     radius:"75%",
        //     splitNumber: 3, //刻度数量
        //     startAngle: 154,
        //     endAngle: 36,
        //     axisLine: {
        //         show: false,
        //         lineStyle: {
        //             width: 1,
        //             color: [
        //                 [1, 'rgba(0,0,0,0)']
        //             ]
        //         }
        //     }, //仪表盘轴线
        //     axisLabel: {
        //         show: true,
        //         color: '#0799f3',
        //         distance: 5,
        //         fontSize: 11,
        //         formatter: function(value) {
        //             var renturnMes = "";
        //             switch ((value - 300) / 180) {
        //                 case 1:
        //                     renturnMes = "差";
        //                     break;
        //                 case 2:
        //                     renturnMes = "普";
        //                     break;
        //                 case 3:
        //                     renturnMes = "良";
        //                     break;
        //                 case 4:
        //                     renturnMes = "优";
        //                     break;
        //             }
        //             return renturnMes
        //         }
        //     }, //刻度标签。
        //     axisTick: {
        //         show: false,
        //         lineStyle: {
        //             color: '#0799f3',
        //             width: 2
        //         },
        //         length: -2
        //     }, //刻度样式
        //     splitLine: {
        //         show: true,
        //         length: -4,
        //         lineStyle: {
        //             color: '#0799f3',
        //             width: 1
        //         }
        //     }, //分隔线样式
        //     detail: {
        //         show: false
        //     },
        //     pointer: {
        //         show: false
        //     }
        // },
        {
            name: "",
            type: 'gauge',
            min: 300,
            max: 1200,
            radius: "88%",
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
                distance: -35,
                padding: [20, 0, 0, 0],
            },
            axisTick: {
                show: false
            },
            pointer: {
                show: true,
                width:4,
                length:"100%"
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
                value: 960
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
                    value: 1200-300,
                    itemStyle:{
                        color:'#e8e8e8'
                    }
                },{
                    value: 1200-300,
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
            data: ["","差","","普","","良","","优",""].map(function(e){
                if(e){
                    return {
                        name:e,
                        value: 1,
                        itemStyle:{
                            color:'#0799f3',
                        }
                    }
                }else{
                    return {
                        value: 179.2,
                        itemStyle:{
                            opacity:0
                        }
                    }
                }
                return 
            }).concat({
                value: 1200-300,
                itemStyle:{
                    opacity:0
                }
            })
            
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
            data: ["","差","","普","","良","","优",""].map(function(e){
                if(e){
                    return {
                        name:e,
                        value: 0,
                        itemStyle:{
                            color:'#fff',
                        }
                    }
                }else{
                    return {
                        value: 180,
                        itemStyle:{
                            opacity:0
                        }
                    }
                }
                return 
            }).concat({
                value: 1200-300,
                itemStyle:{
                    opacity:0
                }
            })
            
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
            data: ["","差","","普","","良","","优",""].map(function(e){
                if(e){
                    return {
                        name:e,
                        value: 0,
                        itemStyle:{
                            color:'#fff',
                        }
                    }
                }else{
                    return {
                        value: 180,
                        itemStyle:{
                            opacity:0
                        }
                    }
                }
                return 
            }).concat({
                value: 1200-300,
                itemStyle:{
                    opacity:0
                }
            })
            
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
                    return ["{a|你的得分}","{b|"+params.value+"}","{c|评估时间19-05-28}","{d|}"].join("\n")
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
                    value: 960,
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
                    name:"你的得分",
                    value: 960-300,
                    itemStyle:{
                        color: new echarts.graphic.LinearGradient(
                                0, 0, 1, 0, [{
                                        offset: 0,
                                        color: '#0799f3'
                                    },
                                    {
                                        offset: 1,
                                        color: '#74edd7'
                                    }
                                ]
                            )
                    }
                }, {
                    value: 1200-960+1200-300,
                    itemStyle: {
                        opacity:0
                    },
                }
            ]
            
        },
    ]
};