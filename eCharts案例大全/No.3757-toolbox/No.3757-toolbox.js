option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    toolbox: {
        show: true,
        showTitle: false, // 隐藏默认文字，否则两者位置会重叠
        feature: {
           saveAsImage: {
                show: true,
                title: 'Save As Image'
            },
            dataView: {
                show: true,
                title: 'Data View'
            },
        }
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
    }]
};