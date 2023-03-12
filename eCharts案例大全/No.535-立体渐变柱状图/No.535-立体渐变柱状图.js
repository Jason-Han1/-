let unit = '千人'
let dataArr = [{
        "code": "1003",
        "name": "刑释解教人员",
        "num": 4
    },
    {
        "code": "1009",
        "name": "社区矫正人员",
        "num": 5
    },
    {
        "code": "1011",
        "name": "精神病患者",
        "num": 3
    },
    {
        "code": "1012",
        "name": "信教人员",
        "num": 4
    }
]
let TData = dataArr.map(item => Number(item.num));
let max = Math.max(...TData);
let dataShadow = [];
for (var i = 0; i < dataArr.length; i++) {
    dataShadow.push((max * 100 + 100) / 100); //最大值+1
}
const CubeLeft = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        const xAxisPoint = shape.xAxisPoint
        const c0 = [shape.x, shape.y]
        const c1 = [shape.x - 20, shape.y - 4]
        const c2 = [xAxisPoint[0] - 20, xAxisPoint[1] - 4]
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
        const c1 = [shape.x - 5, shape.y]
        const c2 = [xAxisPoint[0] - 5, xAxisPoint[1]]
        const c3 = [xAxisPoint[0] + 10, xAxisPoint[1] - 4]
        const c4 = [shape.x + 10, shape.y - 4]
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
    }
})
const CubeTop = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        // 逆时针 角 y 负数向上  X 负数向左
        const c1 = [shape.x - 5, shape.y]
        const c2 = [shape.x + 10, shape.y - 4]
        const c3 = [shape.x - 5, shape.y - 8]
        const c4 = [shape.x - 20, shape.y - 4]
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
    }
})
echarts.graphic.registerShape('CubeLeft', CubeLeft)
echarts.graphic.registerShape('CubeRight', CubeRight)
echarts.graphic.registerShape('CubeTop', CubeTop)
option = {
    backgroundColor: '#080b30',
    title: {
        text: '重点人群',
        textStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 20,
        },
        top: '3%',
        left: 'center'
    },
    grid: {
        left: '5%',
        right: 10,
        top: '15%',
        bottom: 25,
        containLabel: true
    },
    tooltip: {
        formatter: "{b}: {c}" + unit
    },
    xAxis: [{
        type: "category",
        data: dataArr.map(item => item.name),
        axisLabel: {
            interval: 0,
            rotate: dataArr.length > 5 ? 15 : 0, //数据大于5条时切斜显示
            color: "rgba(255,255,255,.8)",
            fontSize: 14,
            align: "center",
            padding: dataArr.length > 5 ? [30, 0, 0, -24] : [0, 0, 0, -24]
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: "rgba(135,142,148,0.5)"
            }
        }
    }],
    yAxis: {
        type: "value",
        name: "单位（" + unit + "）",
        nameTextStyle: {
            fontSize: 14,
            color: "#9ca2a8",
            padding: [0, 0, 10, -30]
        },
        scale: false,
        axisLabel: {
            color: "#a0a5ab",
            fontSize: 12,
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.1)"
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    series: [{
            type: 'custom',
            zlevel: 2,
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
                                offset: 0.4,
                                color: '#93D884'
                            }, {
                                offset: 1,
                                color: 'rgba(0,0,0,0)'
                            }])
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
                                offset: 0.4,
                                color: '#3FBB70' // 顶部
                            }, {
                                offset: 1,
                                color: 'rgba(0,0,0,0)' // 底部
                            }])
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
                                color: '#cbec8a'
                            }, {
                                offset: 1,
                                color: '#cbec8a'
                            }])
                        }
                    }]
                }
            },
            data: TData
        },
        {
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    distance: 10,
                    fontSize: 16,
                    color: '#97af58',
                }
            },
            barWidth: 20,
            itemStyle: {
                color: 'transparent'
            },
            data: TData
        }, {
            type: "bar",
            itemStyle: {
                borderColor: 'rgba(151,175,88,0.5)',
                color: 'rgba(0,0,0,0)'
            },
            barWidth: 20 * 2.4,
            barGap: "-155%",
            tooltip: {
                show: false
            },
            cursor: "default",
            data: dataShadow,
            animation: false
        },
    ]
}