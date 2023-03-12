data = 100;
option = {
    title: {
        text: '',
        x: 'center',
        top: '43%',
        textStyle: {
            fontSize: '90',
            color: '#be8c3c',
            foontWeight: '500',
        },
    },
    // 极坐标系
    polar: {
        radius: ['30%', '40%'],
        center: ['50%', '50%'],
    },
    // 极坐标系：角度轴
    angleAxis: {
        max: 100 * 360 / 270,
        show: false,
        type: 'value',
        startAngle: 225
    },
    // 极坐标系：径向轴
    radiusAxis: {
        type: 'category',
        show: true,
        axisLabel: {
            show: false,
        },
        axisLine: {
            show: false,

        },
        axisTick: {
            show: false
        },
    },
    series: [
        // 仪表盘：只显示刻度
        {
            type: 'gauge',
            radius: '29%',
            startAngle: '225',
            endAngle: '-45',
            splitNumber: 10,
            center: ['50%', '50%'],
            min: 0,
            max: 100,
            pointer: {
                show: false
            },
            title: {
                show: false
            },
            detail: {
                show: false
            },
            data: [],
            axisLine: {
                show: false,
            },
            axisTick: {
                length: 5,
                lineStyle: {
                    color: 'auto'
                }
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            }
        },
        // 进度条
        {
            type: 'bar',
            data: [{
                value: data
            }],
            itemStyle: {
                color: {
                    type: 'linear',
                    x: 0, //右
                    y: 0.5, //下
                    x2: 1, //左
                    y2: 0, //上
                    colorStops: [{
                        offset: 0,
                        color: 'blue'
                    }, {
                        offset: 1,
                        color: 'cyan'
                    }]
                }
            },
            barGap: '-100%',
            coordinateSystem: 'polar',
            roundCap: false,
            cursor: 'auto',
            z: 2
        },
        // 进度条背景
        {
            type: 'bar',
            data: [{
                value: 100,
            }],
            itemStyle: {
                color: '#cccccc'
            },
            barGap: '-100%',
            coordinateSystem: 'polar',
            roundCap: false,
            cursor: 'auto',
            emphasis: {
                itemStyle: {
                    color: '#cccccc'
                }
            },
            z: 1
        },
        {
            type: 'pie',
            hoverAnimation: false, //鼠标经过的特效
            radius: ['39%', '45%'],
            center: ['50%', '50%'],
            startAngle: 225,
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    position: 'center'
                }
            },
            data: [{
                    value: 75,
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0, //右
                                y: 1, //下
                                x2: 0, //左
                                y2: 0, //上
                                colorStops: [
                                    {
                                        offset: 0,
                                        color: 'rgba(30, 144, 255, 0.1)'
                                    }, 
                                    {
                                        offset: 0.6,
                                        color: 'rgba(30, 144, 255, 0.8)'
                                    }, 
                                    {
                                        offset: 1,
                                        color: 'rgba(30, 144, 255, 0.8)'
                                    }
                                ]
                            }
                        }
                    },
                }, {
                    value: 25,
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            labelLine: {
                                show: false
                            },
                            color: "rgba(0,0,0,0)",
                            borderWidth: 0
                        },
                        emphasis: {
                            color: "rgba(0,0,0,0)",
                            borderWidth: 0
                        }
                    },
                },
            ],
            z: -1
        },
    ]
};

option.title.text = '60%'
option.series[1].data[0].value = 60;
myChart.setOption(option, true);