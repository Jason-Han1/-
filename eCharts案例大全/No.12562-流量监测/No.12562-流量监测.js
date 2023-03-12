var zeroTime = new Date(new Date(new Date().toLocaleDateString()).getTime());
var overTime = new Date(zeroTime.getTime() + 24 * 60 * 60 * 1000 - 100);
var conf_option = {
    y_font_color: '#60F194',
    x_font_color: '#fff',
    y_line_color: '#184483',
    x_line_color: '#184483',
    split_line_color: 'rgba(0,53,115,0.6)'
}

option = {
    color: ["#28CDFD", "#FFE996", "#5EF294", "#99AFFF", "#FF7BCC", "#FFB598"],
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        textStyle: {
            color: '#fff',
            fontSize: '14px'
        },
        x: 'center',
        data: ['进水1#流量', '进水2#流量', '进水3#流量', '进水4#流量', '高效沉淀池流量', '出水流量'],
        itemHeight: 10,
        itemGap: 40
    },
    grid: {
        top: '20%',
        left: '5%',
        right: '5%',
        bottom: '15%'
    },
    xAxis: [{
        type: 'time',
        splitNumber: 24,
        axisLabel: {
            formatter: function(v) {
                let date = new Date(v);
                let hour = date.getHours();
                let minutes = date.getMinutes();
                let second = date.getSeconds();
                return (hour > 9 ?
                        hour === 23 && minutes === 59 && second > 58 ? '24' : hour : '0' + hour) + ':' +
                    (minutes > 9 ? minutes > 58 && second > 58 ? '00' : minutes : '0' + minutes);
            },
            textStyle: {
                color: conf_option.x_font_color,
                fontSize: '12px'
            }
        },
        axisLine: {
            lineStyle: {
                color: conf_option.x_line_color
            }
        },
        splitLine: {
            lineStyle: {
                color: conf_option.split_line_color,
                width: 0,
                type: 'solid'
            }
        }
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            textStyle: {
                color: conf_option.y_font_color,
                fontSize: '70%'
            }
        },
        axisLine: {
            lineStyle: {
                color: conf_option.y_line_color,
            }
        },
        splitLine: {
            lineStyle: {
                color: conf_option.split_line_color,
                width: 1,
                type: 'solid'
            }
        }
    }],
    dataZoom: [ //给x轴设置滚动条，可以将拖动条隐藏
        {
            type: 'inside',
            show: true,
            //指定是那个轴
            xAxisIndex: [0],
            start: 0, //默认为1
            end: 100, //默认为100
        },
    ],
    series: [{
            name: '进水1#流量',
            type: 'line',
            smooth: true,
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default',
                        opacity: 0.2
                    }
                }
            },
            data: [
                [new Date(zeroTime.getTime() + 8 * 60 * 60 * 1000 - 100).getTime(), 23],
                [new Date(zeroTime.getTime() + 10 * 60 * 60 * 1000 - 100).getTime(), 27],
                [new Date(zeroTime.getTime() + 13 * 60 * 60 * 1000 - 100).getTime(), 32],
                [new Date(zeroTime.getTime() + 16 * 60 * 60 * 1000 - 100).getTime(), 23]
            ]
        }, {
            name: '进水2#流量',
            type: 'line',
            smooth: true,
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default',
                        opacity: 0.2
                    }
                }
            },
            data: []
        }, {
            name: '进水3#流量',
            type: 'line',
            smooth: true,
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default',
                        opacity: 0.2
                    }
                }
            },
            data: []
        }, {
            name: '进水4#流量',
            type: 'line',
            smooth: true,
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default',
                        opacity: 0.2
                    }
                }
            },
            data: []
        }, {
            name: '高效沉淀池流量',
            type: 'line',
            smooth: true,
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default',
                        opacity: 0.2
                    }
                }
            },
            data: []
        }, {
            name: '出水流量',
            type: 'line',
            smooth: true,
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default',
                        opacity: 0.2
                    }
                }
            },
            data: []
        },
        { // 这个是一个将时间范围扩大的一个隐藏线
            name: '.anchor',
            type: 'line',
            showSymbol: false,
            data: [{
                    name: 'start',
                    value: [zeroTime.getTime(), 0]
                },
                {
                    name: 'over',
                    value: [overTime.getTime(), 0]
                }
            ],
            itemStyle: {
                normal: {
                    opacity: 0
                }
            }, //不绘制该线条
            lineStyle: {
                normal: {
                    opacity: 0
                }
            }
        }
    ]
};