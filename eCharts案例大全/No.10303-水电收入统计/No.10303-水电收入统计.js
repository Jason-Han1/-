option = {
    backgroundColor: '#323a5e',
    title: {
        text: "当月水电收入统计",
        textStyle: {
            color: '#fff',
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    legend: {
        data: ['水费', '电费'],
        left: 'center',
        align: 'left',
        top: '2%',
        textStyle: {
            color: "#fff"
        },
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 35
    },
    grid: {
        left: '2%',
        right: '4%',
        bottom: '14%',
        top: '26%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['2019-08-10',
            '2019-08-11',
            '2019-08-12',
            '2019-08-13',
            '2019-08-14',
            '2019-08-15',
            '2019-08-16',
            '2019-08-17',
            '2019-08-18',
            '2019-08-19',

        ],
        axisLine: {
            show: true,
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
            }
        },
        axisTick: {
            show: true,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#00c7ff",
            }
        },
    }],
    yAxis: [{
        type: 'value',
        name: '元',
        axisLabel: {
            formatter: '{value}'
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#00c7ff",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
                color: "#0F55B9",
            }
        }
    }],
    series: [{
        name: '水费',
        type: 'line',
        data: [220, 120, 240, 266, 210, 246, 220, 120, 240, 250],
        barWidth: 16, //柱子宽度
        barGap: 1, //柱子之间间距
        label: {
            normal: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#1dacfe'
                }
            }
        },
        itemStyle: {
            normal: {
                show: true,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#f7734e'
                }, {
                    offset: 1,
                    color: '#e12945'
                }]),
                barBorderRadius: 50,
                borderWidth: 0,
            }
        },
    }, {
        name: '电费',
        type: 'line',
        data: [130, 150, 220, 245, 136, 256, 130, 150, 220, 245, 136],
        barWidth: 16,
        barGap: 1,
        label: {
            normal: {
                show: true,
                position: 'top',
                textStyle: {
                    color: '#1dacfe'
                }
            }
        },
        itemStyle: {
            normal: {
                show: true,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#1a98f8'
                }, {
                    offset: 1,
                    color: '#7049f0'
                }]),
                barBorderRadius: 50,
                borderWidth: 0,
            }
        }
    }]
};