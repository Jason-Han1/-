option = {
    title: {
        text: '比例',
    },
    xAxis: {
        type: 'category',
        data: ['<35岁', '36-45岁', '46-60岁', '>60岁'],
        axisTick: { show: false }, //不显示坐标轴刻度线
        axisLine: {
            lineStyle: {
                color: '#e0e8f0', //x轴线条颜色
            },
        },
        axisLabel: {
            textStyle: {
                color: '#979797', //x轴字体颜色
            },
        },
    },
    yAxis: {
        type: 'value',
        // splitLine: { show: false }, //不显示横线
        // axisLabel: { show: false }, //y轴不显示数据
        axisLine: { show: false }, //不显示坐标轴线
        axisTick: { show: false }, //不显示坐标轴刻度线
    },
    series: [
        {
            data: [52, 78, 80, 92],
            type: 'line',
            smooth: true,
            // symbol: 'circle', //数值点设定为实心点
            symbolSize: 10, // 折线的点的大小
            itemStyle: {
                normal: {
                    color: '#1890ff', //拐点的颜色
                    barBorderRadius: 8,
                    lineStyle: {
                        color: '#1890ff', //线的颜色
                        width: 5, // 折线图线条粗细设置
                    },
                },
            },
            areaStyle: {
                // 折现下是否填充
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0,
                            color: '#deeffe', // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: '#f5faff', // 100% 处的颜色
                        },
                    ],
                    global: false,
                },
            },
        },
    ]
};
