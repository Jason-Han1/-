let chartData = [
    ['product', '1月', '2月', '3月', '4月', '5月', '6月'],
    ['Actual', 120, 132, 101, '-', '-', '-', '-'],
    ['Budget', 120, 178, 70, 134, 90, 230, 210],
];

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    legend: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    yAxis: {
        type: 'value',
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            axisLabel: {
                interval: 0,
            },
            axisLine: {
                show: true,
            },
            axisTick: {
                show: false,
            },
        },
        {
            type: 'category',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            splitArea: {
                show: false,
            },
            splitLine: {
                show: false,
            },
        },
    ],
    dataset: {
        source: chartData,
    },
    series: [
        {
            xAxisIndex: 0,
            type: 'bar',
            barWidth: '30%',
            seriesLayoutBy: 'row',
        },

        {
            xAxisIndex: 1,
            type: 'bar',
            barWidth: '40%',
            seriesLayoutBy: 'row',
            itemStyle: {
                color: "rgba(155, 155, 155, 0.5)",
            },
        },
    ],
};
