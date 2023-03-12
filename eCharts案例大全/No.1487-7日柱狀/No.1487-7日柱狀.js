// 绘制左侧面
const CubeLeft = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        // 会canvas的应该都能看得懂，shape是从custom传入的
        const xAxisPoint = shape.xAxisPoint
        const c0 = [shape.x, shape.y]
        const c1 = [shape.x - 13, shape.y - 13]
        const c2 = [xAxisPoint[0] - 13, xAxisPoint[1] - 13]
        const c3 = [xAxisPoint[0], xAxisPoint[1]]
        ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
    }
})
// 绘制右侧面
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
// 绘制顶面
const CubeTop = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        const c1 = [shape.x, shape.y]
        const c2 = [shape.x + 18, shape.y - 9]
        const c3 = [shape.x + 5, shape.y - 22]
        const c4 = [shape.x - 13, shape.y - 13]
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
    }
})
// 注册三个面图形
echarts.graphic.registerShape('CubeLeft', CubeLeft)
echarts.graphic.registerShape('CubeRight', CubeRight)
echarts.graphic.registerShape('CubeTop', CubeTop)

const MAX = []
const VALUE = [340,150,241,479,256,500,200]
option = {
    backgroundColor: "#1A213E",

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: function(params, ticket, callback) {
            const item = params[1]
            return item.name + ' : ' + item.value;
        }
    },
    grid: {
        left: 40,
        right: 40,
        bottom: 100,
        top: 100,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7'],
        axisLine: {
            show: false,
            lineStyle: {
                color: '#303133'
            }
        },
        offset: 5,
        axisTick: {
            show: false,
            length: 9,
            alignWithLabel: true,
            lineStyle: {
                color: '#7DFFFD'
            }
        },
        axisLabel: {
            show: true,
            fontSize: 16,
                color: '#9FACBC'
        },
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: false,
            lineStyle: {
                color: '#ccc'
            }
        },
        splitLine: {
            show: true
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            fontSize: 16,
            color: '#9FACBC'
        },
        splitLine: {
            show:true,
            lineStyle: {
                color: '#333B55',
                type: 'dashed'
            }
        },
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
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: 'rgba(47,84,235,.2)'
                    }
                }, {
                    type: 'CubeRight',
                    shape: {
                        api,
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: 'rgba(133,165,255,.2)'
                    }
                }, {
                    type: 'CubeTop',
                    shape: {
                        api,
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: 'rgba(173,198,255,.2)'
                    }
                }]
            }
        },
        data: MAX
    }, {
        type: 'custom',
        renderItem: (params, api) => {
            const location = api.coord([api.value(0), api.value(1)])
            var color1 = api.value(1) > 2000 ? 'red' : new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(24,144,255,1)'
                },
                {
                    offset: 1,
                    color: 'rgba(0,80,179,1)'
                }
            ])
            var color2 = api.value(1) > 2000 ? 'red' : new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(24,144,255,1)'
                },
                {
                    offset: 1,
                    color: 'rgba(64,169,255,1)'
                }
            ])
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
                        fill: color1
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
                        fill: color1
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
                        fill: color2
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

                fontSize: 16,
                color: '#fff',
                offset: [2, -25]
            }
        },
        itemStyle: {
            color: 'transparent'
        },
        tooltip: {

        },
        data: MAX
    }]
}