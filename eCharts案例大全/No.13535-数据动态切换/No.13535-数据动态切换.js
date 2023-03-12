var color = '#fff';
var lineColor = '#192e5b';
var xAxisData = [1, 2, 3, 4, 5, 6, 7];
var scale = 1;
var echartData = [
    [
        [95, 70, 95, 65, 70, 80, 66],
        [33, 89, 18, 34, 41, 14, 46],
        [57, 27, 12, 97, 28, 81, 55]
    ],
    [
        [85, 75, 80, 85, 55, 83, 85],
        [96, 74, 40, 69, 73, 30, 55],
        [24, 82, 82, 23, 11, 44, 34]
    ],
    [
        [35, 55, 70, 90, 55, 70, 85],
        [33, 25, 97, 68, 26, 92, 30],
        [96, 67, 74, 40, 41, 86, 44]
    ]
];
var maxData = '55%';
option = {
    legend: {
        itemGap: 10,
        data: ['综合学科', '综合学科1', '高等教育'],
        icon: 'circle',
        textStyle: {
            color: '#fff',
            fontSize: 10 * scale
        },
    },
    color: ['#295beb', '#eb297d', '#ffc72b'], //3dd3f8
    grid: {
        left: '3%',
        right: '20%',
        top: '40%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            textStyle: {
                color: color,
                fontSize: 10 * scale,
            }
        },
        axisLine: {
            lineStyle: {
                color: lineColor,
            }
        },
        // name: '考次',
        nameTextStyle: {
            color: '#fff',
            fontSize: 10 * scale,
            padding: [0, 0, 0, 10]
        },
        data: xAxisData
    },
    yAxis: {
        type: 'value',
        max: 100,
        axisLabel: {
            padding: [0, 15, 0, 0],
            textStyle: {
                color: color,
                fontSize: 10 * scale,
            }
        },
        axisLine: {
            lineStyle: {
                color: lineColor,
            }
        },
        splitLine: {
            show: false
        },
        name: '通过率：%',
        nameTextStyle: {
            color: '#fff',
            fontSize: 10 * scale,
            padding: [0, 0, 25, 0]
        },
    },
    series: [{
            name: '综合学科',
            type: 'line',
            stack: '总量',
            smooth: true, //这句就是让曲线变平滑的
            data: echartData[0][0],
            symbol: 'none', //拐点样式
            markPoint: {
                data: [{
                        type: 'max',
                        symbolSize: [40, 40],
                        itemStyle: {
                            normal: {
                                color: "#295beb"
                            }
                        },
                        label: {
                            normal: {
                                formatter: '{c}%',
                                show: true,
                                textStyle: {
                                    fontSize: '12',
                                    fontWeight: 'bold',
                                    color: '#fff'
                                }
                            }
                        }
                    },
                    {
                        symbol: 'circle',
                        type: 'max',
                        symbolSize: [5, 5],
                        itemStyle: {
                            normal: {
                                color: "#295beb",
                                borderColor: 'rgba(41, 91,235, 0.3)', //rgba(255, 199, 43, .3)
                                borderWidth: 10 * scale,
                                shadowColor: '#295beb',
                                shadowBlur: 30
                            }
                        },
                        label: {
                            normal: {
                                show: false
                            }
                        }
                    }
                ]
            },
            markLine: {
                symbol: 'none',
                data: [{
                    yAxis: 60,
                    valueIndex: 1,
                    // coord:['60','7'],
                    lineStyle: {
                        normal: {
                            color: '#3fdaff',
                            type: 'dashed'
                        }
                    },
                    label: {
                        normal: {
                            show: false
                        }
                    }
                }]
            }
        }, {
            name: '综合学科1',
            type: 'line',
            smooth: true, //这句就是让曲线变平滑的
            data: echartData[1][0],
            symbol: 'none', //拐点样式
            markPoint: {
                data: [{
                        type: 'max',
                        symbolSize: [40, 40],
                        itemStyle: {
                            normal: {
                                color: "#eb297d"
                            }
                        },
                        label: {
                            normal: {
                                formatter: '{c}%',
                                show: true,
                                textStyle: {
                                    fontSize: '12',
                                    fontWeight: 'bold',
                                    color: '#fff'
                                }
                            }
                        }
                    },
                    {
                        symbol: 'circle',
                        type: 'max',
                        symbolSize: [5, 5],
                        itemStyle: {
                            normal: {
                                color: "#eb297d",
                                borderColor: 'rgba(235,41,125,0.3)', //rgba(255, 199, 43, .3)
                                borderWidth: 10 * scale,
                                shadowColor: '#eb297d',
                                shadowBlur: 30
                            }
                        },
                        label: {
                            normal: {
                                show: false
                            }
                        }
                    }
                ]
            }
        },
        {
            name: '高等教育',
            type: 'line',
            smooth: true, //这句就是让曲线变平滑的
            data: echartData[2][0],
            symbol: 'none', //拐点样式
            markPoint: {
                data: [{
                        type: 'max',
                        symbolSize: [40, 40],
                        itemStyle: {
                            normal: {
                                color: "#ffc72b"
                            }
                        },
                        label: {
                            normal: {
                                formatter: '{c}%',
                                show: true,
                                textStyle: {
                                    fontSize: '12',
                                    fontWeight: 'bold',
                                    color: '#fff'
                                }
                            }
                        }
                    },
                    {
                        symbol: 'circle',
                        type: 'max',
                        symbolSize: [5, 5],
                        itemStyle: {
                            normal: {
                                color: "#ffc72b",
                                borderColor: 'rgba(255, 199, 43, 0.3)', //rgba(255, 199, 43, .3)
                                borderWidth: 10 * scale,
                                shadowColor: '#ffc72b',
                                shadowBlur: 30
                            }
                        },
                        label: {
                            normal: {
                                show: false
                            }
                        }
                    }
                ]
            }
        }
    ]
};
var san_er_len = 0;

function san_er_set_data() {
    if (san_er_len >= 3) san_er_len = 0
    var data = [];
    for (let i = 0; i < echartData.length; i++) {
        var data1 = echartData[san_er_len][i];
        data[i] = data1;
    }
    myChart.setOption({
        series: [{
            data: data[0]
        }, {
            data: data[1]
        }, {
            data: data[2]
        }]
    })
    setTimeout(san_er_set_data, 2100)
    san_er_len++
}
san_er_set_data()