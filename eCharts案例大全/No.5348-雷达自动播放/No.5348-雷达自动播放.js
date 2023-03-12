option = {
    baseOption: {
        backgroundColor:'#080b30',
        timeline: {
            axisType: 'category',
            autoPlay: true,
            show: false,
            playInterval: 5000,
            data: ['数学', '语文', '自然'],

        },
        title: {
            top: 30,
            right: 20,
            textStyle: {
                color: '#eee'
            }
        },
        legend: {
            orient: 'vertical',
            symbol: '',
            top: 65,
            right: 15,
            data: ['个人', '班级', '年级'],
            itemGap: 20,
            textStyle: {
                color: '#fff',
                fontSize: 12
            },

        },
        radar: {
            startAngle: 60,
            indicator: [{
                    name: '运算求解',
                    max: 100
                },
                {
                    name: '推理运算',
                    max: 100
                },
                {
                    name: '数学建模',
                    max: 100
                },
                {
                    name: '空间想象',
                    max: 100
                },
                {
                    name: '数据处理',
                    max: 100
                },
                {
                    name: '数学表达',
                    max: 100
                }
            ],
            shape: 'polygon',
            splitNumber: 5,
            name: {
                textStyle: {
                    fontFamily: 'sc',
                    fontSize: 14,
                    color: '#fff'
                },
            },

            splitLine: {
                lineStyle: {
                    color: 'rgba(109, 205, 230, 0.5)'
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(238, 197, 102, 0.5)'
                }
            }
        },
        series: [{
                name: '个人',
                type: 'radar',
                itemStyle: {
                    color: '#6DCDE6'
                },
                areaStyle: {
                    opacity: .4,
                    color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [{
                            offset: 0,
                            color: '#38A0D6' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#61C3E2' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                }
            },
            {
                name: '班级',
                type: 'radar',
                itemStyle: {
                    color: '#FFA53C'
                },
                areaStyle: {
                    opacity: .4,
                    color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [{
                            offset: 0,
                            color: '#FF457E' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#FFA53C' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                }
            },
            {
                name: '年级',
                type: 'radar',
                itemStyle: {
                    color: '#E23AF5'
                },
                areaStyle: {
                    opacity: .4,
                    color: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.5,
                        colorStops: [{
                            offset: 0,
                            color: '#BB42EF' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#E23AF5' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    }
                }
            }
        ]
    },
    options: [{
        title: {
            text: '数学'
        },
        radar: {

            indicator: [{
                    name: '运算求解',
                    max: 100
                },
                {
                    name: '推理运算',
                    max: 100
                },
                {
                    name: '数学建模',
                    max: 100
                },
                {
                    name: '空间想象',
                    max: 100
                },
                {
                    name: '数据处理',
                    max: 100
                },
                {
                    name: '数学表达',
                    max: 100
                }
            ]
        },
        series: [{
            data: [
                [55, 91, 56, 80, 48, 62, 22]
            ]
        }, {
            data: [
                [26, 37, 27, 73, 27, 13, 41]
            ]
        }, {
            data: [
                [91, 45, 95, 82, 34, 23, 71]
            ]
        }]
    }, {
        title: {
            text: '语文'
        },
        radar: {
            startAngle: 0,
            indicator: [{
                    name: '倾听',
                    max: 100
                },
                {
                    name: '发言',
                    max: 100
                },
                {
                    name: '朗读',
                    max: 100
                },
                {
                    name: '合作',
                    max: 100
                }

            ],
        },
        series: [{
            data: [
                [55, 91, 56, 80]
            ]
        }, {
            data: [
                [26, 87, 57, 63]
            ]
        }, {
            data: [
                [91, 75, 95, 82]
            ]
        }]
    }, {
        title: {
            text: "自然"
        },
        radar: {
            startAngle: 0,
            indicator: [{
                    name: '记录单',
                    max: 100
                },
                {
                    name: '分析结论',
                    max: 100
                },
                {
                    name: '实验方案',
                    max: 100
                },
                {
                    name: '卫生',
                    max: 100
                }
            ],
        },
        series: [{
            data: [
                [55, 91, 56, 80]
            ]
        }, {
            data: [
                [26, 67, 97, 73]
            ]
        }, {
            data: [
                [91, 65, 95, 82]
            ]
        }]
    }]

};