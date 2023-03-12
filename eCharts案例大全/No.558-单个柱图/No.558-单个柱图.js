// 绘制左侧面
const CubeLeft = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        // 会canvas的应该都能看得懂，shape是从custom传入的
        const xAxisPoint = shape.xAxisPoint;
        const c0 = [shape.x, shape.y];
        const c1 = [shape.x - 5, shape.y - 5];
        const c2 = [xAxisPoint[0] - 5, xAxisPoint[1] - 5];
        const c3 = [xAxisPoint[0], xAxisPoint[1]];
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
        const c1 = [shape.x, shape.y];
        const c2 = [xAxisPoint[0], xAxisPoint[1]];
        const c3 = [xAxisPoint[0] +5, xAxisPoint[1] -5];
        const c4 = [shape.x + 5, shape.y - 5];
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
        const c1 = [shape.x, shape.y];
        const c2 = [shape.x +5, shape.y -5];
        const c3 = [shape.x , shape.y - 10];
        const c4 = [shape.x-5, shape.y-5];
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
    },
});
echarts.graphic.registerShape('CubeLeft', CubeLeft);
echarts.graphic.registerShape('CubeRight', CubeRight);
echarts.graphic.registerShape('CubeTop', CubeTop);
const MAX = [6000 ];
const VALUE = [2012];
option = {
    backgroundColor: '#fff',
    title: {
        text: '',
        top: 32,
        left: 18,
        textStyle: {
            color: '#dddddd',
            fontSize: 24,
        },
    },
    tooltip:{
        show:true
    },
    grid: {
        left: 20,
        right: 40,
        bottom: '19%',
        top: 107,
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        data: [
            '德州',
            
        ],
        axisLine: {
            show: true,
            lineStyle: {
                color: '#dddddd',
            },
        },
        offset: 20,
        axisTick: {
            show: false,

            alignWithLabel: true,
            lineStyle: {
                color: '#dddddd',
            },
        },
        axisLabel: {
            fontSize: 10,
        },
    },
    yAxis: {
        name: '块',
        type: 'value',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#dddddd',
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dotted',
                color: '#dddddd',
            },
        },
        axisTick: {
            show: true,
        },
        axisLabel: {
            fontSize: 16,
        },
        boundaryGap: ['20%', '20%'],
    },
    series: [
        {
            type: 'custom',
            tooltip: {
                show: false,
            },
            renderItem: function (params, api) {
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
                                fill: 'rgba(248, 233, 215,.6)',
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
                                fill: 'rgba(248, 233, 215,.7)',
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
                                fill: 'rgba(248, 233, 215,.8)',
                            },
                        },
                    ],
                };
            },
            data: MAX,
        },
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
                                        offset: 0,
                                        color: '#ff7106',
                                    },
                                    {
                                        offset: 1,
                                        color: '#fdb177',
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
                                        color: '#ff7106',
                                    },
                                    {
                                        offset: 1,
                                        color: '#fdb177',
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
                                        color: '#ff7106',
                                    },
                                    {
                                        offset: 1,
                                        color: '#fdb177',
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
            type: 'line',
            smooth: 'true',
            symbol: 'none',
            tooltip: {
                show: true,
            },
            areaStyle: {
                //区域填充样式
                normal: {
                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: 'rgba(10,219,250,.3)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(10,219,250, 0)',
                            },
                        ],
                        false
                    ),
                    shadowColor: 'rgba(10,219,250, 0.5)', //阴影颜色
                    shadowBlur: 20, //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                },
            },
            data: MAX,
        },
    ],
};
