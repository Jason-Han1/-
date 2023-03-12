var placeHolderStyle = {
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
};


var dataStyle = {
    normal: {
        formatter: '超越{c}%',
        position: 'center',
        show: true,
        textStyle: {
            fontSize: '30',
            fontWeight: 'normal',
            color: '#AAAFC8'
        }
    }
};


option = {
    backgroundColor: "#20263f",
    title: [{
        text: 'CPU',
        left: '20%',
        top: '60%',
        textAlign: 'center',
        textStyle: {
            fontWeight: 'normal',
            fontSize: '20',
            color: '#fff',
            textAlign: 'center',
        },
    }, {
        text: '内存',
        left: '50%',
        top: '60%',
        textAlign: 'center',
        textStyle: {
            color: '#fff',
            fontWeight: 'normal',
            fontSize: '20',
            textAlign: 'center',
        },
    }, {
        text: '硬盘',
        left: '80%',
        top: '60%',
        textAlign: 'center',
        textStyle: {
            color: '#fff',
            fontWeight: 'normal',
            fontSize: '20',
            textAlign: 'center',
        },
    }],

    //第一个图表
    series: [{
            type: 'pie',
            hoverAnimation: false, //鼠标经过的特效
            radius: ['25%', '30%'],
            center: ['20%', '50%'],
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
                    value: 100,
                    itemStyle: {
                        normal: {
                            color: ['rgba(176, 212, 251, 0.3)']
                        }
                    },
                }, {
                    value: 35,
                    itemStyle: placeHolderStyle,
                },

            ]
        },
        //上层环形配置
        {
            type: 'pie',
            hoverAnimation: false, //鼠标经过的特效
            radius: ['25%', '30%'],
            center: ['20%', '50%'],
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
                    "itemStyle": {
                        "normal": {
                            "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                "offset": 0,
                                "color": '#00cefc'
                            }, {
                                "offset": 1,
                                "color": '#367bec'
                            }]),
                        }
                    },
                    label: dataStyle,
                }, {
                    value: 35,
                    itemStyle: placeHolderStyle,
                },

            ]
        },
    ]
};