option = {
    color: ['#285DF3', '#00FFFF','#F35D28'],
    tooltip: {
        trigger: 'none',
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        data: [{
                name: '进口总量',
                textStyle: {
                    color: '#FFFF'
                }
            },
            {
                name: '排放总量',
                textStyle: {
                    color: '#FFFF'
                }
            },
                        {
                name: '减排总量',
                textStyle: {
                    color: '#FFFF'
                }
            },
        ]
    },
    grid: {
        top: 30,
        bottom: 50,
        borderWidth: 0
    },
    xAxis: [{
            type: 'category',
            axisTick: {
                show: false,
                alignWithLabel: true
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff', //更改坐标轴文字颜色
                    fontSize: '0.14rem' //更改坐标轴文字大小
                }
            },
            lineWidth: 0,
            //轴线不显示
            axisLine: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#015FAF'],
                    width: 1,
                    type: 'solid'
                }
            },
            axisPointer: {
                label: {
                    formatter: function(params) {
                        return '降水量  ' + params.value +
                            (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
        },
        {
            type: 'category',
            axisTick: {
                alignWithLabel: false
            },
            axisLine: {
                show: false
            },
            axisPointer: {
                label: {
                    formatter: function(params) {
                        return '降水量  ' + params.value +
                            (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                    }
                }
            },
        }
    ],
    yAxis: [{
            type: 'value',
            lineWidth: 0,
            axisLine: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff', //更改坐标轴文字颜色
                    fontSize: '0.14rem' //更改坐标轴文字大小
                }
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        },

    ],
    series: [{
            name: '进口总量',
            type: 'line',
            smooth: true,
            symbol: 'none',
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default',
                        //渐变色实现
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, //变化度
                            //三种由深及浅的颜色
                            [{
                                    offset: 0,
                                    color: '#285DF3'
                                },
                                {
                                    offset: 0.8,
                                    color: '#285DF3'
                                },
                                {
                                    offset: 1,
                                    color: '#0000'
                                }
                            ]),
                    },
                    lineStyle: { //线的颜色
                        color: '#0000'
                    },
                    //以及在折线图每个日期点顶端显示数字
                    label: {
                        show: false,
                        position: 'top',
                        textStyle: {
                            color: 'white'
                        }
                    }
                },
            },
            areaStyle: {},

            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name: '排放总量',
            type: 'line',
            smooth: true,
            symbol: 'none',
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default',
                        //渐变色实现
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, //变化度
                            //三种由深及浅的颜色
                            [{
                                offset: 0,
                                color: '#00FFFF'
                            }, {
                                offset: 0.5,
                                color: '#00FFFF'
                            }, {
                                offset: 1,
                                color: '#0000'
                            }]),
                    },
                    lineStyle: { //线的颜色
                        color: '#0000'
                    },
                    //以及在折线图每个日期点顶端显示数字
                    label: {
                        show: false,
                        position: 'top',
                        textStyle: {
                            color: 'white'
                        }
                    }
                },
            },
            areaStyle: {},
            data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
        },
                {
            name: '减排总量',
            type: 'line',
            smooth: true,
            symbol: 'none',
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default',
                        //渐变色实现
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, //变化度
                            //三种由深及浅的颜色
                            [{
                                offset: 0,
                                color: '#F35D28'
                            }, {
                                offset: 0.5,
                                color: '#F35D28'
                            }, {
                                offset: 1,
                                color: '#0000'
                            }]),
                    },
                    lineStyle: { //线的颜色
                        color: '#0000'
                    },
                    //以及在折线图每个日期点顶端显示数字
                    label: {
                        show: false,
                        position: 'top',
                        textStyle: {
                            color: 'white'
                        }
                    }
                },
            },
            areaStyle: {},
            data: [23, 122.9, 231.1, 132.7, 334.3, 131.2, 232.6, 78.6, 67.4, 59.4, 59.3, 98.7]
        }
    ]
}