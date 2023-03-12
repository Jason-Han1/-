var xAxisData = ['3月', '4月', '5月', '6月', '7月', '8月', '9月'];
var firstLineData = [90, 50, 39, 50, 120, 85, '_'];
var firstLineDottedData = ['_', '_', '_', '_', '_', 85, 100];
var sendLineData = [70, 50, 50, 87, 90, 42, '_'];
var sendLineDottedData = ['_', '_', '_', '_', '_', 42, 65];
var threeLineData = [220, 182, 191, 234, 290, 78, '_'];
var threeLineDottedData = ['_', '_', '_', '_', '_', 78, 180];

var dataValue = 100;

var firstPieData = 42;

var sendPieData = 44;

var threePieData = 43;

var dataxAxis = 30;
var datayAxis = 67.1;

var labelTop = {
    normal: {
        label: {
            show: true,
            fontSize: 14,
            position: 'center',
            formatter: '{b}',
            textStyle: {
                baseline: 'bottom',
                color: '#8cd2ff'
            }
        },
        labelLine: {
            show: false
        }
    }
};

var labelTopUpdata = {
    normal: {
        label: {
            show: true,
            fontSize: 14,
            position: 'center',
            formatter: '{b}',
            textStyle: {
                baseline: 'bottom',
                color: '#fff'
            }
        },
        labelLine: {
            show: false
        }
    }
};

var labelFromatter = {
    normal: {
        label: {
            formatter: function(params) {
                return dataValue - params.value;
            },
            fontSize: 24,
            padding: [50, 0, 0, 0],
            color: '#fff',
            textStyle: {
                baseline: 'top'
            }
        },
        color: {
            type: 'linear',
            x: 1,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: '#00fff6' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#005aff' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
        }
    }
};
var labelFromatter1 = {
    normal: {
        label: {
            formatter: function(params) {
                return dataValue - params.value;
            },
            fontSize: 24,
            padding: [50, 0, 0, 0],
            color: '#fff',
            textStyle: {
                baseline: 'top'
            }
        },
        color: {
            type: 'linear',
            x: 1,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: '#ffea00' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#ff00c0' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
        }
    }
};
var labelFromatter2 = {
    normal: {
        label: {
            formatter: function(params) {
                return dataValue - params.value;
            },
            fontSize: 24,
            padding: [50, 0, 0, 0],
            color: '#fff',
            textStyle: {
                baseline: 'top'
            }
        },
        color: {
            type: 'linear',
            x: 1,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: '#70fc1d' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#5d7f00' // 100% 处的颜色
            }],
            globalCoord: false // 缺省为 false
        },
        shadowColor: '#0c3da3',
        shadowBlur: 10,
        shadowOffsetX: 1,
        shadowOffsetY: 1
    }
};
var labelBottom = {
    normal: {
        color: 'rgba(12, 61, 163, 1)',
        position: 'none',
        label: {
            show: true,
            position: 'center'
        },
        labelLine: {
            show: false
        }
    }
};

var lineitemStyle2 = {
    normal: {
        label: {
            formatter: function(params) {
                return dataValue - params.value;
            },
            fontSize: 40,
            padding: [90, 0, 0, 0],
            color: '#fff',
            textStyle: {
                baseline: 'top'
            }
        },
        color: '#66ff00',
        borderColor: 'rgba(102, 255, 0, 0.5)',
        borderWidth: 10
    }
};
var lineitemStyle1 = {
    normal: {
        label: {
            formatter: function(params) {
                return dataValue - params.value;
            },
            fontSize: 40,
            padding: [90, 0, 0, 0],
            color: '#fff',
            textStyle: {
                baseline: 'top'
            }
        },
        color: '#ffea00',
        borderColor: 'rgba(255, 234, 0, 0.5)',
        borderWidth: 10
    }
};
var lineitemStyle = {
    normal: {
        label: {
            formatter: function(params) {
                return dataValue - params.value;
            },
            fontSize: 40,
            padding: [90, 0, 0, 0],
            color: '#fff',
            textStyle: {
                baseline: 'top'
            }
        },
        color: '#01f2ee',
        borderColor: 'rgba(1, 242, 238, 0.5)',
        borderWidth: 10
    }
};

