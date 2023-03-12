            let CubeLeft = echarts.graphic.extendShape({
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
            let CubeRight = echarts.graphic.extendShape({
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
            let CubeTop = echarts.graphic.extendShape({
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
            const MAX = [100, 100, 100]
            const VALUE = [18, 29, 45]
             option = {
                backgroundColor: '#012366',
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
                    top: 50,
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    data: ['xx1校区', 'xx2校区', 'xx2校区'
                    ],
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: 'white'
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
                        
                        fontSize: 12
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLine: {
                        show: false,
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
                        show: false,
                        fontSize: 16
                    },
                    boundaryGap: ['20%', '20%']
                },
                series: [{
                    type: 'custom',
                    renderItem: function(params, api) {
                        console.log(params,'xxxxxxxxxxxxxxxx')
                        const location = api.coord([api.value(0), api.value(1)])
                        let maxColor = [
                            {
                                start: 'rgba(56, 160, 214, .2)',
                                end: 'rgba(109, 205, 230, .2)'
                            },
                            {
                                start: 'rgba(67, 102, 243, .2)',
                                end: 'rgba(29, 67, 243, .2)'
                            },
                            {
                                start: 'rgba(98, 63, 243, .2)',
                                end: 'rgba(134, 81, 244, .2)'
                            },                                                        
                        ]
                        
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
                                    fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: maxColor[params.dataIndex].end,
                                        },
                                        {
                                            offset: 1,
                                           color: maxColor[params.dataIndex].start,
                                        },
                                    ]),
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
                                    fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: maxColor[params.dataIndex].end,
                                        },
                                        {
                                            offset: 1,
                                           color: maxColor[params.dataIndex].start,
                                        },
                                    ]),
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
                                    fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        {
                                            offset: 0,
                                            color: maxColor[params.dataIndex].end,
                                        },
                                        {
                                            offset: 1,
                                           color: maxColor[params.dataIndex].start,
                                        },
                                    ]),
                                }
                            }]
                        }
                    },
                    data: MAX
                }, {
                    type: 'custom',
                    renderItem: (params, api) => {
                        const location = api.coord([api.value(0), api.value(1)])
                        let valueColor = [
                            {
                                start: 'rgba(0, 141, 206, 1)',
                                end: 'rgba(109, 205, 230, 1)'
                            },
                            {
                                start: 'rgba(67, 102, 243, 1)',
                                end: 'rgba(29, 67, 243, 1)'
                            },
                            {
                                start: 'rgba(98, 63, 243, 1)',
                                end: 'rgba(134, 81, 244, 1)'
                            },                                                                            
                        ]
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
                                            color: valueColor[params.dataIndex].end
                                        },
                                        {
                                            offset: 1,
                                            color: valueColor[params.dataIndex].start
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
                                            color: valueColor[params.dataIndex].end
                                        },
                                        {
                                            offset: 1,
                                            color: valueColor[params.dataIndex].start
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
                                            color: valueColor[params.dataIndex].end
                                        },
                                        {
                                            offset: 1,
                                            color: valueColor[params.dataIndex].start
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
                            formatter: (e) => {
                                    return e.data + '%'

                            },
                            fontSize: 16,
                            color: '#fff',
                            offset: [4, -25]
                        }
                    },
                    itemStyle: {
                        color: 'transparent'
                    },
                    data: VALUE
                }]
            } 