app.title = '趣看直播实时视频质量分析';

var colors = ['#57617B', '#57617B', '#57617B', 'black'];

option = {
    color: colors,
    backgroundColor: '#313642',
    title: {
        text: "趣看直播实时视频质量分析",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#F1F1F3'
        },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },

    legend: {
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        data: ['原始帧率(fps)', '丢帧率(%)', '延迟(ms)', '码率(bps)'],
        right: '40%',
        textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
        }
    },
    grid: {

        left: '5%',
        right: '10%',
        bottom: '16%',
        top: '20%',
        containLabel: true
    },

    toolbox: {
        feature: {
            dataView: {
                show: true,
                readOnly: false
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },

    dataZoom: [{
        show: true,
        start: 0,
        end: 80,
        bottom: '8%'
    }, ],
    xAxis: [{

        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#FFFFFF'
            }
        },
        data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55']
    }],
    yAxis: [{
        type: 'value',
        name: '原始帧率',
        min: 0,
        max: 60,
        position: 'right',
        axisLine: {
            lineStyle: {
                color: colors[2]
            }
        },
        axisLabel: {
            formatter: '{value} fps'
        },
        splitLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
    }, {
        type: 'value',
        name: '丢帧率',
        min: 0,
        max: 1,
        position: 'right',
        offset: 80,
        axisLine: {
            lineStyle: {
                color: colors[0]
            }
        },
        splitLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            formatter: '{value} %'
        }
    }, {
        type: 'value',
        name: '延迟',
        min: 0,
        max: 50,
        position: 'right',
        offset: 160,
        axisLine: {
            lineStyle: {
                color: colors[1]
            }
        },
        splitLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            formatter: '{value} ms'
        }
    }, {
        type: 'value',
        name: '码率',
        min: 0,
        max: 1200000,
        position: 'left',
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            formatter: '{value} bps'
        }
    }],
    series: [{
        name: '原始帧率(fps)',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(219, 50, 51, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(219, 50, 51, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {

                color: 'rgb(219,50,51)',
                borderColor: 'rgba(219,50,51,0.2)',
                borderWidth: 12
            }
        },
        data: [20.0, 25.9, 17.0, 18.2, 25.6, 50.7, 45.6, 25.2, 25.6, 30.0, 24.4, 26.3]
    }, {
        name: '丢帧率(%)',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 136, 212, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0, 136, 212, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(0,136,212)',
                borderColor: 'rgba(0,136,212,0.2)',
                borderWidth: 12

            }
        },
        yAxisIndex: 1,
        data: [0.6, 0.9, 0.1, 0.4, 0.7, 0.7, 0.6, 0.2, 0.7, 0.8, 0.0, 0.3]
    }, {
        name: '延迟(ms)',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(137, 189, 27, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(137, 189, 27, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(137,189,27)',
                borderColor: 'rgba(137,189,2,0.27)',
                borderWidth: 12

            }
        },
        yAxisIndex: 2,
        data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 3.4, 3.0, 6.5, 12.0, 6.2]
    }, {
        name: '码率(bps)',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(56, 24, 27, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(56, 24, 27, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(56,24,27)',
                borderColor: 'rgba(56,24,2,0.27)',
                borderWidth: 12

            }
        },
        yAxisIndex: 3,
        data: [20000.0, 20000.2, 30000.3, 40000.5, 60000.3, 100000.2, 200000.3, 200003.4, 230000.0, 160000.5, 120000.0, 60000.2]
    }]
};