var data_sin = [];
var cos = [];
var tan = [];

for (var i = 0; i < 100; i++) {
    y_sin = Math.sin(i / 5);
    y_cos = Math.cos(i / 5);
    y_tan = Math.tan(i / 5);
    data_sin.push([i, y_sin]);
    cos.push([i, y_cos]);
    tan.push([i, y_tan]);
}

option = {
    title: {
        text: '散点图(三角函数)',
        subtext: '仅供参考',
        x: 'center'
    },
    xAxis: {
        type: 'value',
    },
    yAxis: {
        min: -1,
        max: 1
    },
    legend: {
        left: 'left',
        selected: {
            'Tan': false
        }
    },
    tooltip: {
        formatter: '{c}'
    },
    series: [{
            type: 'scatter',
            name: 'Sin',
            data: data_sin,
        },
        {
            type: 'scatter',
            name: 'Cos',
            data: cos,
        },
        {
            type: 'scatter',
            name: 'Tan',
            data: tan,
        },
    ]
};