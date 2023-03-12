var dataList = [{
        name: '人员总数',
        value: 100,
        unit: '人'
    },
    {
        name: '已到人数',
        value: 80,
        unit: '人'
    },
    {
        name: '未到人数',
        value: 20,
        unit: '人'
    }
]

var value = 80;

option = {
    backgroundColor: 'rgba(19,22,24,0.8)',
    legend: {
        top: "center",
        right: '20',
        orient: 'vertical',
        icon: 'circle',
        itemWidth: 10,
        itemGap: 30,
        data: ['人员总数', '已到人数', '未到人数'],
        formatter: function(name) {
            console.log(name)
            let res = dataList.filter(v => v.name === name);
            console.log(res)
            return "{name|" + name + "}"+"{value|" + res[0].value + "}"+"{unit|" + res[0].unit + "}";
        },
        textStyle: {
            color: '#fff',
            rich: {
                name: {
                    padding: [0, 20, 0, 2]
                },
                value: {
                    fontSize: 16,
                    color: '#1ED79F',
                    padding: [0, 5]
                }
            }
        }
    },
    series: [
        // 外围刻度
        {
            type: 'gauge',
            center: ['40%', '50%'],
            radius: '80%', // 1行3个
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
                length: -8
            }, //刻度样式
            splitLine: {
                show: true,
                length: -20,
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
            name: "已到人数",
            type: 'gauge',
            center: ['40%', '50%'],
            radius: '75%',
            startAngle: 225,
            endAngle: -45,
            min: 0,
            max: 100,
            title: {
                fontWeight: 'bold',
                offsetCenter: [0, '70%'],
                fontSize: 24,
                color: '#fff'
            },
            axisLine: {
                show: true,
                lineStyle: {
                    width: 16,
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
                show: false,
                length: '105%'
            },
            detail: {
                show: true,
                offsetCenter: [0, 0],
                formatter: '{value|' + value.toFixed(0) + '}{unit|.' + value.toFixed(1).toString().split('.')[1] + '%}',
                rich: {
                    value: {
                        fontSize: 48,
                        lineHeight: 48,
                        color: '#fff'
                    },
                    unit: {
                        fontSize: 24,
                        lineHeight: 24,
                        color: '#fff',
                        padding: [0, 0, 12, 0]
                    },
                    name: {
                        fontSize: 20,
                        lineHeight: 30,
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#54F200',
                }
            },
            data: [{
                value: value,
                name: '人员到岗进度'
            }]
        },
        {
            name: "人员总数",
            type: 'gauge',
            axisLine: {
                show: false
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
                    color: '#0092FA',
                }
            },
            data: [{
                value: 100,
                name: ''
            }]
        },
        {
            name: "未到人数",
            type: 'gauge',
            axisLine: {
                show: false
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
                    color: '#FE6B03',
                }
            },
            data: [{
                value: 100,
                name: ''
            }]
        }
    ]

};