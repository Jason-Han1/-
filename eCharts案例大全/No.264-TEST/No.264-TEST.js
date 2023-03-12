const CubeLeft = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        const xAxisPoint = shape.xAxisPoint;
        const c0 = [shape.x, shape.y];
        const c1 = [shape.x - 9, shape.y - 8];
        const c2 = [xAxisPoint[0] - 9, xAxisPoint[1] - 7];
        const c3 = [xAxisPoint[0] - '-1', xAxisPoint[1]];
        ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath();
    },
});
const CubeRight = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        const xAxisPoint = shape.xAxisPoint;
        const c1 = [shape.x, shape.y];
        const c2 = [xAxisPoint[0], xAxisPoint[1]];
        const c3 = [xAxisPoint[0] + 100, xAxisPoint[1] - 50];
        const c4 = [shape.x + 100, shape.y - 48];
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
    },
});
const CubeTop = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        const c1 = [shape.x, shape.y];
        const c2 = [shape.x + 100, shape.y - 48];
        const c3 = [shape.x + 90, shape.y - 55];
        const c4 = [shape.x - 9, shape.y - 7];
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
    },
});
echarts.graphic.registerShape('CubeLeft', CubeLeft);
echarts.graphic.registerShape('CubeRight', CubeRight);
echarts.graphic.registerShape('CubeTop', CubeTop);
const VALUE = [300, 400, 500, 650, 570, 530, 320, 250, 360, 510, 410, 320];
option = {
    // backgroundColor: '#2a2a34',
    title: {
        text: 'Traffic Sources',
        top: '20',
        left: '20',
        textStyle: {
            fontSize: '20',
            fontFamily: 'FZYaoti',
            fontWeight: '100',
            color: '#ddfdfc',
            textAlign: 'center',
        },
    },
    grid: {
        left: 0,
        right: '15%',
        bottom: '5%',
        top: '15%',
        containLabel: true,
    },
    xAxis: {
        show: false,
        type: 'category',
        // boundaryGap: false,
        data: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'],
        axisLine: {
            show: true,
            lineStyle: {
                color: '#9d8ace',
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: '#595273',
            },
        },
        offset: 5,
        axisTick: {
            show: false,
            length: 9,
            alignWithLabel: true,
            lineStyle: {
                color: '#9d8ace',
            },
        },
        axisLabel: {
            fontSize: 12,
        },
    },
    yAxis: {
        show: false,
        type: 'value',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#9d8ace',
            },
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: '#595273',
            },
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            fontSize: 12,
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
                                shadowBlur: 20,
                                shadowColor: 'rgba(0, 0, 0, .6)',
                                shadowOffsetX: 5,
                                shadowOffsetY: 5,
                                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: '#47484e',
                                    },
                                    {
                                        offset: 1,
                                        color: '#484854',
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
                                shadowBlur: 3,
                                shadowColor: 'rgba(0, 0, 0, .6)',
                                shadowOffsetX: 2,
                                shadowOffsetY: 3,
                                fill: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                                    {
                                        offset: 0,
                                        color: '#282832',
                                    },
                                    {
                                        offset: 1,
                                        color: '#15151c',
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
                                        color: '#61639c',
                                    },
                                    {
                                        offset: 1,
                                        color: '#78d2c9',
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
const backImg = '/asset/get/s/data-1623324803979-ugSvPhTCK.png';
myChart._dom.style.backgroundImage = "url('" + backImg + "')";
