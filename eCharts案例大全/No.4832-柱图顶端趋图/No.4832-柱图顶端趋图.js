var legendData = ['商超', '餐饮', '小吃', '其他', '年同比'];
var value1 = [
    [75.45, 66.42, 150.23, 49.96, 60.67, 61.57],
    [119.68, 54.72, 119.09, 44.76, 27.40, 24.57],
    [105.27, 79.34, 152.96, 40.09, 55.33, 36.46],
    [0.00, 0.00, 0.34, 0.00, 0.00, 0.00]
];
var value2 = [
    [0.00, 0.00, 0.00, 0.00],
    [0.00, 0.00, 0.00, 0.00],
    [0.00, 0.00, 0.00, 0.00],
    [0.00, 0.00, 0.00, 0.00],
    [0.00, 0.00, 0.00, 0.00],
    [0.00, 0.00, 0.00, 0.00]
]

var series = []

option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: legendData
    },
    xAxis: {
        data: ["黄冈", "十堰", "孝感", "咸宁", "恩施", "宜昌"]
    },
    yAxis: [{
        type: 'value'
    }, {
        type: 'value',
        name: '%',
    }],
    series: []
};
series = value1.map(function(data, index) {
    return {
        type: 'bar',
        name: legendData[index],
        itemStyle: {
            opacity: 0.5
        },
        data: data
    };
})
series.unshift({
    type: 'custom',
    name: '年同比',
    renderItem: function (params, api) {
    var xValue = api.value(0);
    var currentSeriesIndices = api.currentSeriesIndices();
    var barLayout = api.barLayout({
        barGap: '30%',
        barCategoryGap: '20%',
        count: currentSeriesIndices.length - 1
    });

    var points = [];
    for (var i = 0; i < currentSeriesIndices.length; i++) {
        var seriesIndex = currentSeriesIndices[i];
        if (seriesIndex !== params.seriesIndex) {
            var point = api.coord([xValue, api.value(seriesIndex)]);
            point[0] += barLayout[i - 1].offsetCenter;
            point[1] -= 20;
            points.push(point);
        }
    }
    var style = api.style({
        stroke: api.visual('color'),
        fill: null
    });

    return {
        type: 'polyline',
        shape: {
            points: points
        },
        style: style
    };
},
    yAxisIndex: 1,
    itemStyle: {
        borderWidth: 2
    },
    encode: {
        x: 0,
        y: [1, 2, 3, 4, 5]
    },
    data: value2.map((item, index) => ([index, ...item])),
    z: 100
})
option.series = series
console.log(option.series)