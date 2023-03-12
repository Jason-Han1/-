option = {
    title: {
        text: '本年度绩效评分趋势'
    },

    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {
                readOnly: false
            },
            magicType: {
                type: ['line', 'bar']
            },
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['第一季度', '第二季度', '第三季度', '第四季度']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name: '得分',
        type: 'line',
        data: [120, 50, 70, 80],
        markPoint: {
            data: [{
                    name: '等级',
                    xAxis: 0,
                    yAxis: 120,
                    value: 'S'
                },
                {
                    name: '等级',
                    xAxis: 1,
                    yAxis: 50,
                    value: 'A'
                },
                {
                    name: '等级',
                    xAxis: 2,
                    yAxis: 70,
                    value: 'A'
                },
                {
                    name: '等级',
                    xAxis: 3,
                    yAxis: 80,
                    value: 'C'
                }
            ]
        },
        markLine: {
            data: [{
                    yAxis: 120
                },
                {
                    yAxis: 50
                },
                {
                    yAxis: 70
                },
                {
                    yAxis: 80
                }
            ]
        }
    }]
};