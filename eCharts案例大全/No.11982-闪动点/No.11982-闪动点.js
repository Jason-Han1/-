var option = {
    tooltip: {
        trigger: 'axis',
        formatter: '{a}: {b}:{c}:<br>{b1}',
      },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
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
        label: {
          show: false  
        },
        type: 'effectScatter',
        coordinateSystem: 'cartesian2d',
        data: [0, 50, 100, 150, 200,150, {
            value: 100,
            symbolSize: 10,
        }], //2d坐标系
        symbolSize: 0,
        showEffectOn: 'render',
        rippleEffect: {
            brushType: 'stroke'
        },
        hoverAnimation: true,
        itemStyle: {
            normal: {
                color: 'red',
                shadowBlur: 50,
                shadowColor: '#333'
            }
        },
        


    }]
}