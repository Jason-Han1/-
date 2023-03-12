var count = 70;
var intervalCount = 67;
var baseTop = 70;
var gridHeight = 60;

var data = {
    cpu: [],
    memory: [],
    frame: [],
    main: [],
    fake: [],
    xMin: 0,
    xMax: count * 1000
};

for (var i = 0; i < count; i++) {
    var now = i * 1000;
    data.cpu.push([now, Math.floor(Math.random() * 1000)]);
    data.memory.push([now, Math.floor(Math.random() * 1000)]);
    data.frame.push([now, Math.floor(Math.random() * 1000)]);
    data.fake.push([now, 1]);
}

var ends = [];
for (var i = 0; i < intervalCount; i++) {
    ends.push(Math.floor(Math.random() * count * 1000));
}
ends.sort(function (a, b) { 
    return a - b;
});

for (var i = 1; i < ends.length; i++) {
    !(i % 2) && data.main.push([{
        xAxis: ends[i - 1]
    }, {
        xAxis: ends[i]
    }]);
}



function makeXAxis(gridIndex, opt) {
    return echarts.util.merge({
        type: 'time',
        gridIndex: gridIndex,
        axisLine: {onZero: false, lineStyle: {color: '#ddd'}},
        axisTick: {show: false},
        axisLabel: {show: false},
        splitLine: {show: false, lineStyle: {color: '#ddd'}},
        min: data.xMin,
        max: data.xMax,
        axisPointer: {
            lineStyle: {color: 'transparent'}
        }
    }, opt || {}, true);
}

function makeYAxis(gridIndex, opt) {
    return echarts.util.merge({
        type: 'value',
        gridIndex: gridIndex,
        nameLocation: 'middle',
        nameTextStyle: {
            color: '#333'
        },
        boundaryGap: ['30%', '30%'],
        axisTick: {show: false},
        axisLine: {lineStyle: {color: '#ccc'}},
        axisLabel: {show: false},
        splitLine: {show: false}
    }, opt || {}, true);
}

function makeGrid(top, opt) {
    return echarts.util.merge({
        top: top,
        height: gridHeight
    }, opt || {}, true);
}

option = {
    tooltip: {
        trigger: 'axis',
        backgroundColor: '#fff',
        borderColor: 'rgba(0, 0, 200, 0.2)',
        borderWidth: 1,
        borderRadius: 0,
        padding: 10,
        formatter: function (params) {
            if (params.length) {
                params.unshift({seriesName: 'time', value: [null, Math.floor(params[0].value[0]) + ' ms'], color: '#5193f2'})
                return echarts.util.map(['time', 'cpu', 'memory', 'frame'], function (seriesName) {
                    for (var i = 0; i < params.length; i++) {
                        var param = params[i];
                        var style = 'color: ' + param.color;
                        if (param.seriesName === seriesName) {
                            return '<span style="' + style + '">' 
                                + param.seriesName 
                                + '：</span><span style="' 
                                + style + '">' + param.value[1] + '</span>';
                        }
                    }
                }).join('<br>');
            }
        }
    },
    title: {
        text: 'Profile',
        left: 'center'
    },
    axisPointer: {
        link: [{xAxisIndex: 'all'}],
        snap: true
    },
    grid: [
        makeGrid(baseTop),
        makeGrid(baseTop + gridHeight),
        makeGrid(baseTop + gridHeight * 2),
        makeGrid(baseTop + gridHeight * 3 + 5, {
            height: gridHeight - 10
        }),
        makeGrid(baseTop, {
            show: true,
            height: gridHeight * 4,
            borderColor: '#ccc',
            borderWidth: 1,
            z: 10
        })
    ],
    xAxis: [
        makeXAxis(0),
        makeXAxis(1),
        makeXAxis(2),
        makeXAxis(3, {
            axisLine: {show: false}
        }),
        makeXAxis(4, {
            position: 'top',
            axisLine: {show: false, onZero: false},
            splitLine: {show: true},
            axisLabel: {show: true, textStyle: {color: '#555'}},
            axisPointer: {
                show: true, 
                lineStyle: {
                    color: '#478cf1',
                    width: 1.5
                }
            }
        })
    ],
    yAxis: [
        makeYAxis(0, {
            name: 'cpu'
        }),
        makeYAxis(1, {
            name: 'memory'
        }),
        makeYAxis(2, {
            name: 'frame'
        }),
        makeYAxis(3, {
            name: 'cpu'
        }),
        makeYAxis(4)
    ],
    dataZoom: [{
        type: 'slider',
        top: baseTop + gridHeight * 4 + 20,
        xAxisIndex: [0, 1, 2, 3, 4]
    }, {
        type: 'inside',
        xAxisIndex: [0, 1, 2, 3, 4]
    }],
    series: [{
        name: 'cpu',
        type: 'line',
        symbol: 'circle',
        symbolSize: 2,
        itemStyle: {
            normal: {
                color: '#5193f2'
            }
        },
        data: data.cpu
    }, {
        name: 'memory',
        type: 'line',
        symbol: 'circle',
        symbolSize: 2,
        xAxisIndex: 1,
        yAxisIndex: 1,
        itemStyle: {
            normal: {
                color: '#75b228'
            }
        },
        data: data.memory
    }, {
        name: 'frame',
        type: 'line',
        symbol: 'circle',
        symbolSize: 2,
        xAxisIndex: 2,
        yAxisIndex: 2,
        itemStyle: {
            normal: {
                color: '#e29304'
            }
        },
        data: data.frame
    }, {
        name: 'main',
        type: 'line',
        symbol: 'circle',
        symbolSize: 2,
        xAxisIndex: 3,
        yAxisIndex: 3,
        markArea: {
            itemStyle: {
                normal: {
                    color: '#529bff'
                }  
            },
            data: data.main
        }
    }, {
        name: 'main',
        type: 'line',
        symbol: 'none',
        symbolSize: 2,
        itemStyle: {
            normal: {color: 'transparent'}
        },
        xAxisIndex: 4,
        yAxisIndex: 4,
        data: data.fake
    }]
};
