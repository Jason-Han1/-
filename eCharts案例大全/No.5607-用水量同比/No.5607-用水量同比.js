options = [{
        title: {
            text: '用水量同比',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['2020年用水量', '2019年用水量']
        },
        toolbox: {
            show: true
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
                name: '2020年用水量',
                type: 'bar',
                label: {
                    show: true,
                    position: 'top'
                },
                data: [370, 422, 370, 484, 350, 390, 520, 412, 420, 485],
                markPoint: {
                    data: [{
                            type: 'max',
                            name: '最大值'
                        }
                    ]
                }
            },
            {
                name: '2019年用水量',
                type: 'bar',
                label: {
                    show: true,
                    position: 'top'
                },
                data: [350, 452, 300, 434, 390, 330, 420, 452, 300, 434, 390, 330],
                markPoint: {
                    data: [{
                            type: 'max',
                            name: '最大值'
                        }
                    ]
                }
            }
        ]
    },
    {
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        title: {
            text: '蒸汽用量同比',
        },
        legend: {
            data: ['2020年蒸汽用量', '2019年蒸汽用量']
        },
        toolbox: {
            show: true
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
                name: '2020年蒸汽用量',
                type: 'bar',
                label: {
                    show: true,
                    position: 'top'
                },
                data: [70, 22, 37, 84, 35, 39, 52, 41, 42, 85],
                markPoint: {
                    data: [{
                            type: 'max',
                            name: '最大值'
                        }
                    ]
                }
            },
            {
                name: '2019年蒸汽用量',
                type: 'bar',
                label: {
                    show: true,
                    position: 'top'
                },
                data: [76, 29, 56, 67, 46, 56, 76, 48, 46, 37, 64, 72],
                markPoint: {
                    data: [{
                            type: 'max',
                            name: '最大值'
                        }
                    ]
                }
            }
        ]
    },
    {
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        title: {
            text: '天然气用量同比',
        },
        legend: {
            data: ['2020年天然气用量', '2019年天然气用量']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
                name: '2020年天然气用量',
                type: 'bar',
                label: {
                    show: true,
                    position: 'top'
                },
                data: [65, 74, 67, 78, 94, 69, 85, 72, 84, 90],
                markPoint: {
                    data: [{
                            type: 'max',
                            name: '最大值'
                        }
                    ]
                }
            },
            {
                name: '2019年天然气用量',
                type: 'bar',
                label: {
                    show: true,
                    position: 'top'
                },
                data: [78, 88, 66, 94, 87, 72, 81, 89, 61, 63, 80, 97],
                markPoint: {
                    data: [{
                            type: 'max',
                            name: '最大值'
                        }
                    ]
                }
            }
        ]
    },
    {
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        title: {
            text: '废水排放同比',
        },
        legend: {
            data: ['2020年废水排放量', '2019年废水排放量']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
                name: '2020年废水排放量',
                type: 'bar',
                label: {
                    show: true,
                    position: 'top'
                },
                data: [309, 397, 225, 231, 370, 233, 357, 322, 273, 226],
                markPoint: {
                    data: [{
                            type: 'max',
                            name: '最大值'
                        }
                    ]
                }
            },
            {
                name: '2019年废水排放量',
                type: 'bar',
                label: {
                    show: true,
                    position: 'top'
                },
                data: [267, 228, 252, 262, 337, 270, 393, 202, 261, 290, 348, 351],
                markPoint: {
                    data: [{
                            type: 'max',
                            name: '最大值'
                        }
                    ]
                }
            }
        ]
    }
]