var symbolSize = 20;

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
    [700, 510],


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

var data = [coors1, coors2, coors3];
var optionSeries = [];
var graphic = [];

for (var i = 0; i < data.length; i++) {
    optionSeries.push({
        id: 'a' + i,
        name: 'line ' + i,
        type: 'line',
        smooth: true,
        symbolSize: symbolSize,
        lineStyle: {
            normal: {
                type: 'dashed'
            }
        },

        data: data[i]
    });
}

if (!app.inNode) {
    setTimeout(function() {
        // Add shadow circles (which is not visible) to enable drag.
        myChart.setOption({
            graphic: echarts.util.map(data, function(element, index) {
                //console.log('1st layer!');
                return {
                    type: 'group',
                    id: 'group' + (index + 1),
                    children: echarts.util.map(element, function(item, dataIndex) {

                        var i = index;
                        return {
                            type: 'circle',
                            position: myChart.convertToPixel('grid', item),
                            shape: {
                                cx: 0,
                                cy: 0,
                                r: symbolSize / 2
                            },
                            invisible: true,
                            draggable: true,
                            ondrag: echarts.util.curry(onPointDragging, dataIndex, index),
                            onmousemove: echarts.util.curry(showTooltip, dataIndex),
                            onmouseout: echarts.util.curry(hideTooltip, dataIndex),
                            z: 100
                        };
                    })
                };
            })

        });
    }, 0);

    window.addEventListener('resize', function() {
        myChart.resize();

        myChart.setOption({
            graphic: echarts.util.map(data, function(element, index) {
                //console.log('1st layer!');
                return {
                    type: 'group',
                    id: 'group' + (index + 1),
                    children: echarts.util.map(element, function(item, dataIndex) {

                        var i = index;
                        return {
                            type: 'circle',
                            position: myChart.convertToPixel('grid', item),
                            shape: {
                                cx: 0,
                                cy: 0,
                                r: symbolSize / 2
                            },
                            invisible: true,
                            draggable: true,
                            ondrag: echarts.util.curry(onPointDragging, dataIndex, index),
                            onmousemove: echarts.util.curry(showTooltip, dataIndex),
                            onmouseout: echarts.util.curry(hideTooltip, dataIndex),
                            z: 100
                        };
                    })
                };
            })

        });

    });
}




function showTooltip(dataIndex) {
    myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: dataIndex
    });
}

function hideTooltip(dataIndex) {
    myChart.dispatchAction({
        type: 'hideTip'
    });
}

function onPointDragging(dataIndex, i) {
    console.log('Drag !' + i);
    data[i][dataIndex] = myChart.convertFromPixel('grid', this.position);

    // Update data
    myChart.setOption({
        series: optionSeries
    });
}


option = {
    title: {
        text: 'Draggable Points with graph chart'
    },

    grid: {},
    xAxis: {
        min: 0,
        max: 1000,
        type: 'value',
        axisLine: {
            onZero: false
        }
    },
    yAxis: {
        min: 0,
        max: 1000,
        type: 'value',
        axisLine: {
            onZero: false
        }
    },
    tooltip: {
        triggerOn: 'none',
        formatter: function(params) {
            return params.seriesName + '<br> X: ' + params.data[0].toFixed(2) + '<br>Y: ' + params.data[1].toFixed(2);
        }

    },
    series: optionSeries
};