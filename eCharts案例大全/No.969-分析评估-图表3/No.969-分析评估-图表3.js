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
const MAX = [4000, 5000, 4000, 2500, 2000,5000, 4000, 3500, 3500, 4500,6000,3000,6000]
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
        formatter: function (params) {
            console.log(params, 'params');
            let returnData = '';
                let indexColor = '#da953e',indexColor2='#ff0000';
                returnData+='<div style="line-height:12px;text-align:center"><span style="font-size:12px;">'+ params[0].name+'</span><br/>';
                returnData+=
                    '<span style="display:inline-block;margin-right:-10px;border-radius:10px;width:9px;height:9px;background:' +
                    indexColor +
                    '"></span>';
                returnData += '<span style="padding-left:13px;font-size:12px">预测值：' + params[0].value + '</span>';
                returnData+=
                    '<br/><span style="display:inline-block;margin-right:-10px;border-radius:10px;width:9px;height:9px;background:' +
                    indexColor2 +
                    '"></span>';
                     returnData += '<span style="padding-left:13px;font-size:12px">实际收入：' + params[1].value + '</span></div>';
                    
                
            return returnData;
        },
        extraCssText: 'font-size: 22px; line-height: 30px',
    },
    xAxis: {
        type: 'category',
        data: ['收入1','收入2','收入3','收入4','收入5','收入6','收入7','收入8','收入9','收入10','收入11'],
        axisLine: {
            show: true,
            lineStyle: {
                color: '#fff',
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
            margin:0,
            fontSize: 12,
            color: '#fff',
            interval:0,
        },
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: true,
            lineStyle: {
                color: '#fff',
            },
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            fontSize: 14,
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
                                        color: 'rgba(60,135,226,0.1)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(70,176,229,0.1)',
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
                                        color: 'rgba(60,135,226,0.2)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(70,176,229,0.1)',
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
                                        color: 'rgba(60,135,226,0.2)',
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(70,176,229,0.2)',
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
                                        color: '#3c87e2',
                                    },
                                    {
                                        offset: 1,
                                        color: '#46b0e5',
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
                                        color: '#3c87e2',
                                    },
                                    {
                                        offset: 1,
                                        color: '#46b0e5',
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
                                        color: '#3c87e2',
                                    },
                                    {
                                        offset: 1,
                                        color: '#46b0e5',
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
            itemStyle: {
                color: 'transparent',
            },
            tooltip: {},
            data: VALUE,
        },
    ],
};
