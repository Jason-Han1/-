var data = [];
var gauge_font = 50 // 中间字体大小
var gauge_value = 40
var xjradius = 120 // 整体大小
var centerY = 85
for (var i = 0; i <= 180; i++) {
    var t = i / 180 * Math.PI;
    var r = 10;
    data.push([r, i]);
}

// 获取页面服务器台数数据渲染页面
var xjpoint = 175 //控制小点的位置 0 - 180
var xjpointColor = [ // 控制小点的颜色
    'rgba(13,197,113,1)',
    'rgba(13,197,113,1)',
    'rgba(13,197,113,1)'
]
var lineCorrect = 1 //控制线条颜色的位置 0-1
var normalRate = 100 //正常率
var normalColor = "#393939"
var correct = 50
var sum = 100

lineCorrect = (correct / sum).toFixed(3)
xjpoint = lineCorrect * 175
normalRate = lineCorrect * 100

if (xjpoint >= 175) {
    xjpointColor = [ // 控制小点的颜色
        'rgba(13,197,113,1)',
        'rgba(13,197,113,1)',
        'rgba(13,197,113,1)'
    ]
    normalColor = "#393939"
} else if (xjpoint < 175) {
    xjpointColor = [ // 控制小点的颜色
        'rgba(250,0,0,1)',
        'rgba(250,0,0,1)',
        'rgba(250,0,0,1)',
    ]
    normalColor = "red"
}

option = {
    title: {
        show: true,
        text: '正常率',
        y: "75%",
        x: "center",
        textStyle: {
            fontWeight: 'normal',
            fontSize: 18,
            color: "#000",
        },
    },
    polar: {
        center: ['52%', centerY -1.3 + '%'], // 控制点的位置
        radius: xjradius + "%"
    },
    visualMap: {
        show: false,
        seriesIndex: 1,
        dimension: 1,
        type: 'continuous',
        min: 0,
        max: 180,
        text: ['High', 'Low'],
        realtime: false,
        calculable: true,
        inRange: {
            color: xjpointColor,
            symbolSize: [10, 20]
        }
    },
    angleAxis: {
        type: 'value',
        min: 0,
        max: 360,
        startAngle: 180,
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        },
    },
    radiusAxis: {
        min: 0,
        axisLine: {
            show: false
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        },
        axisTick: {
            show: false
        }
    },
    series: [{
            name: 'line',
            type: 'line',
            coordinateSystem: 'polar',
            showSymbol: false,
            lineStyle: {
                normal: {
                    opacity: 0,
                    width: 15,
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 1,
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: 'lightskyblue' // 0% 处的颜色
                        }, {
                            offset: 0.5,
                            color: 'yellow' // 100% 处的颜色
                        }, {
                            offset: 1,
                            color: 'orangered' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }
                }
            },
            data: data
        },
        {
            name: 'point',
            type: 'scatter',
            coordinateSystem: 'polar',
            symbolSize: 25,
            z: 12,
            hoverAnimation: true,
            cursor: 'pointer',
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 6,
                    shadowColor: 'rgba(0, 0, 0, 0.2)',
                    shadowBlur: 10
                },
            },
            data: [
                [9.65, xjpoint]
            ]
        },
        {
            name: "刻度",
            type: "gauge",
            title: {
                color: normalColor,
                fontSize: gauge_font,
                fontWeight: 700,
                offsetCenter: [0, "-30%"]
            },
            radius: xjradius + "%",
            center: ["50%", centerY + '%'],
            startAngle: 180, //刻度起始
            endAngle: 0, //刻度结束
            z: 11,
            axisTick: {
                show: false
            },
            splitLine: {
                length: 10, //刻度节点线长度
                lineStyle: {
                    width: 1,
                    color: "#50cca3"
                }
            },
            axisLabel: {
                show: false,
                color: '#',
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
                name: normalRate + '%'
            }]
        },
        {
            name: '内圈', //刻度背景
            type: 'gauge',
            z: 10,
            radius: xjradius + "%",
            startAngle: 180,
            endAngle: 0,
            center: ["50%", centerY + '%'], //整体的位置设置
            axisLine: { // 坐标轴线
                lineStyle: { // 属性lineStyle控制线条样式
                    color: [
                        [lineCorrect, '#83edbe'],
                        [1, "#f83740"]
                    ],
                    width: 10,
                    opacity: 1, //刻度背景宽度

                }
            },
            markArea: {
                show: true,
                silent: true,
            },
            splitLine: {
                show: false
            },
            data: [{
                show: false,
                value: '80'
            }], //作用不清楚
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
            name: '内层圈',
            type: 'gauge',
            z: 6,
            radius: xjradius - 30 + "%",
            startAngle: 180,
            endAngle: 0,
            center: ["50%", centerY + '%'], //整体的位置设置
            axisLine: {
                lineStyle: { // 属性lineStyle控制线条样式//控制外圈位置
                    // color:"#000",
                    color: [
                        [0.5, '#c4d8f5'],
                        [1, '#c4d8f5']
                    ],
                    width: 3,
                    opacity: 1, //控制外圈位置，颜色，宽度，透明度
                }
            },
            axisTick: {
                show: false
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
            data: [{
                show: false,
                value: '10'
            }],
            detail: {
                show: 0
            }
        },
        {
            name: 'point',
            type: "effectScatter",
            coordinateSystem: "polar",
            zlevel: 0,
            z: 14,
            rippleEffect: {
                //涟漪特效
                period: 4, //动画时间，值越小速度越快
                brushType: "stroke", //波纹绘制方式 stroke, fill
                scale: 5 //波纹圆环最大限制，值越大波纹越大
            },
            label: {
                normal: {
                    show: true,
                    position: "right", //显示位置
                    offset: [5, 0], //偏移设置
                    formatter: "{b}", //圆环显示文字,
                    color: "red"
                },
                emphasis: {
                    show: true
                }
            },
            symbol: "circle",
            symbolSize: 12,
            itemStyle: {
                normal: {
                    show: true,
                    color: xjpointColor[1]
                }
            },

            data: [
                [9.65, xjpoint]
            ]
        },
    ],
    animationDuration: 2000
};