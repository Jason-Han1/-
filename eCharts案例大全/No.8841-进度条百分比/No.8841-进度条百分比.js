var value = 80;
option = {
    backgroundColor: '000',
    title: {
        text: `${value}分`,
        subtext: '综合评分',
        left: 'center',
        top: 'center', //top待调整
        textStyle: {
            color: '#fff',
            fontSize: 50,
            fontFamily: 'DINAlternate-Bold',
        },
        subtextStyle: {
            color: '#ff',
            fontSize: 30,
            fontFamily: 'PingFangSC-Regular',
            top: 'center'
        },
        itemGap: -4 //主副标题间距
    },
    xAxis: {
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        }
        // data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false
        }
    },
    series: [
        // 内圆
        {
            type: 'pie',
            radius: ['0', '50%'],
            center: ['50%', '50%'],
            hoverAnimation:false,
            z: 0,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#FFC600'
                        },
                        {
                            offset: 0.5,
                            color: '#30D27C'
                        },
                        {
                            offset: 1,
                            color: '#0B95FF'
                        }
                    ]),
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
            },
            label: {
                normal: {
                    position: "center",

                }
            },
            data: [100],
        },
        // 进度圈
        {
            type: 'pie',
            clockWise: true,
            radius: ["60%", "55%"],
            hoverAnimation:false,
            data: [{
                    value: value,
                    itemStyle: {
                        normal: {
                            borderWidth: 10,
                            borderColor: {
                                colorStops: [{
                                    offset: 0,
                                    color: '#FFC600' || '#30D27C' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#0B95FF' || '#367bec' // 100% 处的颜色
                                }]
                            },
                            color: { // 完成的圆环的颜色
                                colorStops: [{
                                    offset: 0,
                                    color: '#FFC600' || '#30D27C' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#0B95FF' || '#367bec' // 100% 处的颜色
                                }]
                            },
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                        },
                    }
                },
                {
                    name: 'gap',
                    value: 100 - value,
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            color: 'rgba(0, 0, 0, 0)',
                            borderColor: 'rgba(0, 0, 0, 0)',
                            borderWidth: 0,
                        }
                    },
                }
            ]
        },
        //刻度尺
        {
            // name: "白色圈刻度",
            type: "gauge",
            radius: "67%",
            startAngle: 225, //刻度起始
            endAngle: -134.8, //刻度结束
            z: 4,
            axisTick: {
                show: true,
                 lineStyle: {
                    width: 2,
                    color: 'rgba(1,244,255, 0.9)'
                } 
            },
            splitLine: {
                length: 16, //刻度节点线长度
                lineStyle: {
                    width: 2,
                    color: 'rgba(1,244,255, 0.9)'
                } //刻度节点线
            },
            axisLabel: {
                color: 'rgba(255,255,255,0)',
                fontSize: 12,
            }, //刻度节点文字颜色
            pointer: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    opacity: 0
                }
            },
            detail: {
                show: false
            },
            data: [{
                value: 0,
                name: ""
            }]
        },
        
    ]
};