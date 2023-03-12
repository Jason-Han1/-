option = {
    title: {
        text: '长沙市新型冠状病毒肺炎疫情信统计 COVID-19',
        subtext: '湖南省卫生健康委员会'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['长沙市合计', '开福区', '天心区']
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {},
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
        data: ['02-01', '02-02', '02-03', '02-04', '02-05', '02-06', '02-07', '02-08', '02-09', '02-10',
            '02-11', '02-12'
        ]
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value}例'
        }
    },
    series: [{
        name: '长沙市合计',
        type: 'line',
        data: [26, 13, 23, 16, 15, 11, 6, 9, 8, 6, 4, 5],
        markPoint: {
            data: [{
                    type: 'max',
                    name: '最大值'
                },
                {
                    type: 'min',
                    name: '最小值'
                }
            ]
        },
        markLine: {
            data: [{
                type: 'average',
                name: '平均值'
            }]
        }
    }, {
        name: '开福区',
        type: 'line',
        data: [3, 6, 4, 4, 2, 1, 2, 1, 3, 1, 0, 0],
        markPoint: {
            data: [{
                    type: 'max',
                    name: '最大值'
                },
                {
                    type: 'min',
                    name: '最小值'
                }
            ]
        },
        markLine: {
            data: [{
                type: 'average',
                name: '平均值'
            }]
        }
    }, {
        name: '天心区',
        type: 'line',
        data: [2, 2, 1, 1, 3, 2, 0, 3, 3, 1, 4, 0],
        markPoint: {
            data: [{
                    type: 'max',
                    name: '最大值'
                },
                {
                    type: 'min',
                    name: '最小值'
                }
            ]
        },
        markLine: {
            data: [{
                type: 'average',
                name: '平均值'
            }]
        }
    }]
};