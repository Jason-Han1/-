var color = [{
    color: '#2EE67D',
    step: 4
}, {
    color: '#FFD54A',
    step: 5
}];
var colors = color.map(({
    color,
    step
}, i) => {
    return new gradientColor(color, '#ffffff', step);
});

//获取两颜色区间渐变色
function gradientColor(startColor, endColor, step) {
    const startRGB = hexToRgb(startColor), //转换为rgb数组模式
        startR = startRGB.r,
        startG = startRGB.g,
        startB = startRGB.b,
        endRGB = hexToRgb(endColor),
        endR = endRGB.r,
        endG = endRGB.g,
        endB = endRGB.b,
        sR = (endR - startR) / step, //总差值
        sG = (endG - startG) / step,
        sB = (endB - startB) / step;
    var colorSteps = [];
    for (var i = 0; i < step; i++) {
        var hex = rgbToHex('rgb(' + parseInt((sR * i + startR)) + ',' + parseInt((sG * i + startG)) + ',' + parseInt((sB * i + startB)) + ')');
        colorSteps.push(hex);
    }

    function hexToRgb(hex, opacity = 1) {
        return {
            r: parseInt("0x" + hex.slice(1, 3)),
            g: parseInt("0x" + hex.slice(3, 5)),
            b: parseInt("0x" + hex.slice(5, 7)),
            rgb: "rgb(" + parseInt("0x" + hex.slice(1, 3)) + "," + parseInt("0x" + hex.slice(3, 5)) + "," + parseInt("0x" + hex.slice(5, 7)) + ")",
            rgba: "rgba(" + parseInt("0x" + hex.slice(1, 3)) + "," + parseInt("0x" + hex.slice(3, 5)) + "," + parseInt("0x" + hex.slice(5, 7)) + "," + opacity + ")",
        };
    }

    function rgbToHex(color) {
        var rgb = color.split(',')
        var r = parseInt(rgb[0].split('(')[1])
        var g = parseInt(rgb[1])
        var b = parseInt(rgb[2].split(')')[0])
        var hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        return hex
    }
    return colorSteps;
}

