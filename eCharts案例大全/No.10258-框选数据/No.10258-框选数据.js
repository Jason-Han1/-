option = {
    tooltip: {
        trigger: 'axis'
    },
    title: {
        text: '框选、滚动'
    },
    dataZoom: {
        type: 'inside',
        realtime: true
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: "none"
            },
        }
    },
    xAxis: {
        data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [{
        type: 'line',
        data: [220, 1182, 191, 234, 290, 330, 310]
    }]
};
