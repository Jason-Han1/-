var c = 9.5;
const CubeLeft = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        const xAxisPoint = shape.xAxisPoint;
        const c0 = [shape.x + c, shape.y];
        const c1 = [shape.x - 5 + c, shape.y - 5];
        const c2 = [xAxisPoint[0] - 5 + c, xAxisPoint[1] - 5];
        const c3 = [xAxisPoint[0] + c, xAxisPoint[1]];
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
        const c1 = [shape.x + c, shape.y];
        const c2 = [xAxisPoint[0] + c, xAxisPoint[1]];
        const c3 = [xAxisPoint[0] + 18 + c, xAxisPoint[1] - 0];
        const c4 = [shape.x + 18 + c, shape.y - 0];
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
    },
});
const CubeTop = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        const c1 = [shape.x + c, shape.y];
        const c2 = [shape.x + 18 + c, shape.y - 0];
        const c3 = [shape.x + 15 + c, shape.y - 5];
        const c4 = [shape.x - 5 + c, shape.y - 5];
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
    },
});
echarts.graphic.registerShape('CubeLeft', CubeLeft);
echarts.graphic.registerShape('CubeRight', CubeRight);
echarts.graphic.registerShape('CubeTop', CubeTop);
const CubeLeft1 = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        const xAxisPoint = shape.xAxisPoint;
        const c0 = [shape.x - c, shape.y];
        const c1 = [shape.x - 5 - c, shape.y - 5];
        const c2 = [xAxisPoint[0] - 5 - c, xAxisPoint[1] - 5];
        const c3 = [xAxisPoint[0] - c, xAxisPoint[1]];
        ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath();
    },
});
const CubeRight1 = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        const xAxisPoint = shape.xAxisPoint;
        const c1 = [shape.x - c, shape.y];
        const c2 = [xAxisPoint[0] - c, xAxisPoint[1]];
        const c3 = [xAxisPoint[0] + 18 - c, xAxisPoint[1] - 0];
        const c4 = [shape.x + 18 - c, shape.y - 0];
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
    },
});
const CubeTop1 = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        const c1 = [shape.x - c, shape.y];
        const c2 = [shape.x + 18 - c, shape.y - 0];
        const c3 = [shape.x + 15 - c, shape.y - 5];
        const c4 = [shape.x - 5 - c, shape.y - 5];
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
    },
});
echarts.graphic.registerShape('CubeLeft1', CubeLeft1);
echarts.graphic.registerShape('CubeRight1', CubeRight1);
echarts.graphic.registerShape('CubeTop1', CubeTop1);
const VALUE = [20, 10, 30, 49, 54, 30, 30, 23, 14, 30, 49, 54];
const VALUE1 = [22, 10, 70, 29, 54, 10, 70, 39, 14, 90, 29, 14];
option = {
    backgroundColor: '#0f375f',
    grid: {
        left: 30,
        right: 30,
        bottom: 30,
        top: 70,
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
                const indexColor = '#da953e';
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
    legend: {
        data: ['应接种', '已完成第一次接种'],
        textStyle: { fontSize: 14, color: '#fff' },
        itemWidth: 25,
        itemHeight: 15,
        itemGap: 15,
        bottom: '5%',
    },
    xAxis: {
        type: 'category',
        data: ['5/16', '5/17', '5/18', '5/19', '5/20', '5/21', '5/22', '5/23', '5/24', '5/25', '5/26', '5/27'],
        axisLine: {
            show: true,
            lineStyle: {
                color: '#0B384B',
            },
        },
        offset: 10,
        axisTick: {
            show: false,
            length: 9,
            alignWithLabel: true,
            lineStyle: {
                color: '#748EAB',
            },
        },
        axisLabel: {
            fontSize: 14,
            color: '#748EAB',
        },
    },
    yAxis: {
        name: '形象进度（%）',
        nameTextStyle: {
            color: '#748EAB',
        },
        type: 'value',
        min: 0,
        max: 100,
        axisLine: {
            show: true,
            lineStyle: {
                color: '#0B384B',
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#0B384B',
            },
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            fontSize: 14,
            color: '#748EAB',
        },
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
                                        color: 'rgba(37, 139, 253, 0.5)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(81, 255, 242, 0)',
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
                                        color:
                                            params.dataIndex === 2
                                                ? 'rgba(253, 142, 37, 1)'
                                                : 'rgba(37, 139, 253, 0.9)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(81, 255, 242, 0)',
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
                                        color: 'rgba(0, 146, 255, 1)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(0, 146, 255, 1)',
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
                                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: 'rgba(2, 137, 127, 0.6)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(81, 255, 242, 0)',
                                    },
                                ]),
                            },
                        },
                        {
                            type: 'CubeRight1',
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
                                        color: 'rgba(81, 255, 242, 0.9)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(81, 255, 242, 0)',
                                    },
                                ]),
                            },
                        },
                        {
                            type: 'CubeTop1',
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
                                        color: 'rgba(68, 255, 236, 1)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(68, 255, 236, 1)',
                                    },
                                ]),
                            },
                        },
                    ],
                };
            },
            data: VALUE1,
        },
    ],
};
