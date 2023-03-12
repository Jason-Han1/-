const CubeLeft = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        const xAxisPoint = shape.xAxisPoint
        const c0 = [shape.x, shape.y]
        const c1 = [shape.x - 9, shape.y - 9]
        const c2 = [xAxisPoint[0] - 9, xAxisPoint[1] - 9]
        const c3 = [xAxisPoint[0], xAxisPoint[1]]
        ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
    }
})
const CubeRight = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        const xAxisPoint = shape.xAxisPoint
        const c1 = [shape.x, shape.y]
        const c2 = [xAxisPoint[0], xAxisPoint[1]]
        const c3 = [xAxisPoint[0] + 18, xAxisPoint[1] - 9]
        const c4 = [shape.x + 18, shape.y - 9]
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
    }
})
const CubeTop = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        const c1 = [shape.x, shape.y]
        const c2 = [shape.x + 18, shape.y - 9]
        const c3 = [shape.x + 9, shape.y - 18]
        const c4 = [shape.x - 9, shape.y - 9]
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
    }
})
echarts.graphic.registerShape('CubeLeft', CubeLeft)
echarts.graphic.registerShape('CubeRight', CubeRight)
echarts.graphic.registerShape('CubeTop', CubeTop)
const MAX = [20, 20, 20, 20, 20]
const VALUE = [2012, 1230, 3790, 2349, 1654, 1230, 3790, 2349, 1654, 3790, 2349, 1654]
var echartData = {
    xData: ['上汽斯科达4s店','娱乐场所','科技股份有限公司','7天连锁店旅馆','某某有限'],
    valueData: [12,15,8,10,4]
}
option = {
    grid: {
        left: 20,
        right: 40,
        bottom: '19%',
        top: 107,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: echartData.xData,
        offset: 8,
        axisTick: {
            show: false,
            length: 9,
            alignWithLabel: true,
            lineStyle: {
                color: '#7DFFFD'
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#1994d0',
                opacity:0.8
            }
        },
        axisLabel: {
            show: true,
            margin: 15,
            textStyle: {
                color: '#333',
            },
        },
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        splitLine: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#1994d0',
                opacity:0.8
            }
        },
        axisLabel: {
            show: true,
            margin: 15,
            textStyle: {
                color: '#333',
            },
        },
        boundaryGap: ['20%', '20%']
    },
    series: [{
        type: 'custom',
        renderItem: function(params, api) {
            const location = api.coord([api.value(0), api.value(1)])
            return {
                type: 'group',
                children: [{
                    type: 'CubeLeft',
                    shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: 'rgba(196,209,252,0.6)'
                    }
                }, {
                    type: 'CubeRight',
                    shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: 'rgba(196,209,252,0.7)'
                    }
                }, {
                    type: 'CubeTop',
                    shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: 'rgba(196,209,252,0.8)'
                    }
                }]
            }
        },
        data: [20, 20, 20, 20, 20]
    }, {
        type: 'custom',
        renderItem: (params, api) => {
            const location = api.coord([api.value(0), api.value(1)])
            return {
                type: 'group',
                children: [{
                    type: 'CubeLeft',
                    shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(98,117,219,0.8)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(150,154,228,0.8)'
                            }
                        ])
                    }
                }, {
                    type: 'CubeRight',
                    shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(98,117,219,0.8)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(150,154,228,0.8)'
                            }
                        ])
                    }
                }, {
                    type: 'CubeTop',
                    shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(98,117,219,0.8)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(150,154,228,0.8)'
                            }
                        ])
                    }
                }]
            }
        },
        data: echartData.valueData
    }, {
        type: 'bar',
        itemStyle: {
            color: 'transparent'
        },
        data: MAX
    }]
}