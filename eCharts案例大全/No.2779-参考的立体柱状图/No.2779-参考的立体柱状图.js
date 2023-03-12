// 绘制左侧面
        const wid = 30;
        const w1 = Math.sin(Math.PI/6) * wid; //4
        const w2 = Math.sin(Math.PI/3) * wid; // 6.8
        const snapHeight = wid / 4;
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
            legend:{
                data: ['a','b','c','d'],
                selectedMode:true,
                textStyle:{
                    color:'white',
                    fontSize:20
                },
                top:'8%',
                itemWidth: 30,
                itemHeight:15,
                itemGap:30
            },
            backgroundColor:'black',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: function(params){
                    let item ='';
                    item += params[0].name+'<br>'
                    $(params).each(function (idx,itm) {
                        item += itm.seriesName+':'+itm.value +'<br>'
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
                data: ['火','风','光'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#3e6f8e',
                        width:2
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
                }
            },
            yAxis: {
                name:'单位：万千瓦',
                type: 'value',
                nameTextStyle:{
                    color:'white',
                    fontSize:20
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#0a2961'
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
                        width:3
                    }
                },
                nameTextStyle: {
                    color: "white",
                    fontSize: 20
                },
                nameGap: 40
            },
            series: [{
                name:"a",
                type: 'custom',
                renderItem: (params, api) => {
                    const location = api.coord([api.value(0), api.value(1)])
                    location[0] = location[0] + wid*(-2);
                    const xlocation = api.coord([api.value(0), 0]);
                    xlocation[0] = xlocation[0] + wid*(-2);
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
                                    color: '#3bdcff'
                                },
                                    {
                                        offset: 1,
                                        color: '#0079e4'
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
                                    color: '#2ea0d5'
                                },
                                    {
                                        offset: 1,
                                        color: '#2ea0d5'
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
                                    color: '#1680bd'
                                },
                                    {
                                        offset: 1,
                                        color: '#1680bd'
                                    }
                                ])
                            }
                        }]
                    }
                },
                color:'#55B6F8',
                data: [100,200,300]
            },{
                name:"b",
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
                                    color: '#047ad6'
                                },
                                    {
                                        offset: 1,
                                        color: '#0243e5'
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
                                    color: '#1952bb'
                                },
                                    {
                                        offset: 1,
                                        color: '#1952bb'
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
                                    color: '#01389e'
                                },
                                    {
                                        offset: 1,
                                        color: '#01389e'
                                    }
                                ])
                            }
                        }]
                    }
                },
                color:'#FB8C91',
                data: [120,220,320]
            },{
                name:"c",
                type: 'custom',
                renderItem: (params, api) => {
                    const location = api.coord([api.value(0), api.value(1)]);
                    location[0] = location[0] + wid*2;
                    const xlocation = api.coord([api.value(0), 0]);
                    xlocation[0] = xlocation[0] + wid*2;
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
                                    color: '#0dbd54'
                                },
                                    {
                                        offset: 1,
                                        color: '#008460'
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
                                    color: '#189878'
                                },
                                    {
                                        offset: 1,
                                        color: '#189878'
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
                                    color: '#047d5f'
                                },
                                    {
                                        offset: 1,
                                        color: '#047d5f'
                                    }
                                ])
                            }
                        }]
                    }
                },
                color:'#36D6D7',
                data: [140,240,340]
            },
                {
                    name:"d",
                    type: 'custom',
                    renderItem: (params, api) => {
                        const location = api.coord([api.value(0), api.value(1)]);
                        location[0] = location[0] + wid*4;
                        const xlocation = api.coord([api.value(0), 0]);
                        xlocation[0] = xlocation[0] + wid*4;
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
                                        color: '#584af3'
                                    },
                                        {
                                            offset: 1,
                                            color: '#2b1fbf'
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
                                        color: '#3f18bd'
                                    },
                                        {
                                            offset: 1,
                                            color: '#3f18bd'
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
                                        color: '#441ba1'
                                    },
                                        {
                                            offset: 1,
                                            color: '#441ba1'
                                        }
                                    ])
                                }
                            }]
                        }
                    },
                    color:'blue',
                    data: [140,240,340]
                }]
        }