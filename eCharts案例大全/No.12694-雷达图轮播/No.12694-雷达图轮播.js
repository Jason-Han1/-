var radius = '50%';
var leiDaCenter = ['50%', '58%'];
var leiDadata = [{
    name: "管理规范",
    max: 10,
    pre: 2
}, {
    name: "计算能力",
    max: 10,
    pre: 3
}, {
    name: "存储能力",
    max: 10,
    pre: 3
}, {
    name: "消防安全",
    max: 10,
    pre: 5.5
}, {
    name: "机房环境",
    max: 10,
    pre: 5
}, {
    name: "运维人员",
    max: 10,
    pre: 3
}, {
    name: "容灾能力",
    max: 10,
    pre: 2
}]
var radarAllDatas = [
    [{
        value: [6, 1, 5, 3, 9, 2, 3],
        name: "电信云机房"
    }],
    [{
        value: [1, 5, 8, 3, 5, 4, 5],
        name: "中心机房"
    }],
    [{
        name: "视通机房",
        value: [7, 3, 9, 3, 1, 4, 2]
    }]
]
var colorListRadar = ["#00faf7", "#f19049", "#c6fc5e"];
var leiDaArr = []; //雷达图
var leiDaXzhou = []; //轮播的名称
var legendLeiDa = []; //用于装legend的
var displayLeiDaAllTitle = []; //显示雷达图的参数
for (let z = 0; z < radarAllDatas.length; z++) {
    leiDaXzhou.push(radarAllDatas[z][0].name);
    legendLeiDa.push({
        name: radarAllDatas[z][0].name,
        icon: "circle"
    });
    leiDaArr.push({
        name: radarAllDatas[z][0].name,
        type: 'radar',
        symbol: "circle",
        symbolSize: 10,
        itemStyle: {
            normal: {
                color: colorListRadar[z],
            }
        },
        areaStyle: {
            normal: {
                color: colorListRadar[z],
                opacity: 0.6
            },
        },
        lineStyle: {
            normal: {
                color: colorListRadar[z],
                type: 'solid',
                width: 3,
                opacity: 1
            }
        },
        data: radarAllDatas[z]
    })
}

