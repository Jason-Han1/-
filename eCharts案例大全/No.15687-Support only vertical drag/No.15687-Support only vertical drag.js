var symbolSize = 20;
var data = [
    ['一月', 5],
    ['二月', 10],
    ['三月', 15],
    ['一月', 7],
    ['二月', 12],
    ['三月', 2]
];
var data1;

option = {
    title: {
        text: 'Support only vertical drag'
    },
    tooltip: {
        triggerOn: 'none',
        formatter: function(params) {
            return 'X: ' + params.name + '<br>Y: ' + params.data.toFixed(2);
        }
    },
    grid: {},
    xAxis: {
        type: 'category',
        data: ['一月', '二月', '三月']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        id: 'a',
        type: 'line',
        smooth: true,
        symbolSize: symbolSize,
        data: [5, 10, 15],
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: function(params) {
                    return params.data.toFixed(2);
                }
            }
        }
    }, {
        id: 'b',
        type: 'line',
        smooth: true,
        symbolSize: symbolSize,
        data: [7, 12, 2],
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: function(params) {
                    return params.data.toFixed(2);
                }
            }
        }
    }]
};


if (!app.inNode) {
    setTimeout(function() {
        // Add shadow circles (which is not visible) to enable drag.
        myChart.setOption({
            graphic: echarts.util.map(data, function(item, dataIndex) {
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
                    ondrag: echarts.util.curry(onPointDragging, dataIndex),
                    onmousemove: echarts.util.curry(showTooltip, dataIndex),
                    onmouseout: echarts.util.curry(hideTooltip, dataIndex),
                    z: 100
                };
            })
        });
    }, 0);

    window.addEventListener('resize', updatePosition);
}


function updatePosition() {
    myChart.setOption({
        graphic: echarts.util.map(data, function(item, dataIndex) {
            return {
                position: myChart.convertToPixel('grid', item)
            };
        })
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

function onPointDragging(dataIndex, dx, dy) {
    data[dataIndex][1] = myChart.convertFromPixel('grid', this.position)[1];

    var temp = [
        [],
        []
    ];
    for (var i = 0; i < 3; i++) {
        temp[0].push(data[i][1]);
    }
    for (var i = 3; i < 6; i++) {
        temp[1].push(data[i][1]);
    }

    // Update data
    myChart.setOption({
        series: [{
            id: 'a',
            data: temp[0]
        }, {
            id: 'b',
            data: temp[1]
        }]
    });
    updatePosition();
}