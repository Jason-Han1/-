option = {
    tooltip: {
        formatter: "{b} : {c}%"
    },

    series: [{
            name: "内部进度条",
            type: "gauge",
            center: ['50%', '65%'],
            radius: '90%',
            startAngle: 150,
            endAngle: 30,
            max:13200,
            splitNumber: 10,
            axisLine: {
                lineStyle: {
                    color: [
                        [0, "#677b90"],
                        [1, "#677b90"]
                    ],
                    width: 2
                }
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,

            },
            splitLine: {
                show: false,
            },
            itemStyle: {
                show: true,
                color: '#f27408' ,
            },  
		data: [{
                name:"当月耗电量:10000KW/H",
                
                value: 10000,
            }],
            detail: {
                formatter: "{value}KW/H",
                offsetCenter: [0, 0],
                textStyle: {
                    padding: [0, 0, 0, 0],
                    fontSize: 28,
                    fontWeight: '700',
                    color: "#fff",
                    textShadowColor:"#00F2FF",
                    textShadowBlur: 10,
                    fontFamily:"PangMenZhengDao"                                        
                }
            },
            title: { //标题
                show: true,
                offsetCenter: [0, 35], // x, y，单位px
                textStyle: {
                    color: "#fff",
                     textShadowColor:"#00F2FF",
                    textShadowBlur: 10,
                    fontSize: 18, //表盘上的标题文字大小
                    fontWeight: 400,
                    fontFamily: 'PangMenZhengDao'
                }
            },
          
            pointer: {
                show: true,
                length: '120%',
                radius: '80%',
                width:5, //指针粗细
            },
            animationDuration: 4000,
        },
        {
            name: '外部刻度',
            type: 'gauge',
            center: ['50%', '60%'],
            radius: '100%',
            max:13200,
            splitNumber: 8, //刻度数量
            startAngle: 155,
            endAngle: 25,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 30,
                      color: [
                        [
                            1, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0, [{
                                        offset: 0,
                                        color: '#22b7da',
                                    },
                                    {
                                        offset: 0.333,
                                        color: '#74cd7c',
                                    },
                                   

                                    {
                                        offset: 0.666,
                                        color: '#d1b83b',
                                    },
                                
                                    {
                                        offset: 1,
                                        color: '#c83b34',
                                    }
                                ]
                            )
                        ],

                    ]
                }
            }, //仪表盘轴线
            axisLabel: {
                show: false,
                color:"#468EFD",
                distance: 0,
               
            }, //刻度标签。
            axisTick: {
                show: true,
                splitNumber: 2,
                length: 10,
                lineStyle: {
                    width:2,
                    color: "#071936"}
               
            }, //刻度样式
            splitLine: {
                show: false,
                
            }, //分隔线样式
            detail: {
                show: false
            },
            pointer: {
                show: false
            }
        },
    ]
};