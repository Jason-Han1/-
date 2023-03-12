option = {
    title: {
        text: '折线图数据颜色分段，markline辅助标识',
        subtext: '纯属虚构'
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} °C'
        },
        max: 15
    },

    series: [{
        name: '最高气温',
        type: 'line',
        data: [6, 8, 11]
    }, {
        name: '最高气温1',
        type: 'line',
        data: ['-', '-', 11, 10, 12]
    }, {
        name: '最高气温2',
        type: 'line',
        data: ['-', '-', '-', '-', 12, 13, 10]
    }, {
        name: '平行于y轴的趋势线',
        type: 'line',
 
        markLine: {
            name: 'aa',
            data: [
                [{
                        coord: ['周三', 0]
                    }, {
                        coord: ['周三', 15]
                    } 
                ],
                [{
                        coord: ['周五', 0]
                    }, {
                        coord: ['周五', 15]
                    } 
                ]
            ]
        }
    }]

};