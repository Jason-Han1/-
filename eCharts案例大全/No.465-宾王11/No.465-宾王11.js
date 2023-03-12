let CubeLeft = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        let xAxisPoint = shape.xAxisPoint;
        let c0 = [shape.x, shape.y];
        let c1 = [shape.x - 9, shape.y - 9];
        let c2 = [xAxisPoint[0] - 9, xAxisPoint[1] - 9];
        let c3 = [xAxisPoint[0], xAxisPoint[1]];
        ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath();
    },
});
let CubeRight = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        let xAxisPoint = shape.xAxisPoint;
        let c1 = [shape.x, shape.y];
        let c2 = [xAxisPoint[0], xAxisPoint[1]];
        let c3 = [xAxisPoint[0] + 18, xAxisPoint[1] - 9];
        let c4 = [shape.x + 18, shape.y - 9];
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
    },
});
let CubeTop = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        let c1 = [shape.x, shape.y];
        let c2 = [shape.x + 18, shape.y - 9];
        let c3 = [shape.x + 9, shape.y - 18];
        let c4 = [shape.x - 9, shape.y - 9];
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
    },
});
echarts.graphic.registerShape('CubeLeft', CubeLeft);
echarts.graphic.registerShape('CubeRight', CubeRight);
echarts.graphic.registerShape('CubeTop', CubeTop);
let MAX = [2000, 2000, 2000];
let VALUE = [1056, 953, 1781];
option = {
    title: {
        text: '',
        top: 32,
        left: 18,
        textStyle: {
            color: '#000000',
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
        // data: ['2019年', '2020年', '2021年'],
        axisLine: {
            show: true,
            lineStyle: {
                color: '#000000',
            },
        },
        offset: 20,
        axisTick: {
            show: false,
        },
        axisLabel: {
            fontSize: 10,
        },
        textStyle: {
            fontSize: 20,
        },
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#000000',
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
            renderItem: function (params, api) {
                let location = api.coord([api.value(0), api.value(1)]);
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
                                fill: 'rgba(47,102,192,.27)',
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
                                fill: 'rgba(59,128,226,.27)',
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
                                fill: 'rgba(72,156,221,.27)',
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
                let location = api.coord([api.value(0), api.value(1)]);
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
                                        color: '#3B80E2',
                                    },
                                    {
                                        offset: 1,
                                        color: '#49BEE5',
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
                                        color: '#3B80E2',
                                    },
                                    {
                                        offset: 1,
                                        color: '#49BEE5',
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
                                        color: '#3B80E2',
                                    },
                                    {
                                        offset: 1,
                                        color: '#49BEE5',
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
