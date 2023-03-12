option = {
    baseOption: {
        timeline: {
            show: false,
            type: 'slider',
            axisType: 'category',
            left: '2%',
            right: '2%',
            currentIndex: 0, //0 时表示当前选中项为 timeline.data[0]（即使用 options[0]
            autoPlay: true, //是否自动播放
            loop: true,
            realtime: true, //拖动圆点的时候，是否实时更新视图。
            playInterval: 3000,
            symbolSize: 15,
            symbol: "image://img/data_share/small_icon.png",
            currentIndex: 0, //0 时表示当前选中项为 timeline.data[0]（即使用 options[0]
            label: {
                normal: {
                    color: '#2998ff',
                },
            },

            itemStyle: {
                normal: {
                    color: '#fff',
                    borderColor: '#2998ff',
                    borderWidth: 2,
                }
            },
            lineStyle: {
                show: true, //false 不显示轴线
                color: '#2998ff',
            },
            label: {
                normal: {
                    color: '#fff',
                    interval: 0,
                    fontSize: 18,
                },
            },
            controlStyle: {
                showPlayBtn: false,
                normal: {
                    color: "#2998ff",
                    borderColor: "#2998ff"
                }
            },
            checkpointStyle: { //『当前项』（checkpoint）的图形样式
                symbol: "image://img/data_share/small_active.png",
                symbolSize: 30
            },
            data: ['1', '2', '3', '4']
        },
        backgroundColor:"#013d5a",
        legend: {
            x: 'center',
            top: '5%',
            textStyle: {
                color: '#fff',
                fontSize: 16
            },
            itemWidth: 10,
            data: [{
                name: "开放指数",
                icon: "circle"
            }, {
                name: "使用指数",
                icon: "circle"
            }]
        },
        grid: {
            top: '26%',
            left: '4%',
            right: '4%',
            bottom: '25%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            axisLine: {
                lineStyle: {
                    color: '#0c5470',
                    width: 1
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                interval: 0,
                color: '#fff',
                fontSize: 16,
                padding: [0, -10, 0, -13]
            },
        }],
        yAxis: [{
                type: 'value',
                name: '部门开放指数',
                nameTextStyle: {
                    color: '#FFF',
                    fontSize: 18
                },
                min: 0,
                max: 1,
                axisLine: {
                    lineStyle: {
                        color: '#0c5470',
                        width: 1
                    }
                },
                axisLabel: {
                    color: '#fff',
                    fontSize: 16
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#0c5470',
                        width: 1
                    }
                },
            },
            {
                type: 'value',
                name: '部门使用指数',
                nameTextStyle: {
                    color: '#FFF',
                    fontSize: 18
                },
                min: 0,
                max: 1,
                position: 'right',
                axisLine: {
                    lineStyle: {
                        color: '#0c5470',
                        width: 1
                    }
                },
                axisLabel: {
                    color: '#fff',
                    fontSize: 16
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#0c5470',
                        width: 1
                    }
                }
            }
        ],
        color: ['#51e9b2', '#e9dc5b'],
        series: [{
            name: '开放指数',
            type: 'bar'
        }, {
            name: '使用指数',
            type: 'bar',
            markLine: {
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: '#ff93c3',
                            type: 'dashed'
                        }
                    }
                },
                label: {
                    normal: {
                        fontSize: 16
                    }
                },
                data: [{
                    yAxis: 0.15,
                    type: 'max'
                }]
            },
        }] //series结束
    },
    options: [{
            xAxis: [{
                data: ['县地税局', '\n发改局', '教育局', '\n科技局', '民宗局', '\n公安局', '民政局', '\n司法局', '财政局', '\n人社局', '国土规划局', '\n环保局', '住建局', '\n交通局', '水务局']
            }],
            series: [{
                    data: [0.02, 0.17, 0.5, 0.19, 0.08, 0.21, 0.13, 0.19, 0.09, 0.03, 0.196, 0.175, 0.356, 0.28, 0.19],
                },
                {
                    data: [0.02, 0.1, 0.16, 0.16, 0, 0.12, 0.04, 0.17, 0.154, 0, 0.09, 0.09, 0.12, 0.13, 0.17],
                    markLine: {
                        data: [{
                            yAxis: 0.2
                        }]
                    }
                },
            ]
        },
        {
            xAxis: [{
                data: ['农业局', '\n商务局', '文广新局', '\n卫计局', '外事侨务局', '\n体育局', '工商局', '\n安监局', '食药局', '\n旅游局', '统计局', '\n法制局', '金融局', '\n市编办', '档案局']
            }],
            series: [{
                    data: [0.2, 0.2, 0.36, 0.18, 0.08, 0.18, 0.43, 0.18, 0.56, 0.28, 1, 0, 0.1, 0.06, 0.1],
                },
                {
                    data: [0.17, 0.05, 1, 0.12, 0.1, 0, 0.23, 0.38, 0.02, 0.06, 0.05, 0.23, 0, 0.02, 0, 0],
                    markLine: {
                        data: [{
                            yAxis: 0.12
                        }]
                    }
                },
            ]
        },
        {
            xAxis: [{
                data: ['中级法院', '\n国税局', '行政服务中心', '\n地税局', '气象局', '\n人协办', '公积金管理中心', '\n社科联', '佛山调查队', '\n疾控中心', '消费者委员会', '\n质监局', '经信局', '\n公共资源中心', '市海关']
            }],
            series: [{
                    data: [0.08, 0.07, 0.05, 0.29, 0.18, 0.11, 0.13, 0.19, 0.09, 0.13, 0.196, 0.55, 0.356, 0.08, 0.19],
                },
                {
                    data: [0.02, 0.01, 0.03, 0.76, 0.1, 0.17, 0.04, 0.17, 0.14, 0, 0.19, 0.09, 0.12, 0.33, 0.1],
                    markLine: {
                        data: [{
                            yAxis: 0.1
                        }]
                    }
                }
            ]
        },
        {
            xAxis: [{
                data: ['市残联', '\n地震局', '法制局', '\n国资委', '市公路局', '\n市纪委', '市工商联', '\n社保基金管理局', '公共资源中心', '\n法制局', '统计局', '\n法制局']
            }],
            series: [{
                    data: [0.03, 0.196, 0.175, 0.356, 0.28, 0.19, 0.2, 0.2, 0.36, 0.18, 0.28, 0.19],
                },
                {
                    data: [0.154, 0, 0.09, 0.09, 0.12, 0.13, 0.17, 0.05, 1, 0.12, 0.09, 0.12],
                    markLine: {
                        data: [{
                            yAxis: 0.1
                        }]
                    }
                }
            ]
        }
    ]
}