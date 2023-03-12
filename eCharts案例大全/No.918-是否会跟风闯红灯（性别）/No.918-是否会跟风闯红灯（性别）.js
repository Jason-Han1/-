option = {
    backgroundColor: '#0E2A43',
    title: {
        text: "是否会跟风闯红灯",
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
        data: ['男', '女']
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
            data: ['会', '不会', '看情况']
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
            data: ['会', '不会', '看情况']
        },

    ],
    series: [{
            name: '总人数',
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
            data: [33, 33, 33]
        }, {
            name: '总人数',
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
            data: [51, 51, 51]
        }, {
            name: '男',
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
            data: [8, 15, 10]
        }, {
            name: '女',
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
            data: [8, 17, 26]
        }

    ]
};