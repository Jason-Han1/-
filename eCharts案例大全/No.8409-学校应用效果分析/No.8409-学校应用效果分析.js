option = {
    baseOption: {
        backgroundColor: '#fff',
        timeline: {
            axisType: 'category',
            autoPlay: false,
            playInterval: 1000,
            data: [
                '第一周', '第二周', '第三周', '第四周', '第五周'
            ],
        },
        title: {
            subtext: ''
        },
        tooltip: {},
        legend: {
            selectedMode: false,
        },
        calculable: true,
        grid: {},
        xAxis: [{
            'type': 'category',
            data: ["一班", "二班", "三班", "四班"],
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'solid',

                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#999999'
                }
            }
        }],
        yAxis: [{
            type: 'value',
            name: '人数',
            splitLine: {
                show: true,
                lineStyle: {
                    type: 'dashed'
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#999999'
                }
            }
        }],
        dataZoom: [{
                type: 'slider',
                show: false,
                height: 30,
                xAxisIndex: [
                    0
                ],
                bottom: 40,
                start: 0,
                end: 100
            },
            {
                type: "inside",
                show: false,
                height: 15,
                xAxisIndex: [
                    0
                ],
                start: 1,
                end: 100
            }
        ],
        series: [{
                name: '学生使用人数',
                type: 'bar',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#1f79ff'
                    }, {
                        offset: 1,
                        color: '#54c5ff'
                    }]),
                    barBorderRadius: [8, 8, 0, 0],
                }
            },
            {
                name: '教师使用人数',
                type: 'bar',
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#f09520'
                    }, {
                        offset: 1,
                        color: '#f5d65c'
                    }]),
                    barBorderRadius: [8, 8, 0, 0],
                }
            }
        ]
    },
    options: [{
            xAxis: [{
                'type': 'category',
                'axisLabel': {
                    'interval': 0
                },
                data: ["一班", "二班", "三班", "四班"],
            }],
            title: {
                text: '第一周使用人数'
            },
            series: [{
                    data: [1, 2, 3, 4]
                },
                {
                    data: [1, 2, 3, 4]
                }
            ]
        },
        {
            xAxis: [{
                'type': 'category',
                'axisLabel': {
                    'interval': 0
                },
                data: ["一班", "二班", "三班", "四班"],
                splitLine: {
                    show: false
                }
            }],
            title: {
                text: '第二周使用人数'
            },
            series: [{
                    data: [1, 12, 3, 4, 5]
                },
                {
                    data: [12, 2, 3, 4, 9]
                }
            ]
        }, {
            xAxis: [{
                'type': 'category',
                'axisLabel': {
                    'interval': 0
                },
                data: ["一班", "二班", "三班", "四班"],
                splitLine: {
                    show: false
                }
            }],
            title: {
                text: '第三周使用人数'
            },
            series: [{
                    data: [1, 2, 9, 4]
                },
                {
                    data: [1, 2, 4, 4]
                }
            ]
        },
        {
            xAxis: [{
                'type': 'category',
                'axisLabel': {
                    'interval': 0
                },
                data: ["一班", "二班", "三班", "四班"],
                splitLine: {
                    show: false
                }
            }],
            title: {
                text: '第四周使用人数'
            },
            series: [{
                    data: [1, 2, 3, 4]
                },
                {
                    data: [1, 2, 3, 4]
                }
            ]
        }, {
            xAxis: [{
                'type': 'category',
                'axisLabel': {
                    'interval': 0
                },
                data: ["一班", "二班"],
                splitLine: {
                    show: false
                }
            }],
            title: {
                text: '第五周使用人数'
            },
            series: [{
                    data: [1, 2]
                },
                {
                    data: [1, 8]
                }
            ]
        }


    ]

};