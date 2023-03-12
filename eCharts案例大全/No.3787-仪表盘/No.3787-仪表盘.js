// 控制 仪表盘颜色
var highlight = new echarts.graphic.LinearGradient(0, 1, 1, 1, [{
    offset: 0.2,
    color: '#008b48' // 0% 处的颜色
}, {
    offset: 0.3,
    color: '#64c128' // 100% 处的颜色
}, {
    offset: 0.4,
    color: '#fadd1d' // 100% 处的颜色 b6fd62
}, {
    offset: 0.8,
    color: '#ffaa01' // 100% 处的颜色 fe1440
},
    {
        offset: 1,
        color: '#ff0101' // 100% 处的颜色 fe1440
    },
]);
// 最外围蓝色的刻度线的颜色控制
var highlight2 = new echarts.graphic.LinearGradient(0, 1, 1, 1, [
        {
        offset: 0.5,
        color: '#B0E0F3',
    },
        {
            offset: 1,
            color: '#4153BC',
        }
    ]
)
// 一些小配置~不重要
var gauge = {
    startAngle: 255,
    endAngle: -45,
    radius: '75%',
    // 控制刻度线颜色
    color: [
        [0.2, '#008b48'],
        [0.4, '#64c128'],
        [0.5, '#fadd1d'],
        [0.7, '#ffaa01'],
        [1, '#ff0101'],
    ]
}
option = {
    series: [
        // 中心圆
        {
            tooltip: {
                show: false
            },
            name: 'wrap',
            type: 'pie',
            hoverAnimation: false,
            legendHoverLink: false,
            center: ['50%', '50%'],
            radius: ['0%', '11%'],
            z: 5,
            label: {
                "normal": {
                    "show": false,
                    "position": 'center'
                },
                "emphasis": {
                    "show": false
                }
            },
            labelLine: {
                "normal": {
                    "show": false
                }
            },
            data: [{
                value: 100,
                itemStyle: {
                    normal: {
                        color: "#000a2c",
                        shadowBlur: 10,
                        shadowColor: 'rgba(255,255,255, 0.9)',
                    },
                    emphasis: {
                        color: "#000a2c"
                    },

                }
            }]
        },
        // 外层辅助线
        {
            type: 'gauge',
            name: '外层辅助',
            radius: '80%',
            pointer: {
                show: false
            },
            startAngle: 259.9999,
            endAngle: -100,
            detail: {
                show: false,
                offsetCenter: [-30, '90%'],
                fontSize: 15,
                color: '#fff'
            },
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    color: [
                        [
                            1, highlight2
                        ],
                    ],
                    width: 3,
                    shadowColor: '#4153BC', //默认透明
                    shadowBlur: 26,
                    opacity: 1,
                }

            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
            },
            axisLabel: {
                show: false
            }
        },
        // 渐变线条！
        {
            type: 'gauge', // 仪表盘
            // center: item.pos,
            radius: gauge.radius,
            splitNumber: 10, // 仪表盘刻度线上显示数字
            min: 0, // 仪表盘最大值
            max: 100, // 仪表盘最小值
            axisLine: {
                show: true,
                lineStyle: {
                    width: 3,
                    shadowBlur: 0, // 外部渐变色阴影色
                    color: [
                        [1, highlight]
                    ]

                }
            },
            // 刻度线
            axisTick: {
                show: false,
                inside: true,
                lineStyle: {
                    color: highlight,
                    width: 1
                },
                length: 15,
                splitNumber: 1
            },
            // 与splitNumber配合，对应数字出现的刻度线。
            splitLine: {
                show: false,
                length: -14,
                lineStyle: {
                    color: highlight
                }
            },
            // 与splitNumber配合。
            axisLabel: {
                show: false,
                distance: -25, // 外部刻度线上文字的距离
                textStyle: {
                    color: highlight, // 控制其文字颜色，应该不支持渐变色颜色，故还是黑色
                    fontSize: '14',
                    fontWeight: 'bold'
                }
            },
            pointer: {
                show: 0,
            },
            detail: {
                show: 0
            }
        },
        // 刻度线控制 与 【高】【文本】的控制
        {
            name: '本期',
            type: 'gauge',
            radius: gauge.radius,
            min: 0,
            max: 0.16,
            center: ['50%', '50%'],
            data: [{
                value: 0,
                name: '本期'
            }],
            splitNumber: 10, //刻度数量
            z: 1,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 0,
                    color: gauge.color,
                }
            },
            axisLabel: {
                show: true,
                color: '#fff',
                fontSize: 14,
                padding: [0, 0, -25, 0],
                distance: 5,
                formatter: function(params) {
                    var value = params.toFixed(2)
                    if (value == 0) {
                        return `低`
                    } else if (value == 0.16) {
                        return '高'
                    }
                }
            }, //刻度标签。
            axisTick: {
                splitNumber: 1,
                show: true,
                lineStyle: {
                    color: 'auto',
                    width: 2
                },
                length: 10,
            }, //刻度样式
            splitLine: {
                show: true,
                length: 10,
                lineStyle: {
                    color: 'auto',
                    width: 4
                }
            },
            itemStyle: {
                "normal": {
                    "color": "auto" //指针颜色
                }
            },
            pointer: {
                width: 8,
                length: '60%',
            },
            detail: {
                show: false,
                formatter: function(params) {
                    return (params * 100).toFixed(0) + '%'
                },
                fontSize: 50,
                color: "#fff",
                offsetCenter: ['0%', '-35%']
            },
            title: {
                show: false,
                offsetCenter: ['0', '-60%'],
                fontSize: 40,
                color: "#fff",
            },
        }
    ]
};