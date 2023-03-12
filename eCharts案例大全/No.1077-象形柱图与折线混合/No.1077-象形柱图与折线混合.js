option = {
    tooltip: {
        trigger: 'axis',
    },
    legend: {
        show: true,
    },
    xAxis: {
        data: new Array(12).fill(0).map((v, i) => `${i}月`),
    },
    yAxis: {},
    series: [
        {
            name: '指标',
            type: 'line',
            smooth: true,
            data: [234, 231, 243, 265, 123, 213, 167, 189, 176, 234, 167, 234],
        },
        {
            name: '实际产量',
            type: 'pictorialBar',
            symbol: 'triangle',
            data: [123, 60, 125, 128, 122, 122, 100, 122, 234, 224, 246, 131],
        },
    ],
};
