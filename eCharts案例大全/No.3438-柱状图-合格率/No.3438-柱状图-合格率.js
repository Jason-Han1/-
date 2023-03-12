option = {
    backgroundColor: '#000',
    tooltip: {
        trigger: 'item',
    },
    legend: {
        data: [
            {
                name: '数量',
                itemStyle: {
                    color: '#1F98D8',
                },
            },
            {
                name: '合格率',
                itemStyle: {
                    color: '#43D5A0',
                },
            },
        ],
        top: '20',
        right: '10',
        itemGap: 20,
        itemWidth: 8,
        itemHeight: 8,
        textStyle: {
            color: '#eee',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontFamily: 'sans-serif',
            fontSize: 12,
        },
    },
    xAxis: {
        type: 'category',
        data: ['1标段', '2标段', '3标段', '4标段', '5标段'],
        axisTick: {
            show: false, // 不显示坐标轴刻度线
        },
        axisLine: {
            show: true, // 不显示坐标轴线
        },
        axisLabel: {
            show: true,
            interval: 0,
            textStyle: {
                color: 'rgba(255,255,255,0.75)', // X轴文字颜色
                padding: [0, 0, 0, 0],
                fontSize: 12,
            },
        },
    },
    grid: {
        containLabel: true,
        left: 20,
        right: 20,
        top: 60,
        bottom: 20,
    },
    yAxis: [
        {
            type: 'value',
            axisTick: {
                show: false,
            },
            axisLabel: {
                formatter: '{value}',
            },
            splitLine: {
                // show: false // 不显示网格线
                lineStyle: {
                    type: 'dashed',
                    color: '#344a53',
                },
            },
        },
        {
            type: 'value',
            min: 0,
            max: 100,
            axisLabel: {
                show: true,
                interval: 'auto',
                formatter: '{value} %',
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                // show: false // 不显示网格线
                lineStyle: {
                    type: 'dashed',
                    color: '#344a53',
                },
            },
        },
    ],
    series: [
        {
            name: '数量',
            data: [10, 5, 15, 10, 12],
            type: 'bar',
            barWidth: 12,
            yAxisIndex: 0,
            itemStyle: {
                fontSize: 16,
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: '#1F98D8', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(31,152,216,.4)', // 100% 处的颜色
                            },
                        ],
                        false
                    ),
                },
            },
        },
        {
            name: '合格率',
            data: [50, 30, 80, 80, 70],
            type: 'bar',
            barWidth: 12,
            yAxisIndex: 1,
            itemStyle: {
                fontSize: 16,
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: '#43D5A0', // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: 'rgba(67,213,160,.4)', // 100% 处的颜色
                            },
                        ],
                        false
                    ),
                },
            },
        },
    ],
};
