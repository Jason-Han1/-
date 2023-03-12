option = {
    backgroundColor: '#0E2A43',
    title: {
        text: "人均养老水平分析",
        textStyle: {
            color: '#00FFFF',
            fontSize: 24
        }
    },
    legend: {
        bottom: 20,
        textStyle: {
            color: '#fff',
        },
        data: ['钥匙量', '有效房源量']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },

    tooltip: {
        show: "true",
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#fff',
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#aaa',
            }
        },
    },
    xAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#fff',
                }
            },
            data: ['企业单位', '事业单位', '机关单位']
        }, {
            type: 'category',
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
                show: false
            },
            splitLine: {
                show: false
            },
            data: ['企业单位', '事业单位', '机关单位']
        },

    ],
    series: [{
            name: '有效房源量1',
            type: 'bar',
            xAxisIndex: 1,

            itemStyle: {
                normal: {
                    show: true,
                    color: '#277ace',
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barWidth: '20%',
            data: [1000, 1000, 1000]
        }, {
            name: '有效房源量2',
            type: 'bar',
            xAxisIndex: 1,

            itemStyle: {
                normal: {
                    show: true,
                    color: '#277ace',
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            barWidth: '20%',
            barGap: '100%',
            data: [1000, 1000, 1000]
        }, {
            name: '去年',
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00FFE6'
                    }, {
                        offset: 1,
                        color: '#007CC6'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            barWidth: '20%',
            data: [398, 419, 452]
        }, {
            name: '钥匙量2',
            type: 'bar',
            barWidth: '20%',
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#3023AE'
                    }, {
                        offset: 1,
                        color: '#C96DD8'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            barGap: '100%',
            data: [425, 437, 484]
        }

    ]
};