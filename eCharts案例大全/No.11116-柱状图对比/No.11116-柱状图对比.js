var res = {
    "dashed": "1",
    "displayType": "3",
    "subTitle": "数据统计范围2015年-2019年",
    "shape": "1",
    "colValues": {
        "xAxis": ["2015年", "2016年", "2017年", "2018年", "2019年"],
        "yAxis": ["学生人数", "毕业人数"],
        "rows": [
            ["1343", "1423", "1424", "1541", "1578"],
            ["1112", "1342", "1234", "1522", "353"]
        ]
    },
    "showWords": "5",
    "id": "2c9095e165f62d6d0165f6340ae10026",
    "title": "毕业率趋势",
    "dataDimension": "2",
    "labels": []
}
var _res = res.colValues;
var xAxis = _res.xAxis; // 类目轴x轴
var yAxis = _res.yAxis; // 数值轴y轴
var rows = _res.rows; // 数据            // x轴列表
if (!xAxis || !yAxis || !rows) {
    xAxis = [];
    yAxis = [];
    rows = [];
}
var barColor = [
    ['#00c2ff', '#5870ff'],
    ['#ff758e', '#e92b77'],
    ['#ffd87a', '#ffcb4c'],
    ['#645bdf', '#4d45c1'],
    ['#ffab58', '#fb9633'],
    ['#475eec', '#293fcb'],
    ['#77afff', '#4894ff'],
    ['#eb8eff', '#d373e8'],
    ['#5deaff', '#06c6e3'],
    ['#63bfff', '#0891f0']
];
var bgColor = [
    ['rgba(233,43,119,.4)', 'rgba(255,117,142,.4)']
]
var series = [];
// 标题
var title = '● ' + res.title;
// x轴刻度第行最多展示多少个字
var showWords = parseInt(res.showWords);
if (!showWords) {
    showWords = 5;
}
if (xAxis.length >= 6) {
    showWords = 4;
}
if (xAxis.length >= 8) {
    showWords = 3;
}
// legend data 配置
var legendData = [];
var colorIndex = 0;
var barWidth = '10%';
var _length = 0;
if (yAxis) {
    $.each(yAxis, function(i, item) {
        _length += 1;
    })
}
if (res.dataDimension === '1' || _length === 1) {
    barWidth = '22'
}
$.each(yAxis, function(i, item) {
    var curData = []
    if (res.dashed === '1') {

        if (i === 0) {
            curData = rows[i]
        }
        if (i == 1 && rows[i]) {
            $.each(rows[i], function(j, sub) {
                if (j == rows[i].length - 1) {
                    curData.push({
                        value: sub,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: bgColor[0][0]
                                }, {
                                    offset: 1,
                                    color: bgColor[0][1]
                                }]),
                                borderWidth: '2',
                                // barBorderColor: 'tomato',
                                borderType: 'dashed',
                                borderColor: '#ff758e',
                                // opacity: '0.3'
                            }
                        }
                    })
                } else {
                    curData.push(sub)
                }
            })
        }
        legendData.push({
            name: item,
            // 设置文本为颜色
            textStyle: {
                // 全局拆线图通用颜色列表  window.top.lineColor
                color: barColor[colorIndex][1]
            }
        });
    } else {
        curData = rows[i]
    }
    series.push({
        name: item,
        type: 'bar',
        data: curData,
        barGap: 0.1, //柱子之间间距
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: barColor[colorIndex][0]
                }, {
                    offset: 1,
                    color: barColor[colorIndex][1]
                }]),
                opacity: 1
            }
        },
        barWidth: barWidth
        //柱子宽度
    });
    colorIndex++
});
var percent = []
var percentLine = []
var percentDashed = []
if (rows.length > 1) {
    $.each(rows[0], function(j, item) {
        var cur = (rows[1][j] / rows[0][j] * 100).toFixed(2)
        percent.push(cur);
        if (j < rows[0].length - 2) {
            percentLine.push(cur);
            percentDashed.push('');
        } else if (j == rows[0].length - 2) {
            percentLine.push(cur);
            percentDashed.push(cur);
        } else if (j > rows[0].length - 2) {
            percentLine.push('');
            percentDashed.push(cur);
        }
    })
}
if (res.dashed === '1') {
    series.push({
        name: '毕业率',
        type: 'line',
        data: percent,
        yAxisIndex: 1,
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#e92b77'
                }, {
                    offset: 1,
                    color: 'rgba(0,0,0,0)'
                }], false),
                opacity: 0.5
            }
        },
        itemStyle: {
            normal: {
                color: '#e92b77',
                lineStyle: {
                    width: 0,
                    type: 'solid' //'dotted'虚线 'solid'实线
                },
                borderColor: '#e92b77', //图形的描边颜色。支持的格式同 color
                borderWidth: 1, //描边线宽。为 0 时无描边。[ default: 0 ]
                barBorderRadius: 0,
                label: {
                    show: false
                },
                opacity: 0.5
            }
        },
        smooth: false,
        symbol: 'circle',
        symbolSize: '6'
    })
    series.push({
        name: '毕业率',
        type: 'line',
        data: percentLine,
        yAxisIndex: 1,
        itemStyle: {
            normal: {
                color: '#e92b77',
                lineStyle: {
                    width: 2,
                    type: 'solid' //'dotted'虚线 'solid'实线
                },
                borderColor: '#e92b77', //图形的描边颜色。支持的格式同 color
                borderWidth: 1, //描边线宽。为 0 时无描边。[ default: 0 ]
                barBorderRadius: 0,
                label: {
                    show: false
                },
                opacity: 0.5
            }
        },
        smooth: false,
        symbol: 'circle',
        symbolSize: '0'
    })
    series.push({
        name: '毕业率',
        type: 'line',
        data: percentDashed,
        lineStyle: {
            type: 'dashed'
        },
        yAxisIndex: 1,
        itemStyle: {
            normal: {
                color: '#e92b77',
                lineStyle: {
                    width: 2,
                    type: 'dashed' //'dotted'虚线 'solid'实线
                },
                borderColor: '#e92b77', //图形的描边颜色。支持的格式同 color
                borderWidth: 1, //描边线宽。为 0 时无描边。[ default: 0 ]
                barBorderRadius: 0,
                label: {
                    show: false
                },
                opacity: 0.5
            }
        },
        smooth: false,
        symbol: 'circle',
        symbolSize: '0'
    });
} else {
    series.push({
        name: '毕业率',
        type: 'line',
        data: percent,
        yAxisIndex: 1,
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#e92b77'
                }, {
                    offset: 1,
                    color: 'rgba(0,0,0,0)'
                }], false),
                opacity: 0.5
            }
        },
        itemStyle: {
            normal: {
                color: '#e92b77',
                lineStyle: {
                    width: 2,
                    type: 'solid' //'dotted'虚线 'solid'实线
                },
                borderColor: '#e92b77', //图形的描边颜色。支持的格式同 color
                borderWidth: 1, //描边线宽。为 0 时无描边。[ default: 0 ]
                barBorderRadius: 0,
                label: {
                    show: false
                },
                opacity: 0.5
            }
        },
        smooth: false,
        symbol: 'circle',
        symbolSize: '6'
    })

}

