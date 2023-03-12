var yearCount = 4;
var categoryCount = 6;

var xAxisData = [];
var customData = [];
var legendData = [];
var dataList = [];

legendData.push('趋势');
var encodeY = [];
for (var i = 0; i < yearCount; i++) {
    legendData.push((1 + i) + '季度');
    dataList.push([]);
    encodeY.push(1 + i);
}

for (var i = 0; i < categoryCount; i++) {
    var val = Math.random() * 1000;
    xAxisData.push((2015 + i) + '年');
    var customVal = [i];
    customData.push(customVal);

    for (var j = 0; j < dataList.length; j++) {
        var value = j === 0
            ? echarts.number.round(val, 2)
            : echarts.number.round(Math.max(0, dataList[j - 1][i] + (Math.random() - 0.5) * 200), 2);
        dataList[j].push(value);
        customVal.push(value);
    }
}

function renderItem(params, api) {
    var xValue = api.value(0);
    var currentSeriesIndices = api.currentSeriesIndices();
    var barLayout = api.barLayout({
        barGap: '30%', barCategoryGap: '20%', count: currentSeriesIndices.length - 1
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
}

option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: legendData
    },
    dataZoom: [{
        type: 'slider',
        start: 50,
        end: 70
    }, {
        type: 'inside',
        start: 50,
        end: 70
    }],
    xAxis: {
        data: xAxisData
    },
    yAxis: {},
    series: [{
        type: 'custom',
        
        renderItem: renderItem,
        itemStyle: {
            borderWidth: 0
        },
        encode: {
            x: 0,
            y: encodeY
        },
        data: customData,
        z: 100
    }].concat(echarts.util.map(dataList, function (data, index) {
        return {
            type: 'bar',
            animation: false,
            name: legendData[index + 1],
            itemStyle: {
                opacity: 0.5
            },
            data: data
        };
    }))
};