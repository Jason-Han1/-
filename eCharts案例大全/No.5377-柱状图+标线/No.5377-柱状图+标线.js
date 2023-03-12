// 颜色设置
var backgroundColor = '#021547';
var fontColor = '#B3B3B3';
var lineColor = 'rgba(50, 68, 73, 1)';
var color2 = ['#36D7FF', '#39CF80'];

var result = {
    "time": [
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23"
    ],
    "data": [
        95,
        97,
        95,
        98,
        96,
        93,
        90,
        92,
        88,
        85,
        80,
        82,
        85,
        85,
        80,
        67,
        55,
        49,
        52,
        63,
        67,
        71,
        80,
        75
    ],
    "normalRate": 83,
    "startData": [90, 87, 80, 82, 75]
};
var vdata = [];
var rstData = result.data;
var title = '';

$.each(rstData, function(i, val) {
    vdata.push({
        value: val,
        itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: Number(val) < 50 ? 'rgba(188, 27, 65, 0.85)' : (Number(val) > 70 ? 'rgba(54, 215, 255, 0.85)' : 'rgba(255, 182, 54, 0.85)') // 顶端处的颜色
            }, {
                offset: 0.8,
                color: 'rgba(10, 22, 33, 0)' // 底端处的颜色
            }], false),
            borderColor: Number(val) < 50 ? 'rgba(188, 27, 65, 1)' : (Number(val) > 70 ? 'rgba(54, 215, 255, 1)' : 'rgba(255, 182, 54, 1)')
        }
    });
});

function deepCopy(o) {
    if (o instanceof Array) {
        var n = [];
        for (var i = 0; i < o.length; ++i) {
            n[i] = deepCopy(o[i]);
        }
        return n;

    } else if (o instanceof Object) {
        var n = {};
        for (var i in o) {
            n[i] = deepCopy(o[i]);
        }
        return n;
    } else {
        return o;
    }
}

var timeList = deepCopy(result.time);
                        timeList.push('00');


option = {
    backgroundColor: backgroundColor,
    color: color2,
    textStyle: {
        fontSize: 16,
        color: fontColor,
        fontFamily: '苹方-简'
    },
    title: {
        text: '',
        left: '3%',
        top: 'top',
        textStyle: {
            rich: {
                text: {
                    color: '#E6E6E6'
                },
                num: {
                    color: '#59E0FF',
                    fontSize: 20
                }
            }
        }
    },
    grid: {
        left: '4%',
        right: '2%',
        top: '25%',
        bottom: '10%',
        containLabel: false
    },
    legend: {
        selectedMode: false,
        itemHeight: 10,
        data: [{
                name: '正常率',
                icon: 'rect'
            },
            {
                name: '同比正常率'
            }
        ],
        top: 'top',
        textStyle: {
            fontSize: 14,
            color: '#E6E6E6'
        }
    },
    xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                show: true,
                interval: 0,
                fontSize: 13,
                fontFamily: '苹方-简',
                color: fontColor
            },
            axisLine: {
                lineStyle: {
                    color: lineColor
                }
            },
            axisTick: {
                show: true,
                inside: true
            },
            data: timeList
        },
        {
            show: false,
            type: 'category',
            data: result.time
        }
    ],
    yAxis: {
        type: 'value',
        name: '百分比',
        nameTextStyle: {
            padding: [0, 0, 0, 50],
            fontSize: 14
        },
        max: 100,
        min: 0,
        axisLabel: {
            show: true,
            fontSize: 13
        },
        axisLine: {
            lineStyle: {
                color: lineColor
            }
        },
        axisTick: {
            show: false
        },
        splitArea: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: lineColor,
                opacity: 0.5
            }
        }
    },
    series: [{
            type: 'bar',
            name: '正常率',
            xAxisIndex: 1,
            barWidth: '10',
            itemStyle: {
                normal: {
                    barBorderRadius: [30, 30, 0, 0],
                    borderWidth: 0.3
                }
            },
            markLine: {
                symbol: 'none',
                label: {
                    show: true,
                    position: 'start',
                    formatter: '{c}',
                    fontSize: 14,
                    fontWeight: 'bold'
                },
                lineStyle: {
                    type: 'solid'
                },
                data: [{
                        yAxis: 50,
                        lineStyle: {
                            color: "rgba(188, 27, 65, 1)"
                        },
                        label: {
                            color: "rgba(188, 27, 65, 1)"
                        }
                    },
                    {
                        yAxis: 70,
                        lineStyle: {
                            color: "rgba(255, 182, 54, 1)"
                        },
                        label: {
                            color: "rgba(255, 182, 54, 1)"
                        }
                    }
                ]
            },
            data: vdata
        },
        {
            type: 'line',
            name: '同比正常率',
            xAxisIndex: 1,
            lineStyle: {
                width: 1
            },
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
                color: '#39CF80',
                borderColor: 'rgba(57,207,128,0.6)',
                borderWidth: 6
            },
            data: new Array(result.data.length).fill(0)
        }
    ]
};