option = {
    backgroundColor: '#0f375f',
    grid: {
        top: "25%",
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
    xAxis: {
        data: [
            "2014",
            "2015",
            "2016",
            "2017",
            "2018"
        ],
        axisLine: {
            show: false //隐藏X轴轴线
        },
        axisTick: {
            show: false //隐藏X轴刻度
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#ebf8ac" //X轴文字颜色
            }
        }
    },
    yAxis: [
        {
            type: "value",
            name: "单位：万人",
            nameTextStyle: {
                color: "#ebf8ac"
            },
            position: "left",
            splitLine: {
                show: false
            },
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
            name: "面积",
            type: "bar",
            barWidth: 30,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: "#66429a"
                        },
                        {
                            offset: 1,
                            color: "#3835a6"
                        }
                    ])
                }
            },
            data: [1, 2, 3, 4, 5]
        }
    ]
};