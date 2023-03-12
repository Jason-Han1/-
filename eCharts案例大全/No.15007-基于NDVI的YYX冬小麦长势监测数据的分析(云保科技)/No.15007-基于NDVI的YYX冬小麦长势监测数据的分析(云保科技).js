    var data1 = [0.0704, 0.0472, 0.0684, 0.0570, 0.0465];//同比差的比例
    var data2 = [0.0424, 0.0363, 0.0189, 0.0194, 0.0096];//同比稍差的比例
    var data3 = [0.7598, 0.5919, 0.1471, 0.5349, 0.8360];//同比持平的比例
    var data4 = [0.1016, 0.3214, 0.6110, 0.3502, 0.1073];//同比稍好的比例
    var data5 = [0.0258, 0.0032, 0.1546, 0.0155, 0.0006];//同比好的比例
		option = {
    backgroundColor: '#394056',
    title: {
        text: '基于NDVI的YYX冬小麦长势监测数据的分析(云保科技)',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 13,
            color: '#F1F1F3'
        },
        left: '6%'
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
        itemWidth: 14,//图例宽度
        itemHeight: 5,
        itemGap: 13,//空隙
        data: ['差', '稍差', '持平','稍好','好'],
        right: '4%',
        textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
        }
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
                color: '#57617B'
            }
        },
        data: ['2016年11月', '2016年12月', '2017年1月', '2017年2月', '2017年3月']
    }],
    yAxis: [{
        type: 'value',
        name: '比例（%）',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#57617B'
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
        name: '差',
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
                    color: 'rgba(255, 0, 0, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(255,0, 0, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(255,0, 0)',
                borderColor: 'rgba(255,0, 0,0.27)',
                borderWidth: 12

            }
        },
        data: data1
    }, {
        name: '稍差',
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
                    color: 'rgba(255,215,0, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(255,215,0, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(255,215,0)',
                borderColor: 'rgba(255,215,0,0.2)',
                borderWidth: 12

            }
        },
        data: data2
    }, {
        name: '持平',
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
                    color: 'rgba(0,235,238, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0,235,238, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {

                color: 'rgb(0,235,238)',
                borderColor: 'rgba(0,235,238,0.2)',
                borderWidth: 12
            }
        },
        data: data3
    },
    {
        name: '稍好',
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
                    color: 'rgba(46, 139, 87, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(46, 139, 87, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {

                color: 'rgb(46, 139, 87)',
                borderColor: 'rgba(46, 139, 87,0.2)',
                borderWidth: 12
            }
        },
        data:data4
    },
    {
        name: '好',
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
                    color: 'rgba(0, 255, 0, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0, 255, 0, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {

                color: 'rgb(0, 255, 0)',
                borderColor: 'rgba(0, 255, 0)',
                borderWidth: 12
            }
        },
        data: data5
    },]
};
	myChart.setOption(option);