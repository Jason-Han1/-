// 绘制左侧面
const CubeLeft = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        // 会canvas的应该都能看得懂，shape是从custom传入的
        const xAxisPoint = shape.xAxisPoint
        console.log(shape)
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


 var data=[800,200,600,500,400]
 var xAxisData=['111','222','333','444','555']
 
 option = {
     color: ['#3398DB'],
     grid: {
         left: '0%',
         right: '0%',
         bottom: '0%',
         containLabel: true
     },
     xAxis: {
         type: 'category',
         axisLabel: { // 文字样式
             color: 'black',
         },
         data: xAxisData
     },
     yAxis: {
         type: 'value',
         axisLabel: {
             color: 'black',
         },
         splitLine: { //分隔线颜色
             lineStyle: {
                 color: ['#162b5f']
             }
         }
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
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                              offset: 0,
                              color: '#48bbe4'
                            },
                            {
                                offset: 1,
                                color: '#48bbe4'
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
                        fill: new echarts.graphic.LinearGradient(0, 0, 0,1, [{
                                offset: 0,
                                color: '#48bbe4'
                            },
                            {
                                offset: 1,
                                color: '#48bbe4'
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
                                offset: 1,
                                color: '#48bbe4'
                            },
                            {
                                offset: 1,
                                color: '#48bbe4'
                            }
                        ])
                    }
                }]
            }
        },
        data: data,
        animationDelay: 0, //动画延迟时间
        animationDuration: 0, //动画时长
        animationDurationUpdate: 0
    },{
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
                                color: '#3b82e1'
                            },
                            {
                                offset: 1,
                                color: '#3b82e1'
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
                        fill: new echarts.graphic.LinearGradient(0, 0, 0,1, [{
                                offset: 0,
                                 color: '#3b82e1'
                            },
                            {
                                offset: 1,
                                color: '#3b82e1'
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
                                 color: '#3b82e1'
                            },
                            {
                                offset: 1,
                                color: '#3b82e1'
                            }
                        ])
                    }
                }]
            }
        },
        data: data,
        animationDelay: 0, //动画延迟时间
        animationDuration: 0, //动画时长
        animationDurationUpdate: 0
    }
     ]
 };
 
 riseAnimation(data, myChart, option, 10, 50)

 function riseAnimation(data, chart, option, time, speed) {
     var thisYearData = {
         norm: data,
         data1: new Array(5).fill(0),
         data2: [],
     }
     chart.myOption = option
     chart.thisYearData = thisYearData
     function formData(data) {
         var norm = data.norm
         var data1 = data.data1
         var data2 = data.data2
         data2 = norm.map((e, index) => {
             var item = e / ((time * 1000) / speed)
             data1[index] += item
             if (data1[index] >= e) {
                 data1[index] = 0
             }
             return e - data1[index]
         })
         return [data1, data2]
     }
     setInterval(function() {
         var thisYear = formData(this.thisYearData)
         //this.myOption.series[0].data = thisYear[0]
         this.myOption.series[1].data = thisYear[0]
         this.setOption(this.myOption)
     }.bind(chart), speed)
 }