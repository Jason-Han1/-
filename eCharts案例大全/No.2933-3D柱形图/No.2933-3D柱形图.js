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
        const c3 = [xAxisPoint[0] + 10, xAxisPoint[1] - 9]
        const c4 = [shape.x + 10, shape.y - 9]
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
        const c2 = [shape.x + 10, shape.y - 9]
        const c3 = [shape.x + 1, shape.y - 18]
        const c4 = [shape.x - 9, shape.y - 9]
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
    }
})
echarts.graphic.registerShape('CubeLeft', CubeLeft)
echarts.graphic.registerShape('CubeRight', CubeRight)
echarts.graphic.registerShape('CubeTop', CubeTop)
const MAX = [6000, 6000, 6000, 6000, 6000, 5000, 4000, 3000, 2000, 4000, 3000, 2000, 1800]
const VALUE = [2012, 1230, 3790, 2349, 1654, 1230, 3790, 2349, 1654, 3790, 2349, 1654, 1300]
option = {
    backgroundColor: "#010d3a",
    title: {
        text: '',
        top: 32,
        left: 18,
        textStyle: {
            color: '#00F6FF',
            fontSize: 24
        }
    },
    tooltip: {
        trigger: "item",
        formatter: "用水量:{c}m³",
        backgroundColor: 'rgba(40, 105, 233, .9)'
    },
    grid: {
        left: 20,
        right: 40,
        bottom: '19%',
        top: 107,
        containLabel: true
    },
    xAxis: {
        name: '(时)',
        nameTextStyle: {
            fontSize: 12,
            color: '#AFBCC4',
            verticalAlign: 'top'
        },
        type: 'category',
        data: ['0', '2', '4', '6', '8', '10',
            '12', '14', '16', '18', '20', '22', '24'
        ],
        axisLine: {
            show: true,
            lineStyle: {
                color: '#9B9B9B'
            }
        },
        offset: 20,
        axisTick: {
            show: false,
            length: 9,
            alignWithLabel: true,
            lineStyle: {
                color: '#7DFFFD'
            }
        },
        axisLabel: {
            fontSize: 12,
            color: '#AFBCC4'
        }
    },
    yAxis: {
        type: 'value',
        name: 'm³',
        nameTextStyle: {
            fontSize: 12,
            color: '#AFBCC4'
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#E9E9E9'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#9B9B9B'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            fontSize: 12,
            color: '#AFBCC4'
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
                        fill: 'rgba(212, 212, 216, .2)'
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
                        fill: 'rgba(212, 212, 216, .2)'
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
                        fill: 'rgba(212, 212, 216, .2)'
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
                                color: 'rgba(109, 205, 230, 1)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(56, 160, 214, 1)'
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
                                color: 'rgba(109, 205, 230, 1)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(56, 160, 214, 1)'
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
                                color: 'rgba(109, 205, 230, 1)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(56, 160, 214, 1)'
                            }
                        ])
                    }
                }]
            }
        },
        data: VALUE
    }, {
        type: 'bar',
        barWidth: 17,
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: (e) => {
                    switch (e.name) {
                        case '10kV线路':
                            return VALUE[0]
                        case '公用配变':
                            return VALUE[1]
                        case '35kV主变':
                            return VALUE[2]
                        case '水':

                    }
                },
                fontSize: 16,
                color: '#fff',
                offset: [4, -25]
            }
        },
        itemStyle: {
            color: 'transparent'
        },
        // data: MAX
    }]
}