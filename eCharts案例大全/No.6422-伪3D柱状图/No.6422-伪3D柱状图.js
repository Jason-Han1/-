const CubeLeft = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        const xAxisPoint = shape.xAxisPoint
        const c0 = [shape.x, shape.y]
        const c1 = [shape.x - 10, shape.y - 4]
        const c2 = [xAxisPoint[0] - 10, xAxisPoint[1] - 4]
        const c3 = [xAxisPoint[0], xAxisPoint[1]]
        ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
    }
});
const CubeRight = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        const xAxisPoint = shape.xAxisPoint
        const c1 = [shape.x, shape.y]
        const c2 = [xAxisPoint[0], xAxisPoint[1]]
        const c3 = [xAxisPoint[0] + 8, xAxisPoint[1] - 4]
        const c4 = [shape.x + 8, shape.y - 4]
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
    }
});
const CubeTop = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        // 逆时针 角 y 负数向上  X 负数向左
        const c1 = [shape.x, shape.y]
        const c2 = [shape.x + 8, shape.y - 4]
        const c3 = [shape.x - 2, shape.y - 8]
        const c4 = [shape.x - 10, shape.y - 4]
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
    }
});
echarts.graphic.registerShape('CubeLeft', CubeLeft);
echarts.graphic.registerShape('CubeRight', CubeRight);
echarts.graphic.registerShape('CubeTop', CubeTop);
option = {
    grid: {
        left: 50,
        top: 35,
        right: 12,
        bottom: 42,
    },
    tooltip: {
        show: true,
        trigger: 'axis',
        formatter: '{b}:<br>{c} 个',
        axisPointer: {
            type: 'shadow'
        }
    },
    xAxis: {
        type: "category",
        axisLabel: {
            color: "#48598a",
            fontSize: 12,
            interval: 0
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: "#c2e3ff",
                type: 'solid'
            }
        },
        data: ["张三","李四","王五","二狗蛋","赵麻子"]
    },
    yAxis: [{
        name: '单位：个',
        nameTextStyle: {
            fontSize: 12,
            color: '#48598a'
        },
        type: "value",
        splitNumber: 3,
        splitLine: {
            lineStyle: {
                type: "dashed",
                color: "#e2e2e2"
            },
        },
        axisLabel: {
            textStyle: {
                color: '#7c89ae',
                fontSize: 12
            }
        },
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: "#c2e3ff",
                type: 'solid'
            }
        },
    }],
    series: [{
        type: 'custom',
        renderItem: function(params, api) {
            var index = params.dataIndex,
                color1, color2, color3;
            switch (index) {
                case 0:
                    color1 = '#f07373';
                    color2 = '#ffa8a8';
                    color3 = '#fe8f8f';
                    break;
                case 1:
                    color1 = "#eda547";
                    color2 = "#ffbf6b";
                    color3 = "#f7b662";
                    break;
                case 2:
                    color1 = '#8d7eff';
                    color2 = '#c6bffa';
                    color3 = '#a194ff';
                    break;
                default:
                    color1 = '#2590eb';
                    color2 = '#5eb5ff';
                    color3 = '#329bf5';
                    break;
            }
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
                        fill: color1
                    }
                }, {
                    type: 'CubeRight',
                    shape: {
                        xValue: api.value(0),
                        yValue: api.value(1),
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
                        xValue: api.value(0),
                        yValue: api.value(1),
                        x: location[0],
                        y: location[1],
                        xAxisPoint: api.coord([api.value(0), 0])
                    },
                    style: {
                        fill: color3
                    }
                }]
            }
        },
        data: [100,90,80,70,60]
    }, {
        type: 'line',
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: {
            color: 'transparent'
        },
        itemStyle: {
            color: 'transparent',
            borderWidth: 0
        },
        label: {
            normal: {
                show: true,
                position: 'top',
                fontWeight: 'bold',
                fontSize: 12,
                formatter: function(params) {
                    switch (params.dataIndex) {
                        case 0:
                            return '{a|' + params.value + '}'
                            break;
                        case 1:
                            return '{b|' + params.value + '}'
                            break;
                        case 2:
                            return '{c|' + params.value + '}'
                            break;
                        default:
                            return '{d|' + params.value + '}'
                            break;
                    }
                },
                rich: {
                    a: {
                        color: '#f07373',
                        fontWeight: 'bold'
                    },
                    b: {
                        color: '#eda547',
                        fontWeight: 'bold'
                    },
                    c: {
                        color: '#8d7eff',
                        fontWeight: 'bold'
                    },
                    d: {
                        color: '#2590eb',
                        fontWeight: 'bold'
                    }
                }
            }
        },
        data: [100,90,80,70,60]
    }]
}