const CubeLeft = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        const xAxisPoint = shape.xAxisPoint
        const scale = shape.barWidth / 2
        const deep = shape.barWidth/4
        const c0 = [shape.x, shape.y]
        const c1 = [shape.x - scale, shape.y - deep]
        const c2 = [xAxisPoint[0] - scale, xAxisPoint[1] - deep]
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
        const scale = shape.barWidth / 2
        const deep = shape.barWidth/4
        const c1 = [shape.x, shape.y]
        const c2 = [xAxisPoint[0], xAxisPoint[1]]
        const c3 = [xAxisPoint[0] + scale, xAxisPoint[1] - deep]
        const c4 = [shape.x + scale, shape.y - deep]
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
    }
})
const CubeTop = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        const scale = shape.barWidth / 2
        const deep = shape.barWidth/4
        const c1 = [shape.x, shape.y]
        const c2 = [shape.x + scale, shape.y - deep]
        const c3 = [shape.x, shape.y - scale]
        const c4 = [shape.x - scale, shape.y - deep]
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
    }
})
echarts.graphic.registerShape('CubeLeft', CubeLeft)
echarts.graphic.registerShape('CubeRight', CubeRight)
echarts.graphic.registerShape('CubeTop', CubeTop)
const xData = [2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013];
const seriesData = [7627, 7083, 6247, 3055, 2217, 993, 765, 701, 184]
const barWidth = 28;
let min = Math.min.apply(null, seriesData)
let maxValue = Math.max.apply(null, seriesData)
let iScale = Math.pow(10,String(maxValue).length - 1);
maxValue = Math.ceil(maxValue/ iScale) * iScale
option = {
    backgroundColor: 'rgba(17, 42, 62, 1)',//"#012366",
    title: {
        text: '',
        top: 32,
        left: 18,
        textStyle: {
            color: '#00F6FF',
            fontSize: 24
        }
    },
    grid: {
        left: 20,
        right: 40,
        bottom: '19%',
        containLabel: true
    },
    tooltip: {
        show: true
    },
    xAxis: {
        type: 'category',
        data: xData,
        axisLine: {
            show: true,
            lineStyle: {
                color: '#fff'
            }
        },
        offset: 10,
        axisTick: {
            show: false,
        },
        axisLabel: {
            fontSize: 14
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: true,
            lineStyle: {
                color: 'white'
            }
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            fontSize: 16
        }
    },
    series: [
        {
            type: 'pictorialBar',
            symbol: 'rect',
            barWidth: '70%',
            z: -1,
            itemStyle: {
                color: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0, color: 'rgba(49, 79, 93, 0)', 
                        },
                        {
                            offset: 1, color: 'rgba(96, 173, 255, 0.2)', 
                        },
                    ]
                },
                borderColor: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0, color: 'rgba(255,255,255, 0)', 
                        },
                        {
                            offset: 1, color: 'rgba(255,255,255, 0.5)', 
                        },
                    ]
                }
            },
            tooltip: {
                show: false
            },
            data: new Array(seriesData.length).fill(maxValue)
        },
        {
            type: 'custom',
            renderItem: function(params, api) {
                const location = api.coord([api.value(0), api.value(1)])
                return {
                    type: 'group',
                    children: [
                        {
                            type: 'CubeLeft',
                            shape: {
                                api,
                                xValue: api.value(0),
                                yValue: api.value(1),
                                x: location[0],
                                y: location[1],
                                xAxisPoint: api.coord([api.value(0), 0]),
                                barWidth
                            },
                            style: {
                                fill: '#2f5a9d'
                            }
                        }, 
                        {
                            type: 'CubeRight',
                            shape: {
                                api,
                                xValue: api.value(0),
                                yValue: api.value(1),
                                x: location[0],
                                y: location[1],
                                xAxisPoint: api.coord([api.value(0), 0]),
                                barWidth
                            },
                            style: {
                                fill: '#2f5a9d'
                            }
                        }, 
                        {
                            type: 'CubeTop',
                            shape: {
                                api,
                                xValue: api.value(0),
                                yValue: api.value(1),
                                x: location[0],
                                y: location[1],
                                xAxisPoint: api.coord([api.value(0), 0]),
                                barWidth
                            },
                            style: {
                                fill: '#2f5a9d'
                            }
                        }
                    ]
                }
            },
            tooltip: {
                show: false
            },
            data: new Array(seriesData.length).fill(maxValue - min)
        }, 
        {
            type: 'custom',
            renderItem: (params, api) => {
                const location = api.coord([api.value(0), api.value(1)])
                return {
                    type: 'group',
                    children: [
                        {
                            type: 'CubeLeft',
                            shape: {
                                api,
                                xValue: api.value(0),
                                yValue: api.value(1),
                                x: location[0],
                                y: location[1],
                                xAxisPoint: api.coord([api.value(0), 0]),
                                barWidth
                            },
                            style: {
                                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#9bfff5'
                                    },
                                    {
                                        offset: 1,
                                        color: '#6dd2ff'
                                    }
                                ])
                            }
                        }, 
                        {
                            type: 'CubeRight',
                            shape: {
                                api,
                                xValue: api.value(0),
                                yValue: api.value(1),
                                x: location[0],
                                y: location[1],
                                xAxisPoint: api.coord([api.value(0), 0]),
                                barWidth
                            },
                            style: {
                                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#9bfff5'
                                    },
                                    {
                                        offset: 1,
                                        color: '#6dd2ff'
                                    }
                                ])
                            }
                        }, 
                        {
                            type: 'CubeTop',
                            shape: {
                                api,
                                xValue: api.value(0),
                                yValue: api.value(1),
                                x: location[0],
                                y: location[1],
                                xAxisPoint: api.coord([api.value(0), 0]),
                                barWidth
                            },
                            style: {
                                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#9bfff5'
                                    },
                                    {
                                        offset: 1,
                                        color: '#6dd2ff'
                                    }
                                ])
                            }
                        }
                    ]
                }
            },
            data: seriesData
        },
         {
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    fontSize: 16,
                    color: '#fff',
                    offset: [0, -10]
                }
            },
            itemStyle: {
                color: 'transparent'
            },
            data: seriesData
        }
    ]
}