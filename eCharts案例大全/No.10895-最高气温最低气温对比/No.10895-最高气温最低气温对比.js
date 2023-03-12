option = {
    backgroundColor: '#0B2D9A',
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
        data: ['最高温度', '最低温度',],
        right: '4%',
        textStyle: {
            fontSize: 12,
            color: '#ccc'
        }
    },
    grid: {
        left: '2%',
        right: '2%',
        bottom: '3%',
        top:"10%",
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#DDD'
            }
        },
        data: ['2019-7-1','2019-7-2','2019-7-3','2019-7-4','2019-7-5','2019-7-6','2019-7-7']
    }],
    yAxis: [{
        type: 'value',
        name: '单位（%）',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#DDD'
            }
        },
        axisLabel: {
            margin: 5,
            textStyle: {
                fontSize: 14
            }
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#DDD'
            }
        }
    }],
    series: [{
        name: '最高温度',
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
                borderWidth: 10,
                
            },
        },
        data: [32, 34, 39, 35, 38, 36, 34 ]
    }, {
        name: '最低温度',
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
        data: [25, 22, 26, 28, 27, 26, 23]
    }  ]
};