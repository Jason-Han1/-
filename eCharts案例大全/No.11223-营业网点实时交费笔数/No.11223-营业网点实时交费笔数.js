option = {
    backgroundColor: '#0F2A5B',
    title: {
        left:"center",
        text: '营业网点实时交费笔数',
        textStyle: {
            fontWeight: 'bold',
            fontSize: 16,
            color: '#F1F1F3',
            
        },
        
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    legend: {
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        data: ['历下', '天桥', '市中','历城'],
        right: '4%',
        textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '2%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#B7B7B7'
            }
        },
        data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35']
    }],
    yAxis: [{
        type: 'value',
        name: '单位（%）',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#B7B7B7'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        },
        splitLine: {
            lineStyle: {
                color: '#57617B'
            }
        }
    }],
    series: [{
        name: '历下',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 3
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: 'rgba(16,97,204, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(17,235,210, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
       itemStyle: {
                normal: {
                    
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgba(16,97,204,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(17,235,210,1)'
                    }])
                },
                emphasis: {
                color: 'rgb(0,196,132)',
                borderColor: 'rgba(0,196,132,0.2)',
                extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                borderWidth: 10
            }
            },
        data: [170, 182, 191, 215, 195, 210, 178, 210 ]
    }, {
        name: '天桥',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 3
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(20,52,242, 0.5)'
                }, {
                    offset: 0.8,
                    color: 'rgba(35,215,258, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            },
        },
       itemStyle: {
                normal: {
                     
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: 'rgba(205,52,42,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(235,235,21,1)'
                    }])
                },
                emphasis: {
                color: 'rgb(99,250,235)',
                borderColor: 'rgba(99,250,235,0.2)',
                extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                borderWidth: 10
            }
            },
        data: [120, 110, 125, 145, 122, 165, 122, 215]
     },
     {
        name: '市中',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 3
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(205,52,42, 0.5)'
                }, {
                    offset: 0.8,
                    color: 'rgba(235,235,21, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            },
        },
       itemStyle: {
                normal: {
                     
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#7EB058'
                    }, {
                        offset: 1,
                        color: '#03FCFC'
                    }])
                },
                emphasis: {
                color: '#6BC98A',
                borderColor: 'rgba(20,250,35,0.2)',
                extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                borderWidth: 10
            }
            },
        data: [156, 167, 178, 185, 166, 280, 133, 260]
     },
     {
        name: '历城',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 3
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: 'rgba(16,97,204, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(17,235,210, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
       itemStyle: {
                normal: {
                    
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: '#9BBCFC'
                    }, {
                        offset: 1,
                        color: '#00A7FA'
                    }])
                },
                emphasis: {
                color: 'rgb(0,196,132)',
                borderColor: 'rgba(0,196,132,0.2)',
                extraCssText: 'box-shadow: 8px 8px 8px rgba(0, 0, 0, 1);',
                borderWidth: 10
            }
            },
        data: [145, 136, 146, 156, 134,  178, 167,132 ]
    },
   ]
};