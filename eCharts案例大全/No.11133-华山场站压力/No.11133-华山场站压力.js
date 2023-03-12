option = {
     
    backgroundColor: '#113359',
    grid: {
        top: "15%",
        bottom: "10%"
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
            label: {
                show: true
            }
        }
    },
    legend: {
        data: [ "压力值"],
        top: "5%",
        right:"10%",
        textStyle: {
            color: "#2ABEE8"
        }
    },
    xAxis: {
        data: [
            "2019-6-01",
            "2019-6-03",
            "2019-6-04",
            "2019-6-05",
            "2019-6-06",
            "2019-6-07",
            "2019-6-08",
            "2019-6-09",
            
        ],
        axisLine: {
            show: true, //隐藏X轴轴线
            lineStyle: {
                        color: '#01FCE3'
                        }
        },
        axisTick: {
            show: true //隐藏X轴刻度
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#ccc", //X轴文字颜色
                fontSize:14
            }
        }
    },
    yAxis: [{
            type: "value",
            name: "万m³",
            nameTextStyle: {
                color: "#ccc"
            },
            
            splitLine: {
                show: false
            },
            axisTick: {
                show: true,
                lineStyle: {
                            color: '#01FCE3'
                            }
            },
            axisLine: {
                show: true,
                lineStyle: {
                            color: '#01FCE3'
                            }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#ccc",
                    fontSize:14
                }
            },
             
        },
        {
            type: "value",
            name: "",
            nameTextStyle: {
                color: "#ebf8ac"
            },
            position: "right",
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                formatter: "{value} %", //右侧Y轴文字显示
                textStyle: {
                    color: "#ebf8ac"
                }
            }
        },
        {
            type: "value",
            gridIndex: 0,
            min: 50,
            max: 100,
            splitNumber: 8,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
                }
            }
        }
    ],
    series: [
        {
            name: "压力值",
            type: "bar",
            barWidth: 25,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "#00FFE3"
                        },
                        {
                            offset: 1,
                            color: "#4693EC"
                        }
                    ]),
                    barBorderRadius: 8,
                }
            },
            data: [4289, 3857, 4878, 3545, 0, 0, 0, 0]
        }
    ]
};