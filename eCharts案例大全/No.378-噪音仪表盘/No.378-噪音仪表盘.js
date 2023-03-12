var dataArr = [{
    value: 120,
    name: '噪音检测'
}];
var color = new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
        offset: 0,
        color: '#5CF9FE' // 0% 处的颜色
    },
    {
        offset: 0.17,
        color: '#468EFD' // 100% 处的颜色
    },
    {
        offset: 0.9,
        color: '#468EFD' // 100% 处的颜色
    },
    {
        offset: 1,
        color: '#5CF9FE' // 100% 处的颜色
    }
]);
var colorSet = [
    [1, color],
    // [0.91, color],
    // [1, '#FFF']
];
var rich = {
    white: {
        fontSize: 50,
        color: '#fff',
        fontWeight: '500',
        padding: [-150, 0, 0, 0]
    },
    bule: {
        fontSize: 70,
        fontFamily: 'DINBold',
        color: '#fff',
        fontWeight: '700',
        padding: [-120, 0, 0, 0],
    },
    radius: {
        width: 350,
        height: 80,
        // lineHeight:80,
        borderWidth: 1,
        borderColor: '#0092F2',
        fontSize: 50,
        color: '#fff',
        backgroundColor: '#1B215B',
        borderRadius: 20,
        textAlign: 'center',
    },
    size: {
        height: 400,
        padding: [100, 0, 0, 0]
    }
}
option = {
    backgroundColor: '#0E1327',
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },

    series: [
        {
            type: 'gauge',
            name: '外层辅助',
            radius: '74%',
            startAngle: '225',
            endAngle: '-45',
            splitNumber: '120',
            pointer: {
                show: false
            },
            detail: {
                show: false,
            },
            data: [{
                value: 1
            }],
            // data: [{value: 1, name: 90}],
            title: {
                show: true,
                offsetCenter: [0, 30],
                textStyle: {
                    color: '#fff',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 20,
                }
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: [
                        [1, '#00FFFF']
                    ],
                    width: 2,
                    opacity: 1
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                length: 20,
                lineStyle: {
                    color: '#051932',
                    width: 0,
                    type: 'solid',
                },
            },
            axisLabel: {
                show: false
            }
        },
        {
            type: 'gauge',
            radius: '70%',
            startAngle: '225',
            endAngle: '-45',
            pointer: {
                show: true
            },
            detail: {
                formatter: function(value) {
                    var num = Math.round(value);
                    return '{bule|dB}{white|}' + '{size|' + '}';
                },
                rich: rich,
                "offsetCenter": ['0%', "55%"],
            },
            data: dataArr,
            title: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: colorSet,
                    width: 25,
                    // shadowBlur: 15,
                    // shadowColor: '#B0C4DE',
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: 1
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
                length: 25,
                lineStyle: {
                    color: '#00377a',
                    width: 2,
                    type: 'solid',
                },
            },
            axisLabel: {
                show: false
            },
            animationDuration: 4000,
        },
        {
            name: '灰色内圈', //刻度背景
            type: 'gauge',
            z: 2,
            radius: '60%',
            startAngle: '225',
            endAngle: '-45',
            //center: ["50%", "75%"], //整体的位置设置
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    color: [
                        [1, '#018DFF']
                    ],
                    fontSize: 20,
                    width: 2,
                    opacity: 1, //刻度背景宽度
                }
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            pointer: {
                show: false
            },
            axisTick: {
                show: false
            },
            detail: {
                show: 0
            }
        },
        {
            name: "白色圈刻度",
            type: "gauge",
            radius: "60%",
            startAngle: 225, //刻度起始
            endAngle: -45, //刻度结束
            min: 0,
            max: 120,
            splitNumber: 6,
            z: 4,
            axisTick: {
                show: false
            },
            splitLine: {
                length: 16, //刻度节点线长度
                lineStyle: {
                    width: 2,
                    color: '#018DFF'
                } //刻度节点线
            },
            axisLabel: {
                color: 'rgba(255,255,255,8)',
                fontSize: 24,
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
        { //内圆
            type: 'pie',
            radius: '40%',
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
            animationType: "scale"
        },
        { //外圆
            type: 'pie',
            radius: '85%',
            center: ['50%', '50%'],
            z: 0,
            itemStyle: {
                color: '#141C33',
            },
            hoverAnimation: false,
            label: {
                show: false,
            },
            tooltip: {
                show: false
            },
            data: [120],
            animationType: "scale"
        }
    ]
};