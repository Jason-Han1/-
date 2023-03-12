var x = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];

var option = {
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: x
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
    name: '总量',
    type: 'line',
    label: {
        normal: {
            show: true,
            position: 'top'
        }
    },
    data: [0, 50, 100, 150, 200, 150, 100]
}, {
    type: 'effectScatter',
    coordinateSystem: 'cartesian2d',
    data: [0, 50, 100, 150, 200, {
        value: 150,
        symbolSize: 20
    }, 100], //2d坐标系
    symbolSize: 0,
    showEffectOn: 'render',
    rippleEffect: {
        brushType: 'stroke'
    },
    hoverAnimation: true,
    itemStyle: {
        normal: {
            color: 'red',
            shadowBlur: 10,
            shadowColor: '#333'
        }
    },
    zlevel: 1
}]
};
