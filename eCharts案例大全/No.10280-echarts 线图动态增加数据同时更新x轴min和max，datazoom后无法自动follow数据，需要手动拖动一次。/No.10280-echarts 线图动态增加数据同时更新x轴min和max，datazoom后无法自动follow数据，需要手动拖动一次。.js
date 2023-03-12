function randomData() {
    now = new Date(+now + one);
    value = value + Math.random() * 21 - 10;
    min = min + one;
    max = max + one;
    if (value > 1000) {
        value = 1000;
    }
    if (value < 1) {
        value = 1;
    }
    return {
        name: now.toString(),
        value: [
            now,
            Math.round(value)
        ]
    }
}

var data = [];
var min = 0;
var max = 0;
var now = new Date();
var one = 1000;
var value = Math.random() * 1000;
for (var i = 0; i < 60; i++) {
    data.push(randomData());
}
var first = new Date(data[0].value[0]).getTime()
var last = new Date(data[data.length - 1].value[0]).getTime()
min = first - 30 * 1000;
max = last + 30 * 1000;



option = {
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return params.name;
        },
        axisPointer: {
            animation: false
        }
    },
    dataZoom: {
        type: 'inside',
        filterMode: 'filter',
        orient: 'horizontal',
        xAxisIndex: [0],
    },
    xAxis: {
        type: 'time',
        min: new Date(min),
        max: new Date(max),
    },
    yAxis: {
        type: 'value',
        min: function(value) {
            return value.min - 5;
        },
        max: function(value) {
            return value.max + 5;
        },
    },
    series: [{
        name: '模拟数据',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: data
    }]
};
option.dataZoom.startValue = first - 15 *1000;
option.dataZoom.endValue = last + 15 *1000;
setInterval(function () {

    for (var i = 0; i < 1; i++) {
        //data.shift();
        data.push(randomData());
    }

    myChart.setOption({
        xAxis: {
       
            min: new Date(min),
            max: new Date(max),
        },
        series: [{
            data: data
        }]
    });
}, 1000);
