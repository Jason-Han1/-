var selectedId=0
option = {
    backgroundColor: '#142940',
    tooltip: {},
    legend: {
        show: false
    },
    grid: {
        left: 0,
        right: 0,
        containLabel: true
    },
    radar: {
        radius: "65%",
        name: {
            textStyle: {
                color: '#1B91BC',
            }
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(6,46,74,.9)',
                width: 2
            },
        },
        splitArea: {
            show: false
        },
        axisLine: {
            show: false
        },
        indicator: [{
                name: '产业竞争力',
                max: 120
            },
            {
                name: '科技竞争力',
                max: 120
            },
            {
                name: '教育竞争力',
                max: 120
            },
            {
                name: '人力资源竞争力',
                max: 120
            },
            {
                name: '金融竞争力',
                max: 120
            },
            {
                name: '营商环境竞争力',
                max: 120
            },
            {
                name: '基础设施竞争力',
                max: 120
            }
        ]
    },
    series: [{
        name: '总体评分',
        type: 'radar',
        symbolSize: 0.1,
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [{
                            offset: 1,
                            color: '#0885DD'
                        },
                        {
                            offset: 0,
                            color: '#19B3F3'
                        }
                    ]
                ),
                opacity: 0.3
            }
        },
        lineStyle: {
            normal: {
                color: "#36BAFF",
                width: 2
            }
        },
        label: {
            normal: {
                show: true,
                color: '#B9F1FF',
                position: "top",
                formatter: (params) => {
                    let dataIndex = params.data.value.indexOf(params.value);
                    if (dataIndex == this.selectedId) {
                        return `${params.value}分\n{triangle|}`
                    } else {
                        return ''
                    }
                },
                rich: {
                    triangle: {
                        width: 10,
                        height: 10,
                        align: 'center',
                        backgroundColor: {
                            image: '../../../assets/images/up.png'
                        }
                    }
                }
            }

        },
        data: [{
            value: [79, 96, 80, 75, 69, 90, 81],
            name: '总体评分'
        }, ]
    }]
};