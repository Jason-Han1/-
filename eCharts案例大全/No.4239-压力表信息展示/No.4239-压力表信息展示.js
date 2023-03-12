var lowPressLinevalue = 1.2;
var heightPressLinevalue= 2;
var data = {
    deviceLocation: '小寨',
    tempValue: 25
}
option = {
    //backgroundColor: "#062a44",
    series: [{
            name: '压力',
            type: 'gauge',
            radius: '55%',
            min: 0,
            max: 2.5,
            startAngle: 220,
            endAngle: -40,
            splitNumber: 5,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    color: [
                        [1, 'rgba(0,0,0,0)']
                    ]
                }
            }, //仪表盘轴线
            axisLabel: {
                show: true,
                color: '#5B87C3',
                distance: 0
            }, //刻度标签。
            axisTick: {
                show: true,
                splitNumber: 10,
                lineStyle: {
                    color: '#5B87C3',
                    width: 1
                },
                length: -8
            }, //刻度样式
            splitLine: {
                show: true,
                length: 5,
                lineStyle: {
                    color: '#5B87C3'
                }
            }, //分隔线样式
            detail: {
                show: false
            },
            pointer: {
                show: false
            }
        },
        {
            type: 'gauge',
            name: '压力',
            radius: '80%',
            center: ['50%', '50%'],
            startAngle: 220,
            endAngle: -40,
            min: 0,
            max: 2.5,
            animationDelay: 2000,
            animationDuration: 2000,
            animationEasing: 'bounceInOut',
            axisLine: {
                lineStyle: {
                    color: [
                        [lowPressLinevalue / 2.5, '#FFA500'],
                        [heightPressLinevalue / 2.5, '#009702'],
                        [1, '#FF4240']
                    ],
                    width: 8
                }
            },
            //分隔线样式。
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            pointer: {
                show: true,
                length: '50%'
            },
            //仪表盘详情，用于显示数据。
            detail: {
                show: true,
                offsetCenter: ['0%', '85%'],
                //color: '#ddd',
                formatter: function(params) {
                    return `{normal|压力值:}{ds|${params}}{normal|MPa}\n{sub|温度值:${data.tempValue}℃\n安装位置:${data.deviceLocation}}`
                },
                textStyle: {
                    rich: {
                        ds: {
                            fontFamily: 'ds-digital-bold',
                            fontSize: 20,
                        },
                        normal: {
                            fontSize: 12
                        },
                        sub: {
                            fontSize: 12,
                            color: '#6ED9F2'
                        }
                    }
                }
            },
            data: [{
                value: 2.3
            }]
        },
        {
            //内圆
            type: "pie",
            radius: "45%",
            center: ["50%", "50%"],
            z: 1,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.RadialGradient(
                        0.5,
                        0.5,
                        0.8,
                        [{
                                offset: 0,
                                color: "#4978EC",
                            },
                            {
                                offset: 0.5,
                                color: "#1E2B57",
                            },
                            {
                                offset: 1,
                                color: "#141F3D",
                            },
                        ],
                        false,
                    ),
                    label: {
                        show: false,
                    },
                    labelLine: {
                        show: false,
                    },
                },
            },
            hoverAnimation: false,
            label: {
                show: false,
            },
            tooltip: {
                show: false,
            },
            data: [100],
            animationType: "scale",
        },
    ]
};