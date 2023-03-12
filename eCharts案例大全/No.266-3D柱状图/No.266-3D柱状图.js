const CubeLeft = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        const xAxisPoint = shape.xAxisPoint;
        const c0 = [shape.x, shape.y];
        const c1 = [shape.x - 9, shape.y - 9];
        const c2 = [xAxisPoint[0] - 9, xAxisPoint[1] - 9];
        const c3 = [xAxisPoint[0], xAxisPoint[1]];
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
        const c3 = [xAxisPoint[0] + 18, xAxisPoint[1] - 9];
        const c4 = [shape.x + 18, shape.y - 9];
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
        const c2 = [shape.x + 18, shape.y - 9];
        const c3 = [shape.x + 9, shape.y - 18];
        const c4 = [shape.x - 9, shape.y - 9];
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
    },
});
echarts.graphic.registerShape('CubeLeft', CubeLeft);
echarts.graphic.registerShape('CubeRight', CubeRight);
echarts.graphic.registerShape('CubeTop', CubeTop);
const VALUE = [2012, 1230, 3790, 2349, 1654, 1230, 3790, 2349, 1654, 3790, 2349, 1654];
option = {
    backgroundColor: '#012366',
    grid: {
        left: '5%',
        right: 0,
        bottom: '5%',
        top: '5%',
        containLabel: true,
    },
    tooltip: {
        trigger: 'axis',
        // 坐标轴指示器，坐标轴触发有效(axis)
        axisPointer: {
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            // console.log(params, 'params');
            let returnData = '';
            for (let i = 0; i < params.length; i++) {
                let indexColor = '#da953e';
                returnData =
                    '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background:' +
                    indexColor +
                    '"></span>';
                returnData += params[i].name + '<br/><span style="padding-left:13px">' + params[i].value + '</span>';
            }
            return returnData;
        },
        extraCssText: 'font-size: 22px; line-height: 30px',
    },
    xAxis: {
        type: 'category',
        data: ['5/16', '5/17', '5/18', '5/19', '5/20', '5/21', '5/22', '5/23', '5/24', '5/25', '5/26', '5/27'],
        axisLine: {
            show: true,
            lineStyle: {
                color: '#b1b19c',
            },
        },
        offset: 10,
        axisTick: {
            show: false,
            length: 9,
            alignWithLabel: true,
            lineStyle: {
                color: '#fff',
            },
        },
        axisLabel: {
            fontSize: 24,
            color: '#fff',
        },
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#b1b19c',
            },
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            fontSize: 24,
            color: '#fff',
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
                                        offset: 0,
                                        color: '#d5ac37',
                                    },
                                    {
                                        offset: 1,
                                        color: '#df8244',
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
                                        color: '#d5ac37',
                                    },
                                    {
                                        offset: 1,
                                        color: '#df8244',
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
                                        color: '#d5ac37',
                                    },
                                    {
                                        offset: 1,
                                        color: '#df8244',
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
                    fontSize: 22,
                    color: '#fff',
                    offset: [2, -25],
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
