option = {
    title: {
        text: '渐变 markArea'
    },
    xAxis: {
        type: 'value',
        min: 0,
        max: 1,
        data: ['']
    },
    yAxis: {
        type: 'value',
        min: 0,
        max: 1
    },
    series: [{
        type: 'line',
        data: [],
        markArea: {
            data: [[{
                coord: [0, 0]
            }, {
                coord: [1, 0.8]
            }]],
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0, color: 'rgba(255, 0, 0, 0.5)' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'rgba(255, 255, 0, 0)' // 100% 处的颜色
                    }], false)
                }
            }
        }
    }]
};
