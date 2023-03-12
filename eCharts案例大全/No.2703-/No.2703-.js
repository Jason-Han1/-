let backgroundColor = '#0A2A63'; //D8D8D
let chartdata = [70];
let max = 150;
option = {
    backgroundColor: backgroundColor,
    grid: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        containLabel: true,
    },
    xAxis: {
        type: 'value',
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        max: max,
    },
    yAxis: {
        type: 'category',
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
    },
    series: [
        {
            name: 'XXX',
            type: 'pictorialBar',
            symbol: 'circle',
            symbolSize: 24,
            symbolOffset: [7, 0],
            z: 12,
            itemStyle: {
                normal: {
                    color: 'rgba(2, 130, 243, 1)',
                    borderColor: 'rgba(255,255,255,1)',
                    borderWidth: 8,
                },
            },
            data: [
                {
                    value: chartdata,
                    symbolPosition: 'end',
                },
            ],
        },
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    // color: "#37ffea",
                    color: new echarts.graphic.LinearGradient(
                        0,
                        1,
                        1,
                        1,
                        [
                            {
                                offset: 1,
                                color: 'rgba(104, 216, 253, 1)', // 0% 处的颜色
                            },
                            {
                                offset: 0,
                                color: 'rgba(0, 128, 243, 1)', // 100% 处的颜色
                            },
                        ],
                        false
                    ),
                    opacity: 1,
                    barBorderRadius: 10,
                },
            },
            showBackground: true, backgroundStyle: {
                color: 'rgba(255,255,255,0.8)',
               barBorderRadius: 10,
            },
            silent: true,
            barWidth: 20,
            barGap: '-110%', // Make series be overlap
            data: [chartdata],
        },
    ],
};
