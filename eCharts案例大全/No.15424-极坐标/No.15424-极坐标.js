var data = [];

for (var i = 0; i <= 360; i++) {
    var t = i / 180 * Math.PI;
    var r = Math.sin(2 * t) * Math.cos(2 * t);
    data.push([r, i]);
}

option = {
      backgroundColor: '#2f3d56',
 
    polar: {
        center: ['42%', '50%']
    },
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
        min: 0
    },
    series: [{
        coordinateSystem: 'polar',
        name: 'line',
        type: 'line',
        showSymbol: false,
             data: data,
        lineStyle: {
            normal: {
                color: '#15f0ff',
                 shadowBlur: 12,
                 shadowColor: '#15f0ff'
            }
        }
    }],
    animationDuration: 2000
};