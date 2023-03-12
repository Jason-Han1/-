/**
 * 
 * 测试自动遍历源数据以整合成可以
 * 自动渲染的polyline的数据数组
 * 
 */
var coors1 = [
    [100, 220],
    [200, 182],
    [300, 191],
    [400, 234],
    [500, 290],
    [600, 330],
    [700, 310]
];
var coors2 = [
    [100, 420],
    [200, 382],
    [300, 391],
    [400, 434],
    [500, 490],
    [600, 530],
    [700, 510]
];

var coors3 = [
    [100, 620],
    [200, 582],
    [300, 591],
    [400, 634],
    [500, 690],
    [600, 730],
    [700, 710]
];
var coors = [coors1, coors2, coors3];
var optionSeries = [];
var legendData = [];
var renderLoop = function(sourceData, i) {

    var renderLineItem = function(params, api) {

        var points = echarts.util.map(sourceData[i], function(entry, index) {

            var point = api.coord([entry[0], entry[1]]);
            return point;
        });

        return {
            type: 'polyline',
            shape: {
                points: points,
            },
            style: {
                fill: null,
                stroke: api.visual('color'),
                lineWidth: 2
            }
        };
    }
    var num = i + 1;
    legendData.push({
        name: 'Polyline' + num
    }, {
        name: 'EffectScatter' + num
    });
    optionSeries.push({
        type: 'custom',
        name: 'Polyline' + num,
        renderItem: renderLineItem,
        encode: {
            x: 0,
            y: 1
        },
        data: [
            [1, 0]
        ]
    }, {
        type: 'effectScatter',
        name: 'EffectScatter' + num,
        symbol: 'circle',
        symbolSize: 10,
        data: sourceData[i]
    });
}
//遍历元数据，自动生成polyline
for (var i = 0; i < coors.length; i++) {
    renderLoop(coors, i);
}

option = {
    title: {
        text: 'Polyline Chart with scatters'
    },
    legend: {
        data: legendData,
        left: 0,
        top: 50
    },
    grid: {
        top: 100
    },
    xAxis: {
        min: 0,
        max: 1000
    },
    yAxis: {
        min: 0,
        max: 1000
    },
    tooltip: {

    },
    series: optionSeries
};
console.log(optionSeries);