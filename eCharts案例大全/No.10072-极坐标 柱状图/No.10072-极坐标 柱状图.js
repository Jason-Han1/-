let xData = [
    '2017',
    '2018',
    '2019'
]

let yData = ['28', '35', '38']
let yData1 = ['30', '25', '28']
let yData2 = ['42', '40', '34']
option = {
    angleAxis: {
        axisLine: {
            show: true,
            lineStyle: {
                color: '#666'
            }
        },
        axisLabel: {
            color: '#666'
        },
        splitLine: {
            lineStyle: {
                color: '#666',
                opacity: 0.4
            }
        },
        min: 0,
        max: 100,
        interval: 12.5
    },
    radiusAxis: {
        type: 'category',
        data: xData,
        z: 100,
        axisTick: { //刻度
            show: false
        },
        axisLabel: { //刻度
            show: false
        },
        pointer: { //雷达图指针
            show: false
        },
        axisLabel: {
            color: '#fff'
        }
    },
    polar: {
        shape: 'circle',
        radius: 350
    },
    legend: {

        y: 'bottom',
    },

    tooltip: {
        trigger: 'item',
        formatter: function(params, ticket, callback) {
            return params.value + '%'
        }
    },
    series: [{
            type: 'bar',
            data: yData,
            coordinateSystem: 'polar',
            name: '增加5',
            stack: 'a',
            barWidth: 70,
            itemStyle: {
                normal: {
                    // 定制显示（按顺序）
                    color: new echarts.graphic.RadialGradient(0.3, 0.2, 1, [{
                            color: '#4E6692',
                            offset: 1
                        },
                        {
                            color: '#5F7EB4',
                            offset: .4
                        }
                    ])
                }
            }
        },
        {
            type: 'bar',
            data: yData1,
           barWidth: 70,
            coordinateSystem: 'polar',
            name: '基本',
            stack: 'a',
            itemStyle: {
                normal: {
                    // 定制显示（按顺序）
                    color: new echarts.graphic.RadialGradient(0.3, 0.2, 1, [{
                            color: '#F2AE41',
                            offset: 1
                        },
                        {
                            color: '#E59A18',
                            offset: .4
                        }
                    ])
                },
                emphasis: {
                    color: '#E59A18'
                }
            }
        },
        {
            type: 'bar',
            data: yData2,
            coordinateSystem: 'polar',
            name: '减少5',
            stack: 'a',
           barWidth: 70,
            itemStyle: {
                normal: {
                    // 定制显示（按顺序）
                    color: new echarts.graphic.RadialGradient(0.3, 0.2, 1, [{
                            color: '#668FFB',
                            offset: 1
                        },
                        {
                            color: '#799DFD',
                            offset: .4
                        }
                    ])
                },
                emphasis: {
                    color: '#668FFB'
                }
            }
        }
    ]
};





function _colors() {
    return [{
            x: 1,
            y: 0,
            x2: 0,
            y2: 0.1,
            colorStops: [{
                offset: 0,
                color: '#4E6692' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#4E6692' // 100% 处的颜色
            }],
        }, {
            x: 1,
            y: 0,
            x2: 0,
            y2: 0.1,
            colorStops: [{
                offset: 0,
                color: '#4E6692',
                opacity: 0.5 // 0% 处的颜色
            }, {
                offset: 1,
                color: '#4E6692' // 100% 处的颜色
            }],
        },
        {
            x: 0.1,
            y: 0.1,
            x2: 1,
            y2: 0.8,
            colorStops: [{
                offset: 0,
                color: '#4E6692' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#4E6692' // 100% 处的颜色
            }],
        }
    ]
}