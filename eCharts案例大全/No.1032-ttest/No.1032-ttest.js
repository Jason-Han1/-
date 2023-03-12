// 绘制左侧面
const CubeLeft = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        // 会canvas的应该都能看得懂，shape是从custom传入的
        const xAxisPoint = shape.xAxisPoint;
        // console.log(shape)
        const c0 = [shape.x + 17, shape.y];
        const c1 = [shape.x - 15, shape.y]
        const c2 = [xAxisPoint[0] - 15, xAxisPoint[1]];
        const c3 = [xAxisPoint[0] + 17, xAxisPoint[1]];
        ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath();
    },
});

const CubeLeft1 = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        // 会canvas的应该都能看得懂，shape是从custom传入的
        const xAxisPoint = shape.xAxisPoint;
        // console.log(shape)
        const c0 = [shape.x + 25, shape.y];
        const c1 = [shape.x - 15, shape.y];
        const c2 = [xAxisPoint[0] - 15, xAxisPoint[1]];
        const c3 = [xAxisPoint[0] + 25, xAxisPoint[1]];
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
        // console.log(shape)
        const xAxisPoint = shape.xAxisPoint;
        // console.log(xAxisPoint)
        const c1 = [shape.x + 17, shape.y];
        const c2 = [xAxisPoint[0] + 17, xAxisPoint[1]];
        const c3 = [xAxisPoint[0] + 25, xAxisPoint[1] - 5];
        const c4 = [shape.x + 25, shape.y - 8];
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
        const c1 = [shape.x + 17, shape.y];
        const c2 = [shape.x + 25, shape.y - 8]; //右点
        const c3 = [shape.x - 5, shape.y - 8];
        const c4 = [shape.x - 15, shape.y];
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
    },
});

echarts.graphic.registerShape('CubeLeft', CubeLeft);
echarts.graphic.registerShape('CubeLeft1', CubeLeft1);
echarts.graphic.registerShape('CubeRight', CubeRight);
echarts.graphic.registerShape('CubeTop', CubeTop);
const MAX = [6000, 6000, 6000, 6000, 6000, 5000, 4000, 3000, 2000, 4000, 3000, 2000];
const MAX1 = [8000, 8000, 8000, 8000, 8000, 8000, 4000, 3000, 2000, 4000, 3000, 2000];
const VALUE = [2012, 1230, 3790, 2349, 1654, 1230, 3790, 2349, 1654, 3790, 2349, 1654];
option = {
    backgroundColor: 'rgb(5,32,76)',
    title: {
        text: '',
        top: 32,
        left: 18,
        textStyle: {
            color: '#00F6FF',
            fontSize: 24,
        },
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
            '德城区',
            '陵城区',
            '禹城市',
            '乐陵市',
            '临邑县',
        ],
        axisLine: {
            show: true,
            lineStyle: {
                color: 'white',
            },
        },
        offset: 20,
        axisTick: {
            show: false,
            length: 9,
            alignWithLabel: true,
            lineStyle: {
                color: '#7DFFFD',
            },
        },
        axisLabel: {
            fontSize: 10,
        },
    },
    yAxis: {
        min:0,
        max:8000,
        type: 'value',
        axisLine: {
            show: true,
            lineStyle: {
                color: 'white',
            },
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            fontSize: 16,
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
                            type: 'CubeLeft1',
                            shape: {
                                api,
                                xValue: api.value(0),
                                yValue: api.value(1),
                                x: location[0],
                                y: location[1],
                                xAxisPoint: api.coord([api.value(0), 0]),
                            },
                            style: {
                                fill: 'rgba(216,255,255,0.1)',
                            },
                        },
                       
              
                    ],
                };
            },
            data: MAX1,
        },
        {
            type: 'custom',
                     zlevel:0,
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
                                     fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: 'rgba(168,255,255,1)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(238,255,255,1)',
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
                                        color: 'rgba(78,220,220,1)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(193,250,250,1)',
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
                                        color: 'rgba(219,255,255,1)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(223,255,255,1)',
                                    },
                                ]),
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
                                        color: 'rgba(44,136,255,1)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(87,189,255,1)',
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
                                        color: 'rgba(11,118,255,1)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(33,149,223,1)',
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
                                        color: 'rgba(44,136,255,1)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(87,189,255,1)',
                                    },
                                ]),
                            },
                        },
                    ],
                };
            },
            data: VALUE,
        },

    ],
};
