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
        const c0 = [shape.x + 17, shape.y]
        const c1 = [shape.x - 23, shape.y - 6]
        const c2 = [xAxisPoint[0] - 23, xAxisPoint[1] - 13]
        const c3 = [xAxisPoint[0] + 17, xAxisPoint[1]]
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
        const c1 = [shape.x + 17, shape.y]
        const c2 = [xAxisPoint[0] + 17, xAxisPoint[1]]
        const c3 = [xAxisPoint[0] + 35, xAxisPoint[1] - 15]
        const c4 = [shape.x + 35, shape.y - 15]
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
        const c1 = [shape.x + 17, shape.y]
        const c2 = [shape.x + 35, shape.y - 15] //右点
        const c3 = [shape.x - 5, shape.y - 20]
        const c4 = [shape.x - 23, shape.y - 6]
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
    }
})
// 注册三个面图形
echarts.graphic.registerShape('CubeLeft', CubeLeft)
echarts.graphic.registerShape('CubeRight', CubeRight)
echarts.graphic.registerShape('CubeTop', CubeTop)


const VALUE = [2016, 1230, 3790,2570, 3470,2860,1530,2710,3180,2260]

option = {
    backgroundColor: "#012366",
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
        top: '15%',
        bottom: '10%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['姑苏区', '虎丘区', '吴中区', '相城区', '吴江区', '常熟市','张家港市','昆山市','太仓市','工业园区'],
        axisLine: {
            show: true,
            lineStyle: {
                color: 'white'
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
            fontSize: 20
        }
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: true,
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
            fontSize: 16
        },
        boundaryGap: ['20%', '20%']
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
                                color: '#1BC9F1'
                            },
                            {
                                offset: 1,
                                color: '#1C7084'
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
                                color: '#1C7287'
                            },
                            {
                                offset: 1,
                                color: '#1BC3EB'
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
                                color: '#06728A'
                            },
                            {
                                offset: 1,
                                color: '#06728A'
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
                // formatter: (e) => {
                //     switch (e.name) {
                //         case '雄县':
                //             return VALUE[0]
                //         case '安新':
                //             return VALUE[1]
                //         case '容城':
                //             return VALUE[2]
                //     }
                // },
                fontSize: 16,
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