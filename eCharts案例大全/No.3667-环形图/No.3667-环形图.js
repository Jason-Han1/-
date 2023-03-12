option = {
    backgroundColor: '#02071C',
    title: {
        text: '75',
        textStyle: {
            color: '#00FFF6',
            fontSize: 23
        },
        left: 'center',
        top: 'center'
    },
    angleAxis: {
        max: 100, // 满分
        clockwise: true, // 顺时针
        // 隐藏刻度线
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    radiusAxis: {
        type: 'category',
        // 隐藏刻度线
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    polar: {
        center: ['50%', '50%'],
        radius: '100%' //图形大小
    },
    series: [{
            type: 'pie',
            zlevel: 2,
            silent: true,
            radius: ['60%', '59%'],
            startAngle: 180,
            hoverAnimation: false,
            // animation:false,    //charts3 no
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                    offset: 0,
                    color: '#9933FF' // 0% 处的颜色
                }, {
                    offset: 1,
                    color: '#00CCFF' // 100% 处的颜色
                }],
                global: false // 缺省为 false
            },
            label: {
                normal: {
                    show: false
                },
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: _pie3()
        },

        {
            type: 'bar',
            data: [{
                name: '进度',
                value: 75,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#171940'
                        }, {
                            offset: 1,
                            color: '#1D44C4'
                        }])
                    }
                },
            }],
            coordinateSystem: 'polar',
            roundCap: true,
            barWidth: 10,
            barGap: '-100%', // 两环重叠
            z: 2,
        }, { // 灰色环
            type: 'bar',
            data: [{
                value: 100,
                itemStyle: {
                    //color: '#404764',
                    color: '#060315',
                    shadowColor: 'rgba(0, 0, 0, 0.2)',
                    shadowBlur: 5,
                    shadowOffsetY: 2
                }
            }],
            coordinateSystem: 'polar',
            roundCap: true,
            barWidth: 10,
            barGap: '-100%', // 两环重叠
            z: 1
        }
    ]
};

function _pie3() {
    let dataArr = [];
    for (var i = 0; i < 2; i++) {
        dataArr.push({
            value: 1, //黑色间隔
            itemStyle: {
                normal: {
                    color: "rgba(88,142,197,0)",
                    borderWidth: 0,
                    borderColor: "rgba(0,0,0,0)"
                }
            }
        }, {
            value: 4,
            itemStyle: {
                normal: {
                    color: '#0218CE',
                    borderWidth: 0,
                    borderColor: "rgba(0,0,0,0)"
                }
            }
        }, {
            value: 40,
            itemStyle: {
                normal: {
                    color: '#0D0422',
                    borderWidth: 0,
                    borderColor: "rgba(0,0,0,0)"
                }
            }
        }, {
            value: 4,
            itemStyle: {
                normal: {
                    color: '#0218CE',
                    borderWidth: 0,
                    borderColor: "rgba(0,0,0,0)"
                }
            }
        }, {
            value: 1, //黑色间隔
            itemStyle: {
                normal: {
                    color: "rgba(88,142,197,0)",
                    borderWidth: 0,
                    borderColor: "rgba(0,0,0,0)"
                }
            }
        })
    }
    return dataArr;
}

function _pie2() {
    let dataArr = [];
    let _color = {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [{
            offset: 0,
            color: '#9933FF' // 0% 处的颜色
        }, {
            offset: 1,
            color: '#00CCFF' // 100% 处的颜色
        }],
        global: false // 缺省为 false
    }
    for (var i = 0; i < 16; i++) {
        if (i % 4 === 0) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 5,
                itemStyle: {
                    normal: {
                        //color: "rgba(88,142,197,0.5)",
                        color: '#0218CE',
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        } else if (i % 4 === 1) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 2,
                itemStyle: {
                    normal: {
                        color: "rgba(88,142,197,0)",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        } else if (i % 4 === 2) {
            dataArr.push({
                name: (i + 1).toString(),
                value: 20,
                itemStyle: {
                    normal: {
                        //color: "rgba(88,142,197,0.2)",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        } else {
            dataArr.push({
                name: (i + 1).toString(),
                value: 2,
                itemStyle: {
                    normal: {
                        //color: "rgba(0,0,0,0)",
                        color: "rgba(88,142,197,0)",
                        borderWidth: 0,
                        borderColor: "rgba(0,0,0,0)"
                    }
                }
            })
        }

    }
    return dataArr

}