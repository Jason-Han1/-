option = {
    backgroundColor: '#04243E',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },

    grid: {
        top: '10px',
        left: '5px',
        right: '15px',
        bottom: '10px',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#192c4f'
            }
        },
        axisLabel: {
            interval: 0, //设置x轴的标签显示可自适应
            show: true,
            textStyle: {
                color: '#87b3cb'
            }
        },
        data: ['机柜', '服务器', '网络设备', '安全机', '动环']
    }],
    yAxis: [{
        type: 'value',
        name: '单位/个',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#192c4f'
            }
        },
        axisLabel: {
            // margin: 10,
            textStyle: {
                fontSize: 12,
                color: '#87b3cb',
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#060f2b'],
                width: 1,
                type: 'solid'
            }
        },


    }],
    series: [{
        name: 'A',
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
                    color: '#a3673e'
                }, {
                    offset: 0.8,
                    color: '#a3673e' 
                },{
                    offset: 1,
                    color: 'transparent'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: '#a3673e',
                borderColor: '#a3673e',
                borderWidth: 12

            }
        },
        data: [100, 102, 80, 90, 50],
    }, {
        name: 'B',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,

        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'transparent'
                }, {
                    offset: 0.8,
                    color: 'transparent'
                }, {
                    offset: 1,
                    color: 'transparent'
                }], false),
                shadowColor: 'transparent',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: '#88adff',
                borderColor: '#88adff',
                borderWidth: 12

            }
        },
        data: [120, 110, 191, 134, 150]
    }, {
        name: 'C',
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
                        color: '#1b8c73'
                    }, {
                        offset: 0.8,
                        color: '#1b8c73'
                    },
                    {
                        offset: 1,
                        color: 'transparent' // 100% 处的颜色
                    }
                ], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: '#1b8c73',
                borderColor: '#1b8c73',
                borderWidth: 12
            }
        },
        data: [80, 100, 60, 50, 80],
    }, ]
}