function randomData() {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
        name: now.toString(),
        value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
            Math.round(value)
        ]
    };
}

var data = [];
var now = +new Date(1997, 9, 3);
var oneDay = 24 * 3600 * 1000;
var value = Math.random() * 1000;
for (var i = 0; i < 1000; i++) {
    data.push(randomData());
}

option = {
    title: {
        text: '动态数据 + 时间坐标轴'
    },
    tooltip: {
        trigger: 'axis',
        formatter: function(params) {
            params = params[0];
            var date = new Date(params.name);
            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
        },
        axisPointer: {
            animation: false
        }
    },
    xAxis: {
        type: 'time',
        splitLine: {
            show: false
        },
        triggerEvent: true
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
            show: false
        }
    },
    series: [{
        name: '模拟数据',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        markPoint: {
            data: [
                [{
                    symbol: 'none',
                    x: '95%',
                    yAxis: data[999].value[1]
                }, {
                    symbol: 'circle',
                    label: {
                        normal: {
                            position: 'start',
                            formatter: '实时数据\n{c}'
                        }
                    },
                    name: '实时数据',
                    value: data[999].value[1],
                    xAxis: data[999].value[0],
                    yAxis: data[999].value[1]
                }]
            ]
        },
        data: data
    }]
};

setInterval(function() {

    for (var i = 0; i < 5; i++) {
        data.shift();
        data.push(randomData());
    }
    //alert(data[999].name)
    myChart.setOption({
        series: [{
            data: data,
            markLine: {
                data: [
                    [{
                        symbol: 'none',
                        x: '95%',
                        yAxis: data[999].value[1]
                    }, {
                        symbol: 'circle',
                        label: {
                            normal: {
                                position: 'start',
                                formatter: '实时数据\n{c}'
                            }
                        },
                        name: '实时数据',
                        value: data[999].value[1],
                        xAxis: data[999].value[0],
                        yAxis: data[999].value[1]
                    }]
                ]
            }
        }]
    });
}, 1000);