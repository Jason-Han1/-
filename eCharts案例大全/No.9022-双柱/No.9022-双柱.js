var myData = ['材料', '电气电力', '家具及家电', '新一代信息技术', '食品医药消费品']
var myData1 = ['能源节能与汽车', '光电产品', '石油化工煤炭', '机电', '其他']
var lastYearData = {
    1: [350, 290, 220, 320, 450]
}
var thisYearData = {
    1: [210, 380, 230, 390, 475]
}
var timeLineData = [1]
var option = {
    baseOption: {
        timeline: {
            show: false,
            top: 0,
            data: []
        },
        grid: [{
            show: false,
            left: '5%',
            // top: '10%',
            // bottom: '50%',
            containLabel: true,
            width: '45%'
        }, {
            show: false,
            left: '50%',
            // top: '10%',
            // bottom: '5%',
            width: '40%'
        }, {
            show: false,
            right: '4%',
            // top: '10%',
            // bottom: '5%',
            containLabel: true,
            width: '45%'
        }],
        xAxis: [{
            type: 'value',
            inverse: true,
            min: 0,
            max: 500,
            interval: 125,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            position: 'bottom',
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'rgba(255,255,255,.6)',
                    fontSize: 28
                }
            },
            splitLine: {
                show: false
            }
        }, {
            gridIndex: 1,
            show: false
        }, {
            gridIndex: 2,
            min: 0,
            max: 500,
            interval: 125,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            position: 'bottom',
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'rgba(255,255,255,.6)',
                    fontSize: 28
                }
            },
            splitLine: {
                show: false
            }
        }],
        yAxis: [{
                type: 'category',
                inverse: true,
                position: 'right',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba(255,255,255,.6)',
                        fontSize: 28
                    }
                },
                data: myData
            },
            {
                gridIndex: 1,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false,
                    textStyle: {
                        color: 'rgba(255,255,255,.6)',
                        fontSize: 28
                    }

                },
                // data:myData,
                data: myData1.map(function(value) {
                    return {
                        value: value,
                        textStyle: {
                            align: 'center'
                        }
                    }
                })
            }, {
                gridIndex: 2,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba(255,255,255,.6)',
                        fontSize: 28
                    }

                },
                data: myData1
            }
        ],
        series: []

    },
    options: []
}

option.baseOption.timeline.data.push(timeLineData[0])
option.options.push({
    series: [{
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    show: true,
                    color: 'transparent',
                    borderWidth: 1,
                    borderColor: 'RGB(16,34,57)',
                    barBorderRadius: 30,
                }
            },
            barGap: '-100%',
            barWidth: '40',
            data: [500, 500, 500, 500, 500]
        },

        {
            name: '中间',
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'RGB(189,42,183)'
                    }, {
                        offset: 1,
                        color: 'RGB(59,27,232)'
                    }]),
                    borderWidth: 0,
                    borderColor: '#f8d517',
                    barBorderRadius: 30,
                }
            },
            barGap: '-100%',
            barWidth: '40',
            data: lastYearData[timeLineData[0]]
        },
        {
            name: '最内',
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'RGB(195,64,72)'
                    }, {
                        offset: 1,
                        color: 'RGB(132,35,130)'
                    }]),
                    borderWidth: 0,
                    borderColor: '#f39c11',
                    barBorderRadius: 30,
                }
            },
            label: {
                normal: {
                    position: 'inside',
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 20,
                    }
                }
            },
            barWidth: '40',
            data: [140, 170, 90, 200, 350, ],
        },
        {
            type: 'bar',
            xAxisIndex: 2,
            yAxisIndex: 2,
            itemStyle: {
                normal: {
                    show: true,
                    color: 'transparent',
                    borderWidth: 1,
                    borderColor: 'RGB(16,34,57)',
                    barBorderRadius: 30,
                }
            },
            barGap: '-100%',
            barWidth: '40',
            data: [500, 500, 500, 500, 500]
        },
        {
            name: '中间1',
            type: 'bar',
            xAxisIndex: 2,
            yAxisIndex: 2,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#f39c11',
                    borderWidth: 0,
                    borderColor: '#f39c11',
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'RGB(189,42,183)'
                    }, {
                        offset: 1,
                        color: 'RGB(59,27,232)'
                    }]),
                }
            },
            label: {
                // normal: {
                //     position: 'inside',
                //     textStyle: {
                //         // color:'#ffffff',
                //         fontSize: 20,
                //     }
                // }
            },
            barWidth: '40',
            data: thisYearData[timeLineData[0]]
        },
        {
            name: '最内1',
            type: 'bar',
            xAxisIndex: 2,
            yAxisIndex: 2,
            itemStyle: {
                normal: {
                    show: true,
                    color: '#fff',
                    borderWidth: 0,
                    borderColor: '#f39c11',
                    barBorderRadius: 30,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'RGB(195,64,72)'
                    }, {
                        offset: 1,
                        color: 'RGB(132,35,130)'
                    }]),
                }
            },
            label: {
                normal: {
                    position: 'inside',
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 20,
                    }
                }
            },
            barWidth: '40',
            data: [140, 170, 190, 200, 220],
        }
    ]
});