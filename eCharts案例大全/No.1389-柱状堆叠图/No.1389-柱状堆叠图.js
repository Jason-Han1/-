var data = {
    area: ['3G', '4G', '5G-SA', '5G-NSA'],
    legend: ['华为', '中兴', '烽火', '瑞斯'],
    data: [
        [320, 302, 901, 634],
        [320, 302, 301, 334],
        [320, 302, 301, 334],
        [320, 302, 301, 334],
    ],
};
var colors = ['#4C98FB', '#83CCE7', '#26C7C8', '#73DEBD'];
var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none',
        },
    },
    color: colors,
    legend: {
        top: 10,
        left: 200,
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            fontSize: 14,
            padding: [3, 0, 0, 0],
        },
        data: data.legend,
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '13%',
        containLabel: true,
    },
    xAxis: {
        type: 'category',
        data: data.area
    },
    yAxis: {
        type: 'value',
        axisLine: {
            width: 5,
        },
        splitLine: {
            show: false,
        },
    },
    series: [],
};
for (var i = 0; i < data.legend.length; i++) {
    option.series.push({
        name: data.legend[i],
        type: 'bar',
        stack: '总量',
        barWidth: '45%',
        label: {
            show: false,
            position: 'insideRight',
        },
        data: data.data[i],
    });
}
myChart.setOption(option);