var radius = [30, 60];
option = {
    backgroundColor: '#293042',
    tooltip: {
        show: true,
        trigger: 'item'
    },
    title: {
        text: '',
        subtext: '',
        x: 'center'
    },
    grid: {
        left: '4%',
        right: '0',
        top: '25%',
        bottom: '1%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#6995aa'
            },
            onZero: true
        },
        axisLabel: {
            fontSize: 11,
            color: '#A5CADB'
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dotted',
                color: '#1978D9'
            }
        },
        data: xAxisData
    },
    yAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#6995aa'
            },
            onZero: false
        },
        axisLabel: {
            fontSize: 11,
            color: '#A5CADB'
        },
        splitLine: {
            lineStyle: {
                type: 'dotted',
                color: '#1978D9'
            }
        },
        scale: true
    },
    series: [{
        name: '第一产业',
        smooth: true,
        type: 'line',
        symbolSize: 5,
        symbol: 'circle',
        itemStyle: lineitemStyle,
        data: firstLineData
    }, {
        name: '第一产业',
        smooth: true,
        type: 'line',
        symbolSize: 5,
        symbol: 'circle',
        itemStyle: lineitemStyle,
        lineStyle: {
            normal: {
                type: 'dotted'
            }
        },
        tooltip: {
            formatter: '{b0},{a0}: {c0}<br />{b2}'
        },
        data: firstLineDottedData
    }, {
        name: '第二产业',
        smooth: true,
        type: 'line',
        symbolSize: 5,
        symbol: 'circle',
        itemStyle: lineitemStyle1,
        data: sendLineData
    }, {
        name: '第二产业',
        smooth: true,
        type: 'line',
        symbolSize: 5,
        symbol: 'circle',
        itemStyle: lineitemStyle1,
        lineStyle: {
            normal: {
                type: 'dotted'
            }
        },
        data: sendLineDottedData
    }, {
        type: 'line',
        name: '第三产业',
        smooth: true,
        symbolSize: 5,
        symbol: 'circle',
        itemStyle: lineitemStyle2,
        data: threeLineData
    }, {
        type: 'line',
        name: '第三产业',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        itemStyle: lineitemStyle2,
        lineStyle: {
            normal: {
                type: 'dotted'
            }
        },
        data: threeLineDottedData
    }, {
        type: 'pie',
        center: ['15%', '10%'],
        startAngle: 180,
        radius: radius,
        clockwise: false,
        itemStyle: labelFromatter,
        data: [{
            name: '第一产业',
            value: dataValue - firstPieData,
            itemStyle: labelBottom
        }, {
            name: '第一产业',
            value: firstPieData,
            itemStyle: labelTop
        }],
        markLine: {
            silent: true,
            symbolSize: 0,
            data: [{
                0: {
                    x: 15-(60/myChart.getWidth())*100+'%',
                    y: '10%',
                    lineStyle: {
                        normal: {
                            color: '#ccc',
                            width: 1,
                            type: 'solid'
                        }
                    }
                },
                1: {
                    x: '15%',
                    y: '10%'
                }
            }]
        }
    }, {
        type: 'pie',
        center: ['45%', '10%'],
        radius: radius,
        startAngle: 180,
        clockwise: false,
        itemStyle: labelFromatter1,
        data: [{
            name: '第二产业',
            value: dataValue - sendPieData,
            itemStyle: labelBottom
        }, {
            name: '第二产业',
            value: sendPieData,
            itemStyle: labelTop
        }],
        markLine: {
            silent: true,
            symbolSize: 0,
            data: [{
                0: {
                    x: 45-(60/myChart.getWidth())*100+'%',
                    y: '10%',
                    lineStyle: {
                        normal: {
                            color: '#ccc',
                            width: 1,
                            type: 'solid'
                        }
                    }
                },
                1: {
                    x: '45%',
                    y: '10%'
                }
            }]
        }
    }, {
        type: 'pie',
        center: ['75%', '10%'],
        radius: radius,
        startAngle: 180,
        clockwise: false,
        itemStyle: labelFromatter2,
        data: [{
            name: '第三产业',
            value: dataValue - threePieData,
            itemStyle: labelBottom
        }, {
            name: '第三产业',
            value: threePieData,
            itemStyle: labelTop
        }],
        markLine: {
            silent: true,
            symbolSize: 0,
            data: [{
                0: {
                    x: 75-(60/myChart.getWidth())*100+'%',
                    y: '10%',
                    lineStyle: {
                        normal: {
                            color: '#ccc',
                            width: 1,
                            type: 'solid'
                        }
                    }
                },
                1: {
                    x: '75%',
                    y: '10%'
                }
            }]
        }
    }]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
