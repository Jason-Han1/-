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
                    const c1 = [shape.x - 18, shape.y - 10]
                    const c2 = [xAxisPoint[0] - 18, xAxisPoint[1] - 9]
                    const c3 = [xAxisPoint[0], xAxisPoint[1]]
                    ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
                }
            });
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
            });
            // 绘制顶面
            const CubeTop = echarts.graphic.extendShape({
                shape: {
                    x: 0,
                    y: 0
                },
                buildPath: function(ctx, shape) {
                    const c1 = [shape.x, shape.y]
                    const c2 = [shape.x + 18, shape.y - 9]
                    const c3 = [shape.x, shape.y - 18]
                    const c4 = [shape.x - 18, shape.y - 10]
                    ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
                }
            });
            // 注册三个面图形
            echarts.graphic.registerShape('CubeLeft', CubeLeft)
            echarts.graphic.registerShape('CubeRight', CubeRight)
            echarts.graphic.registerShape('CubeTop', CubeTop)

            const MAX = [100,100, 100, 100]
            const VALUE = [19,12, 12, 25 ]
            let category=['天津分公司', '上海分公司', '深圳分公司', '湛江分公司' ];
            var option = {
                backgroundColor:'#001a60',
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
                    left: '10%',
                    right: '10%',
                    bottom: 60,
                    top: 50,
                },
                xAxis: [{
                    type: 'category',
                    position:'bottom',
                    data: category,
                    axisLine: {
                        lineStyle: {
                            color: '#e0e7ff'
                        }
                    },
                    axisTick: {
                        show:false,
                        length: 6,
                    },
                    axisLabel: {
                        //show:false,
                        color:'#fff',
                        fontSize: 12,
                        rotate:'0'
                    },
                }],
                yAxis: {
                    type: 'value',
                    name:"得分率",
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#e0e7ff'
                        }
                    },
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        fontSize: 12
                    },
                    boundaryGap: ['0%', '0%']
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
                                    fill:'rgba(159,255,91,0.4)'
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
                                    fill:  'rgba(159,255,91,0.5)'
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
                                    fill: 'rgba(186,255,137,0.6)'
                                }
                            }]
                        }
                    },
                    data: MAX
                }, {
                    type: 'custom',
                    renderItem: (params, api) => {
                        const location = api.coord([api.value(0), api.value(1)])
                        var color = api.value(1) > 2000 ? 'red' : new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#61e400'
                        },
                            {
                                offset: 1,
                                color: '#389500'
                            }
                        ])
                        var color1  = api.value(1) > 2000 ? 'red' : new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#95fb4c'
                        },
                            {
                                offset: 1,
                                color: '#95fb4c'
                            }
                        ])
                        var color2  = api.value(1) > 2000 ? 'red' : new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#53c400'
                        },
                            {
                                offset: 1,
                                color: '#2e7a00'
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
                                    xValue: api.value(1),
                                    yValue: api.value(0),
                                    x: location[0],
                                    y: location[1],
                                    xAxisPoint: api.coord([api.value(0), 0])
                                },
                                style: {
                                    fill: color2
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
                                    fill: color1
                                }
                            }]
                        }
                    },
                    data: VALUE
                }, {
                    type: 'bar',
                    label: {
                        normal: {
                            show: false,
                            position: 'top',
                            fontSize: 12,
                            color: '#',
                            offset: [2, -15]
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