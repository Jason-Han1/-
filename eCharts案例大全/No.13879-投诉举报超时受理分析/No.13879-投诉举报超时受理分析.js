var xData = function() {
    var data = [];
    for (var i = 1; i < 13; i++) {
        data.push(i + '月');
    }
    return data;
}();

//投诉举报数
var data1 = [934, 863, 745, 765, 737, 653, 634, 666, 519, 542, 522, 497];
//受理投诉举报数
var data2 = [898, 835, 729, 743, 720, 638, 620, 655, 506, 526, 505, 483];
//不受理投诉举报数
var data3 = [36, 28, 25, 22, 17, 15, 14, 11, 13, 16, 17, 14];
//超时受理环比率
var data4 = [3.85, 3.24, 3.36, 2.88, 2.31, 2.3, 2.3, 1.65, 1.65, 2.95, 3.26, 2.82];

option         = {
backgroundColor:'#FFFFFF',
title          : {
text           : '',
left           : '1%',
top            : '0%'
    },
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
            textStyle: {
                color: "#fff"
            }
        },
    },
    grid: {
        top: 100,
        left: '10%',
        width: '60%',
        bottom: '55%'
    },
    legend: {
        width: '',
        left: '10%',
        top: 35,
        data: ['受理数', '超时受理数', '超时受理环比率']
    },
    xAxis: {
        splitLine: {
            show: false
        },
        name: '      时间',
        type: 'category',
        axisLabel: {
            interval: 0
        },
        data: xData
        /*splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }*/
    },
    yAxis: [{
            type: 'value',
            name: '受理数',
            min: 0,
            max: 1000,
            position: 'left',
            axisLine: {
                lineStyle: {
                    color: '#000'
                }
            },
            axisLabel: {
                formatter: '{value} '
            }
        },
        {
            type: 'value',
            name: '超时受理环比率',
            position: 'right',
            max: '50',
            axisLine: {
                lineStyle: {
                    color: '#000'
                }
            },
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [{
        name: '受理数',
        color: '#56ADF1',
        type: 'bar',
        barWidth: "35%",
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#56ADF1'
                }, {
                    offset: 1,
                    color: '#99D9EA'
                }]),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        data: data1
    }, {
        name: '超时受理数',
        color: '#d53f4b',
        type: 'bar',
        barWidth: "35%",
        itemStyle: {
            normal: {
                // lineStyle: {
                //     width: 3, //折线宽度
                // },
            }
        },
        data: data3
    }, {
        name: '超时受理环比率',
        color: '#d53f4b',
        yAxisIndex: 1,
        type: 'line',
        itemStyle: {
            normal: {
                lineStyle: {
                    width: 3, //折线宽度
                },
            }
        },
        data: data4
    }, {
        name: '超时受理环比率',
        type: 'pie',
        radius: ['10%', '14%'],
        color: ['#ff0000', '#00EE76'],
        center: ['83%', '10%'],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: data3,
            name: '超时受理数',
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        fontSize: 12
                    }
                }
            }
        }, {
            value: data1[0] - data3[0],
            name: '超时受理数',

            label: {
                normal: {
                    formatter: '\超时受理环比率',
                    textStyle: {
                        color: '#555',
                        fontSize: 10
                    }
                }
            },
            itemStyle: {
                normal: {
                    color: '#aaa'
                },
                emphasis: {
                    color: '#aaa'
                }
            },
        }]
    }]
};



myChart.on('mouseover', function(params) {
    if (params.componentType === 'series' && params.seriesType === 'bar') {
        dataIndex = params.dataIndex;
        myChart.setOption({
            series: [{
                name: '受理数',
                color: '#56ADF1',
                type: 'bar',
                barWidth: "35%",
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#56ADF1'
                        }, {
                            offset: 1,
                            color: '#99D9EA'
                        }]),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                data: data1
            }, {
                name: '超时受理数',
                color: '#d53f4b',
                type: 'bar',
                itemStyle: {
                    normal: {
                        lineStyle: {
                            width: 3, //折线宽度
                        },
                    }
                },
                data: data3
            }, {
                name: '超时受理环比率',
                color: '#d53f4b',
                type: 'line',
                itemStyle: {
                    normal: {
                        lineStyle: {
                            width: 3, //折线宽度
                        },
                    }
                },
                data: data4
            }, {
                name: '超时受理环比率',
                type: 'pie',
                radius: ['10%', '14%'],
                color: ['#ff0000', '#00EE76'],
                center: ['83%', '10%'],
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: data3[dataIndex],
                    name: '超时受理数',
                    label: {
                        normal: {
                            formatter: '{d} %',
                            textStyle: {
                                fontSize: 12
                            }
                        }
                    }
                }, {
                    value: data1[dataIndex] - data3[dataIndex],
                    name: '超时受理数',
                    label: {
                        normal: {
                            formatter: '\超时受理环比率',
                            textStyle: {
                                color: '#555',
                                fontSize: 10
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#aaa'
                        },
                        emphasis: {
                            color: '#aaa'
                        }
                    },
                }]
            }]
        })
    }
});