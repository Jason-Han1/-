const CubeLeft = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        const xAxisPoint = shape.xAxisPoint;
        const c0 = [shape.x + 7, shape.y];
        const c1 = [shape.x - 10, shape.y];
        const c2 = [xAxisPoint[0] - 10, xAxisPoint[1]];
        const c3 = [xAxisPoint[0] + 7, xAxisPoint[1]];
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
        const c1 = [shape.x + 7, shape.y];
        const c2 = [xAxisPoint[0] + 7, xAxisPoint[1]];
        const c3 = [xAxisPoint[0] + 15, xAxisPoint[1] - 10];
        const c4 = [shape.x + 15, shape.y - 10];
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
        const c1 = [shape.x + 7, shape.y];
        const c2 = [shape.x + 15, shape.y - 10]; //右点
        const c3 = [shape.x - 2, shape.y - 10];
        const c4 = [shape.x - 10, shape.y];
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
    },
});
// 注册三个面图形
echarts.graphic.registerShape('CubeLeft', CubeLeft);
echarts.graphic.registerShape('CubeRight', CubeRight);
echarts.graphic.registerShape('CubeTop', CubeTop);
option = {
    backgroundColor: 'rgb(2,35,75)',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    grid: {
        left: '0',
        right: '0',
        top: '8%',
        bottom: '0',
        containLabel: true,
    },
    legend: {
        data: ['白鹤滩', '托巴', '乌东德', '溪洛渡', '向家坝', '小湾'],
        show: false,
    },
    // x 坐标
    xAxis: {
        type: 'category',
        data: ['白鹤滩', '托巴', '乌东德', '溪洛渡', '向家坝', '小湾'],
        // 坐标线条
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.2)',
            },
        },
        // 标志位
        axisTick: {
            show: false,
            length: 9,
            alignWithLabel: true,
            lineStyle: {
                color: '#7DFFFD',
            },
        },
        // x 坐标的文字标注的颜色
        axisLabel: {
            fontSize: 12,
            color: 'white',
        },
    },
    yAxis: {
        type: 'value',
        min: 0,
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.2)',
            },
        },
        // 分割线
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed',
                color: '#075858',
            },
        },
        axisLabel: {
            fontSize: 12,
            color: 'white',
        },
        boundaryGap: ['20%', '20%'],
    },
    series: [
        {
            type: 'custom',
            name: '搬迁安置协议签订率',
            renderItem: (params, api) => {
                let cubeLeftStyle = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#59A6DC',
                    },
                    {
                        offset: 1,
                        color: '#2D52D7',
                    },
                ]);
                let cubeRightStyle = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#4EA4E0',
                    },
                    {
                        offset: 1,
                        color: '#2445B8',
                    },
                ]);
                let cubeTopStyle = {
                    color: '#4E9CD3',
                };
                var location = api.coord([api.value(0), api.value(1)]);
                location = [location[0] - 20, location[1]];
                var location1 = api.coord([api.value(0), 0]);
                location1 = [location1[0] - 20, location1[1]];
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
                                xAxisPoint: location1,
                            },
                            style: {
                                fill: cubeLeftStyle,
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
                                xAxisPoint: location1,
                            },
                            style: {
                                fill: cubeRightStyle,
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
                                xAxisPoint: location1,
                            },
                            style: {
                                fill: cubeTopStyle,
                            },
                        },
                    ],
                };
            },
            data: [200, 250, 300, 350, 400, 450],
        },
        {
            type: 'custom',
            name: '生产安置协议签订率',
            renderItem: (params, api) => {
                let cubeLeftStyle = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#0DF5D6',
                    },
                    {
                        offset: 1,
                        color: '#019ABB ',
                    },
                ]);
                let cubeRightStyle = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#08E8C9',
                    },
                    {
                        offset: 1,
                        color: '#008CA9',
                    },
                ]);
                let cubeTopStyle = {
                    color: '#0DEED4',
                };
                var location = api.coord([api.value(0), api.value(1)]);
                location = [location[0] + 20, location[1]];
                var location1 = api.coord([api.value(0), 0]);
                location1 = [location1[0] + 20, location1[1]];
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
                                xAxisPoint: location1,
                            },
                            style: {
                                fill: cubeLeftStyle,
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
                                xAxisPoint: location1,
                            },
                            style: {
                                fill: cubeRightStyle,
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
                                xAxisPoint: location1,
                            },
                            style: {
                                fill: cubeTopStyle,
                            },
                        },
                    ],
                };
            },
            data: [100, 200, 300, 400, 500, 600],
        },
    ],
};
