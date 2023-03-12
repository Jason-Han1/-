var data = [];
for (var circle = 0; circle < 5; ++circle) {
    for (var i = 0; i <= 100; i++) {
        var theta = i / 100 * 360;
        var alpha = circle * 360 + theta;
        var r = Math.pow(Math.E, 0.003 * alpha);
        data.push([r, theta]);
    }
}

option = {
    title: {
        text: '双曲螺线'
    },
    polar: {},
    tooltip: {
        trigger: 'item'
    },
    angleAxis: {
        type: 'value',
        startAngle: 135,
        show: false
    },
    radiusAxis: {
        show: false,
        max: 225
    },
    series: [{
        coordinateSystem: 'polar',
        name: 'line',
        type: 'line',
        data: data,
        symbolSize: 0,
        symbol: 'circle',
        areaStyle: {
            normal: {
                color: new echarts.graphic.RadialGradient(0.64, 0.5, 1, [{
                    offset: 0.1,
                    color: 'rgba(255, 0, 0, 0.5)'
                }, {
                    offset: 1,
                    color: 'rgba(255, 255, 0, 0)'
                }], false)
            }
        },
        lineStyle: {
            normal: {
                color: '#C25353',
                width: 3
            }
        }
    }]
};