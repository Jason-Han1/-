var pathSymbols = {
    reindeer: 'path://M17 374 c-18 -19 0 -24 83 -24 l90 0 0 -109 c0 -108 0 -110 -24 -113 l-24 -3 28 -55 28 -54 26 52 c31 62 31 62 6 62 -19 0 -20 7 -20 110 l0 109 85 3 c47 2 86 8 88 13 2 11 -355 20 -366 9z'
};

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'none'
        },
        formatter: function (params) {
            return params[0].name + ': ' + params[0].value;
        }
    },
    xAxis: {
        data: ['柱状图' ],
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {
            textStyle: {
                color: '#e54035'
            }
        }
    },
    yAxis: {
        /*splitLine: {show: false},
        axisTick: {show: false},
        axisLine: {show: false},
        axisLabel: {show: false}*/
    },
    color: ['#e54035'],
    series: [{
        name: 'hill',
        type: 'bar',
        barWidth:'60',
        stack: 'A',
        itemStyle: {
            normal: {
                opacity: 0.5
            },
            emphasis: {
                opacity: 1
            }
        },
        data: [123],
        z:10
    },{
        name: '11',
        type: 'bar',
        barWidth:'60',
        stack: 'A',
        itemStyle: {
            color: 'transparent'
        },
        data: [60],
        z:10
    }, {
        name: 'glyph',
        type: 'pictorialBar',
        barGap: '-100%',
        symbolPosition: 'end',
        z:11,
        data: [{
            value: 123,
            symbolRotate: -180,
            symbol: pathSymbols.reindeer,
            symbolSize: [80,Math.round(60/123*100).toFixed(2)+'%'],
            symbolPosition: 'end',
            symbolOffset: [0, '-100%']
        }]
    }]
};