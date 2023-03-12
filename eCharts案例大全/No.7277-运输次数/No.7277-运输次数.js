// 绘制左侧面
const CubeLeft = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        // 该方法官方文档有详细的介绍，先看官网再看此此demo有助于理解
        // 绘画路径是canves中的路径绘制方法
        // shape参数是下面series里面的shap，
        //外边的参数shape是默认值，即如果低下的shap中没有会采用默认值x:0，y:0
        // 换算后的值跟canvas上一致，往下往右为正
        const xAxisPoint = shape.xAxisPoint
        ctx.moveTo(shape.x, shape.y);
        ctx.lineTo(shape.x - 15, shape.y - 3);
        ctx.lineTo(xAxisPoint[0] - 15, xAxisPoint[1] - 3);
        ctx.lineTo(xAxisPoint[0], xAxisPoint[1]);
        ctx.closePath()
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
        ctx.moveTo(shape.x, shape.y);
        ctx.lineTo(shape.x + 15, shape.y - 3);
        ctx.lineTo(xAxisPoint[0] + 15, xAxisPoint[1] - 3);
        ctx.lineTo(xAxisPoint[0], xAxisPoint[1]);
        ctx.closePath()
    }
})
// 绘制顶面
const CubeTop = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        ctx.moveTo(shape.x, shape.y);
        ctx.lineTo(shape.x + 15, shape.y - 3);
        ctx.lineTo(shape.x, shape.y - 6);
        ctx.lineTo(shape.x - 15, shape.y - 3);
        ctx.closePath()
    }
})
// 注册三个面图形
echarts.graphic.registerShape('CubeLeft', CubeLeft)
echarts.graphic.registerShape('CubeRight', CubeRight)
echarts.graphic.registerShape('CubeTop', CubeTop)

const MAX = [8, 8, 8, 8, 8]
const VALUE = [7, 6, 4, 2, 2]
const MAX_VALUE = 8
option = {
    backgroundColor: "#334253",
    title: {
        text: '运输次数',
        top: 32,
        left: 18,
        textStyle: {
            color: 'white',
            fontSize: 20
        }
    },
    // tooltip: {
    //     trigger: 'axis',
    //     axisPointer: {
    //         type: 'shadow'
    //     },
    //     formatter: function(params) {
    //         const item = params[1]
    //         return item.name + ' : ' + item.value + '次';
    //     }
    // },
    grid: {
        left: 40,
        right: 40,
        bottom: 100,
        top: 100,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['沪A0731', '沪A0732', '沪A0733', '沪A0734', '沪A0735'],
        axisLine: {
            show: true,
            lineStyle: {
                color:'#586473'
            }
        },
        offset: 10,
        axisTick: {
            show: false
        },
        axisLabel: {
            color:'#F5F5F5'
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: false,
            // axisLabel未定义color时采用此color
            lineStyle: {
                color: 'white'
            }
        },
        splitLine: {
            lineStyle:{
              color:'#586473'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            formatter: function (val) {
                return parseInt(val/MAX_VALUE * 100)  + '%' ;
            }
        },
    },
    series: [{
        type: 'custom',
        renderItem: function(params, api) {
            // coord 是将数值转换成坐标系上的点
            // x轴与y轴上的值转化为坐标点,也可以理解为维度0,1
            // 如 data:[['沪A0731',7]]，api.value(0)为沪A0731，api.value(1)]为7
            const location = api.coord([api.value(0), api.value(1)])
            return {
                type: 'group',
                children: [{
                    type: 'CubeLeft',
                    shape: {
                        x: location[0],
                        y: location[1],
                        // x轴上的坐标点此时y轴value为0
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: 'rgba(86,105,126,.5)'
                    }
                }, {
                    type: 'CubeRight',
                    shape: {
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: 'rgba(86,105,126,.5)'
                    }
                }, {
                    type: 'CubeTop',
                    shape: {
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: 'rgba(86,105,126,.5)'
                    }
                }]
            }
        },
        data: MAX,
        silent:true
    }, {
        type: 'custom',
        renderItem: (params, api) => {
            const location = api.coord([api.value(0), api.value(1)])
            return {
                type: 'group',
                children: [{
                    type: 'CubeLeft',
                    shape: {
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#C8753C'
                            },
                             {
                                offset: 0.25,
                                color: '#C8753C'
                            },
                             {
                                offset: 0.75,
                                color: '#70B2CA'
                            },
                            {
                                offset: 1,
                                color: '#70B2CA'
                            }
                        ])
                    }
                }, {
                    type: 'CubeRight',
                    shape: {
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#C8753C'
                            },
                            {
                                offset: 0.25,
                                color: '#C8753C'
                            },
                             {
                                offset: 0.75,
                                color: '#70B2CA'
                            },
                            {
                                offset: 1,
                                color: '#70B2CA'
                            }
                        ])
                    }
                }, {
                    type: 'CubeTop',
                    shape: {
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill:'#C8753C'
                    }
                }]
            }
        },
        data: VALUE
    },{
        type: 'bar',
        label: {
            show: true,
            position: 'top',
            formatter: (params) => {
                return  params.value + '次'
            },
            color: '#fff',
            offset: [0, -5]

        },
        itemStyle: {
            color: 'transparent'
        },
        data: VALUE
    }]
}