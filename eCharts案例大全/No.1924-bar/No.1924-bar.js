const CubeLeft = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        const xAxisPoint = shape.xAxisPoint
        const c0 = [shape.x, shape.y]
        const c1 = [shape.x - 6, shape.y - 6]
        const c2 = [xAxisPoint[0] - 6, xAxisPoint[1] - 6]
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
        const c3 = [xAxisPoint[0] + 12, xAxisPoint[1] - 6]
        const c4 = [shape.x + 12, shape.y - 6]
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
        const c2 = [shape.x + 12, shape.y - 6]
        const c3 = [shape.x + 6, shape.y - 12]
        const c4 = [shape.x - 6, shape.y - 6]
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
    }
})
echarts.graphic.registerShape('CubeLeft', CubeLeft)
echarts.graphic.registerShape('CubeRight', CubeRight)
echarts.graphic.registerShape('CubeTop', CubeTop)
const MAX = [60, 60,20, 40, 30, 20]
const VALUE = [20,  23, 20, 37, 23, 16]
option = {
    title: {
        text: '',
        top: 32,
        left: 18,
        textStyle: {
            // color: '#00F6FF',
            fontSize: 24
        }
    },
    grid: {
        left: 20,
        right: 20,
        bottom: 20,
        top: 40,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['12月','1月','2月','3月','4月','6月'],
        axisLine: {
            show: true,
            lineStyle: {
                color: '#A5ACB5'
            }
        },
        offset: 5,
        axisTick: {
            show: false,
            length: 9,
            alignWithLabel: true,
            lineStyle: {
                color: '#3188FF'
            }
        },
        axisLabel: {
            fontSize: 10
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: true,
            lineStyle: {
               color: '#A5ACB5'
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            fontSize: 12
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
                        fill: 'rgba(47,102,192,.27)'
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
                        fill: 'rgba(59,128,226,.27)'
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
                        fill: 'rgba(72,156,221,.27)'
                    }
                }]
            }
        },
        data: MAX
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
                                color: '#3B80E2'
                            },
                            {
                                offset: 1,
                                color: '#49BEE5'
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
                                color: '#3B80E2'
                            },
                            {
                                offset: 1,
                                color: '#49BEE5'
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
                                color: '#3B80E2'
                            },
                            {
                                offset: 1,
                                color: '#49BEE5'
                            }
                        ])
                    }
                }]
            }
        },
        data: VALUE
    }, {
        type: 'bar',
        label: {
            normal: {
                show: true,
                position: 'top',
                fontSize: 12,
                color: '#A0C5FA',
                offset: [4, -16]
            }
        },
        itemStyle: {
            color: 'transparent'
        },
        data: MAX
    }, {
        type: 'bar',
        barGap: '-100%',
        label: {
            normal: {
                show: true,
                position: 'top',
                fontSize: 12,
                color: '#599EFF',
                offset: [4, -8]
            }
        },
        itemStyle: {
            color: 'transparent'
        },
        data: VALUE
    }]
}