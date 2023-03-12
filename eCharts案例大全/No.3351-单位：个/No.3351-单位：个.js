     // 绘制左侧面
        const CubeLeft = echarts.graphic.extendShape({
            shape: {
                x: 0,
                y: 0
            },
            buildPath: function(ctx, shape) {
                // 会canvas的应该都能看得懂，shape是从custom传入的
                const xAxisPoint = shape.xAxisPoint
                const c0 = [shape.x, shape.y-5] //右上点
                const c1 = [shape.x - 23, shape.y - 14] //左上点
                const c2 = [xAxisPoint[0] - 23, xAxisPoint[1] - 13]
                const c3 = [xAxisPoint[0], xAxisPoint[1]]//右下点
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
                const c1 = [shape.x, shape.y-5] //左上
                const c2 = [xAxisPoint[0], xAxisPoint[1]] //左下
                const c3 = [xAxisPoint[0] + 25, xAxisPoint[1] - 15]
                const c4 = [shape.x + 25, shape.y - 15] //右上
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
                
                const c1 = [shape.x , shape.y-5] //下点
                const c2 = [shape.x + 25, shape.y - 15] //右点
                const c3 = [shape.x , shape.y - 22]  //上点
                const c4 = [shape.x - 23, shape.y - 14]//左点
                ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
            }
        })
        // 绘制底面
        const CubeBottom = echarts.graphic.extendShape({
            shape: {
                x: 0,
                y: 0
            },
            buildPath: function(ctx, shape) {
                const xAxisPoint = shape.xAxisPoint
                const c1 = [xAxisPoint[0], xAxisPoint[1]] //下点
                const c2 = [shape.x + 25,  xAxisPoint[1]-16] //右点
                const c3 = [shape.x ,  xAxisPoint[1]-22]  //上点
                // const c4 = [shape.x - 23, shape.y - 14]//左点
                ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
            }
        })
        // 注册三个面图形
        echarts.graphic.registerShape('CubeLeft', CubeLeft)
        echarts.graphic.registerShape('CubeRight', CubeRight)
        echarts.graphic.registerShape('CubeTop', CubeTop)
        echarts.graphic.registerShape('CubeBottom', CubeBottom)
        const VALUE = data
    option = {
            backgroundColor: "transparent",
            title: {
                text: '单位：个',
                textStyle: {
                    color: '#7ebaf2',
                    fontWeight: '800',
                    fontSize: 12,
                },
                left: '18px',
                top: '1%'
            },
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
                left: '5%',
                right: '5%',
                top: '12%',
                bottom: '5%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: [ '轻载\n ≤30%', '重载\n≥ 80%＜100%', '过载\n≥100%'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#7ebaf2'
                    }
                },
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
                    interval:0, //设置成 0 强制显示所有标签。
                    rotate:0, //刻度标签旋转的角度
                }
            },
            yAxis: {
                type: 'value',
                min:0,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#7ebaf2'
                    }
                },
                splitLine: {
                    show: false
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: [
                            "rgba(26,50,83,1)",
                            "rgba(30,57,92,1)",
                        ]
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    fontSize: 12
                },
                boundaryGap: ['20%', '20%']
            },
            series: [{
                type: 'custom',
                renderItem: (params, api) => {
                    let cubeLeftStyle = ''
                    let cubeRightStyle = ''
                    let cubeTopStyle = ''
                    let cubeBottomStyle = ''
                    if(params.dataIndex == 0){
                        cubeLeftStyle=new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0,255,186,1)'
                        }, {
                            offset: 1,
                            color: 'rgba(0,148,109,1)'
                        }])
                        cubeRightStyle=new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0,255,186,0.3)'
                        }, {
                            offset: 1,
                            color: 'rgba(0,148,109,0.1)'
                        }])
                        cubeTopStyle=new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0,190,140,0.4)'
                        }, {
                            offset: 1,
                            color: 'rgba(0,190,140,0.4)'
                        }])
                    }else if(params.dataIndex == 1){
                        cubeLeftStyle=new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(222,231,235,1)'
                        }, {
                            offset: 1,
                            color: 'rgba(141,153,165,1)'
                        }])
                        cubeRightStyle=new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(222,231,235,0.3)'
                        }, {
                            offset: 1,
                            color: 'rgba(222,231,235,0.1)'
                        }])
                        cubeTopStyle=new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(255,255,255,1)'
                        }, {
                            offset: 1,
                            color: 'rgba(255,255,2555,1)'
                        }])
                        cubeBottomStyle=new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(159,170,180,0.4)'
                        }, {
                            offset: 1,
                            color: 'rgba(159,170,148,0.4)'
                        }])
                    
                    }else if(params.dataIndex == 2){
                       cubeLeftStyle=new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(62,255,255,1)'
                        }, {
                            offset: 1,
                            color: 'rgba(0,126,191,1)'
                        }])
                        cubeRightStyle=new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(23,176,255,3)'
                        }, {
                            offset: 1,
                            color: 'rgba(0,138,255,0.1)'
                        }])
                        cubeTopStyle=new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0,150,255,1)'
                        }, {
                            offset: 1,
                            color: 'rgba(0,150,255,1)'
                        }])
                        cubeBottomStyle=new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(159,170,180,0.4)'
                        }, {
                            offset: 1,
                            color: 'rgba(159,170,148,0.4)'
                        }])
                    }else if(params.dataIndex == 3){
                       cubeLeftStyle=new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(255,217,217,1)'
                        }, {
                            offset: 1,
                            color: 'rgba(180,97,97,1)'
                        }])
                        cubeRightStyle=new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(178,95,95,0.3)'
                        }, {
                            offset: 1,
                            color: 'rgba(89,47,47,0.1)'
                        }])
                        cubeTopStyle=new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(255,217,217,1)'
                        }, {
                            offset: 1,
                            color: 'rgba(255,217,217,1)'
                        }])
                        cubeBottomStyle=new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(247,166,166,0.4)'
                        }, {
                            offset: 1,
                            color: 'rgba(247,166,166,0.4)'
                        }])
                    }
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
                                fill: cubeLeftStyle
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
                                fill:cubeRightStyle
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
                                fill: cubeTopStyle
                            }
                        },
                        {
                            type: 'CubeBottom',
                            shape: {
                                api,
                                xValue: api.value(0),
                                yValue: api.value(1),
                                x: location[0],
                                y: location[1],
                                xAxisPoint: api.coord([api.value(0), 0])
                            },
                            style: {
                                fill: cubeBottomStyle
                            }
                        },
                        
                        
                        ]
                    }
                },
                data: [10,15,20]
            }, {
                type: 'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        fontSize: 14,
                        color: '#fff',
                        offset: [2, -25]
                    }
                },
                itemStyle: {
                    color: 'transparent'
                },
                tooltip: {

                },
                data: VALUE
            }]
        }