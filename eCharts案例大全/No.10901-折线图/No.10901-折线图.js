var data1= [96,100,80,95,91,60,80,99,80,51,75,99],
    data2 = [97,99,99,100,99,90,80,91,69,67,90,84],
    data3 = [84,81,67,72,43,88,91,101,79,87,92,150];
option = {
    backgroundColor:"#293042",
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#fff'
            }
        }
    },
    legend: {
        icon: '',
        itemWidth: 20,
        itemHeight: 10,
        itemGap: 40,
        data: ['交通', '电力', '水力'],
        left: '4%',
        top: '2%',
        textStyle: {
            fontSize: 12,
            color: '#fff'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        top: '15%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: 'rgba(0,0,0,.5)'
            }
        },
        axisPointer: {
            show: true
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#94B6FF",
                fontSize: 12
            }
        },
        splitArea: {
            show: true,
            areaStyle: {
                color: ['rgba(56,128,255,0)', 'rgba(56,128,255,0.2)']
            }
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(0,0,0,.5)'
            }
        },
        axisLabel: {
            // margin: 10,
            textStyle: {
                color: "#94B6FF",
                fontSize: 14
            }
        },
        splitLine: {
            show:false,
            lineStyle: {
                color: '#3891FF'
            }
        }
    }],
    series: [{
            name: '交通',
            type: 'line',
            smooth: false, //是否平滑曲线显示
            symbolSize: 0,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(255, 207, 73, 0.3)'
                    }, {
                        offset: 1,
                        color: 'rgba(253, 162, 35, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: '#FDA223'
                }
            },
            data: data1
        },
        {
            name: '电力',
            type: 'line',
            smooth: false,
            symbolSize: 0,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(70, 96, 237, 0.17)'
                    }, {
                        offset: 1,
                        color: 'rgba(0, 136, 212, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: '#4660EB'
                }
            },
            data: data2
        },
        {
            name: '水力',
            type: 'line',
            smooth: false,
            symbolSize: 0,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 255, 255, 0.4)'
                    }, {
                        offset: 1,
                        color: 'rgba(0, 255, 255, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: '#00FFFF'
                }
            },
            data: data3
        },
    ]
};