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
        y: 0,
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

const MAX = [800,800, 800, 800, 800, 800, 800]
const VALUE = [210.9, 260.8, 204.2, 504.9, 740.5, 600.3, 119.0]
option = {
    backgroundColor: "#012366",
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
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
        axisLine: {
            show: true,
            lineStyle: {
                color: 'white'
            }
        },
        offset: 25,
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
            fontSize: 16
        },
    },
    yAxis: {
        min:0,
        max:1200,
        interval:200,
        type: 'value',
        axisLine: {
            show: false,
            lineStyle: {
                color: 'white'
            }
        },
        splitLine: {
            show: true,
            lineStyle:{
                type:"dashed",
                color:"rgba(255,255,255,0.1)"
            },
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            fontSize: 16,
            
        },
        boundaryGap: ['20%', '20%']
    },
    series: [
        {
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
                        fill: 'rgba(47,102,192,.27)'
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
                        fill: 'rgba(59,128,226,.27)'
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
            var color = api.value(1) > 800 ? 'red' : new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(37,170,254,1)'
                },
                {
                    offset: 0.8,
                    color: 'rgba(37,170,254,0.1)'
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
                        fill: color
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
                        fill: color
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
                        fill: color
                    }
                }]
            }
        },
    
        data: VALUE
    },{
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
            color: 'transparent',
        },
        tooltip: {

        },
        data: MAX
    }]
}