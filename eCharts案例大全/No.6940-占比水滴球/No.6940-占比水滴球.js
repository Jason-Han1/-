var ratio = 40; //占比数值  总数为100
var ratioLength = 3; //波浪数量
var ratioArr = [];
var ratioColor = ['#1991d2', '#3831f3', '#1991d2']; //波浪内颜色
for (var ratioIndex = 0; ratioIndex < ratioLength; ratioIndex++) {
    ratioArr.push(ratio / 100)
}
var option = {
    backgroundColor: '#003366',
    title: {
        text: ratio + '%',
        textStyle: {
            fontSize: 50,
            fontFamily: 'Microsoft Yahei',
            fontWeight: 'bold',
            color: '#fff'
        },
        x: 'center',
        y: 'center'
    },
    series: [{
            type: 'liquidFill',
            radius: '45%',
            center: ['50%', '50%'],
            color: ratioColor,
            data: ratioArr,
            backgroundStyle: {
                // borderWidth: 1,
                color: '#1f2c52'
            },
            label: {
                normal: {
                    formatter: '',
                }
            },
            outline: {
                show: false,
            }
        },
        { //细的外圈
            type: "pie",
            center: ["50%", "50%"],
            radius: ["49%", "50%"],
            hoverAnimation: false,
            data: [{
                    name: "",
                    value: 50,
                    labelLine: {
                        show: false
                    },
                    itemStyle: {
                        color: 'transparent'
                    },
                    emphasis: {
                        labelLine: {
                            show: false
                        },
                        itemStyle: {
                            color: 'transparent'
                        },
                    }
                },


                { //画剩余的刻度圆环
                    name: "",
                    value: 50,
                    itemStyle: {
                        color: '#41496b'
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    emphasis: {
                        labelLine: {
                            show: false
                        },
                        itemStyle: {
                            color: '#41496b'
                        },
                    }
                }
            ]
        },
        { //粗的外圈
            type: "pie",
            center: ["50%", "50%"],
            radius: ["48%", "51%"],
            hoverAnimation: false,
            zlevel: 2,
            data: [


                {
                    name: "",
                    value: 50,
                    labelLine: {
                        show: false
                    },
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#00e2fe'
                        }, {
                            offset: 1,
                            color: '#0707ff'
                        }]),
                    },
                    emphasis: {
                        labelLine: {
                            show: false
                        },
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#00e2fe'
                            }, {
                                offset: 1,
                                color: '#0707ff'
                            }]),
                        },
                    }
                },


                { //画剩余的刻度圆环
                    name: "",
                    value: 50,
                    itemStyle: {
                        color: 'transparent'
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    emphasis: {
                        labelLine: {
                            show: false
                        },
                        itemStyle: {
                            color: 'transparent'
                        },
                    }
                }
            ]
        }

    ]
}