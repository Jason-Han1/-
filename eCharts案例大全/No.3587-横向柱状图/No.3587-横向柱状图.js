const CubeLeft = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        const xAxisPoint = shape.xAxisPoint
        const c0 = [shape.x, shape.y]
        const c1 = [shape.x + 5, shape.y - 12]
        const c2 = [xAxisPoint[0] + 5, xAxisPoint[1] - 12]
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
        const c3 = [xAxisPoint[0] + 5, xAxisPoint[1] + 12]
        const c4 = [shape.x + 5, shape.y + 12]
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
    }
})
const CubeTop = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        // 逆时针 角 y 负数向上  X 负数向左
        const c1 = [shape.x, shape.y - 1]
        const c2 = [shape.x + 5, shape.y - 12]
        const c3 = [shape.x + 9, shape.y + 1]
        const c4 = [shape.x + 5, shape.y + 12]
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
    }
})
echarts.graphic.registerShape('CubeLeft', CubeLeft)
echarts.graphic.registerShape('CubeRight', CubeRight)
echarts.graphic.registerShape('CubeTop', CubeTop)
const VALUE = [12,12,12,12,12,12]
option = {
    title: {
        text: '横向柱状图'
    },
    xAxis: {
        axisLabel: {javascript:;
            show: false
        },
        splitLine: {
            show: false
        },
        type: 'value',
    },
    yAxis: {
        type: 'category',
        axisLabel: {
            show: true
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        data: ['类目一','类目二','类目三','类目四','类目五','类目六']
    },
    series: [{
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
                        xAxisPoint: api.coord([0,api.value(1)])
                    },
                    style: {
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#00B0D0'
                        }, {
                            offset: 1,
                            color: '#00FFFE'
                        }])
                    }
                }, {
                    type: 'CubeRight',
                    shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([0, api.value(1)])
                    },
                    style: {
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#002E75' // 顶部
                        }, {
                            offset: 1,
                            color: '#00B0D0' // 底部
                        }])
                    }
                }, {
                    type: 'CubeTop',
                    shape: {
                        api,
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([0, api.value(1)])
                    },
                    style: {
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#33F7FB'
                        }, {
                            offset: 1,
                            color: '#00FFFE'
                        }])
                    }
                }]
            }
        },
        data: VALUE
    }]
};
