function randomData() {
    // now = new Date(+now + oneDay);
    now = new Date(+now + OneSeconds);
    value = value + Math.random() * 21 - 10;
    return {
        name: now.toString(),
        value: [
            //[now.getFullYear(), now.getMonth() + 1, now.getDate(),].join('/'),
            //[now.getHours(), now.getMinutes(), now.getSeconds()].join('-'),
            now,
            Math.round(value)
        ]
    }
}

//  now.getHours(), now.getMinutes(), now.getSeconds()
var data = [];
var now = +new Date(1997, 1, 1);
var oneDay = 24 * 3600 * 1000;
var OneSeconds = 1000;
var value = Math.random() * 1000;
for (var i = 0; i < 60; i++) {
    data.push(randomData());
}

option = {
    title: {
        text: '动态数据 + 时间坐标轴'
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
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
        }
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
        data: data
    }]
};

setInterval(function () {

    for (var i = 0; i < 1; i++) {
        data.shift();
        data.push(randomData());
    }

    myChart.setOption({
        series: [{
            data: data
        }]
    });
}, 1000);