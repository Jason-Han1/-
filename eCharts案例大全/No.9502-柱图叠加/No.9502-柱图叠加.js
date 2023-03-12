option = {
    tooltip: {
        show: false
    },
    xAxis: [{
        axisLabel: {
            interval: 0
        },
        type: 'category',
        data: []
    }],
    yAxis: [{
        type: 'value',
        name: '(架次)',
        splitNumber: 3,
    }],
    series: [{
        name: "计划",
        type: "bar",
        barWidth: '40%',
        barGap: '0',
        itemStyle: {
            normal: {
                color: '#DBDBDB',
                label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#000000',
                        fontSize: 10
                    }
                }
            }
        },
        "data": [6, 6, 8, 8, 9, 9]
    }, {
        "name": "实际",
        "type": "bar",
        "stack": "实际预测",
        barWidth: '40%',
        "silent": false,
        "animation": false,
        zlevel: 10,
        itemStyle: {
            normal: {
                color: '#565bc4',
                label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#000000',
                        fontSize: 10
                    }
                }
            }
        },
        "data": [5, 8, 4, 10, 4, 8]
    }, {
        "name": "预测",
        "type": "bar",
        "stack": "实际预测",
        barWidth: '40%',
        barMinHeight: 5,
        itemStyle: {
            normal: {
                color: '#c2c5fb',
                label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: '#000000',
                        fontSize: 10
                    }
                }
            }
        },
        "data": [2, '', 3, 12, 4, 9]
    }],
};