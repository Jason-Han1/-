var seriesdata = [];
var now = +new Date(2019, 1, 1);
var oneDay = 24 * 3600 * 1000;
var value = Math.random() * 500;

function randomData() {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
        name: now.toString(),
        value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
            Math.round(value)
        ]
    }
}

for (var i = 0; i < 200; i++) {
    seriesdata.push(randomData())
}
option = {
    grid: {
        left: 0,
        top: 0,
        bottom: 0,
        right: 0
    },
    xAxis: {
        show: false,
        type: 'time',
        boundaryGap: false
    },
    yAxis: {
        show: false,
        type: 'value',
        boundaryGap: false
    },
    series: [{
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: seriesdata
    }]
};
setInterval(function() {
    for (var i = 0; i < 5; i++) {
        seriesdata.shift();
        seriesdata.push(randomData())
    }
    myChart.setOption(option)
}, 500)