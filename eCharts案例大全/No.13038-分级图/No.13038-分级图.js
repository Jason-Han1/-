var option = {
    xAxis: [{
        type: 'value',
        show: false,
        inverse: true,
        min: 0,
        max: 600
    }, {
        type: 'value',
        show: false,
        inverse: true,
        min: 10,
        max: 1000,
        scale: true
    }],
    yAxis: [{
        show: false
    }, {
        type: 'value',
        scale: true,
        offset: 30,
        inverse: true,
        splitLine: {
            show: false
        }
    }],
    series: [...getLevels(5), {
        type: 'scatter',
        xAxisIndex: 0,
        yAxisIndex: 1,
        symbol: 'triangle',
        symbolSize: 20,
        symbolRotate: 270,
        itemStyle: {},
        data: [
            [-20, 300]
        ]
    }]
};

function getLevels(count) {
    var arr = [];
    for (var i = 0; i < count; i++) {
        arr.push({
            type: 'line',
            xAxisIndex: 0,
            yAxisIndex: 1,
            barWidth: 60,
            symbol: 'none',
            areaStyle: {
                origin: 'start'
            },
            lineStyle: {
                color: 'transparent'
            },
            itemStyle: {
                // color: 'rgba(128, 128, 128, 1)'
            },
            data: [
                [600, i * 100 + 10],
                [500 - i * 100, i * 100 + 10],
                [500 - i * 100 - 70, i * 100 + 50],
                [500 - i * 100, i * 100 + 100 - 10],
                [600, i * 100 + 100 - 10],
                [600, i * 100 + 10],
            ]
        })
    }
    return arr;
}