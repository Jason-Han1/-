var defaultGlobalColor = ['#65F5F3', '#EAE643', '#F56565']

option = {
    backgroundColor: '#0E2A43',

    legend: {
        data: ['长沙', '平均值', '最大值'],
        top: "bottom",
        textStyle: {
            color: '#fff'
        },
    },
     color: defaultGlobalColor, // 调色盘颜色列表。
    radar: [{
        indicator: [{
                text: '参数一'
            }, {
                text: '参数二'
            }, {
                text: '参数三'
            },

        ],
        center: ['50%', '50%'],
        radius: 120,
        startAngle: 90,
        splitNumber: 4,
        shape: 'circle',
        name: {
            formatter: '{value}',
            textStyle: {
                color: '#fff'
            }
        },
        splitArea: {
            areaStyle: {
                color: ['#0E2A43',
                    '#0E2A43', '#0E2A43',
                    '#0E2A43', '#0E2A43'
                ],
                shadowColor: 'rgba(0, 0, 0, 0.3)',
                shadowBlur: 10
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.5)'
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.5)'
            }
        }
    }],
    series: [{
        name: '雷达图',
        type: 'radar',
        itemStyle: {
            emphasis: {
                lineStyle: {
                    width: 4
                }
            }
        },
        data: [{
            value:  [40, 2,0.6],
            name: '长沙',
            symbol: 'rect',
            symbolSize: 5,
              areaStyle: {
                normal: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            }, 
            lineStyle: {
                normal: {
                    type: 'solid',
                    width: 4
                }
            }
        }, {
            value: [60, 5, 0.30],
            name: '平均值',
           lineStyle: {
                normal: {
                    type: 'dashed',
                   
                }
            }

        }, {
            value:[100, 8, 0.40],
            name: '最大值',
           lineStyle: {
                normal: {
                    type: 'dashed',
                   
                }
            }

        }]
    }]
}