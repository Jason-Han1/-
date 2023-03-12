option = {
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value',
        name: '血压',
        nameLocation: 'middle',
        nameRotate: 0,
        nameGap: 40,
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        splitArea: {
            show: true
        }
    },
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        itemStyle: {
            barBorderRadius: [10, 10, 0, 0]
        }
    }]
};