option = {
    baseOption: {
        timeline: {
            show: false,
            type: 'slider',
            axisType: 'category',
            bottom: '0',
            currentIndex: 0, //0 时表示当前选中项为 timeline.data[0]（即使用 options[0]
            autoPlay: true, //是否自动播放
            loop: true,
            rewind: true, //反向轮播
            realtime: true, //拖动圆点的时候，是否实时更新视图。
            controlPosition: 'left',
            label: {
                normal: {
                    color: '#2998ff',
                },
            },
            itemStyle: {
                normal: {
                    color: '#fff',
                    borderColor: '#2998ff',
                    borderWidth: 2,
                }
            },
            checkpointStyle: { //『当前项』（checkpoint）的图形样式
                color: 'rgb(215, 0, 0)',
            },
            lineStyle: {
                show: true, //false 不显示轴线
                color: '#2998ff',
            },
            controlStyle: { //控制按钮的样式
                show: true,
                showPrevBtn: true,
                showNextBtn: true,
                itemGap: 50,
                itemSize: 36,
                normal: {
                    color: 'rgb(215, 0, 0)',
                    borderColor: 'rgb(215, 0, 0)',
                },
                emphasis: {
                    color: 'rgb(215, 0, 0)',
                    borderColor: 'rgb(215, 0, 0)',
                },
            },
            data: leiDaXzhou,
        },
        backgroundColor:"#013d5a",
        legend: {
            show: true,
            orient: 'vertical',
            top: '10%',
            left: '0.5%',
            itemWidth: 10,
            textStyle: {
                fontSize: 18,
                color: "#fff"
            },
            data: legendLeiDa
        },
        radar: [{
                indicator: leiDadata,
                radius: radius,
                center: leiDaCenter,
                startAngle: 126,
                splitNumber: 4,
                shape: 'circle',
                name: {
                    show: true,
                    fontSize: 22,
                    color: "#fff",
                    formatter: function(value, indicator) {
                        return indicator.name + ' ' + indicator.pre + '分'
                    },
                },
                nameGap: 25,
                splitArea: {
                    areaStyle: {
                        color: 'transparent',
                        shadowBlur: 10
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#0095B0'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(0,155,226,0.6)'
                    }
                },
                indicator: leiDadata
            },

        ],

        series: leiDaArr //series结束
    },
    options: [{
            radar: [{
                indicator: [{
                        name: "管理规范",
                        max: 10,
                        pre: 8
                    }, {
                        name: "计算能力",
                        max: 10,
                        pre: 8.5
                    }, {
                        name: "存储能力",
                        max: 10,
                        pre: 8.5
                    },
                    {
                        name: "消防安全",
                        max: 10,
                        pre: 8.5
                    }, {
                        name: "机房环境",
                        max: 10,
                        pre: 9
                    }, {
                        name: "运维人员",
                        max: 10,
                        pre: 7
                    }, {
                        name: "容灾能力",
                        max: 10,
                        pre: 8
                    }
                ]
            }],
            series: [{
                z: 1,
                itemStyle: {
                    normal: {
                        opacity: 0.2
                    }
                },
                areaStyle: {
                    normal: {
                        opacity: 0.2
                    }
                },
                lineStyle: {
                    normal: {
                        opacity: 0.2
                    }
                },
                data: [{
                    value: [8, 8.5, 8.5, 8.5, 9, 7, 8]
                }]
            }, {
                z: 1,
                itemStyle: {
                    normal: {
                        opacity: 0.2
                    }
                },
                areaStyle: {
                    normal: {
                        opacity: 0.2
                    }
                },
                lineStyle: {
                    normal: {
                        opacity: 0.2
                    }
                },
                data: [{
                    value: [7, 7, 6, 6, 6, 7.5, 5]
                }]
            }, {
                z: 3,
                itemStyle: {
                    normal: {
                        opacity: 1
                    }
                },
                areaStyle: {
                    normal: {
                        opacity: 0.6
                    }
                },
                lineStyle: {
                    normal: {
                        opacity: 1
                    }
                },
                data: [{
                    value: [2, 3, 3, 5.5, 5, 3, 2]
                }]
            }]
        },
        {
            radar: [{
                indicator: [{
                        name: "管理规范",
                        max: 10,
                        pre: 7
                    }, {
                        name: "计算能力",
                        max: 10,
                        pre: 7
                    }, {
                        name: "存储能力",
                        max: 10,
                        pre: 6
                    },
                    {
                        name: "消防安全",
                        max: 10,
                        pre: 6
                    }, {
                        name: "机房环境",
                        max: 10,
                        pre: 6
                    }, {
                        name: "运维人员",
                        max: 10,
                        pre: 7.5
                    }, {
                        name: "容灾能力",
                        max: 10,
                        pre: 5
                    }
                ]
            }],
            series: [{
                z: 1,
                itemStyle: {
                    normal: {
                        opacity: 0.2
                    }
                },
                areaStyle: {
                    normal: {
                        opacity: 0.2
                    }
                },
                lineStyle: {
                    normal: {
                        opacity: 0.2
                    }
                },
                data: [{
                    value: [8, 8.5, 8.5, 8.5, 9, 7, 8]
                }]
            }, {
                z: 3,
                itemStyle: {
                    normal: {
                        opacity: 1
                    }
                },
                areaStyle: {
                    normal: {
                        opacity: 0.6
                    }
                },
                lineStyle: {
                    normal: {
                        opacity: 1
                    }
                },
                data: [{
                    value: [7, 7, 6, 6, 6, 7.5, 5]
                }]
            }, {
                z: 1,
                itemStyle: {
                    normal: {
                        opacity: 0.2
                    }
                },
                areaStyle: {
                    normal: {
                        opacity: 0.2
                    }
                },
                lineStyle: {
                    normal: {
                        opacity: 0.2
                    }
                },
                data: [{
                    value: [2, 3, 3, 5.5, 5, 3, 2]
                }]
            }]
        },
        {
            radar: [{
                indicator: [{
                        name: "管理规范",
                        max: 10,
                        pre: 2
                    }, {
                        name: "计算能力",
                        max: 10,
                        pre: 3
                    }, {
                        name: "存储能力",
                        max: 10,
                        pre: 3
                    },
                    {
                        name: "消防安全",
                        max: 10,
                        pre: 5.5
                    }, {
                        name: "机房环境",
                        max: 10,
                        pre: 5
                    }, {
                        name: "运维人员",
                        max: 10,
                        pre: 3
                    }, {
                        name: "容灾能力",
                        max: 10,
                        pre: 2
                    }
                ]
            }],
            series: [{
                z: 3,
                itemStyle: {
                    normal: {
                        opacity: 1
                    }
                },
                areaStyle: {
                    normal: {
                        opacity: 0.6
                    }
                },
                lineStyle: {
                    normal: {
                        opacity: 1
                    }
                },
                data: [{
                    value: [8, 8.5, 8.5, 8.5, 9, 7, 8]
                }]
            }, {
                z: 1,
                itemStyle: {
                    normal: {
                        opacity: 0.2
                    }
                },
                areaStyle: {
                    normal: {
                        opacity: 0.2
                    }
                },
                lineStyle: {
                    normal: {
                        opacity: 0.2
                    }
                },
                data: [{
                    value: [7, 7, 6, 6, 6, 7.5, 5]
                }]
            }, {
                z: 1,
                itemStyle: {
                    normal: {
                        opacity: 0.2
                    }
                },
                areaStyle: {
                    normal: {
                        opacity: 0.2
                    }
                },
                lineStyle: {
                    normal: {
                        opacity: 0.2
                    }
                },
                data: [{
                    value: [2, 3, 3, 5.5, 5, 3, 2]
                }]
            }]
        },
    ]
}