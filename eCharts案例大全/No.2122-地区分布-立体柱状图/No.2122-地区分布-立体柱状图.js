// 绘制左侧面
const CubeLeft = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0,
    },
    buildPath: function (ctx, shape) {
        // 会canvas的应该都能看得懂，shape是从custom传入的
        const xAxisPoint = shape.xAxisPoint;
        const c0 = [shape.x + 2, shape.y];
        const c1 = [shape.x - 13, shape.y - 1];
        const c2 = [xAxisPoint[0] - 13, xAxisPoint[1] - 3];
        const c3 = [xAxisPoint[0] + 2, xAxisPoint[1]];
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
        const c1 = [shape.x + 2, shape.y];
        const c2 = [xAxisPoint[0] + 2, xAxisPoint[1]];
        const c3 = [xAxisPoint[0] + 15, xAxisPoint[1] - 5];
        const c4 = [shape.x + 15, shape.y - 5];
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
        const c1 = [shape.x + 2, shape.y+3];
        const c2 = [shape.x + 15, shape.y - 5]; //右点
        const c3 = [shape.x - 0, shape.y - 10];
        const c4 = [shape.x - 13, shape.y - 1];
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath();
    },
});
// 注册三个面图形
echarts.graphic.registerShape('CubeLeft', CubeLeft);
echarts.graphic.registerShape('CubeRight', CubeRight);
echarts.graphic.registerShape('CubeTop', CubeTop);
const VALUE = [20, 30, 35, 40, 12, 12, 45, 78, 45];
option = {
    title: {
        text: '地区分布',
        textStyle: {
            color: '#7ebaf2',
            fontWeight: '800',
            fontSize: 12,
        },
        left: '18px',
        top: '1%',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
        formatter: function (params, ticket, callback) {
            const item = params[1];
            return item.name + ' : ' + item.value;
        },
    },
    grid: {
        left: '5%',
        right: '5%',
        top: '12%',
        bottom: '5%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        data: ['海淀', '朝阳', '丰台', '石景山', '密云', '平谷', '大兴', '雄安', '外省'],
        axisLine: {
            show: true,
            lineStyle: {
                color: '#7ebaf2',
            },
        },
        axisTick: {
            show: false,
            length: 9,
            alignWithLabel: true,
            lineStyle: {
                color: '#7DFFFD',
            },
        },
        axisLabel: {
            fontSize: 12,
        },
    },
    yAxis: {
        type: 'value',
        min: 0,
        axisLine: {
            show: true,
            lineStyle: {
                color: '#7ebaf2',
            },
        },
        splitLine: {
            show: false,
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
                let cubeLeftStyle = '';
                let cubeRightStyle = '';
                let cubeTopStyle = '';
 // 颜色
          cubeLeftStyle = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(62,255,255,1)',
            },
            {
              offset: 1,
              color: 'rgba(0,126,191,1)',
            },
          ])
          cubeRightStyle = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(23,176,255,1)',
            },
            {
              offset: 1,
              color: 'rgba(0,138,255,0.3)',
            },
          ])
          cubeTopStyle = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(163,232,255,1)',
            },
            {
              offset: 1,
              color: 'rgba(163,232,255,1)',
            },
          ])
          //颜色end
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
                                xAxisPoint: api.coord([api.value(0), 0]),
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
                                xAxisPoint: api.coord([api.value(0), 0]),
                            },
                            style: {
                                fill: cubeTopStyle,
                            },
                        },
                    ],
                };
            },
            data: VALUE,
        },
        {
            type: 'bar',
            barMaxWidth:10,
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    fontSize: 14,
                    color: '#2e95f3',
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
