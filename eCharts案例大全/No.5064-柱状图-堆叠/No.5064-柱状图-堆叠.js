var data = {
    area: ['电子信息工程', '智能工程', '汽车工程', '物理网工程', '商学院', '建筑工程', '艺术设计'],
    legend: ['<60', '61-70', '71-80', '81-90', '91-100'],
    data: [
        [10, 10, 10, 10, 10, 10, 10],
        [10, 10, 10, 10, 10, 10, 10],
        [10, 10, 10, 10, 10, 10, 10],
        [10, 10, 10, 10, 10, 10, 10],
        [10, 10, 10, 10, 10, 10, 10],
    ]
}
var colors = [
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: 'rgba(255, 135, 150, 1)'
    }, {
        offset: 1,
        color: 'rgba(253, 77, 99, 1)'
    }]),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: 'rgba(255, 229, 123, 1)'
    }, {
        offset: 1,
        color: 'rgba(255, 181, 39, 1)'
    }]),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: 'rgba(255, 189, 111, 1)'
    }, {
        offset: 1,
        color: 'rgba(255, 161, 38, 1)'
    }]),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: 'rgba(97, 233, 193, 1)'
    }, {
        offset: 1,
        color: 'rgba(11, 201, 145, 1)'
    }]),
    new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: 'rgba(110, 185, 255, 1)'
    }, {
        offset: 1,
        color: 'rgba(0, 121, 234, 1)'
    }]),
]
var option = {
    color: colors,
    tooltip: {},
    legend: {
        top: 0,
        left: 0,
        itemWidth: 10,
        itemHeight: 10,
        // padding: [5, 10],
        textStyle: {
            fontSize: 14,
            color: 'rgba(102, 102, 102, 1)',
            padding: [3, 0, 0, 0]
        },
        data: data.legend
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '13%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisLabel: {
            color: 'rgba(153, 153, 153, 1)'
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(142, 142, 142, 1)'
            },
            // width: 5
        },
        axisTick: {
            show: false,
        },
        data: data.area
    },
    yAxis: {
        type: 'value',
        name: '合格率（%）',
        min: 0,
        max: 100,
        splitNumber: 5,
        axisLabel: {
            color: 'rgba(153, 153, 153, 1)'
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(216, 216, 216, 1)'
            },
            // width: 5
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(150, 164, 244, 0.3)'
            }
        },
    },
    series: []
};
for (var i = 0; i < data.legend.length; i++) {
    option.series.push({
        name: data.legend[i],
        type: 'bar',
        stack: '总量',
        barWidth: '45%',
        label: {
            show: false,
        },
        itemStyle: {
            barBorderRadius: [3, 3, 0, 0]
        },
        data: data.data[i]
    })
}
myChart.setOption(option);