myChart.on('click', function(params) {
    if (params.seriesType === 'pie') {
        console.log(params);
        // 点击到了 markPoint 上
        if (params.name === '第一产业') {
            myChart.setOption({
                series: [{
                    // type: 'line',
                    name: '第一产业',
                    // 通过饼图表现单个柱子中的数据分布
                    data: [21, 12, 11, 234, 290, 100, '_']
                }, {
                    // type: 'line',
                    name: '第一产业',
                    // 通过饼图表现单个柱子中的数据分布
                    data: ['_', '_', '_', '_', '_', 100, 200]
                }, {
                    // type: 'line',
                    name: '第二产业',
                    // 通过饼图表现单个柱子中的数据分布
                    data: [42, 12, 19, 234, 290, 120, '_']
                }, {
                    // type: 'line',
                    name: '第二产业',
                    // 通过饼图表现单个柱子中的数据分布
                    data: ['_', '_', '_', '_', '_', 120, 9]
                }, {
                    //type: 'line',
                    name: '第三产业',
                    // 通过饼图表现单个柱子中的数据分布
                    data: [63, 12, 11, 234, 290, 123, '_']
                }, {
                    //type: 'line',
                    name: '第三产业',
                    // 通过饼图表现单个柱子中的数据分布
                    data: ['_', '_', '_', '_', '_', 123, 3]
                }, {
                    type: 'pie',
                    center: ['15%', '10%'],
                    startAngle: 180,
                    radius: radius,
                    clockwise: false,
                    itemStyle: labelFromatter,
                    data: [{
                        name: '第一产业',
                        value: dataValue - firstPieData,
                        itemStyle: labelBottom
                    }, {
                        name: '第一产业',
                        value: firstPieData,
                        itemStyle: labelTopUpdata
                    }]
                }, {
                    type: 'pie',
                    center: ['45%', '10%'],
                    radius: radius,
                    startAngle: 180,
                    clockwise: false,
                    itemStyle: labelFromatter1,
                    data: [{
                        name: '第二产业',
                        value: dataValue - sendPieData,
                        itemStyle: labelBottom
                    }, {
                        name: '第二产业',
                        value: sendPieData,
                        itemStyle: labelTop
                    }]
                }, {
                    type: 'pie',
                    center: ['75%', '10%'],
                    radius: radius,
                    startAngle: 180,
                    clockwise: false,
                    itemStyle: labelFromatter2,
                    data: [{
                        name: '第三产业',
                        value: dataValue - threePieData,
                        itemStyle: labelBottom
                    }, {
                        name: '第三产业',
                        value: threePieData,
                        itemStyle: labelTop
                    }]
                }]
            });
        } else if (params.name === '第二产业') {
            myChart.setOption({
                series: [{
                    // type: 'line',
                    name: '第一产业',
                    // 通过饼图表现单个柱子中的数据分布
                    data: [21, 12, 11, 234, 290, 100, '_']
                }, {
                    // type: 'line',
                    name: '第一产业',
                    // 通过饼图表现单个柱子中的数据分布
                    data: ['_', '_', '_', '_', '_', 100, 30]
                }, {
                    // type: 'line',
                    name: '第二产业',
                    // 通过饼图表现单个柱子中的数据分布
                    data: [42, 12, 19, 234, 290, 120, '_']
                }, {
                    // type: 'line',
                    name: '第二产业',
                    // 通过饼图表现单个柱子中的数据分布
                    data: ['_', '_', '_', '_', '_', 120, 991]
                }, {
                    //type: 'line',
                    name: '第三产业',
                    // 通过饼图表现单个柱子中的数据分布
                    data: [63, 12, 11, 234, 290, 123, '_']
                }, {
                    //type: 'line',
                    name: '第三产业',
                    // 通过饼图表现单个柱子中的数据分布
                    data: ['_', '_', '_', '_', '_', 123, 131]
                }, {
                    type: 'pie',
                    center: ['15%', '10%'],
                    startAngle: 180,
                    radius: radius,
                    clockwise: false,
                    itemStyle: labelFromatter,
                    data: [{
                        name: '第一产业',
                        value: dataValue - firstPieData,
                        itemStyle: labelBottom
                    }, {
                        name: '第一产业',
                        value: firstPieData,
                        itemStyle: labelTop
                    }]
                }, {
                    type: 'pie',
                    center: ['45%', '10%'],
                    radius: radius,
                    startAngle: 180,
                    clockwise: false,
                    itemStyle: labelFromatter1,
                    data: [{
                        name: '第二产业',
                        value: dataValue - sendPieData,
                        itemStyle: labelBottom
                    }, {
                        name: '第二产业',
                        value: sendPieData,
                        itemStyle: labelTopUpdata
                    }]
                }, {
                    type: 'pie',
                    center: ['75%', '10%'],
                    radius: radius,
                    startAngle: 180,
                    clockwise: false,
                    itemStyle: labelFromatter2,
                    data: [{
                        name: '第三产业',
                        value: dataValue - threePieData,
                        itemStyle: labelBottom
                    }, {
                        name: '第三产业',
                        value: threePieData,
                        itemStyle: labelTop
                    }]
                }]
            });
        } else {
            myChart.setOption({
                series: [{
                    // type: 'line',
                    name: '第一产业',
                    // 通过饼图表现单个柱子中的数据分布
                    data: [21, 12, 11, 234, 290, 100, '_']
                }, {
                    // type: 'line',
                    name: '第一产业',
                    // 通过饼图表现单个柱子中的数据分布
                    data: ['_', '_', '_', '_', '_', 100, 120]
                }, {
                    // type: 'line',
                    name: '第二产业',
                    // 通过饼图表现单个柱子中的数据分布
                    data: [42, 12, 19, 234, 290, 120, '_']
                }, {
                    // type: 'line',
                    name: '第二产业',
                    // 通过饼图表现单个柱子中的数据分布
                    data: ['_', '_', '_', '_', '_', 120, 45]
                }, {
                    //type: 'line',
                    name: '第三产业',
                    // 通过饼图表现单个柱子中的数据分布
                    data: [63, 12, 11, 234, 290, 123, '_']
                }, {
                    //type: 'line',
                    name: '第三产业',
                    // 通过饼图表现单个柱子中的数据分布
                    data: ['_', '_', '_', '_', '_', 123, 89]
                }, {
                    type: 'pie',
                    center: ['15%', '10%'],
                    startAngle: 180,
                    radius: radius,
                    clockwise: false,
                    itemStyle: labelFromatter,
                    data: [{
                        name: '第一产业',
                        value: dataValue - firstPieData,
                        itemStyle: labelBottom
                    }, {
                        name: '第一产业',
                        value: firstPieData,
                        itemStyle: labelTop
                    }]
                }, {
                    type: 'pie',
                    center: ['45%', '10%'],
                    radius: radius,
                    startAngle: 180,
                    clockwise: false,
                    itemStyle: labelFromatter1,
                    data: [{
                        name: '第二产业',
                        value: dataValue - sendPieData,
                        itemStyle: labelBottom
                    }, {
                        name: '第二产业',
                        value: sendPieData,
                        itemStyle: labelTop
                    }]
                }, {
                    type: 'pie',
                    center: ['75%', '10%'],
                    radius: radius,
                    startAngle: 180,
                    clockwise: false,
                    itemStyle: labelFromatter2,
                    data: [{
                        name: '第三产业',
                        value: dataValue - threePieData,
                        itemStyle: labelBottom
                    }, {
                        name: '第三产业',
                        value: threePieData,
                        itemStyle: labelTopUpdata
                    }]
                }]
            });
        }
    }
});