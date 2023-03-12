option = {
    grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        top: '8%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['肥东县', '肥西县', '长丰县', '庐江县', '巢湖市', '瑶海区', '蜀山区', '庐阳区']
    }],
    yAxis: [{
        type: 'value',
        name: '单位：万元'
    }],
    series: [{
        type: 'bar',
        barWidth: 20,
        data: [-158, -132, -105, -80, 32, 64, 108, 146],
        itemStyle: {
            normal: {
                color: function(params) {
                    var colorList;
                    if (params.data >= 0) {
                        colorList = '#FF8080';
                    } else {
                        colorList = '#80E6CC';
                    }
                    return colorList;
                },
            }
        }
    }]
};