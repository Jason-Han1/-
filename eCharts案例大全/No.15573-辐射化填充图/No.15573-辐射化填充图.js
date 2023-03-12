var data = [];

for (var i = 0; i <= 10; i++) {
    var theta = i / 100 * 360;
    var r = 5 * (1 + Math.sin(theta / 180 * Math.PI));
    data.push([r, theta]);
}

option = {
    title: {
        text: '极坐标双数值轴'
    },
    legend: {
        data: ['line']
    },
    polar: {},
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    angleAxis: {
        type: 'value',
        startAngle: 0
    },
    radiusAxis: {
    },
    series: [{
        coordinateSystem: 'polar',
        name: 'line',
        type: 'line',
                                     areaStyle: {
                                        normal: {
                                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                                                                               offset: 0,
                                                                                               color: 'rgb(255, 15, 8)'
                                                                                               }, {
                                                                                               offset: 1,
                                                                                               color: 'rgb(255, 70, 131)'
                                                                                               }])
                                        }
                                        },
        
        data: data
    }]
};