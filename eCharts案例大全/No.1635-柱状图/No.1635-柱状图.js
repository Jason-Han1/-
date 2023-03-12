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
const MAX = [400, 400, 400, 400, 400]
const VALUE = [320,270,112,50,305]
var echartData = {
    xData:  ['情指行', '全警通', '关注人员', '电子笔录', '淘金者'],
    valueData: [320,270,112,50,305]
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
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: 'RGBA(54, 80, 94, 1)',
                opacity:0.8
            }
        },
        axisLabel: {
            show: true,
            margin: 2,
            textStyle: {
                color: 'rgba(243, 255, 255, 1)',
            },
        },
    },
    yAxis: {
        type: 'value',
        min: 0,
        axisTick: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'RGBA(54, 80, 94, 1)',
                opacity:0.8
            }
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#1994d0',
                opacity:0.8
            }
        },
        axisLabel: {
            show: true,
            margin: 15,
            textStyle: {
                color: 'rgba(21, 253, 254, 1)',
                fontSize: 15
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
                        fill: 'RGBA(15, 68, 92, 1)'
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
                        fill: 'RGBA(15, 68, 92, 1)'
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
                        fill: 'RGBA(15, 68, 92, 1)'
                    }
                }]
            }
        },
        data: MAX
    }, {
        type: 'custom',
        "label": {
            "show": true,
            "position": "top",
            "distance": 10,
            "color": "#fff"
          },
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
                                color: 'rgba(68, 217, 252, 1)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(77, 172, 255, 1)'
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
                                color: 'rgba(68, 217, 252, 1)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(77, 172, 255, 1)'
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
                                color: 'rgba(68, 217, 252, 1)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(77, 172, 255, 1)'
                            }
                        ])
                    }
                }]
            }
        },
        data: echartData.valueData
    }, 
     {
        type: 'bar',
        label: {
            normal: {
                show: true,
                position: 'top',
                fontSize: 16,
                color: 'rgba(21, 253, 254, 1)',
                offset: [4, -15]
            }
        },
        itemStyle: {
            color: 'transparent'
        },
        data: echartData.valueData
    }
    ]
}