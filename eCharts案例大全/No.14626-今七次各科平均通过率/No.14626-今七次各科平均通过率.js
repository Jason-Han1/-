var color = '#189cbb';
var lineColor = '#0a324b'
var xAxisData = [1, 2, 3, 4, 5, 6, 7];
// var seriesData = [45, 55, 70, 95, 55, 70, 85];
var scale = 1;
var echartData = {
    data1: [{
        name: '',
        value: 75
    }, {
        name: '',
        value: 95
    }, {
        name: '',
        value: 70
    }, {
        name: '',
        value: 95
    }, {
        name: '',
        value: 65
    }, {
        name: '',
        value: 70
    }, {
        name: '',
        value: 80
    }],
    data2: [{
        name: '',
        value: 85
    }, {
        name: '',
        value: 75
    }, {
        name: '',
        value: 80
    }, {
        name: '',
        value: 85
    }, {
        name: '',
        value: 55
    }, {
        name: '',
        value: 83
    }, {
        name: '',
        value: 85
    }],
    data3: [{
        name: '',
        value: 35
    }, {
        name: '',
        value: 55
    }, {
        name: '',
        value: 70
    }, {
        name: '',
        value: 90
    }, {
        name: '',
        value: 55
    }, {
        name: '',
        value: 70
    }, {
        name: '',
        value: 85
    }]
}
var maxData = '55%';
option = {
    tooltip: {
        show: false, //去除面板显示
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#185164'
            }
        }
    },
    legend: {
        show: true,
        itemGap:50,
        data: ['综合学科', '高等教育心理学','高等教育学'],
        icon: 'circle',
        textStyle: {
            color: '#3dd3f8',
            fontSize:16*scale
        },
    },
    backgroundColor: '#031f2d',
    color: ['#295beb', '#eb297d','#ffc72b'], //3dd3f8
    grid: {
        left: '3%',
        right: '10%',
        top:'30%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            textStyle: {
                color: color,
                fontSize: 16*scale,
            }
        },
        axisLine: {
            lineStyle: {
                color: lineColor,
            }
        },
        name: '考次',
        nameTextStyle: {
            color: '#fff',
            fontSize: 16*scale,
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
                fontSize: 16*scale,
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
            fontSize: 16*scale,
            padding: [0, 0, 25, 0]
        },
    },
    series: [{
        name: '综合学科',
        type: 'line',
        stack: '总量',
        smooth: true, //这句就是让曲线变平滑的
        data: echartData.data1,
        symbol: 'none', //拐点样式
        markPoint: {
            data: [{
                type: 'max',
                symbolSize: [70, 65],
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
                            fontSize: '16',
                            fontWeight: 'bold',
                            color: '#fff'
                        }
                    }
                }
            },
            {
                symbol:'circle',
                type: 'max',
                symbolSize: [10, 10],
                itemStyle: {
                    normal: {
                        color: "#295beb",
                        borderColor:'rgba(41, 91,235, 0.3)',//rgba(255, 199, 43, .3)
                        borderWidth:10*scale,
                        shadowColor:'#295beb',
                        shadowBlur:30
                    }
                },
                label: {
                    normal: {
                        show: false
                    }
                }
            }]
        },
        markLine: {
            symbol: 'none',
            data: [{
                yAxis:60,
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
        name: '高等教育心理学',
        type: 'line',
        smooth: true, //这句就是让曲线变平滑的
        data: echartData.data2,
        symbol: 'none', //拐点样式
        markPoint: {
            data: [{
                type: 'max',
                symbolSize: [70, 65],
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
                            fontSize: '16',
                            fontWeight: 'bold',
                            color: '#fff'
                        }
                    }
                }
            },
            {
                symbol:'circle',
                type: 'max',
                symbolSize: [10, 10],
                itemStyle: {
                    normal: {
                        color: "#eb297d",
                        borderColor:'rgba(235,41,125,0.3)',//rgba(255, 199, 43, .3)
                        borderWidth:10*scale,
                        shadowColor:'#eb297d',
                        shadowBlur:30
                    }
                },
                label: {
                    normal: {
                        show: false
                    }
                }
            }]
        }
    },
    {
        name: '高等教育学',
        type: 'line',
        smooth: true, //这句就是让曲线变平滑的
        data: echartData.data3,
        symbol: 'none', //拐点样式
        markPoint: {
            data: [{
                type: 'max',
                symbolSize: [70, 65],
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
                            fontSize: '16',
                            fontWeight: 'bold',
                            color: '#fff'
                        }
                    }
                }
            },
            {
                symbol:'circle',
                type: 'max',
                symbolSize: [10, 10],
                itemStyle: {
                    normal: {
                        color: "#ffc72b",
                        borderColor:'rgba(255, 199, 43, 0.3)',//rgba(255, 199, 43, .3)
                        borderWidth:10*scale,
                        shadowColor:'#ffc72b',
                        shadowBlur:30
                    }
                },
                label: {
                    normal: {
                        show: false
                    }
                }
            }]
        }
    }]
};