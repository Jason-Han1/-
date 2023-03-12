var realData = [150, 230, 224, 218, 135, 147, 260];
var max = realData.reduce(function (a, b) {
    return Math.max(a, b);
}, -1);
var min = realData.reduce(function (a, b) {
    return Math.min(a, b);
}, max);
var yAxisMax = 300;

var thretholdHigh = 190;
var rateHigh = 1 - thretholdHigh / max;
var thretholdLow = 170;
var rateLow = (yAxisMax - thretholdLow) / (yAxisMax - min);

option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value',
        max: yAxisMax
    },
    color: 'blue',
    series: [{
        data: realData,
        type: 'line',
        areaStyle: {
            // origin: 'start'
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: 'blue'
                }, {
                    offset: rateHigh, color: 'blue'
                }, {
                    offset: rateHigh + 0.001, color: 'transparent'
                }],
            }
        },
        markLine: {
            data: [{
                yAxis: thretholdHigh
            }, {
                yAxis: thretholdLow,
                lineStyle: {
                    color: 'red'
                }
            }]  
        },
        z: 10
    }, {
        data: realData,
        type: 'line',
        showSymbol: false, // hide data item circle
        lineStyle: {
            width: 0 // hide line  
        },
        areaStyle: {
            origin: 'end',
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0, color: 'transparent'
                }, {
                    offset: rateLow, color: 'transparent'
                }, {
                    offset: rateLow + 0.001, color: 'red'
                }],
            }
        }
    }]
};