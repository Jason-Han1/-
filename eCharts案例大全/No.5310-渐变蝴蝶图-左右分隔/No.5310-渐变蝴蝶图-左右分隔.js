let data = [{
    name: "aaaa",
    value: 40
}, {
    name: "bbbb",
    value: 30
}, {
    name: "cccc",
    value: 20
}, {
    name: "ddd",
    value: 10
}]
let label = data.map((item) => {
    return item.name
})
let lineColor='rgba(255,255,255,0.2)'
let colors = [{
        borderColor: "rgba(0, 183, 238,1)",
        start: "rgba(0, 183, 238,0.3)",
        end: "rgba(0, 183, 238,0.9)"
    },
    {
        borderColor: "rgba(235, 204, 123,1)",
        start: "rgba(235, 204, 123,0.9)",
        end: "rgba(235, 204, 123,0.3)"
    },
];
option = {
    backgroundColor: '#012248',
    dataZoom: {
        type: 'inside',
        start: 0,
        end: 100,
        yAxisIndex: [0]
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        show: true,
        icon: 'rect',
        itemWidth: 30,
        itemHeight: 10,
        itemGap: 9,
        top: '10',
        left: 'center',
        textStyle: {
            fontSize: 20,
            color: '#F1F1F3'
        },
        data: ['左', '右'],
    },
    grid: [{
        show: false,
        left: '5%',
        top: 60,
        bottom: 60,
        containLabel: true,
        width: '42%'
    }, {
        show: false,
        left: '50.5%', //调整中间文字位置
        top: 80, //使中间文字对齐
        bottom: 60,
        width: '0%',
    }, {
        show: false,
        right: '5%',
        top: 60,
        bottom: 60,
        containLabel: true,
        width: '42%'
    }],
    xAxis: [{
        type: 'value',
        inverse: true,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        position: 'top',
        axisLabel: {
            show: true,
            color: '#fff'
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: lineColor
            }
        },
    }, {
        gridIndex: 1,
        show: false
    }, {
        gridIndex: 2,
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        position: 'top',
        axisLabel: {
            show: true,
            color: '#fff'
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: lineColor
            }
        },
    }],
    yAxis: [{
        type: 'category',
        inverse: true,
        position: 'right',
        axisLine: {
            show: false,
            lineStyle: {
                color: lineColor
            }
        },

        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        data: label
    }, {
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
            show: true,
            textStyle: {
                color: '#ffffff',
                fontSize: 16,
            },
        },
        data: label.map((value) => {
            return {
                value: value,
                textStyle: {
                    align: 'center',
                }
            }
        })
    }, {
        gridIndex: 2,
        type: 'category',
        inverse: true,
        position: 'left',
        axisLine: {
            show: false,
            lineStyle: {
                color: lineColor
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false

        },
        data: label
    }],
    series: [{
            name: '左',
            type: 'bar',
            barWidth: '15',
            stack: 'left',
            label: {
                show: true,
                fontSize: 14,
                distance: 10,
                color: '#fff',
                position: 'left', //inside|right
                formatter: (params) => {
                    return params.value + '%'
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: colors[0].start
                        },
                        {
                            offset: 1,
                            color: colors[0].end
                        }
                    ]),
                    // color:colors[0].borderColor
                }
            },
            data: data
        },
        {
            name: '右',
            type: 'bar',
            barWidth: '15',
            stack: 'right',
            xAxisIndex: 2,
            yAxisIndex: 2,
            label: {
                show: true,
                fontSize: 14,
                distance: 10,
                color: '#fff',
                position: 'right', //inside|right
                formatter: (params) => {
                    return params.value + '%'
                }
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: colors[1].start
                        },
                        {
                            offset: 1,
                            color: colors[1].end
                        }
                    ]),
                    // color:colors[1].borderColor
                }
            },
            data: data
        }
    ]
}