var option = {
    title: {
        show: false,
        text: title,
        textStyle: {
            color: '#fff',
            fontSize: 14
        }
    },
    textStyle: {
        color: '#6692e2',
        fontSize: 14
    },
    tooltip: {
        trigger: 'axis',
        backgroundColor: 'rgba(51,51,115,0.4)',
        confine: true,
        padding: [
            5, // 上
            10, // 右
            5, // 下
            10 // 左
        ],
        borderColor: '#403b94',
        borderWidth: '1',
        axisPointer: {
            show: true,
            lineStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(88,81,199,1)'
                    },
                    {
                        offset: 0.5,
                        color: 'rgba(88,81,199,0.8)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(29,27,68, 0.3)'
                    }
                ]),
                width: 2
            }
        },
        formatter: '{b}<br />{a}: {c}人 <br /> {a1}: {c1} 人 <br /> {a2}: {c2} %'
    },
    legend: {
        show: false,
        data: legendData,
        itemWidth: 10,
        itemHeight: 10,
        left: 'center',
        bottom: '0',
        textStyle: {
            color: '#fff',
            width: '16%'
        },
        formatter: function(name) {
            if (legendData.length > 4) {
                if (name.length > 6) {
                    name = name.substr(0, 6) + '..'
                }
            }
            return name;
        }
    },
    grid: {
        top: '60px',
        left: '14px',
        right: '14px',
        bottom: '10px',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        // boundaryGap: false,
        data: xAxis,
        nameTextStyle: {
            color: '#6692e2'
        },
        axisLine: {
            lineStyle: {
                color: '#2c486f'
            }
        },
        axisLabel: { //坐标轴刻度标签的相关设置。
            formatter: function(params) {
                var newParamsName = ""; // 最终拼接成的字符串
                var paramsNameNumber = params.length; // 实际标签的个数
                var provideNumber = showWords; // 每行能显示的字的个数
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber); // 换行的话，需要显示几行，向上取整
                /**
                 * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                 */
                // 条件等同于rowNumber>1
                if (paramsNameNumber > provideNumber) {
                    /** 循环每一行,p表示行 */
                    for (var p = 0; p < rowNumber; p++) {
                        var tempStr = ""; // 表示每一次截取的字符串
                        var start = p * provideNumber; // 开始截取的位置
                        var end = start + provideNumber; // 结束截取的位置
                        // 此处特殊处理最后一行的索引值
                        if (p === rowNumber - 1) {
                            // 最后一次不换行
                            tempStr = params.substring(start, paramsNameNumber);
                        } else {
                            // 每一次拼接字符串并换行
                            tempStr = params.substring(start, end) + "\n";
                        }
                        newParamsName += tempStr; // 最终拼成的字符串
                    }

                } else {
                    // 将旧标签的值赋给新标签
                    newParamsName = params;
                }
                //将最终的字符串返回
                return newParamsName
            }

        },
        axisTick: {
            alignWithLabel: true,
            lineStyle: {
                color: '#2c486f'
            }
        }

    },
    yAxis: [{
            type: "value",
            position: "right",
            nameTextStyle: {
                "color": "#6692e2"
            },
            axisLine: {
                "show": false
            },
            splitLine: {
                "show": true,
                "lineStyle": {
                    "color": "#2e4881",
                    "type": "dashed"
                }
            },
            axisTick: {
                show: false
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: [
                        "rgba(44,133,255,0.05)",
                        "rgba(0,0,0,0)"
                    ]
                }
            }
        },
        {
            name: '(%)',
            nameLocation: 'end',
            nameGap: '15',
            max: 100,
            min: 0,
            offset: 13,
            type: "value",
            position: "left",
            nameTextStyle: {
                align: 'left',
                "color": "#6692e2"
            },
            axisLine: {
                "show": false
            },
            splitLine: {
                "show": false
            },
            axisTick: {
                show: false
            }
        }

    ],
    series: series
};

if (res.dataDimension === '1') {
    option.legend.show = false;
    option.grid.bottom = '10px';
    option.tooltip.formatter = '{b}: {c}';
}