var data = [];
var n = 8;
var r = 150;
var rAmplitude = 20;
var cnt = 160;
for (var i = 0; i <= cnt; ++i) {
    var r2 = r + rAmplitude * Math.sin(Math.PI / cnt * n * i * 2);
    data.push([r2, 360 / cnt * i]);
}

option = {
    title: {
        text: 'Star'
    },
    polar: {},
    tooltip: {
        trigger: 'item'
    },
    angleAxis: {
        type: 'value',
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
                color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [{
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
                width: 1
            }
        }
    }],
    animation: false
};