var data_year_rang = ["2018.3\n\n怪兽充电\n\n三节课产品经理P1课程", "2018.9\n\n三节课产品经理P2课程\n\n网易云课堂python数据分析微专业\n\n网易云课堂产品经理课程", "2019.2\n\n海南全域旅游监管服务平台项目\n\npython全栈微专业\n\n网易云课堂产品经理技术课",'2019.6\n\n舟山数据文广旅体平台项目\n\n上海人工智能大会平台数据项目\n\n硅谷产品实战课程']
var data_dd = [{
        'dim_year':2018.3,
        'radar_indicator': [{
            name: '产品设计',
            max: 100
        }, {
            name: '项目管理',
            max: 100
        }, {
            name: '数据分析',
            max: 100
        }, {
            name: '抗压能力',
            max: 100
        }, {
            name: '执行能力',
            max: 100
        }, {
            name: '技术知识',
            max: 100
        }, {
            name: '沟通能力',
            max: 100
        }],
        'trade_range': [50, 40, 65, 65, 60, 20,60]
    },
    {
        'dim_year':2018.7,
        'radar_indicator': [{
            name: '产品设计',
            max: 100
        }, {
            name: '项目管理',
            max: 100
        }, {
            name: '数据分析',
            max: 100
        }, {
            name: '抗压能力',
            max: 100
        }, {
            name: '执行能力',
            max: 100
        }, {
            name: '技术知识',
            max: 100
        }, {
            name: '沟通能力',
            max: 100
        }],
        'trade_range': [60, 55, 70, 70, 75, 50,70]
    }, 
    {
        'dim_year':2018.11,
        'radar_indicator': [{
            name: '产品设计',
            max: 100
        }, {
            name: '项目管理',
            max: 100
        }, {
            name: '数据分析',
            max: 100
        }, {
            name: '抗压能力',
            max: 100
        }, {
            name: '执行能力',
            max: 100
        }, {
            name: '技术知识',
            max: 100
        }, {
            name: '沟通能力',
            max: 100
        }],
        'trade_range': [65, 60, 75, 70, 75, 65,75]
    },
    {
        'dim_year':2019.4,
        'radar_indicator': [{
            name: '产品设计',
            max: 100
        }, {
            name: '项目管理',
            max: 100
        }, {
            name: '数据分析',
            max: 100
        }, {
            name: '抗压能力',
            max: 100
        }, {
            name: '执行能力',
            max: 100
        }, {
            name: '技术知识',
            max: 100
        }, {
            name: '沟通能力',
            max: 100
        }],
        'trade_range': [80, 70, 75, 75, 80, 65,80]
    }
]

option = {
    tooltip: {},
    baseOption: {
        title: {
            textStyle: {
                color: '#fff'
            }
        },
        timeline: {
          //  show: false,
            // y: 0,
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 2000,
            bottom:"8%",
            // controlStyle: {
            //     position: 'left'
            // },
            data: data_year_rang,
            label: {
                normal: {
                    color: '#fff',
                    interval: 0,
                    fontSize: 12,
                    padding: [0, 0, -40, 0],
                    lineHeight: 100
                },
            }
        },
        backgroundColor: {
            type: 'radial',
            x: 0.4,
            y: 0.4,
            r: 0.35,
            colorStops: [{
                offset: 0,
                color: '#1E253E' // 0% 处的颜色
            }, {
                offset: .2,
                color: '#242E5D' // 100% 处的颜色
            }, {
                offset: 1,
                color: '#1E253E' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
        },
        color: ['#FFD600'],
        tooltip: {},
        legend: {
            //data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
        },

        series: [{
            name: '',
            type: 'radar',
            areaStyle: {
                normal: {
                    shadowBlur: 13,
                    shadowColor: 'rgba(0,0,0,.2)',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: 1
                }
            },
            itemStyle: {
                color: '#293C55',
                borderColor: '#293C55'
            },
        }]
    },

    options: [{
            title: {
                text: data_dd[0].dim_year,
            },
            radar: {
                
                splitNumber: 6,
                // shape: 'circle',
                indicator: data_dd[0].radar_indicator
            },
            series: [{
                data: [{
                    value: data_dd[0].trade_range
                }]
            }]
        },

        {
            title: {
                text: data_dd[1].dim_year,
            },
            radar: {
                
                splitNumber: 6,
                // shape: 'circle',
                indicator: data_dd[1].radar_indicator
            },
            series: [{
                data: [{
                    value: data_dd[1].trade_range
                }]
            }]
        },
        {
            title: {
                text: data_dd[2].dim_year,
            },
            radar: {
                
                splitNumber: 6,
                // shape: 'circle',
                indicator: data_dd[2].radar_indicator
            },
            series: [{
                data: [{
                    value: data_dd[2].trade_range
                }]
            }]
        },
        {
            title: {
                text: data_dd[3].dim_year,
            },
            radar: {
                
                splitNumber: 6,
                // shape: 'circle',
                indicator: data_dd[3].radar_indicator
            },
            series: [{
                data: [{
                    value: data_dd[3].trade_range
                }]
            }]
        }


    ]
};