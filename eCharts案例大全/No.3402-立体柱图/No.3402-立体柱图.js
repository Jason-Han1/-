// 绘制左侧面
const wid = 20;
const w1 = Math.sin(Math.PI / 6) * wid; //4
const w2 = Math.sin(Math.PI / 6) * wid; // 6.8
const snapHeight = wid / 4;
const CubeLeft = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        // 会canvas的应该都能看得懂，shape是从custom传入的
        const xAxisPoint = shape.xAxisPoint;
        const c0 = [shape.x, shape.y + 8];
        const c1 = [shape.x - w2, shape.y - w1 + snapHeight + 8];
        const c2 = [shape.x - w2, xAxisPoint[1] - w1 + snapHeight + 8]; //加往前  减往后
        const c3 = [shape.x, xAxisPoint[1] + 8];
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
        const c1 = [shape.x, shape.y + 8];
        const c2 = [shape.x, xAxisPoint[1] + 8];
        const c3 = [shape.x + w1, xAxisPoint[1] - w2 + snapHeight + 8];
        const c4 = [shape.x + w1, shape.y - w2 + snapHeight + 8];
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
        const c1 = [shape.x, shape.y + 8];
        const c2 = [shape.x + w1, shape.y - w2 + snapHeight + 8]; //右点
        const c3 = [shape.x - w2 + w1, shape.y - w1 - w2 + snapHeight * 2 + 8];
        const c4 = [shape.x - w2, shape.y - w1 + snapHeight + 8];
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
    },
});
// 注册三个面图形
echarts.graphic.registerShape('CubeLeft', CubeLeft);
echarts.graphic.registerShape('CubeRight', CubeRight);
echarts.graphic.registerShape('CubeTop', CubeTop);

let legends = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
const VALUE = ["761.74", "2786.34", "3488.15", "555.00", "666", "777", "888", "999", "444", "666", "777", "888"];
const VALUE1 = ["861.74", "2886.34", "3888.15", "1085.00", "1066", "1077", "1088", "1099", "1044", "1066", "1077", "1088"];
option = {
    backgroundColor:'rgba(0,0,0,0.5)',
    legend: {
        data: ['2019', '2020'],
        selectedMode: false,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        formatter: function (params) {
            let item = '';
            item += params[0].name + '<br>';
            $(params).each(function (idx, itm) {
                item += itm.seriesName + ':' + itm.value + '<br>';
            });
            return item;
        },
    },
    grid: {
        left: '5%',
        right: '5%',
        top: '15%',
        bottom: '10%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        data: legends,
        axisLine: {
            show: true,
            lineStyle: {
                color: '#fff',
            },
        },
        axisTick: {
            show: false,
            length: 9,
            alignWithLabel: true,
            lineStyle: {
                color: '#fff',
            },
        },
        axisLabel: {
            fontSize: 20,
            margin: 30,
        },
    },
    yAxis: {
        name: '2020',
        type: 'value',
        nameTextStyle: {
            color: '#707e98',
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#fff',
            },
        },
        axisLabel: {
            color: '#fff',
        },
    },
    series: [
        {
            name: '2019',
            type: 'custom',
            renderItem: (params, api) => {
                const location = api.coord([api.value(0), api.value(1)]);
                location[0] = location[0] + wid-25;
                const xlocation = api.coord([api.value(0), 0]);
                xlocation[0] = xlocation[0] + wid-25;
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
                                xAxisPoint: xlocation,
                            },
                            style: {
                                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: 'rgba(85, 182, 248,0.1)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(85, 182, 248,0.1)',
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
                                xAxisPoint: xlocation,
                            },
                            style: {
                                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: '#55B6F8',
                                    },
                                    {
                                        offset: 1,
                                        color: '#55B6F8',
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
                                xAxisPoint: xlocation,
                            },
                            style: {
                                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: '#55B6F8',
                                    },
                                    {
                                        offset: 1,
                                        color: '#55B6F8',
                                    },
                                ]),
                            },
                        },
                    ],
                };
            },
            color: '#55B6F8',
            data: VALUE,
        },
        {
            name: '2020',
            type: 'custom',
            renderItem: (params, api) => {
                const location = api.coord([api.value(0), api.value(1)]);
                location[0] = location[0] + wid;
                const xlocation = api.coord([api.value(0), 0]);
                xlocation[0] = xlocation[0] + wid;
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
                                xAxisPoint: xlocation,
                            },
                            style: {
                                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: 'rgba(240, 190, 65,0.1)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(240, 190, 65,0.1)',
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
                                xAxisPoint: xlocation,
                            },
                            style: {
                                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: '#F0BE41',
                                    },
                                    {
                                        offset: 1,
                                        color: '#F0BE41',
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
                                xAxisPoint: xlocation,
                            },
                            style: {
                                fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                    {
                                        offset: 0,
                                        color: '#F0BE41',
                                    },
                                    {
                                        offset: 1,
                                        color: '#F0BE41',
                                    },
                                ]),
                            },
                        },
                    ],
                };
            },
            color: '#F0BE41',
            data: VALUE1,
        },
    ],
};
