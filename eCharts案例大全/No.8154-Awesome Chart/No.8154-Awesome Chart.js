option = {
    backgroundColor:'#021228',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    legend: {
        icon: 'roundRect',
        itemWidth: 10,
        itemHeight: 5,
        data: ['IT设备', '空调', '其他设备'],
        textStyle: {
            fontSize: 12, //字体大小
            color: '#65aaf1', //字体颜色
        },
        right: '3%' //距离右侧
    },
    grid: {
        left: '3%',
        top: '10%',
        right: '4%',
        bottom: '3%',
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
                color: '#273f55'
            }
        },
        axisLabel: {
            interval: 0, //设置x轴的标签显示可自适应
            show: true,
            textStyle: {
                color: '#8fd5f3'
            }
        },
        data: ['1', '2', '3', '4', '5']
    }],
    yAxis: [{
        type: 'value',
        name: '单位/个',
        nameTextStyle: { //y轴上方单位的颜色
            color: '#8fd5f3'
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false, //y轴线
            lineStyle: {
                show: false,

            }
        },
        axisLabel: {
            // margin: 10,
            textStyle: {
                fontSize: 12,
                color: '#8fd5f3',
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: ['#56859d'],
                width: 1,
                type: 'solid'
            }
        },


    }],
    series: [{
            name: 'IT设备',
            type: 'line',
            smooth: true,//曲线
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
                        color: 'rgba(11,235,255,0.8)'
                    }, {
                        offset: 0.8,
                        color: 'transparent'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: '#0bebff',
                    borderColor: '#0bebff',
                    borderWidth: 12

                }
            },
            data: [60, 110, 70, 90, 80],
        },
        {
            name: '空调',
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
                        color: 'rgba(1,172,252,0.8)'
                    }, {
                        offset: 0.8,
                        color: 'transparent'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: '#01acfc',
                    borderColor: '#01acfc',
                    borderWidth: 12

                }
            },
            data: [50, 90, 60, 80, 70],
        },
        {
            name: '其他设备',
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
                            color: 'rgba(246,149,35,0.8)'
                        }, {
                            offset: 0.8,
                            color: 'transparent'
                        },
                       
                    ], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: '#f69523',
                    borderColor: '#f69523',
                    borderWidth: 5
                }
            },
            data: [40, 80, 50, 70, 60],
        },
    ]
}