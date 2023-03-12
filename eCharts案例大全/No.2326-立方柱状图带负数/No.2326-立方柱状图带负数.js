// 绘制左侧面
const CubeLeft = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        // 会canvas的应该都能看得懂，shape是从custom传入的
        const xAxisPoint = shape.xAxisPoint;
        const c0 = [shape.x + 3, shape.y - 3]; // 右上
        const c1 = [shape.x - 20, shape.y - 6]; // 左上
        const c2 = [xAxisPoint[0] - 20, xAxisPoint[1] - 3]; // 左下
        const c3 = [xAxisPoint[0] + 3, xAxisPoint[1]]; // 右下
        ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath();
    },
});
// 绘制右侧面
const CubeRight = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        const xAxisPoint = shape.xAxisPoint;
        const c1 = [shape.x + 3, shape.y - 3]; // 左上
        const c2 = [xAxisPoint[0] + 3, xAxisPoint[1]]; // 左下
        const c3 = [xAxisPoint[0] + 16, xAxisPoint[1] - 12]; // 右下
        const c4 = [shape.x + 16, shape.y - 15]; // 右上
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
    },
});
// 绘制顶面
const CubeTop = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        const c4 = [shape.x - 20, shape.y - 6]; // 左
        const c1 = [shape.x + 3, shape.y - 3]; // 下
        const c2 = [shape.x + 16, shape.y - 15]; // 右
        const c3 = [shape.x - 7, shape.y - 17]; // 上
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
    },
});
// 绘制底面
const Cubebottom = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        const xAxisPoint = shape.xAxisPoint;
        const c1 = [xAxisPoint[0] - 20, xAxisPoint[1] - 3];
        const c2 = [xAxisPoint[0] + 3, xAxisPoint[1]];
        const c3 = [xAxisPoint[0] + 16, xAxisPoint[1] - 12];
        const c4 = [xAxisPoint[0] - 6, xAxisPoint[1] - 14];
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
    },
});

// 注册三个面图形
echarts.graphic.registerShape('CubeLeft', CubeLeft);
echarts.graphic.registerShape('CubeRight', CubeRight);
echarts.graphic.registerShape('CubeTop', CubeTop);
echarts.graphic.registerShape('Cubebottom', Cubebottom);
const dataX = ['2016年', '2017年', '2018年', '2019年', '2020年', '2021年']
const VALUE = [10, -10, 0, 10, -10, 33]
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderColor: 'rgba(0, 0, 0, 0.8)',
        textStyle: {
            color: '#fff',
        },
        formatter: function (params, ticket, callback) {
            const item = params[1];
            return item.name + ' : ' + item.value + '万元';
        },
    },
    grid: {
        left: '2%',
        top: '10%',
        right: '2%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        data: dataX,
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#000',
                fontSize: 12,
            },
        },
        axisTick: {
            show: false, // 去除刻度线
        },
        // 不显示x坐标轴的样式
        axisLine: {
            show: false,
        },
    },
    yAxis: {
        type: 'value',
        axisTick: { show: false },
        boundaryGap: ['0', '20%'],
        axisLine: {
            lineStyle: {
                color: 'rgba(0,0,0,.1)',
            },
        },
        axisLabel: {
            textStyle: {
                color: 'rgba(0,0,0,.7)',
                fontSize: 12,
            },
        },
        // y轴分割线的颜色
        splitLine: {
            lineStyle: {
                color: 'rgba(0,0,0,.1)',
                type: 'dashed',
            },
        },
    },
    series: [
        {
            type: 'custom',
            renderItem: (params, api) => {
                const location = api.coord([api.value(0), api.value(1)]);
                const _children = [
                    {
                        type: 'CubeLeft',
                        shape: {
                            api,
                            xValue: api.value(0),
                            yValue: api.value(1),
                            x: location[0],
                            y: location[1],
                            xAxisPoint: api.coord([api.value(0), 0]),
                        },
                        style: {
                            fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgba(82, 163, 220, 1)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(17, 73, 157, 1)',
                                },
                            ]),
                        },
                    },
                    {
                        type: 'CubeRight',
                        shape: {
                            api,
                            xValue: api.value(0),
                            yValue: api.value(1),
                            x: location[0],
                            y: location[1],
                            xAxisPoint: api.coord([api.value(0), 0]),
                        },
                        style: {
                            fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgba(29, 107, 164, 1)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(0, 35, 87, 1)',
                                },
                            ]),
                        },
                    },
                ];
                if (api.value(1) >= 0) {
                    _children.push({
                        type: 'CubeTop',
                        shape: {
                            api,
                            xValue: api.value(0),
                            yValue: api.value(1),
                            x: location[0],
                            y: location[1],
                            xAxisPoint: api.coord([api.value(0), 0]),
                        },
                        style: {
                            fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgba(138, 206, 255, 1)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(138, 206, 255, 1)',
                                },
                            ]),
                        },
                    });
                } else {
                    _children.push({
                        type: 'Cubebottom',
                        shape: {
                            api,
                            xValue: api.value(0),
                            yValue: api.value(1),
                            x: location[0],
                            y: location[1],
                            xAxisPoint: api.coord([api.value(0), 0]),
                        },
                        style: {
                            fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgba(138, 206, 255, 1)',
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(138, 206, 255, 1)',
                                },
                            ]),
                        },
                    });
                }
                return {
                    type: 'group',
                    children: _children,
                };
            },
            data: VALUE,
        },
        {
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    fontSize: 14,
                    color: '#fff',
                    offset: [2, -15],
                },
            },
            itemStyle: {
                color: 'transparent',
            },
            tooltip: {},
            data: VALUE,
        },
    ],
};
