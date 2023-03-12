var color = ['#1534f0', '#e20012', '#3CF0FD', '#FBBD29', '#1a9bfc', '#7049f0'];
var dataStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        shadowBlur: 40,
        borderWidth: 10,
        shadowColor: 'rgba(0, 0, 0, 0)' //边框阴影
    }
};
var placeHolderStyle = {
    normal: {
        color: 'transparent',
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: '#eee'
    }
};
var placeHolderStyle1 = {
    normal: {
        color: '#fff',
        label: {
            show: false
        },
        labelLine: {
            show: false
        }
    },
    emphasis: {
        color: '#eee'
    }
};
var center = ['30%', '50%'];
option = {
    backgroundColor: '#000',
    title: {
        show: false,
        text: '匹配度',
        x: 'center',
        y: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 24,
            color: "#fff",
        }
    },
    tooltip: {
        trigger: 'item',
        show: true,
        formatter: "{b} : <br/>{d}%",
        backgroundColor: 'rgba(0,0,0,0.1)', // 背景
        padding: [8, 10], //内边距
        extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.1);', //添加阴影
    },
    legend: {
        orient: 'vertical',
        // icon: 'circle',
        right: '20%',
        top: '40%',
        itemGap: 20,
        data: ['一般', '致命', '提示', '严重'],
        textStyle: {
            color: '#fft'
        }
    },
    series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: false,
            radius: [131, 132],
            center: center,
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 25,
            data: [{
                    value: 64,
                    name: '一般',
                    itemStyle: {
                        normal: {
                            color: color[0]
                        }
                    }
                },
                {
                    value: 36,
                    name: '',
                    tooltip: {
                        show: false
                    },
                    itemStyle: placeHolderStyle1
                },
            ]
        },
        {
            name: 'Line 1',
            type: 'pie',
            clockWise: false,
            radius: [120, 136],
            center: center,
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 25,
            data: [{
                    value: 64,
                    name: '一般',
                    itemStyle: {
                        normal: {
                            color: 'rgba(0,0,0,0)'
                        }
                    },
                    labelLine: {
                        show: false,
                        emphasis: {
                            show: false
                        }
                    }
                },
                { //画中间的图标
                    name: '',
                    value: 0,
                    label: {
                        show: true,
                        position: 'inside',
                        backgroundColor: color[0],
                        width: 10,
                        height: 10,
                        padding: 8,
                        borderRadius: 10,
                        borderWidth: 5,
                        borderColor: '#fff',
                    }
                },
                {
                    value: 36,
                    name: '',
                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(0,0,0,0)'
                        }
                    },
                    labelLine: {
                        show: false,
                        emphasis: {
                            show: false
                        }
                    }
                }
            ]
        },
        {
            name: 'Line 1',
            type: 'pie',
            clockWise: false,
            radius: [126, 136],
            center: center,
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 25,
            data: [{
                    value: 64,
                    name: '一般',
                    itemStyle: {
                        normal: {
                            color: color[0]
                        }
                    },
                    labelLine: {
                        show: false,
                        emphasis: {
                            show: false
                        }
                    }
                },
                {
                    value: 36,
                    name: '',
                    tooltip: {
                        show: false
                    },
                    itemStyle: placeHolderStyle,
                    labelLine: {
                        show: false,
                        emphasis: {
                            show: false
                        }
                    }
                }
            ]
        },
        {
            name: 'Line 2',
            type: 'pie',
            clockWise: false,
            radius: [106, 116],
            center: center,
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 30,
            data: [{
                    value: 56.7,
                    name: '致命',
                    itemStyle: {
                        normal: {
                            color: color[1]
                        }
                    }
                },
                {
                    value: 43.3,
                    name: '',
                    tooltip: {
                        show: false
                    },
                    itemStyle: placeHolderStyle
                },
            ]
        },
        {
            name: 'Line 2',
            type: 'pie',
            clockWise: false,
            radius: [100, 116],
            center: center,
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 30,
            data: [{
                    value: 56.7,
                    name: '致命',
                    itemStyle: {
                        normal: {
                            color: 'rgba(0,0,0,0)'
                        }
                    },
                },
                { //画中间的图标
                    value: 0,
                    label: {
                        show: true,
                        position: 'inside',
                        backgroundColor: color[1],
                        width: 10,
                        height: 10,
                        borderRadius: 10,
                        padding: 8,
                        borderWidth: 5,
                        borderColor: '#fff'
                    }
                },
                {
                    value: 43.3,
                    name: '',
                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(0,0,0,0)'
                        }
                    },
                },
            ]
        },
        {
            name: 'Line 3',
            type: 'pie',
            clockWise: false,
            radius: [86, 96],
            center: center,
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: -25,
            data: [{
                    value: 30,
                    name: '提示',
                    itemStyle: {
                        normal: {
                            color: color[2]
                        }
                    }
                },
                {
                    value: 70,
                    name: '',
                    tooltip: {
                        show: false
                    },
                    itemStyle: placeHolderStyle
                },
            ]
        },
        {
            name: 'Line 4',
            type: 'pie',
            clockWise: false,
            radius: [66, 76],
            center: center,
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 35,
            data: [{
                    value: 30,
                    name: '严重',
                    itemStyle: {
                        normal: {
                            color: color[3]
                        }
                    }
                },
                {
                    value: 70,
                    name: '',
                    tooltip: {
                        show: false
                    },
                    itemStyle: placeHolderStyle
                },
            ]
        },
        {
            name: 'Line 4',
            type: 'pie',
            clockWise: false,
            radius: [66, 76],
            center: center,
            itemStyle: dataStyle,
            hoverAnimation: false,
            startAngle: 35,
            data: [{
                    value: 30,
                    name: '严重',
                    itemStyle: {
                        normal: {
                            color: color[3]
                        }
                    }
                },
                {
                    value: 70,
                    name: '',
                    tooltip: {
                        show: false
                    },
                    itemStyle: placeHolderStyle
                },
            ]
        }
    ]
};