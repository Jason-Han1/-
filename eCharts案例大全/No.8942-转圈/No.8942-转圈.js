var cl = 0 // 循环小球初始化

ball_border = 85 // 外边框大小
border_width = 1.5 // 外圈宽度
border_color = "#b0cdf2" // 外边框颜色 红色 "#ff8377"
font_color = "#333"

inside_track = 65 // 内圈大小
inside_width = 3.5 // 内圈宽度

// 判断屏幕宽度
// if ($(window).width() < 1400) {
//     inside_width = 10
// }

// 正常率低于90就显示红色
var nml = 100
var ok = 50
var bl = 0
bl = ok / nml * 100
bl = bl.toFixed(1)
if (bl < 90) {
    border_color = "#ff8377"
    font_color = "#ff8377"
}

var xjpointColor = [ // 控制小点的颜色
    'rgba(13,197,113,1)',
    'rgba(13,197,113,1)',
    'rgba(13,197,113,1)'
]

option = {
    backgroundColor: "#fff",
    color: border_color,
    title: {
        text: '\n{a|正常率\n\n}' + "{c|" + bl + "}" + "{b|%}\n",
        textStyle: {
            color: font_color,
            rich: {
                a: {
                    color: "#333",
                    fontSize: 14
                },
                b: {
                    fontSize: 18
                },
                c: {
                    fontSize: 35,
                    fontWeight: 600
                }
            }
        },
        x: 'center',
        y: 'center',
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} {c} ({d}%)"
    },
    polar: {
        center: ['50.35%', 50 + '%'],
        radius: ball_border + "%"
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
        max: 180,
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
    series: [

        {
            name: "覆盖外边框",
            type: "gauge",
            radius: ball_border + "%",
            startAngle: 0,
            endAngle: 359.9,
            splitNumber: 100,
            axisTick: {
                show: false
            },
            splitLine: {
                length: 20,
                lineStyle: {
                    width: 2,
                    color: "#fff"
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
        }, {
            name: '外边框',
            type: 'pie',
            radius: [ball_border - 1 - border_width + "%", ball_border - 1 + "%"],
            silent: true,
            z: 0,
            labelLine: {
                normal: {
                    show: false,
                }
            },
            data: [{
                value: 150,
                itemStyle: {
                    normal: {
                        show: true,
                        color: "#b0cdf2",
                        backgroundColor: "red"
                    }
                }
            }]
        },
        {
            name: "内圈",
            type: "pie",
            radius: [inside_track - inside_width + "%", inside_track + "$"],
            hoverAnimation: true,
            label: {
                normal: {
                    show: false,
                    position: "center"
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            z: 2,
            zlevel: 0,
            itemStyle: {
                borderWidth: 0,
            },
            data: [{
                    value: bl,
                    name: "",
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "#b0cdf2",
                        }
                    }
                },
                {
                    value: 100 - bl,
                    name: "",
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "#fb4b4b",
                        }
                    }
                },
            ]
        },
        {
            // 还没调试出来
            name: "内圈",
            type: "pie",
            radius: [65 + "%", 70 + "$"],
            silent: true,
            label: {
                normal: {
                    show: false,
                    position: "center"
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            z: 3,
            zlevel: 0,
            itemStyle: {
                borderWidth: 0,
            },
            data: [{
                    value: bl,
                    name: "",
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "rgba(0,0,0,0)",
                            border: 0
                        }
                    }
                },
                {
                    value: 100 - bl,
                    name: "",
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: "#fb4b4b", //#ff8377
                        }
                    }
                },
            ]
        },
        {
            // 给小球定位 不能删除
            name: 'line',
            type: 'line',
            coordinateSystem: 'polar',
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 15,
                    opacity: 0,
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
            type: "effectScatter",
            coordinateSystem: "polar",
            zlevel: 0,
            z: 14,
            rippleEffect: {
                //涟漪特效
                period: 4, //动画时间，值越小速度越快
                brushType: "stroke", //波纹绘制方式 stroke, fill
                scale: 4 //波纹圆环最大限制，值越大波纹越大
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
            symbolSize: 11,
            itemStyle: {
                normal: {
                    show: true,
                    color: border_color //408def  b0cdf2
                }
            },

            data: [
                [9.9, cl]
            ]
        },
    ]
};


setInterval(function() {
    if (cl >= 180) {
        cl = 0
    }
    cl = cl + 0.2

    sdoption["series"][sdoption["series"].length - 1].data[0][1] = cl

    sdChart.setOption(sdoption);

}, 50)