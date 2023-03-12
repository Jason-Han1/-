var title = '渐变柱状图';
//背景
var MAX = [100, 100, 100, 100, 100];
var VALUE = [34, 45, 44, 67, 45];
//x轴数据
var xlabel = ['SD', 'SDD', 'WE', 'SDEQ', 'SDDDE'];
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
        const c1 = [shape.x - 6.5, shape.y - 6.5];
        const c2 = [xAxisPoint[0] - 6.5, xAxisPoint[1] - 6.5];
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
        const c3 = [xAxisPoint[0] + 9, xAxisPoint[1] - 4.5];
        const c4 = [shape.x + 9, shape.y - 4.5];
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
        const c2 = [shape.x + 9, shape.y - 4.5];
        const c3 = [shape.x + 2.5, shape.y - 10];
        const c4 = [shape.x - 6.5, shape.y - 6.5];
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
    },
});
// 绘制左侧面
const Cubebuttom = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        // 会canvas的应该都能看得懂，shape是从custom传入的
        const xAxisPoint = shape.xAxisPoint;
        const c0 = [shape.x + 900, shape.y];
        const c1 = [shape.x -60, shape.y];
        const c2 = [xAxisPoint[0] - 110, xAxisPoint[1]];
        const c3 = [xAxisPoint[0] + 1000, xAxisPoint[1]];
        ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath();
    },
});
echarts.graphic.registerShape('CubeLeft', CubeLeft);
echarts.graphic.registerShape('CubeRight', CubeRight);
echarts.graphic.registerShape('CubeTop', CubeTop);
echarts.graphic.registerShape('Cubebuttom', Cubebuttom);
option = {
    backgroundColor: '#081c47',
    grid: [
        {
            top: '45%',
            left: '4%',
            right: '4%',
            bottom: '15%',
            containLabel: true,
        },
        {
            top: '77%',
            left: '4%',
            right: '4%',
            bottom: '20%',
            containLabel: true,
        },
    ],
    xAxis: [
        {
            type: 'category',
            data: xlabel,
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(36, 173, 254, 1)',
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                textStyle: {
                    color: 'rgba(36, 173, 254, 1)',
                },
                fontSize: 20,
                formatter: function (params) {
                    var newParamsName = ''; // 最终拼接成的字符串
                    var paramsNameNumber = params.length; // 实际标签的个数
                    var provideNumber = 3; // 每行能显示的字的个数
                    var rowNumber = Math.ceil(paramsNameNumber / provideNumber); // 换行的话，需要显示几行，向上取整
                    /**
                     * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                     */
                    // 条件等同于rowNumber>1
                    if (paramsNameNumber > provideNumber) {
                        /** 循环每一行,p表示行 */
                        for (var p = 0; p < rowNumber; p++) {
                            var tempStr = ''; // 表示每一次截取的字符串
                            var start = p * provideNumber; // 开始截取的位置
                            var end = start + provideNumber; // 结束截取的位置
                            // 此处特殊处理最后一行的索引值
                            if (p == rowNumber - 1) {
                                // 最后一次不换行
                                tempStr = params.substring(start, paramsNameNumber);
                            } else {
                                // 每一次拼接字符串并换行
                                tempStr = params.substring(start, end) + '\n';
                            }
                            newParamsName += tempStr; // 最终拼成的字符串
                        }
                    } else {
                        // 将旧标签的值赋给新标签
                        newParamsName = params;
                    }
                    //将最终的字符串返回
                    return newParamsName;
                },
            },
        },
        {
            type: 'category',
            data: xlabel,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            gridIndex: 1,
        },
        {
            type: 'category',
            data: VALUE,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: 'rgba(36, 173, 254, 1)',
                },
                fontSize: 20,
            },
            gridIndex: 0,
        },
    ],
    yAxis: [
        {
            type: 'value',
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(36, 173, 254, 1)',
                },
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
                textStyle: {
                    color: 'rgba(36, 173, 254, 1)',
                },
                fontSize:20,
            },
        },
        {
            type: 'value',
            axisLine: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            gridIndex: 1,
        },
    ],
    series: [
        {
            type: 'custom',
            xAxisIndex: 1,
            yAxisIndex: 1,
            renderItem: function (params, api) {
                const location = api.coord([api.value(0), api.value(1)]);
                return {
                    type: 'group',
                    children: [
                        {
                            type: 'Cubebuttom',
                            shape: {
                                api,
                                xValue: api.value(0),
                                yValue: api.value(1),
                                x: location[0],
                                y: location[1],
                                xAxisPoint: api.coord([api.value(0), 0]),
                            },
                            style: {
                                fill: 'rgba(41, 95, 161, 0.86)',
                            },
                        },
                    ],
                };
            },
            data: [1],
        },

        {
            xAxisIndex: 0,
            yAxisIndex: 0,
            type: 'custom',
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
                                // fill: 'rgba(0, 104, 183, 0.6)',
                                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: 'rgba(0, 104, 183, 0.6)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(0, 155, 254, 1)',
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
                                        color: 'rgba(0, 104, 183, 0.6)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(0, 155, 254, 1)',
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
                                        color: 'rgba(0, 104, 183, 0.6)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(0, 155, 254, 1)',
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
            xAxisIndex: 0,
            yAxisIndex: 0,
            name: '数量',
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
                                        color: 'rgba(126, 206, 244, 1)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(0, 155, 254, 1)',
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
                                        color: 'rgba(36, 173, 254, 1)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(0, 183, 238, 1)',
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
                                        color: 'rgba(58, 213, 253, 1)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(58, 213, 253, 1)',
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
