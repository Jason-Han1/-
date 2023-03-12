// 颜色
var lightBlue = {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: 'rgba(0, 192, 255, 1)' // 0% 处的颜色
    }, {
        offset: 1,
        color: 'rgba(0, 192, 255, 0.1)' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
}
var darkBlue = {
    type: 'linear',
    x: 0,
    y: 0,
    x2: 0,
    y2: 1,
    colorStops: [{
        offset: 0,
        color: 'rgba(41, 121, 255, 1)' // 0% 处的颜色
    }, {
        offset: 1,
        color: 'rgba(41, 121, 255, 0.1)' // 100% 处的颜色
    }],
    globalCoord: false // 缺省为 false
}

function randomData() {
    value = Math.random() * 50;
    return {
        value: Math.round(value)
    }
}
// 时间设置
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function timeSet() {
    var newTime = new Date();
    var m = newTime.getMinutes();
    var s = newTime.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    return [m, s].join(':');
}

var data = [];
var timeData = [];

for (var i = 0; i < 9; i++) {
    timeData.unshift(timeSet());
    data.unshift(randomData());
}
// 指定图表的配置项和数据
var option = {
    tooltip: {
        axisPointer: {
            type: 'none'
        },
        
        trigger: 'item',
        position: 'top',
        backgroundColor: '#9DCEFF',
        formatter: '{c0}',
        textStyle: {
            color: '#000C1D'
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        // boundaryGap: 100,
        min: -1,
        max: 9,
        axisLine: {
            show: false
        },
        axisLabel: {
            color: '#8F95A7'
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'solid',
                color: '#707070',
                opacity: 0.2
            }
        },
        axisTick: {
            show: false
        },
        data: timeData,

    },
    yAxis: [{
        max: 50,
        min: 0,
        axisLine: {
            show: false,
        },
        axisLabel: {
            color: '#8F95A7'
        },
        splitLine: {
            lineStyle: {
                type: 'solid',
                color: '#707070',
                opacity: 0.1
            }
        },
        axisTick: {
            show: false
        }
    }],
    series: [{
        name: '数量',
        type: 'pictorialBar',
        barCategoryGap: '-80%',
        symbol: 'path://d="M150 0 L75 200 L225 200 Z"',
        label: {
            normal: {
                show: true,
                position: 'top',
                color: '#888'
            },
            emphasis: {
                color: 'red'
            }
        },
        itemStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(28, 112, 227, 1)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(28, 112, 227, 0.1)' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                }
            },
            emphasis: {
                color: '#9DCEFF'
            }
        },
        data: data
    }],
    backgroundColor: "#000C1D",
};

myChart.setOption(option);