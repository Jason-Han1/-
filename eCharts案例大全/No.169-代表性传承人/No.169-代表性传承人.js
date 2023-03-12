// 绘制主体
const CubeBody = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        // 会canvas的应该都能看得懂，shape是从custom传入的
        const xAxisPoint = shape.xAxisPoint
        const c0 = [shape.x, shape.y]
        const c1 = [shape.x - 13, shape.y]
        const c2 = [xAxisPoint[0] - 13, xAxisPoint[1] - 0]
        const c3 = [xAxisPoint[0], xAxisPoint[1]]
        const c4 = [xAxisPoint[0]+13, xAxisPoint[1]]
        const c5 = [shape.x+13, shape.y]
        ctx.moveTo(c0[0], c0[1])
        .lineTo(c1[0], c1[1])
        .lineTo(c2[0], c2[1])
        .lineTo(c3[0], c3[1])
        .lineTo(c4[0], c4[1]).lineTo(c5[0], c5[1])
        .closePath()
    }
})


// 顶部
const CubeTop = echarts.graphic.extendShape({
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
        ctx.moveTo(c1[0]-13,c1[1])
        ctx.quadraticCurveTo(c1[0],c1[1]-8,c1[0]+13,c1[1])
        ctx.quadraticCurveTo(c1[0],c1[1]+8,c1[0]-13,c1[1])
        ctx.closePath()
    }
})


// 底部
const CubeBottom = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        const xAxisPoint = shape.xAxisPoint
        const c1 = [xAxisPoint[0], xAxisPoint[1]]
        ctx.moveTo(c1[0]-13,c1[1])
        ctx.quadraticCurveTo(c1[0],c1[1]-8,c1[0]+13,c1[1])
        ctx.quadraticCurveTo(c1[0],c1[1]+8,c1[0]-13,c1[1])
        ctx.closePath()
    }
})



// 地面
const BottomPanel = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        const xAxisPoint = [0,shape.api.getHeight()-120]
        ctx.beginPath()
        // 有待完善 40即grid left的值
        ctx.moveTo(40,xAxisPoint[1]+30)
        ctx.lineTo(80,xAxisPoint[1]-20)
        ctx.lineTo(shape.api.getWidth()-80,xAxisPoint[1]-20)
        ctx.lineTo(shape.api.getWidth()-40,xAxisPoint[1]+30)
        ctx.closePath()
    }
})


echarts.graphic.registerShape('BottomPanel',BottomPanel)
echarts.graphic.registerShape('CubeTop', CubeTop)
echarts.graphic.registerShape('CubeBottom', CubeBottom)
echarts.graphic.registerShape('CubeBody', CubeBody)



const VALUE = [226,551,711,498,1082]
option = {
    backgroundColor: "#012366",
    legend: {
      orient: 'vertical',
      right: 10,
      top: 100,
      padding: [5, 10]
    },
    tooltip: {
        trigger: 'axis',
        show:true,
        axisPointer: {
            type: 'shadow'
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
        data: ["第一批\n 2007","第二批\n 2008","第三批\n 2009","第四批\n 2012",
        "第五批\n 2018"],
        axisLine: {
            show:false,
            lineStyle: {
                color: 'white'
            }
        },
        axisTick: {
            show:false,
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
        
    },
    series: [
        
        {
        type: 'custom',
        silent:true,
        legendHoverLink:false,
        z:0,
        renderItem: (params, api) => {
            
            //const location = api.coord([0,0])
            
            var color = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(43, 123, 255, 0.1)'
                },
                {
                    offset: 1,
                    color: 'rgba(44, 124, 255, 1)'
                }
            ])
            return {
                type: 'group',
                children: [
                    {
                    type: 'BottomPanel',
                    shape: {
                        api,
                    },
                    style: {
                        fill: color
                    }
                },
        
                
                ]
            }
        },
        data:[0]
    }, 
        
        {
        type: 'custom',
        label: {
            show: true,
            position: "top",
            textStyle: {
                color: "pink",
            }
        },
        renderItem: (params, api) => {
            //console.log(api.style())
            const location = api.coord([api.value(0), api.value(1)])
            var color = new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(44, 124, 255, 1)'
                },
                {
                    offset: 1,
                    color: 'rgba(38, 255, 253, 0.7)'
                }
            ])
            return {
                type: 'group',
                children: [
                    {
                    type: 'CubeBody',
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
                        fill: 'rgba(38, 255, 253, 1)'
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
                        fill: 'rgba(38, 255, 253, 1)'
                    }
                }, 
                
                ]
            }
        },
        data: VALUE
    }, 
    
    ]
}