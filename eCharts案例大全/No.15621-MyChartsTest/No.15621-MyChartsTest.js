function getDataY() {
    var dataY = [80, 78, 96, 88, 56, 30, 130, 78, 66, 89];
    return dataY;
}

function getDataX() {
    var dataX = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
    return dataX;
}

// 指定图表的配置项和数据
var option;
option = {
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: getDataX()
    }],
    yAxis: [{
        type: 'value'
    }],
    series: [{
        name: '成交',
        type: 'line',
        smooth: true,
        itemStyle: {
            normal: {
                areaStyle: {
                    type: 'default'
                }
            }
        },
        data: getDataY()
    }]
}