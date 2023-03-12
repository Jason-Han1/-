let max = 100;
// 绘制左侧面
const CubeLeft = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function (ctx, shape) {
        // 会canvas的应该都能看得懂，shape是从custom传入的
        const xAxisPoint = shape.xAxisPoint
        const c0 = [shape.x, shape.y]
        const c1 = [shape.x - 8, shape.y - 8]
        const c2 = [xAxisPoint[0] - 8, xAxisPoint[1] - 8]
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
    buildPath: function (ctx, shape) {
        const xAxisPoint = shape.xAxisPoint
        const c1 = [shape.x, shape.y]
        const c2 = [xAxisPoint[0], xAxisPoint[1]]
        const c3 = [xAxisPoint[0] + 7, xAxisPoint[1] - 7]
        const c4 = [shape.x + 9, shape.y - 9]
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
    }
})
// 绘制顶面
const CubeTop = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function (ctx, shape) {
        const c1 = [shape.x, shape.y]
        const c2 = [shape.x + 9, shape.y - 9]
        const c3 = [shape.x - 1, shape.y - 16]
        const c4 = [shape.x - 8, shape.y - 8]
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
    }
})
// 注册三个面图形
echarts.graphic.registerShape('CubeLeft', CubeLeft)
echarts.graphic.registerShape('CubeRight', CubeRight)
echarts.graphic.registerShape('CubeTop', CubeTop)

// 处理数据
let dateArr = ['05/22', '05/23', '05/24', '05/25',   '05/26', '05/27', '05/28'];
let maxBarDataArr = new Array(7).fill(max);
let barData = [20, 30, 20, 10, 40, 90, 10];
let lineData = [
                [60, 80, 90, 20, 40, 80, 90],
                [95, 95, 95, 95, 95, 95, 95]
               ];
// 生成图表option
option = {
    backgroundColor: '#313131',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: function (params, ticket, callback) {
            const item = params[1]
            return item.name + ' : ' + item.value;
        }
    },
    grid: {
        left: 5,
        right: 30,
        bottom: 30,
        top: 50,
        containLabel: true
    },

    xAxis: {
        type: 'category',
        data: dateArr,
        axisLine: {
            show: true,
            lineStyle: {
                color: '#4E4E4E'
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
            fontSize: 12,
            color: 'rgba(189,189,189,0.5)',
            margin: -10,
            fontFamily: "customFont"
        },
    },
    yAxis: [{
            type: 'value',
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'white'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255,255,255,0.2)",
                    type: 'dotted'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                fontSize: 12,
                color: 'rgba(189,189,189,0.5)',
                fontFamily: "customFont"
            }
        },
        {
            type: 'value',
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'white'
                }
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: "rgba(255,255,255,0.2)",
                    type: 'dotted'
                }
            },
            axisTick: {
                show: false
            },
            max: 100,
            axisLabel: {
                show: true,
                fontSize: 12,
                formatter: '{value}',
                color: 'rgba(189,189,189,0.5)',
            }
        },
        {
            type: 'value',
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'white'
                }
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: "rgba(255,255,255,0.2)",
                    type: 'dotted'
                }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                fontSize: 12,
                formatter: '{value}',
                color: 'rgba(189,189,189,0.5)',
                fontFamily: "customFont"
            }
        }

    ],
    series: [{
            type: 'custom',
            renderItem: function (params, api) {
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
                            fill: 'rgba(12,50,32,1)'
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
                            fill: 'rgba(10,41,26,1)'
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
                            fill: 'rgba(8,35,22,1)'
                        }
                    }]
                }
            },
            data: maxBarDataArr
        }, {
            type: 'custom',
            renderItem: (params, api) => {
                const location = api.coord([api.value(0), api.value(1)])
                var color = 'rgb(28,177,108)'
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
            data: barData
        }, {
            type: 'bar',
            itemStyle: {
                color: 'transparent'
            },
            tooltip: {

            },
            data: maxBarDataArr
        },
        {
            type: 'line',
            yAxisIndex: 1,
            // symbol: 'image://../images/sanitation/line-symbol.png',
            symbolSize: 10,
            data: lineData[0],
            itemStyle: {
                color: '#1199BF'
            },
            tooltip: {

            },

        },
        {
            type: 'line',
            yAxisIndex: 2,
            showSymbol: false,
            data: lineData[1],
            itemStyle: {
                color: '#cc9e0a',
            },
            lineStyle: {
                width: 1
            },
            tooltip: {},
        }
    ]
}