option = {
    backgroundColor: '#161C27',
    tooltip: {
        trigger: 'item'
    },
    title: [{
        text: '病理分型',
        subtext: '总计 1015',
        top: '5%',
        left: '8%',
        textAlign: 'center',
        textStyle: {
            color: '#fff'
        },
        subtextStyle: {
            color: '#fff'
        }
    }, {
        text: '分期',
        subtext: '总计 862',
        top: '5%',
        left: '67%',
        textAlign: 'center',
        textStyle: {
            color: '#fff'
        },
        subtextStyle: {
            color: '#fff'
        }
    }, {
        text: '转移',
        subtext: '总计 1015',
        left: '8%',
        top: '53%',
        textAlign: 'center',
        textStyle: {
            color: '#fff'
        },
        subtextStyle: {
            color: '#fff'
        }
    }, {
        text: '治疗方案',
        subtext: '总计 672',
        left: '67%',
        top: '53%',
        textAlign: 'center',
        textStyle: {
            color: '#fff'
        },
        subtextStyle: {
            color: '#fff'
        }
    }],
    grid: [{
            left: '35%',
            top: '15%',
            width: '220px',
            height: '200px'
        },
        {
            left: '35%',
            top: '65%',
            width: '220px',
            height: '200px'
        },
    ],
    xAxis: [{
            type: 'value',
            gridIndex: 0,
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
            axisLine: {
                show: false,
            },
        },
        {
            type: 'category',
            gridIndex: 1,
            data: ['骨', '多发', '肺', '肝', '其他'],
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                color: '#8597A5'
            },
        }
    ],
    yAxis: [{
            type: 'category',
            gridIndex: 0,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: true,
                color: '#8597A5'
            },
            data: ['尿路上皮癌', '原位癌', '鳞状细胞癌', '腺癌'],
        },
        {
            type: 'value',
            gridIndex: 1,
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            },
        }
    ],
    series: [{
            name: '病理分型',
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: [{
                    value: 1048,
                    name: '尿路上皮癌',
                    itemStyle: {
                        color: colors[0][0]
                    }
                },
                {
                    value: 735,
                    name: '原位癌',
                    itemStyle: {
                        color: colors[0][1]
                    }
                },
                {
                    value: 580,
                    name: '鳞状细胞癌',
                    itemStyle: {
                        color: colors[0][2]
                    }
                },
                {
                    value: 484,
                    name: '腺癌',
                    itemStyle: {
                        color: colors[0][3]
                    }
                },
            ]
        },
        {
            name: '转移',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: [{
                    value: 1048,
                    name: '骨',
                    itemStyle: {
                        color: colors[1][0]
                    }
                },
                {
                    value: 1735,
                    name: '多发',
                    itemStyle: {
                        color: colors[1][1]
                    }
                },
                {
                    value: 580,
                    name: '肺',
                    itemStyle: {
                        color: colors[1][2]
                    }
                },
                {
                    value: 484,
                    name: '肝',
                    itemStyle: {
                        color: colors[1][3]
                    }
                },
                {
                    value: 1484,
                    name: '其他',
                    itemStyle: {
                        color: colors[1][4]
                    }
                },
            ]
        },
        {
            name: '病理分型',
            type: 'pie',
            radius: [60, 100],
            center: ['14%', '27%'],
            color: colors[0],
            label: {
                show: false,
                position: 'center'
            },
            itemStyle: {
                borderRadius: 5,
                borderColor: '#161C27',
                borderWidth: 2
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '12',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [{
                    value: 1048,
                    name: '尿路上皮癌'
                },
                {
                    value: 735,
                    name: '原位癌'
                },
                {
                    value: 580,
                    name: '鳞状细胞癌'
                },
                {
                    value: 484,
                    name: '腺癌'
                },
            ]
        },
        {
            name: '转移',
            type: 'pie',
            radius: [60, 100],
            center: ['14%', '77%'],
            color: colors[1],
            label: {
                show: false,
                position: 'center'
            },
            itemStyle: {
                borderRadius: 5,
                borderColor: '#161C27',
                borderWidth: 2
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '12',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [{
                    value: 1048,
                    name: '骨'
                },
                {
                    value: 1735,
                    name: '多发'
                },
                {
                    value: 580,
                    name: '肺'
                },
                {
                    value: 484,
                    name: '肝'
                },
                {
                    value: 1484,
                    name: '其他'
                },
            ]
        },
        {
            name: '分期',
            type: 'treemap',
            roam: false,
            nodeClick: false,
            breadcrumb: {
                show: false
            },
            width: '25%',
            height: '22%',
            right: '10%',
            top: '15%',
            label: {
                fontSize: 16,
                textShadowColor: '#000',
                textShadowBlur: 2,

            },
            itemStyle: {
                color: ['#2EE67D'],
            },
            levels: [{
                    itemStyle: {
                        borderColor: '#fff',
                        borderWidth: 0,
                        gapWidth: 0
                    }
                },
                {
                    colorSaturation: [0.8, 0.5],
                    itemStyle: {
                        color: ['#2EE67D'],
                        gapWidth: 3,
                        borderWidth: 0,
                        borderColor: '#161C27'
                    }
                }
            ],
            data: [{
                name: '分期',
                children: [{
                    name: 'T1',
                    value: 500
                }, {
                    name: 'T2',
                    value: 200
                }, {
                    name: 'T3',
                    value: 132
                }, {
                    name: 'T4',
                    value: 68
                }]
            }]
        },
        {
            name: '治疗方案',
            type: 'treemap',
            roam: false,
            nodeClick: false,
            breadcrumb: {
                show: false
            },
            width: '25%',
            height: '22%',
            right: '10%',
            top: '65%',
            label: {
                fontSize: 16,
                textShadowColor: '#000',
                textShadowBlur: 2,

            },
            itemStyle: {
                color: ['#FFD54A'],
            },
            levels: [{
                    itemStyle: {
                        borderColor: '#fff',
                        borderWidth: 0,
                        gapWidth: 0
                    }
                },
                {
                    colorSaturation: [0.8, 0.5],
                    itemStyle: {
                        color: ['#FFD54A'],
                        gapWidth: 3,
                        borderWidth: 0,
                        borderColor: '#161C27'
                    }
                }
            ],
            data: [{
                name: '治疗方案',
                children: [{
                    name: '手术',
                    value: 500
                }, {
                    name: '治疗',
                    value: 200
                }, {
                    name: '放疗',
                    value: 132
                }]
            }]
        }
    ]
};