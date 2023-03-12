const offsetX = 10;
const offsetY = 5;
// 绘制左侧面
const CubeLeft = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        // 会canvas的应该都能看得懂，shape是从custom传入的
        const xAxisPoint = shape.xAxisPoint;
        // console.log(shape);
        const c0 = [shape.x, shape.y];
        const c1 = [shape.x - offsetX, shape.y - offsetY];
        const c2 = [xAxisPoint[0] - offsetX, xAxisPoint[1] - offsetY];
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
        const c3 = [xAxisPoint[0] + offsetX, xAxisPoint[1] - offsetY];
        const c4 = [shape.x + offsetX, shape.y - offsetY];
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
        const c2 = [shape.x + offsetX, shape.y - offsetY]; //右点
        const c3 = [shape.x, shape.y - offsetX];
        const c4 = [shape.x - offsetX, shape.y - offsetY];
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
    },
});
echarts.graphic.registerShape('CubeLeft', CubeLeft);
echarts.graphic.registerShape('CubeRight', CubeRight);
echarts.graphic.registerShape('CubeTop', CubeTop);
const MAX = [10, 80, 60, 40];
const VALUE = [5, 60, 40, 20];

const legendData = [
    {
        name: '通讯故障',
        textStyle: {
            color: '#ccc',
        },
        itemStyle: {
            color: '#63EAEB',
        },
    },
    {
        name: '屏体故障',
        textStyle: {
            color: '#ccc',
        },
        itemStyle: {
            color: '#2087FE',
        },
    }
];

option = {
    backgroundColor: '#010d3a',
    legend: {
        selectedMode: false, //图例点击失效
        left: '40%',
        bottom: '10%',
        textStyle: {
            color: '#cccccc',
            fontSize: 14,
        },
        data: legendData,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        borderColor: 'rgba(255,255,255,.3)',
        backgroundColor: 'rgba(13,5,30,.6)',
        textStyle: {
            color: 'white', //设置文字颜色
        },
        borderWidth: 1,
        padding: 5,
        formatter: function (parms) {
            var str =
                parms[0].name +
                '</br>' +
                parms[0].marker +
                parms[0].seriesName +
                '：' +
                parms[1].value +
                '</br>' +
                parms[1].marker +
                parms[1].seriesName +
                '：' +
                (parms[0].value - parms[1].value) +
                '</br>';
            return str;
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
        axisLine: {
            show: true,
            lineStyle: {
                width: 2,
                color: '#2B7BD6',
            },
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            fontSize: 14,
        },
        data: ['全彩屏', '双基色屏', '简易屏', '条形屏'],
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: true,
            lineStyle: {
                width: 2,
                color: '#2B7BD6',
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#153D7D',
            },
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            fontSize: 14,
        },
        // boundaryGap: ['20%', '20%'],
    },
    series: [
        {
            type: 'custom',
            name: '屏体故障',
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
                                        color: '#51DDE1',
                                    },
                                    {
                                        offset: 1,
                                        color: '#1DBE98',
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
                                        color: '#51DDE1',
                                    },
                                    {
                                        offset: 1,
                                        color: '#1DBE98',
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
                                        color: '#63EAEB',
                                    },
                                    {
                                        offset: 1,
                                        color: '#63EAEB',
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
            name: '通讯故障',
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
                                        color: '#3479EB',
                                    },
                                    {
                                        offset: 1,
                                        color: '#5C33EB',
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
                                        color: '#2668DC',
                                    },
                                    {
                                        offset: 1,
                                        color: '#481AB7',
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
                                        color: '#2B7DFB',
                                    },
                                    {
                                        offset: 1,
                                        color: '#2B7DFB',
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
