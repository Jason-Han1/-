option = {
    backgroundColor: '#2eadd3', //背景色
    tooltip: {

    },
    grid: {
        left: 'left',
        right: '0',
        bottom: '0',
        top: '0'
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        show: false
    },
    yAxis: {
        type: 'value',
        show: false
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        symbol: 'circle', //设定为实心点
        symbolSize: 10, //设定实心点的大小
        itemStyle: {
            normal: {
                color: '#fff',
                lineStyle: {
                    color: '#fff',
                    opacity: 0.4
                },
                opacity: 0.4
            },

        },
    }]
};