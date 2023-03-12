const VALUE = [{
        value: 1000,
        itemStyle: {
            color: 'rgba(0, 206, 201,1.0)'
        }
    },
    {
        value: 800,
        itemStyle: {
            color: 'rgba(232, 67, 147,1.0)'
        }
    },
    {
        value: 600,
        itemStyle: {
            color: 'rgba(0, 184, 148,1.0)'
        }
    },
    {
        value: 500,
        itemStyle: {
            color: 'rgba(44, 44, 84,1.0)'
        }
    },
    {
        value: 200,
        itemStyle: {
            color: 'rgba(253, 203, 110,1.0)'
        }
    }

]

const VALUE1 = [1000, 800, 600, 500, 200];
const CubeLeft = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        const xAxisPoint = shape.xAxisPoint
        const c0 = [shape.x - 10, shape.y]
        const c1 = [shape.x + 10, shape.y]
        const c2 = [xAxisPoint[0] + 10, xAxisPoint[1]]
        const c3 = [xAxisPoint[0] - 10, xAxisPoint[1]]
        ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
        ctx.stroke();
    }
})


const CubeRight = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        const xAxisPoint = shape.xAxisPoint
        const c1 = [shape.x + 11, shape.y]
        const c2 = [xAxisPoint[0] + 11, xAxisPoint[1]]
        const c3 = [xAxisPoint[0] + 8 + 8, xAxisPoint[1] - 10]
        const c4 = [shape.x + 8 + 8, shape.y - 10]
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
        ctx.stroke();
    }
})





const CubeTop = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        const c1 = [shape.x - 10, shape.y - 1]
        const c2 = [shape.x + 10, shape.y - 1]
        const c3 = [shape.x + 15, shape.y - 9]
        const c4 = [shape.x - 5, shape.y - 9]
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
        ctx.stroke();
    }
})





echarts.graphic.registerShape('CubeLeft', CubeLeft)
echarts.graphic.registerShape('CubeRight', CubeRight)
echarts.graphic.registerShape('CubeTop', CubeTop)


option = {
    backgroundColor: "rgba(72, 84, 96,1.0)",
    xAxis: {
        type: 'category',
        data: ['第一', '第二', '第三', '第四', '第五'],
        axisLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255, 168, 1,1.0)'
            }
        },
        offset: 0,
        axisTick: {
            show: false,
        },
        axisLabel: {
            fontSize: 12
        }
    },
    yAxis: {
        type: 'value',
        show: false,
        axisLine: {
            show: true,
            lineStyle: {
                color: 'white'
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            fontSize: 16
        },
    },
    series: [{
            type: 'custom',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    fontSize: 11,
                    color: 'rgba(103, 123, 145, 1)',
                    offset: [5, -15]
                }
            },
            renderItem: (params, api) => {
                console.log(14777, api.style().aaa)
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
                                        color: api.style().fill
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(210, 218, 226,1.0)'
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
                                xAxisPoint: api.coord([api.value(0), 0])
                            },
                            style: {
                                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: api.style().fill
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(210, 218, 226,1.0)'
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
                                xAxisPoint: api.coord([api.value(0), 0])
                            },
                            style: {
                                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: api.style().fill
                                    },
                                    {
                                        offset: 1,
                                        color: api.style().fill
                                    }
                                ])
                            }
                        }
                    ]
                }
            },
            data: VALUE
        },

        {
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    fontSize: 11,
                    color: 'rgba(103, 123, 145, 1)',
                    offset: [5, -15]
                }
            },
            itemStyle: {
                color: 'transparent'
            },
            data: VALUE1
        }

    ]
}