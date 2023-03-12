option = {
    title: {
        text: '路径损耗与传播距离的关系图'
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: {
        name: '直线距离/km',
        data: [0.2, 0.4, 0.6, 0.8, 1.0, 1.2, 1.4]
    },
    yAxis: {
        name: '路径损耗/dB',
        type: 'value',
    },
    series: [{
        type: 'line',
        data: [83, 98, 108, 115, 117, 123, 125]
    }]
};