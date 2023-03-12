var pieData = [{
        value: 1,
        name: 'abc0'
    },
    {
        value: 1,
        name: 'abc1'
    },
    {
        value: 1,
        name: 'abc2'
    },
    {
        value: 1,
        name: 'abc3'
    },
    {
        value: 1,
        name: 'abc4'
    },
    {
        value: 1,
        name: 'abc5'
    },
    {
        value: 1,
        name: 'abc6'
    },
    {
        value: 1,
        name: 'abc7'
    },
    {
        value: 1,
        name: 'abc8'
    }
];
option = {
    radar: {
        shape: 'circle',
        splitNumber: 3,
        name: {
            textStyle: {
                color: '#999999',
            }
        },
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        splitArea: {
            areaStyle: {
                color: ['rgba(255, 255, 255, .5)', 'rgba(255, 255, 255, .7)', 'rgba(255, 255, 255, .85)']
            }
        },
        indicator: [{
                name: '行业信息',
                max: 50000
            },
            {
                name: '企业规模',
                max: 50000
            },
            {
                name: '企业信用',
                max: 50000
            },
            {
                name: '创新能力',
                max: 50000
            },
            {
                name: '人才潜力',
                max: 50000
            },
            {
                name: '融资能力',
                max: 50000
            }
        ]
    },
    series: [{
            type: 'radar',
            lineStyle: {
                width: 0,
                color: 'transparent',
                // type: 'dashed'
            },
            areaStyle: {
                normal: {
                    color: 'transparent'
                }
            },
            data: [{
                    value: [4300, 10000, 28000, 35000, 50000, 19000],
                    name: '实际开销（Actual Spending）',
                    symbolSize: 0,
                    lineStyle: {
                        normal: {
                            color: 'red'
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: 'red'
                        }
                    }
                }, {
                    value: [4300],
                    name: '预算分配（Allocated Budget）',
                    symbol: 'circle',
                    symbolSize: 32,
                    lineStyle: {
                        normal: {
                            width: 0,
                            color: 'transparent'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'blue'
                        }
                    }
                },
                {
                    value: ['', 10000, '', '', '', ''],
                    name: '实际开销（Actual Spending）',
                    symbol: 'circle',
                    symbolSize: 22,
                    lineStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'green'
                        }
                    }
                },
                {
                    value: ['', '', 28000, '', '', ''],
                    name: '实际开销（Actual Spending）',
                    symbol: 'circle',
                    symbolSize: 19,
                    lineStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'yellow'
                        }
                    }
                },
                {
                    value: ['', '', '', 35000, '', ''],
                    name: '实际开销（Actual Spending）',
                    symbol: 'circle',
                    symbolSize: 12,
                    lineStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#000000'
                        }
                    }
                },

                {
                    value: ['', '', '', '', 50000, ''],
                    name: '实际开销（Actual Spending）',
                    symbol: 'circle',
                    symbolSize: 12,
                    lineStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'pink',
                        }
                    }
                },

                {
                    value: ['', '', '', '', '', 19000],
                    name: '实际开销（Actual Spending）',
                    symbol: 'circle',
                    symbolSize: 12,
                    lineStyle: {
                        normal: {
                            color: 'transparent'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'red'
                        }
                    },
                    emphasis: {
                        normal: {
                            color: ''
                        }
                    }
                }
            ]
        },
        {
            type: 'pie',
            name: '',
            data: pieData,
            z: -1,
            startAngle: 110,
            label: {
                show: false
            },
            hoverAnimation: false,
            tooltip: {
                show: false
            }
        }
    ]
}