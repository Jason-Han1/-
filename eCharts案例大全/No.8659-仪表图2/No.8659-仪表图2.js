let chartData = {
    name: '申请成功率',
    value: 80
}

let value = chartData.value || 0,
    formatValue = value.toFixed(2),
    int = formatValue.split('.')[0],
    float = formatValue.split('.')[1];
// /asset/get/s/data-1582082969084-tSD-zXQO.png
option = {
    backgroundColor: 'rgba(19,22,24,1)',
    legend: {
        show: false
    },
    graphic: {
        elements: [{
            type: "image",
            style: {
                image: '/asset/get/s/data-1582082969084-tSD-zXQO.png',
                width: 108,
                height: 114
            },
            left: 'center',
            top: '30%' 
        }]
    },
    series: [
        // 外围刻度
        {
            type: 'gauge',
            center: ['50%', '40%'],
            radius: 80, // 1行3个
            splitNumber: 10,
            min: 0,
            max: 100,
            startAngle: 225,
            endAngle: -45,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    color: [
                        [1, 'rgba(0,0,0,0)']
                    ]
                }
            }, //仪表盘轴线
            axisTick: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,0.6)',
                    width: 1
                },
                length: -5
            }, //刻度样式
            splitLine: {
                show: true,
                length: -13,
                lineStyle: {
                    color: 'rgba(255,255,255,0.6)'
                }
            }, //分隔线样式
            axisLabel: {
                show: false
            },
            pointer: {
                show: 0
            },
            detail: {
                show: 0
            }
        },
        // 内侧指针、数值显示
        {
            type: 'gauge',
            center: ['50%', '40%'],
            radius: 70,
            startAngle: 225,
            endAngle: -45,
            min: 0,
            max: 100,
            title: {
                fontWeight: '400',
                offsetCenter: [0, 130],
                fontSize: 24,
                lineHeight: 24,
                color: '#FFFFFF',
                rich: {
                    name: {
                        fontSize: 24,
                        color: '#FFFFFF',
                        padding: [24, 0, 0, 0]
                    },
                    int: {
                        fontSize: 48,
                        lineHeight: 48,
                        color: '#00FFBA',
                    },
                    float: {
                        fontSize: 24,
                        color: '#00FFBA',
                        padding: [0, 0, 12, 0]
                    },
                    unit: {
                        fontSize: 24,
                        color: '#5A717A',
                        padding: [0, 0, 12, 12]
                    }
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    width: 10,
                    color: [
                        [
                            value / 100, new echarts.graphic.LinearGradient(
                                0, 0, 1, 0, [{
                                        offset: 0,
                                        color: "#0092FA",
                                    },
                                    {
                                        offset: 1,
                                        color: "#54F200",
                                    }
                                ]
                            )
                        ],
                        [
                            1, '#2C3136'
                        ]
                    ]
                }
            },
            axisTick: {
                show: 0,
            },
            splitLine: {
                show: 0,
            },
            axisLabel: {
                show: 0
            },
            pointer: {
                show: false
            },
            detail: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#54F200',
                }
            },
            data: [{
                value: value,
                name: '{name|' + chartData.name + '}\n{int|' + int + '}{float|.' + float + '}{unit|%}'
            }]
        }
    ]

};