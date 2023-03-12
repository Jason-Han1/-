// 绘制左侧面
        const wid = 30;
        const w1 = Math.sin(Math.PI/6) * wid; //4
        const w2 = Math.sin(Math.PI/3) * wid; // 6.8
        const snapHeight = wid / 2;
        const CubeLeft = echarts.graphic.extendShape({
            shape: {
                x: 0,
                y: 0
            },
            buildPath: function(ctx, shape) {
                // 会canvas的应该都能看得懂，shape是从custom传入的
                const xAxisPoint = shape.xAxisPoint
                const c0 = [shape.x, shape.y ]
                const c1 = [shape.x - w2, shape.y ]
                const c2 = [shape.x - w2, xAxisPoint[1]]
                const c3 = [shape.x, xAxisPoint[1]]
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
                const c2 = [shape.x, xAxisPoint[1] ]
                const c3 = [shape.x + w1, xAxisPoint[1] - w2 + snapHeight]
                const c4 = [shape.x + w1, shape.y - w2 + snapHeight]
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
                //
                const c1 = [shape.x, shape.y ]
                const c2 = [shape.x + w1, shape.y - w2 + snapHeight ] //右点
                const c3 = [shape.x - w2 + w1, shape.y - w2 + snapHeight ]
                const c4 = [shape.x - w2, shape.y  ]
                ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
            }
        })
        // 注册三个面图形
        echarts.graphic.registerShape('CubeLeft', CubeLeft)
        echarts.graphic.registerShape('CubeRight', CubeRight)
        echarts.graphic.registerShape('CubeTop', CubeTop)

       var option = {
            backgroundColor:'#01224d',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: function(params){
                    let item ='';
                    item += params[0].name
                    $(params).each(function (idx,itm) {
                        item += ':'+itm.value
                    });
                    return item;
                }
            },
            // grid: {
            //     left: '5%',
            //     right: '5%',
            //     top: '15%',
            //     bottom: '10%',
            //     containLabel: true
            // },
            grid: {
                top: "25%",
                left: "6%",
                bottom: "10%",
                right: "5%",
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: ['xxx','xxx','xxx','xxx','xxx','xx','xxx','xxx','xxx'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#3e6f8e',
                        width:1
                    }
                },
                axisTick: {
                    show: false,
                    length: 9,
                    alignWithLabel: true,
                    lineStyle: {
                        color: '#AAA'
                    }
                },
                axisLabel: {
                    fontSize:20,
                    margin:30,
                    color: 'white'
                },
                splitLine:{
                    show: true,
                    lineStyle: {
                        color: '#ffffff',
                        opacity:0.2,
                        width:1
                    }
                },
            },
            yAxis: {
                name:'单位：万千瓦',
                type: 'value',
                nameTextStyle:{
                    color:'white',
                    fontSize:20
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#3e6f8e',
                        width:1
                    }
                },
                axiosTick:{
                  show:false
                },
                axisLabel: {
                    color: 'white',
                    fontSize:20,
                    margin:30,
                },
                splitLine:{
                    show: true,
                    lineStyle: {
                        color: '#ffffff',
                        opacity:0.2,
                        width:1
                    }
                },
                nameTextStyle: {
                    color: "white",
                    fontSize: 20
                },
                nameGap: 40
            },
            series: [
                {
                      type: 'bar',
                      label: {
                        normal: {
                          show: true,
                          position: 'top',
                          fontSize: 16,
                          color: '#fff',
                          offset: [0, -10],
                        },
                      },
                      tooltip: {
                        show:false
                      },
                      itemStyle: {
                        color: 'transparent',
                      },
                      data:[225,275,365,436,377,270,325,291,291],
                    },
                {
                    type: 'custom',
                    renderItem: (params, api) => {
                        const location = api.coord([api.value(0), api.value(1)]);
                        location[0] = location[0] + wid*0;
                        const xlocation = api.coord([api.value(0), 0]);
                        xlocation[0] = xlocation[0] + wid*0;
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
                                    xAxisPoint: xlocation
                                },
                                style: {
                                    fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#059de6'
                                    },
                                        {
                                            offset: 1,
                                            color: '#059de6'
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
                                    xAxisPoint: xlocation
                                },
                                style: {
                                    fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#254193'
                                    },
                                        {
                                            offset: 1,
                                            color: '#254193'
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
                                    xAxisPoint: xlocation
                                },
                                style: {
                                    fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#17e0fe'
                                    },
                                        {
                                            offset: 1,
                                            color: '#17e0fe'
                                        }
                                    ])
                                }
                            }]
                        }
                    },
                    color:'blue',
                    data: [225,275,365,436,377,270,325,291,291]
                }]
        }