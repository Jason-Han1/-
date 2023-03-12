var xData = function() {
    var data = [];
    for (var i = 1; i < 13; i++) {
        data.push(i + '月');
    }
    return data;
}();
var dataIndex;
//投诉举报数
var data1 = [934, 863, 845, 765, 737, 653, 634, 556, 489, 442, 422, 356];
//受理投诉举报数
var data2 = [924, 855, 837, 757, 724, 644, 620, 545, 475, 427, 412, 341];
//不受理投诉举报数
var data3 = [36, 28, 25, 22, 17, 15, 14, 11, 13, 6, 7, 4];

//不予受理率
var data4 = [3.85, 3.24, 2.96, 2.88, 2.31, 2.3, 2.21, 1.98, 2.66, 1.36, 1.66, 1.12];

option = {
    title: {
        text: '投诉举报有效受理分析',
        left: '1%',
        top: '1%'
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
        top: 80,
        left: '10%',
        width: '60%',
        bottom: '55%'
    },
    legend: {
        width: '',
        left: '15%',
        top: 45,
        data: ['投诉举报数', '不受理投诉举报数', '不予受理率']
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
            name: '投诉举报数',
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
            name: '不予受理率',
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
        name: '投诉举报数',
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
        name: '不受理投诉举报数',
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
        name: '不予受理率',
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
        name: '不予受理率',
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
            name: '不予受理数',
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
            name: '受理数',

            label: {
                normal: {
                    formatter: '\不予受理率',
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
                name: '投诉举报数',
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
                name: '不受理投诉举报数',
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
                name: '不予受理率',
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
                name: '不予受理率',
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
                    name: '不予受理数',
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
                    name: '受理数',
                    label: {
                        normal: {
                            formatter: '\不予受理率',
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