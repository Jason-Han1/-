// 综合阴影
// 绘制左侧面
const CubeLeftAll = echarts.graphic.extendShape({
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
        ctx.lineTo(shape.x - 7, shape.y - 3);
        ctx.lineTo(xAxisPoint[0] - 7, xAxisPoint[1] - 3);
        ctx.lineTo(xAxisPoint[0], xAxisPoint[1]);
        ctx.closePath()
    }
})
// 绘制右侧面
const CubeRightAll = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        const xAxisPoint = shape.xAxisPoint
        ctx.moveTo(shape.x, shape.y);
        ctx.lineTo(shape.x + 7, shape.y - 3);
        ctx.lineTo(xAxisPoint[0] + 7, xAxisPoint[1] - 3);
        ctx.lineTo(xAxisPoint[0], xAxisPoint[1]);
        ctx.closePath()
    }
})
// 绘制顶面
const CubeTopAll = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        ctx.moveTo(shape.x, shape.y);
        ctx.lineTo(shape.x + 7, shape.y - 3);
        ctx.lineTo(shape.x, shape.y - 6);
        ctx.lineTo(shape.x - 7, shape.y - 3);
        ctx.closePath()
    }
})
// 注册三个面图形
echarts.graphic.registerShape('CubeLeftAll', CubeLeftAll)
echarts.graphic.registerShape('CubeRightAll', CubeRightAll)
echarts.graphic.registerShape('CubeTopAll', CubeTopAll)

// 运营
// 绘制左侧面
const CubeLeftOperate = echarts.graphic.extendShape({
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
        ctx.lineTo(shape.x - 5, shape.y - 3);
        ctx.lineTo(xAxisPoint[0] - 5, xAxisPoint[1] - 3);
        ctx.lineTo(xAxisPoint[0], xAxisPoint[1]);
        ctx.closePath()
    }
})
// 绘制右侧面
const CubeRightOperate = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        const xAxisPoint = shape.xAxisPoint
        ctx.moveTo(shape.x, shape.y);
        ctx.lineTo(shape.x + 5, shape.y - 3);
        ctx.lineTo(xAxisPoint[0] + 5, xAxisPoint[1] - 3);
        ctx.lineTo(xAxisPoint[0], xAxisPoint[1]);
        ctx.closePath()
    }
})
// 绘制顶面
const CubeTopOperate = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        ctx.moveTo(shape.x, shape.y);
        ctx.lineTo(shape.x + 5, shape.y - 3);
        ctx.lineTo(shape.x, shape.y - 6);
        ctx.lineTo(shape.x - 5, shape.y - 3);
        ctx.closePath()
    }
})
// 注册三个面图形
echarts.graphic.registerShape('CubeLeftOperate', CubeLeftOperate)
echarts.graphic.registerShape('CubeRightOperate', CubeRightOperate)
echarts.graphic.registerShape('CubeTopOperate', CubeTopOperate)

const MAX = [15, 15, 15, 15, 15, 15, 15]
const VALUE = [7, 6, 4, 2, 2, 5, 6]
const otherValue = [2, 3, 3, 1, 1, 2, 3]
option = {
    color: ['#dd6241', '#569be0'],
    backgroundColor: "#152c60",
    title: {
        text: '吨成本(元)',
        top: 10,
        right: 20,
        textStyle: {
            color: '#69e5fc',
            fontSize: 12
        }
    },
    legend: [{
            selectedMode: false,
            itemWidth: 15,
            itemHeight: 15,
            right: 100,
            top: 10,
            textStyle: {
                color: '#fff',
            },
            data: [{
                name: '综合'
            }]
        },
        {
            selectedMode: false,
            itemWidth: 15,
            itemHeight: 15,
            right: 160,
            top: 10,
            textStyle: {
                color: '#fff',
            },
            data: [{
                name: '运营'
            }]
        }
    ],
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' //指示器类型。
        },
        formatter: function(params, ticket, callback) {
            let arr = params.filter(v => v.seriesName != 'custom')
            arr.map(v => {
                console.log(v)
                if (v.seriesName == "综合") {
                    v.marker = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#569be0;"></span>'
                } else if (v.seriesName == "运营") {
                    v.marker = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#dd6241;"></span>'
                }
            })
            console.log(arr)
            let axisValueLabel = params[0].axisValueLabel
            let sumVal = 0;
            let src = axisValueLabel + '<br>';
            for (let x in arr) {
                sumVal += Number(arr[x].value)
                src += arr[x].marker + arr[x].seriesName + ": " + arr[x].value + '<br>';
            }
            return src
        }
    },
    grid: {
        left: 40,
        right: 40,
        bottom: 40,
        top: 40,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['华北', '西北', '中南', '华南', '上海', '江苏', '浙江'],
        axisLine: {
            show: true,
            lineStyle: {
                color: '#586473'
            }
        },
        offset: 10,
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#F5F5F5'
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
            lineStyle: {
                color: '#3b4c7c'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            formatter: function(val) {
                console.log(val)
                return val
                // console.log(val)
                // return parseInt(val/MAX_VALUE * 100)  + '%' ;
            }
        },
    },
    series: [{
        type: 'custom',
        name: 'custom',
        renderItem: function(params, api) {
            // coord 是将数值转换成坐标系上的点
            // x轴与y轴上的值转化为坐标点,也可以理解为维度0,1
            // 如 data:[['沪A0731',7]]，api.value(0)为沪A0731，api.value(1)]为7
            const location = api.coord([api.value(0), api.value(1)])
            return {
                type: 'group',
                children: [{
                    type: 'CubeLeftAll',
                    shape: {
                        x: location[0],
                        y: location[1] + 7,
                        // x轴上的坐标点此时y轴value为0
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: '#2e4479'
                    }
                }, {
                    type: 'CubeRightAll',
                    shape: {
                        x: location[0],
                        y: location[1] + 7,
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: '#2e4479'
                    }
                }, {
                    type: 'CubeTopAll',
                    shape: {
                        x: location[0],
                        y: location[1] + 7,
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: '#2e4479'
                    }
                }]
            }
        },
        data: MAX,
        silent: true
    }, {
        type: 'custom',
        name: '综合',
        renderItem: (params, api) => {
            const location = api.coord([api.value(0), api.value(1)])
            return {
                type: 'group',
                children: [{
                    type: 'CubeLeftAll',
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
                                color: '#76c8e2'
                            },
                            {
                                offset: 1,
                                color: '#4e8fde'
                            }
                        ])
                    }
                }, {
                    type: 'CubeRightAll',
                    shape: {
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#76c8e2'
                            },
                            {
                                offset: 1,
                                color: '#4e8fde'
                            }
                        ])
                    }
                }, {
                    type: 'CubeTopAll',
                    shape: {
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: '#76c8e2'
                    }
                }]
            }
        },
        data: VALUE
    }, {
        type: 'custom',
        name: '运营',
        renderItem: (params, api) => {
            const location = api.coord([api.value(0), api.value(1)])
            console.log(location)
            return {
                type: 'group',
                stack: '成本',
                children: [{
                    type: 'CubeLeftOperate',
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
                                color: '#db9256'
                            },
                            {
                                offset: 1,
                                color: '#de5b3f'
                            }
                        ])
                    }
                }, {
                    type: 'CubeRightOperate',
                    shape: {
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#db9256'
                            },
                            {
                                offset: 1,
                                color: '#de5b3f'
                            }
                        ])
                    }
                }, {
                    type: 'CubeTopOperate',
                    shape: {
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: '#e88b6c'
                    }
                }]
            }
        },
        data: otherValue
    }]
}