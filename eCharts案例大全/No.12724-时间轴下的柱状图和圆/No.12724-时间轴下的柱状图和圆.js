var symbol1 = "/asset/get/s/data-1544501081049-3FpaM5ea4.png";


var symbol2 = "/asset/get/s/data-1544501065781-v1k7-gZb8.png";

option = {
    baseOption: {
        timeline: {
            axisType: 'category',
            autoPlay: true,
            symbolSize: 10,
            symbol: "image://"+symbol1,
            playInterval: 4000,
            left: '5%',
            right: '5%',
            bottom: '0%',
            label: {
                normal: {
                    color: '#fff',
                    fontSize: 15,
                }
            },
            lineStyle: {
                color: "#0b4e86"
            },
            itemStyle: {
                normal: {
                    color: '#f00',
                    borderColor: "#00aeff",
                    borderWidth: 2
                }

            },
            checkpointStyle: {
                symbol: "image://"+symbol2,
                symbolSize: 16
            },
            controlStyle: {
                showPlayBtn: false
            },
            data: ['网络设备', '安全设备', '存储设备', '计算设备'],
        },
        title: [{
            text: "{white| 迁转省份目标}\n{bigWhite| 94}",
            left: 'center',
            top: '18%',
            textStyle: {
                align: 'center',
                rich: {
                    white: {
                        color: "#fff",
                        fontSize: 16,
                        padding: [10, 0]
                    },
                    bigWhite: {
                        color: "#fff",
                        fontSize: 22
                    }
                }
            }
        }],
        calculable: true,
        grid: {
            top: '53%',
            bottom: '18%',
            containLabel: true
        },
        backgroundColor: "#01334d",
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        xAxis: [{
            type: 'value',
            boundaryGap: [0, 0.01],
            axisLabel: {
                color: '#fff',
                fontSize: 12
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#084a7b"
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: "#084a7b"
                }
            },
            splitLine: {
                show: false
            },
        }],
        yAxis: [{
            'type': 'category',
            axisLabel: {
                color: '#fff',
                fontSize: 12
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "#084a7b"
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: "#084a7b"
                }
            },
            splitLine: {
                show: false
            },
            'data': ['光纤交换机', '交换机', '路由器']
        }],
        series: [{
            name: '生产量',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        1, 0, 0, 0, [{
                                offset: 0,
                                color: '#edf094'
                            },
                            {
                                offset: 1,
                                color: '#21b4f6'
                            }
                        ]
                    ),
                    barBorderRadius: 0
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{c}',
                    textStyle: {
                        fontSize: 16,
                        color: "#fff"
                    }
                }
            },
        }, {
            name: '生产量占比',
            type: 'pie',
            label: {
                normal: {
                    show: true,
                    position: 'outside',
                    formatter: '{b} : {c} ',
                    textStyle: {
                        fontSize: 16
                    }
                }
            },
            color: ['#3acad2', '#51eab2', '#f8f38d'],
            radius: ['25%', '38%'],
            center: ['50%', '25%'],
        }]
    },
    options: [{
            title: {
                text: "{white| 网络设备总数}\n{bigWhite| 94}",
            },
            yAxis: [{
                'data': ['光纤交换机', '交换机', '路由器']
            }],
            series: [{
                data: [42, 27, 25]
            }, {
                data: [{
                    value: 42,
                    name: '光纤交换机'
                }, {
                    value: 27,
                    name: '交换机'
                }, {
                    value: 25,
                    name: '路由器'
                }]
            }]
        },
        {
            title: {
                text: "{white| 安全设备总数}\n{bigWhite| 48}",
            },
            yAxis: [{
                'data': ['安全网闸', '入侵检测', '防火墙']
            }],
            series: [{
                data: [12, 26, 10]
            }, {
                data: [{
                    value: 12,
                    name: '安全网闸'
                }, {
                    value: 26,
                    name: '入侵检测'
                }, {
                    value: 10,
                    name: '防火墙'
                }]
            }]
        },
        {
            title: {
                text: "{white| 储存设备总数}\n{bigWhite| 292}",
            },
            yAxis: [{
                'data': ['磁带库', '网络存储器', '磁带阵列']
            }],
            series: [{
                data: [85, 95, 112]
            }, {
                data: [{
                    value: 85,
                    name: '磁带库'
                }, {
                    value: 95,
                    name: '网络存储器'
                }, {
                    value: 112,
                    name: '磁带阵列'
                }]
            }]
        },
        {
            title: {
                text: "{white| 计算设备总数}\n{bigWhite| 10112}",
            },
            yAxis: [{
                'data': ['虚拟机', '客户机', '服务器']
            }],
            series: [{
                data: [3674, 4780, 1658]
            }, {
                data: [{
                    value: 3674,
                    name: '虚拟机'
                }, {
                    value: 4780,
                    name: '客户机'
                }, {
                    value: 1658,
                    name: '服务器'
                }]
            }]
        },
    ]
};