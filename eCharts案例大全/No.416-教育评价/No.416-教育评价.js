option = {
    backgroundColor: '#142058',
    // title: {

    //     textStyle: {
    //         color: '#00FFFF',
    //         fontSize: 24
    //     }
    // },
    legend: {
        top: 20,
        textStyle: {
            color: '#fff',
        },
        data: ['男', '女', '111']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },

    tooltip: {
        show: "true",
        trigger: 'item',
        backgroundColor: 'rgba(0,0,0,0.7)', // 背景
        padding: [8, 10], //内边距
        extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
        formatter: function(params) {
            if (params.seriesIndex == "3" || params.seriesIndex == "4" || params.seriesIndex == "5") {
                return params.name + '<br>' + params.seriesName + ' ： 第 ' + params.value + ' 名';
            }
        }
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#363e83',
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#363e83 ',
            }
        },
        axisLabel: {
            textStyle: {
                color: '#fff',
                fontWeight: 'normal',
                fontSize: '12',
            },
        },
    },
    xAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#363e83',
                }
            },
            axisLabel: {
                inside: false,
                textStyle: {
                    color: '#fff',
                    fontWeight: 'normal',
                    fontSize: '12',
                },
                // formatter:function(val){
                //     return val.split("").join("\n")
                // },
            },
            data: ['会', '不会', '看情况']
        }, {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: ['会', '不会', '看情况']
        },

    ],
    series: [{
            type: 'bar',
            xAxisIndex: 1,
            zlevel: 1,
            itemStyle: {
                normal: {
                    color: '#121847',
                    borderWidth: 0,
                    shadowBlur: {
                        shadowColor: 'rgba(255,255,255,0.31)',
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowOffsetY: 2,
                    },
                }
            },
            barWidth: '10%',
            data: [30, 30, 30]
        }, {
            type: 'bar',
            xAxisIndex: 1,
            barGap: '100%',
            data: [30, 30, 30],
            zlevel: 1,
            barWidth: '10%',
            itemStyle: {
                normal: {
                    color: '#121847',
                    borderWidth: 0,
                    shadowBlur: {
                        shadowColor: 'rgba(255,255,255,0.31)',
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowOffsetY: 2,
                    },
                }
            },
        }, {
            type: 'bar',
            xAxisIndex: 1,
            barGap: '100%',
            data: [30, 30, 30],
            zlevel: 1,
            barWidth: '10%',
            itemStyle: {
                normal: {
                    color: '#121847',
                    borderWidth: 0,
                    shadowBlur: {
                        shadowColor: 'rgba(255,255,255,0.31)',
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowOffsetY: 2,
                    },
                }
            },
        }, {
            name: '男',
            type: 'bar',
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#f7734e'
                    }, {
                        offset: 1,
                        color: '#e12945'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
            zlevel: 2,
            barWidth: '10%',
            data: [8, 15, 10]
        }, {
            name: '女',
            type: 'bar',
            barWidth: '10%',
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#96d668'
                    }, {
                        offset: 1,
                        color: '#01babc'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
            zlevel: 2,
            barGap: '100%',
            data: [8, 17, 26]
        }, {
            name: '111',
            type: 'bar',
            barWidth: '10%',
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#1a98f8'
                    }, {
                        offset: 1,
                        color: '#7049f0'
                    }]),
                    barBorderRadius: 50,
                    borderWidth: 0,
                }
            },
            zlevel: 2,
            barGap: '100%',
            data: [8, 17, 26]
        }

    ]
};