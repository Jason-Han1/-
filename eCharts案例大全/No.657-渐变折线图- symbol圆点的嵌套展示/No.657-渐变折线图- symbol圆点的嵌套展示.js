option = {
    backgroundColor: '#fff',
    title: {
        text: '渐变折线图',
        left: '12%',
        top: '13%',
        textStyle: {
            color: '#999',
            fontSize: 14
        }
    },
    legend: {
        show: true,
        icon: 'circle',
        top: '13%',
        itemWidth: 6,
        itemHeight: 6,
        itemGap: 25,
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: [{
        type: 'category',
        data: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
        axisLine: {
            lineStyle: {
                color: '#ddd'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#c56790'
            },
            margin: 15
        },
        boundaryGap: false
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#ddd'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#c56790'
            }
        },
        splitLine: {
            show: false
        }
    }],
    series: [{
        name: 'S',
        type: 'line',
        data: [13,10,3,12,15,30,7],
        symbolSize: 6,
        symbol: 'circle',
        smooth: true,
        lineStyle: {
            color: '#fe9a8b'
        },
        itemStyle: {
            normal: {
                color: '#fe9a8b',
                borderColor: '#fe9a8b'
            }
        },
        areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#fe9a8bb3'
                    },
                    {
                        offset: 1,
                        color: '#fe9a8b03'
                    }
                ])
        },
        emphasis: {
            itemStyle: {
                color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [{
                                offset: 0,
                                color: '#fe9a8b'
                            },
                            {
                                offset: 0.4,
                                color: '#fe9a8b'
                            },
                            {
                                offset: 0.5,
                                color: '#fff'
                            }, {
                                offset: 0.7,
                                color: '#fff'
                            }, {
                                offset: 0.8,
                                color: '#fff'
                            }, {
                                offset: 1,
                                color: '#fff'
                            }
                        ]
                    },
                    borderColor: '#fe9a8b',
                    borderWidth: 2
            }
        }
    },{
        name: 'M',
        type: 'line',
        data: [5, 12, 11, 4, 25, 16, 1],
        symbolSize: 6,
        symbol: 'circle',
        smooth: true,
        lineStyle: {
            color: '#9E87FF'
        },
        itemStyle: {
            normal: {
                color: '#9E87FF',
                borderColor: '#9E87FF'
            }
        },
        areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#9E87FFb3'
                    },
                    {
                        offset: 1,
                        color: '#9E87FF03'
                    }
                ])
        },
        emphasis: {
            itemStyle: {
                color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [{
                                offset: 0,
                                color: '#9E87FF'
                            },
                            {
                                offset: 0.4,
                                color: '#9E87FF'
                            },
                            {
                                offset: 0.5,
                                color: '#fff'
                            }, {
                                offset: 0.7,
                                color: '#fff'
                            }, {
                                offset: 0.8,
                                color: '#fff'
                            }, {
                                offset: 1,
                                color: '#fff'
                            }
                        ]
                    },
                    borderColor: '#9E87FF',
                    borderWidth: 2
            }
        }
    }
    ]
};