
option = {
    backgroundColor: '#fff',
   tooltip: {
        trigger: 'item',
        },
    grid: {
        left: '5%',
        top: '10%',
        right: '5%',
        bottom: '10%',
    },
    legend: {
        show: true,
        icon: 'circle',
        orient: 'horizontal',
        top: '90.5%',
        right: 'center',
        itemWidth: 16.5,
        itemHeight: 6,
        // itemGap: 30,
        textStyle: {
            // color: '#FFFFFF'
            color: '#C9C8CD',
            fontSize: 14
        }
    },
    xAxis: [{
        data: ["监测中心站", "调查中心", "核与辐射安全中心", "宣传教育中心"],
        axisLabel: {
            textStyle: {
                color: '#38455D',
                fontSize:12
            },
            margin: 30, //刻度标签与轴线之间的距离。
        },

        axisLine: {
            show: true, //不显示x轴
            lineStyle: {
                color: '#E2E8EC'
            }
        },
        axisTick: {
            show: false //不显示刻度
        },
        boundaryGap: true,
        splitLine: {
            show: false,
            width: 0.08,
            lineStyle: {
                type: "solid",
                color: "#03202E"
            }
        }
    }],
    yAxis: [{
        splitLine: {
            show: true,
            lineStyle: {
                color: '#E2E8EC',
                type: 'dashed'
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#E2E8EC"
            }
        },
        axisLabel: {
            textStyle: {
                color: '#38455D',
                fontSize: 12
            },
        }
    }],
    series: [
        {//柱底圆片
            name: "",
            type: "pictorialBar",
            symbolSize: [60, 20],//调整截面形状
            symbolOffset: [0, 10],
            z: 12,
            itemStyle: {
                    "normal": {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "#02D6EA"
                            },
                            {
                                offset: 1,
                                color: "#02D6EA"
                            }
                        ],false)
                    }
                },
            data: ["50", "75", "105","130"]
        }, 
        
        //柱体
        {
            name: '',
            type: 'bar',
            barWidth: 60,
            barGap: '0%',
            itemStyle: {
                    "normal": {
                        "color": {
                            "x": 0,
                            "y": 0,
                            "x2": 0,
                            "y2": 1,
                            "type": "linear",
                            "global": false,
                            "colorStops": [{//第一节下面
                                "offset": 0,
                                "color": "#057DFE"
                            }, {
                                "offset": 1,
                                "color": "#02D7EA"
                            }]
                        }
                    }
                },
           
            data: ["50", "75", "105","130"]
        }, 
        
        //柱顶圆片
        {
            name: "",
            type: "pictorialBar",
            symbolSize: [60, 20],//调整截面形状
            symbolOffset: [0, -10],
            z: 12,
            symbolPosition: "end",
                "itemStyle": {
                    "normal": {
                         color: new echarts.graphic.LinearGradient(0,0,0,1,
                            [{
                                    offset: 0,
                                    color: "#50A7FF"
                                },
                                {
                                    offset: 1,
                                    color: "#02D6EA"
                                }
                            ],
                            false
                        ),
                    }
                },
            data: ["50", "75", "105","130"]
        }
    ]
};