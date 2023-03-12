 


let angle = 0;//角度，用来做简单的动画效果的
let value = 55;
option = {
backgroundColor:"#061740",
title: {
        text: value+'%',
        x: 'center',
        y: 'center',
        textStyle: {
            fontSize:85,
            color: "#fff",
        }
    },
    series: [ {
            name: '',
            type: 'pie',
            radius: ['58%', '45%'],
            silent: true,
            clockwise: false,
            startAngle: 90,
            z: 0,
            zlevel: 0,
            label: {
                normal: {
                    position: "center",

                }
            },
            data: [{
                    value: value,
                    name: "",
                    itemStyle: {
                        normal: {
                            color: { // 完成的圆环的颜色
                                colorStops: [{
                                    offset: 0,
                                    color: '#4FADFD' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: '#28E8FA' // 100% 处的颜色
                                }]
                            },
                        }
                    }
                },
                {
                    value: 100-value,
                    name: "",
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "#173164"
                        }
                    }
                }
            ]
        },
        {
            name: "",
            type: "gauge",
            radius: "58%",
            center: ['50%', '50%'],
            startAngle: 0,
            endAngle: 359.9,
            splitNumber: 12,
            hoverAnimation: true,
            axisTick: {
                show: false
            },
            splitLine: {
                length: 60,
                lineStyle: {
                    width: 10,
                    color: "#061740"
                }
            },
            axisLabel: {
                show: false
            },
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
        {
            name: '',
            type: 'pie',
            startAngle: 90,
            radius: ['70%', '72%'],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                }
            },
            data: [{
                value: 2.5,
                name: '',
                itemStyle: {
                    normal: {
                        color: ' #02B1FF',
                        opacity: 0.5
                    }
                }
            },
            {
                value: 7.5,
                name: '',
                itemStyle: {
                    normal: {
                        color: ' #fff',
                        opacity: 0.1
                    }
                }
            }
            ]
        },
        {
            name: "",
            type: "gauge",
            radius: "83%",
            center: ['50%', '50%'],
            startAngle: 0,
            endAngle: 90,
            splitNumber: 1,
            hoverAnimation: true,
            axisTick: {
                show: false
            },
            splitLine: {
                length: 30,
                lineStyle: {
                    width: 5,
                    color: "#02B1FF"
                }
            },
            axisLabel: {
                show: false
            },
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
                value: 2.5,
                name: ""
            }]
        },
    ]
};
myChart.setOption(option, true)