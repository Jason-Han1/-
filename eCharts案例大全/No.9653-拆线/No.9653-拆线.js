option = {
    backgroundColor: '#2c2f38',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    legend: {
        show: false,
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#2c2f38'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                'color': '#6a6f7d',
                fontSize: 14
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: '#2c2f38'
            }
        },
        data: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#2c2f38'
            }
        },
        
        axisLabel: {
            margin: 10,
            textStyle: {
                'color': '#6a6f7d',
                fontSize: 14
            }
        },
        splitLine: {
            lineStyle: {
                color: '#2c2f38'
            }
        },
        splitArea: {
                show: true,
                areaStyle: {
                    color: [
                        "#32353e", 
                        "#363942"
                    ]
                }
            }
    }],
    series: [
        {
            name: '北京',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 2,
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur:2,
                    shadowOffsetY: 6,
                    shadowOffsetX: 0,
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 1,
                        color: 'rgba(186, 58, 121, 0.3)'
                    }, {
                        offset: 0,
                        color: 'rgba(186, 58, 121, 0)'
                    }], false),
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgba(186, 58, 1214,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(186, 58, 121,1)'
                    }])
                },
                emphasis: {
                    color: 'rgb(186, 58, 121)',
                    borderColor: 'rgba(186, 58, 121,0.2)',
                    extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                    borderWidth: 10
                }
            },
            data: [100, 400, 100, 400, 350, 700, 650, 900, 600, 500]
        },
        {
            name: '上海',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 2,
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur:2,
                    shadowOffsetY: 6,
                    shadowOffsetX: 0,
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 1,
                        color: 'rgba(54, 120, 200, 0.2)'
                    }, {
                        offset: 0,
                        color: 'rgba(54, 120, 200, 0)'
                    }], false),
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgba(54, 120, 200,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(54, 120, 200,1)'
                    }])
                },
                emphasis: {
                    color: 'rgb(54, 120, 200)',
                    borderColor: 'rgba(54, 120, 200,0.2)',
                    extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                    borderWidth: 10
                }
            },
            data: [400, 1000, 700, 750, 280, 600, 900, 600, 700, 750]
        },
        {
            name: '广东',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 2,
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur:2,
                    shadowOffsetY: 6,
                    shadowOffsetX: 0,
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 1,
                        color: 'rgba(193, 157, 64, 0.2)'
                    }, {
                        offset: 0,
                        color: 'rgba(193, 157, 64, 0)'
                    }], false),
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgba(193, 157, 64,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(193, 157, 64,1)'
                    }])
                },
                emphasis: {
                    color: 'rgb(193, 157, 64)',
                    borderColor: 'rgba(193, 157, 64,0.2)',
                    extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                    borderWidth: 10
                }
            },
            data: [500, 550, 100,400, 420, 800, 890, 800, 400, 350]
        },
        {
            name: '深圳',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 2,
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur:2,
                    shadowOffsetY: 6,
                    shadowOffsetX: 0,
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 1,
                        color: 'rgba(185, 56, 116, 0.2)'
                    }, {
                        offset: 0,
                        color: 'rgba(185, 56, 116, 0)'
                    }], false),
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgba(185, 56, 116,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(185, 56, 116,1)'
                    }])
                },
                emphasis: {
                    color: 'rgb(185, 56, 116)',
                    borderColor: 'rgba(185, 56, 116,0.2)',
                    extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                    borderWidth: 10
                }
            },
            data: [760, 910, 600,650, 500, 550, 300, 100, 420, 350]
        },
        {
            name: '杭州',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 2,
                    shadowColor: 'rgba(0, 0, 0, .3)',
                    shadowBlur:2,
                    shadowOffsetY: 6,
                    shadowOffsetX: 0,
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 1,
                        color: 'rgba(144, 85, 217, 0.2)'
                    }, {
                        offset: 0,
                        color: 'rgba(144, 85, 217, 0)'
                    }], false),
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgba(144, 85, 217,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(144, 85, 217,1)'
                    }]),
                },
                emphasis: {
                    color: 'rgb(144, 85, 217)',
                    borderColor: 'rgba(144, 85, 217,0.2)',
                    extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                    borderWidth: 10
                }
            },
            data: [850, 620, 650,500, 450, 300, 100, 200, 100, 400]
        },

    ]
};