// 绘制左侧面
const CubeLeft = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        // 会canvas的应该都能看得懂，shape是从custom传入的
        const xAxisPoint = shape.xAxisPoint;
        const c0 = [shape.x + 7, shape.y - 3]; // 右上
        const c1 = [shape.x - 23, shape.y - 3]; // 左上
        const c2 = [xAxisPoint[0] - 23, xAxisPoint[1]]; // 左下
        const c3 = [xAxisPoint[0] + 7, xAxisPoint[1]]; // 右下
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
        const c1 = [shape.x + 7, shape.y - 3]; // 左上
        const c2 = [xAxisPoint[0] + 7, xAxisPoint[1]]; // 左下
        const c3 = [xAxisPoint[0] + 25, xAxisPoint[1] - 12]; // 右下
        const c4 = [shape.x + 25, shape.y - 15]; // 右上
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
        const c1 = [shape.x + 7, shape.y - 3]; // 下
        const c2 = [shape.x + 25, shape.y - 15]; // 右
        const c3 = [shape.x - 5, shape.y - 15]; // 上
        const c4 = [shape.x - 23, shape.y - 3]; // 左
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
    },
});
// 注册三个面图形
echarts.graphic.registerShape('CubeLeft', CubeLeft);
echarts.graphic.registerShape('CubeRight', CubeRight);
echarts.graphic.registerShape('CubeTop', CubeTop);
const VALUE = [200, 300, 350, 400, 111];
option = {
    backgroundColor: '#11334D',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        formatter: function (params, ticket, callback) {
            const item = params[1];
            return item.name + ' : ' + item.value;
        },
    },
    grid: {
        left: '5%',
        right: '5%',
        top: '18%',
        bottom: '29%',
    },
    xAxis: {
        type: 'category',
        data: ['海淀', '朝阳', '丰台', '石景山', 1111],
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            fontSize: 12,
            textStyle: {
                color: '#ffffff',
            },
        },
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            fontSize: 12,
            textStyle: {
                color: '#ffffff',
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.1)',
            },
        },
        boundaryGap: ['20%', '20%'],
    },
    series: [
        {
            type: 'custom',
            renderItem: (params, api) => {
                const location = api.coord([api.value(0), api.value(1)]);
                return {
                    type: 'group',
                    children: [
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
                                        offset: 1,
                                        color: '#078BB9',
                                    },
                                    {
                                        offset: 0,
                                        color: '#34E5FF',
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
                                        color: '#066A8D',
                                    },
                                    {
                                        offset: 1,
                                        color: '#066A8D',
                                    },
                                ]),
                            },
                        },
                        {
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
                                        color: '#5BFFFF',
                                    },
                                    {
                                        offset: 1,
                                        color: '#5BFFFF',
                                    },
                                ]),
                            },
                        },
                    ],
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
                    fontSize: '16',
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
