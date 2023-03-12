option = {
    title: [{
        text: '饼干timi',
        x: 'center',
        top: '45%',
        textStyle: {
            fontSize: '26',
            color: '#1DF7FF',
            fontFamily: 'Source Han Sans CN',
            foontWeight: '500',
        },
    }],
    backgroundColor: '#0E2E68',
    polar: {
        radius: ['50%', '65%'],
        center: ['50%', '50%'],
    },
    angleAxis: {
        max: 100,
        show: false,
    },
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
            show: false,
        },
    },
    series: [{
            // 渐变圈
            name: '',
            type: 'bar',
            roundCap: true,
            barWidth: 90,
            showBackground: true,
            backgroundStyle: {
                color: '#324D93',
            },
            data: [56],
            coordinateSystem: 'polar',

            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                            offset: 0,
                            color: '#fbc292',
                        },
                        {
                            offset: 1,
                            color: '#06fbfe',
                        },
                    ]),
                },
            },
        }, {
            // 刻度
            name: "",
            type: 'gauge',
            splitNumber: 80, //刻度数量
            radius: '75%', //图表尺寸
            center: ['50%', '50%'],
            startAngle: 90,
            endAngle: -269.9999,
            axisLine: {
                show: false,
                lineStyle: {
                    width: 0,
                    shadowBlur: 0,
                    color: [
                        [1, '#0dc2fe']
                    ]
                }
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: 'auto',
                    width: 2
                },
                length: 20,
                splitNumber: 5
            },
            splitLine: {
                show: true,
                length: 5,
                lineStyle: {
                    color: 'auto',
                }
            },
            axisLabel: {
                show: false
            },
            pointer: { //仪表盘指针
                show: 0,
            },
            detail: {
                show: 0,
            },
        }, {
            // 亮线
            name: '',
            z: 5,
            type: 'pie',
            cursor: 'default',
            radius: ['40%', '40%'],
            hoverAnimation: false,
            legendHoverLink: false,
            labelLine: {
                normal: {
                    show: false,
                },
            },
            data: [
                {
                    value: 1,
                    itemStyle: {
                        normal: {
                            borderWidth: 2,
                            borderColor: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                  offset: 0, color: '#15B5FF'
                                }, {
                                  offset: 0.6, color: 'rgba(2,144,214,0)'
                                }],
                                globalCoord: false
                              }
                        },
                    },
                },
            ],
        }, { //内圆
            type: 'pie',
            radius: '46%',
            center: ['50%', '50%'],
            z: 1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.RadialGradient(.5, .5, .8, [{
                            offset: 0,
                            color: '#4978EC'
                        },
                        {
                            offset: .5,
                            color: '#1E2B57'
                        },
                        {
                            offset: 1,
                            color: '#141F3D'
                        }
                    ], false),
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
            },
            hoverAnimation: false,
            label: {
                show: false,
            },
            tooltip: {
                show: false
            },
            data: [100],
        }],
};
