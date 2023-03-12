var dimensions = [];
var dataval = [];
for (var i = 0; i < 168; i++) {
    dataval.push((Math.sin(i / 5) * (i / 1 - 5) + i + 95) + 95);
}

var option = {
    backgroundColor: '#000',
    grid: {
        left: 0,
        right: 30,
        top: 50,
        bottom: 30,
        containLabel: true
    },
    xAxis: {
        show: false,
        boundaryGap: false,
        data: dimensions,
    },
    yAxis: {
        show: false,
    },
    series: [{
        data: dataval,
        type: 'line',
        symbol: 'circle',
        symbolSize: 0,
        color: '#FEC201',
        lineStyle: {
            normal: {
                width: 4,
                shadowColor: 'rgba(155, 18, 184, .3)',
                shadowBlur: 10,
                shadowOffsetY: 20,
                shadowOffsetX: 20,
                color: '#329dd3',
            }
        },
        label: {
            show: false,

        },
    }, {
        type: 'bar',
        animation: false,
        barWidth: 3,
        hoverAnimation: false,
        data: dataval,
        tooltip: {
            show: false
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
                        color: '#329dd3'
                    }, {
                        offset: 0.5,
                        color: '#000'
                    }],
                    globalCoord: false
                },
                label: {
                    show: false
                }
            }
        }
    }]
}