option = {
    backgroundColor: "#0f375f",
    title: {
        text: '搓板分组柱状图',
        textStyle: {
            align: 'right',
            color: '#fff',
            fontSize: 20,
        },
        top: '5%',
        left: 'center',
    },
    grid: {
        top: "16%",
        bottom: "10%",
        left: "10%",
        right: "5%"
    },
    legend: {
        data: ["最大库存量", "安全库存量", "实际库存量", "库存占用率"],
        top: "10%",
        x: "center",
        itemWidth: 15,
        textStyle: {
            color: "#1D9EFB",
            fontSize: 10,
        }
    },

    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
        }
    },
    xAxis: {
        type: 'category',
        //  boundaryGap: true,//坐标轴两边留白
        data: ['2/18', '2/19', '2/20', '2/21', '2/22', '2/23', '2/24', '2/25', '2/26', '2/27', '2/28', '2/29'],
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
        axisLine: { //  改变y轴颜色
            lineStyle: {
                color: '#fff'
            }
        },
        axisLabel: { //  改变y轴字体颜色和大小
            // formatter: '{value} m³ ', //  给y轴添加单位
            textStyle: {
                color: "#fff",
                fontSize: 10
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "#0c2c5a" //内容线
            }
        }
    }, {
        type: "value",
        min: 0,
        max: 100,
        nameTextStyle: {
            color: "#fff",
            fontSize: 10
        },
        position: "right",

        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#fff',
                width: 1
            }
        },
        axisLabel: {
            show: true,
            formatter: "{value} %", //右侧Y轴文字显示
            textStyle: {
                color: "#fff",
                fontSize: 10
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: "#0c2c5a" //内容线
            }
        }

    }],
    dataZoom: [{
        show: false,
        start: 0,
        end: 50,
        type: "inside",
    }],
    series: [{
            name: "最大库存量",
            type: "line",
            symbol: "circle",
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0,244,255,1)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(0,77,167,1)' // 100% 处的颜色
                    }], false),

                    shadowColor: 'rgba(0,160,221,1)',

                }
            },
            markLine: {
                symbol: "none",
                silent: true,
                lineStyle: {
                    normal: {
                        type: "dashed"
                    }
                },
                label: {
                    position: "start"
                },
                data: [{
                    yAxis: 500,
                    lineStyle: {
                        width: 1.6560000000000001,
                        color: "yellow"
                    },
                    label: {
                        show: true,
                        position: '',
                    }
                }]
            }
        },
        {
            name: "安全库存量",
            type: "line",
            symbol: "circle",
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0,244,255,1)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(0,77,167,1)' // 100% 处的颜色
                    }], false),

                    shadowColor: 'rgba(0,160,221,1)',

                }
            },
            markLine: {
                symbol: "none",
                silent: true,
                lineStyle: {
                    normal: {
                        type: "dashed"
                    }
                },
                label: {
                    position: "start"
                },
                data: [{
                    yAxis: 300,
                    lineStyle: {
                        width: 1.6560000000000001,
                        color: "rgba(0,244,255,1)"
                    },
                    label: {
                        show: true,
                        position: '',
                    }
                }]
            }
        },
        {
            name: '实际库存量',
            type: 'pictorialBar',
            symbolClip: true,
            symbol: 'rect',
            symbolRepeat: true,
            symbolSize: [10, 4], //宽度
            symbolMargin: 1, //间隔
            data: [100, 200, 300, 400, 500],
            barWidth: 0,
            barGap: 1, //柱间距离

            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0,77,167,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(0,77,167,1)'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
        },
        {
            name: '库存占用率',
            type: 'pictorialBar',
            symbolClip: true,
            symbol: 'rect',
            symbolRepeat: true,
            symbolSize: [10, 4], //宽度
            symbolMargin: 1, //间隔
            data: [10, 20, 30, 40, 50],
            barWidth: 0,
            barGap: 0, //柱间距离
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#69CBF2'
                    }, {
                        offset: 1,
                        color: '#69CBF2'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
        },


    ]
};