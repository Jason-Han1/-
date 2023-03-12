option = {
    backgroundColor: "#0f375f",
    title: {
        text: '带警戒线的图',
        textStyle: {
            align: 'right',
            color: '#fff',
            fontSize: 22,
        },
        top: '5%',
        left: 'center',
    },
    grid: {
        top: "18%",
        bottom: "10%",
        left: "10%",
        right: "5%"
    },
    legend: {
        data: ["警戒线", "实际值"],
        top: "10%",
        x: "center",
        itemWidth: 15,
        textStyle: {
            color: "#fff",
            fontSize: 16,
        },
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
        }
    },
    xAxis: {
        type: 'category',
        data: ['2/18', '2/19', '2/20', '2/21', '2/22'],
        axisLabel: { //坐标轴刻度标签的相关设置。
            textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontSize: 10,
            },
        },
        axisTick: { //坐标轴刻度相关设置。
            show: false,
        },
        axisLine: { //坐标轴轴线相关设置
            lineStyle: {
                color: '#fff',
                opacity: 0.2
            }
        },
        splitLine: { //坐标轴在 grid 区域中的分隔线。
            show: false,
        }
    },
    yAxis: [{
        type: 'value',
        name: '万吨',
        min: 0,
        max: 700,
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        axisLabel: {
            textStyle: {
                color: "#fff",
                fontSize: 10
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "#0c2c5a"
            }
        }
    }],
    series: [{
            name: "警戒线",
            type: "line",
            symbol: "circle",
            symbolSize: 8,
            itemStyle: {
                normal: {
                    type: "dashed",
                    color: 'yellow',
                    lineStyle: {
                        color: 'yellow',
                    }
                }
            },
            markLine: {
                symbol: "none",
                silent: true,
                label: {
                    position: "start"
                },
                data: [{
                    yAxis: 500,
                    label: {
                        show: true,
                        position: '',
                    }
                }]
            }
        },
        {
            type: 'line',
            name: "实际值",
            smooth: true, //平滑曲线显示
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color: 'rgb(59,196,236)',
                    lineStyle: {
                        color: 'rgb(59,196,236)',
                    }
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(34,77,136,0.5)'
                        },
                        {
                            offset: .5,
                            color: 'rgba(34,77,136,.3)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(34,77,136,0)'
                        }
                    ], false)
                }
            },
            label: {
                show: false,
                distance: 1
            },
            data: [700, 400, 140, 520, 140, 659]
        },
    ]
};