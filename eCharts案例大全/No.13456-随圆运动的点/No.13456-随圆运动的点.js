var _x = $('#chart-panel')[0].offsetWidth;
var _y = $('#chart-panel')[0].offsetHeight;
var angle = 0;
var r = _y / 2 - 105;

option = {
    series: [{
        radius: ['79%', '80%'],
        hoverAnimation: false,
        center: [_x / 2, _y / 2],
        type: 'pie',
        label: {
            normal: {
                show: true
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [220, 182, 191]
    }],
    graphic: [{
        type: 'circle',
        shape: {
            r: 10,
            cx: _x / 2 + r * Math.cos(angle * Math.PI / 180),
            cy: _y / 2 + r * Math.sin(angle * Math.PI / 180)
        },
        style: {
            fill: 'red',
            stroke: 'red',
            lineWidth: 3
        },
        z: 13
    }]
};