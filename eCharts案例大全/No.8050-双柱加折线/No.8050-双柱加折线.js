option = {
    backgroundColor: "#0e2469",
    title: [{
        text: "部件一次校验合格率",
        textStyle: {
            color: "#5ecaff",
            fontSize: 14
        },
        top: "top",
        left: "center"
    }, {
        text: "整机一次校验合格率",
        textStyle: {
            color: "#5ecaff",
            fontSize: 14
        },
        top: "50%",
        left: "center"
    }],
    grid: [{
            top: "10%",
            bottom: "53%",
            left: '10%',
        },
        {
            top: "53%",
            left: '10%',
            bottom: "10%",
        }
    ],
    legend:[
        {
            top: "10%",
            right:"20",
            textStyle:{
                color:'#fff'
            }
        },
        {
            top: "52%",
            right:"20",
            textStyle:{
                color:'#fff'
            }
        },
    ],
    xAxis: [{
            type: 'category',
            gridIndex: 0,
            data: ['部件1', '部件2', '部件3', '部件4'],
            axisPointer: {
                type: 'shadow'
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#4c6fc6'
                }
            },
            splitLine: {
                show: false,
            },
        },
        {
            type: 'category',
            gridIndex: 1,
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#4c6fc6'
                }
            },
            splitLine: {
                show: false,
            },

            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            data: ['整机1', '整机2', '整机3', '整机4']
        },

    ],
    yAxis: [{
            gridIndex: 0,
            type: 'value',
            name: '数量',
            nameGap: 5,
            splitNumber: 2,
            nameTextStyle: {
                color: '#fff'
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#4c6fc6'
                }
            },
            splitLine: {
                show: false,
            },

        },
        {
            gridIndex: 1,
            type: 'value',
            name: '数量',
            nameGap: 5,
            splitNumber: 2,
            nameTextStyle: {
                color: '#fff'
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#4c6fc6'
                }
            },
            splitLine: {
                show: false,
            },
        }

    ],
    series: [{
            name: '计划',
            type: 'bar',
            barGap: '-10%',
            data: [48, 42, 36, 29],
            barWidth: 15, //柱图宽度
            itemStyle: {
                normal: {
                    color: '#a5a1ff',
                    barBorderRadius: [0, 0, 0, 0, ],
                },
            },

        }, {
            name: '实际',
            type: 'bar',
            data: [60, 48, 46, 39],
            barWidth: 15, //柱图宽度
            itemStyle: {
                normal: {
                    color: '#49a7ff',
                    barBorderRadius: [0, 0, 0, 0, ],
                },
            },

        }, {
            name: '同比上月',
            type: 'line',
            data: [80, 68, 86, 79],
            barWidth: 15, //柱图宽度
            itemStyle: {
                normal: {
                    color: '#ffba29',
                    barBorderRadius: [0, 0, 0, 0, ],
                },
            },

        },
        {
            name: '计划',
            type: 'bar',
            barGap: '-10%',
            data: [48, 42, 36, 29],
            barWidth: 15, //柱图宽度
            itemStyle: {
                normal: {
                    color: '#49a7ff',
                    barBorderRadius: [0, 0, 0, 0, ],
                },
            },
            xAxisIndex: 1,
            yAxisIndex: 1

        }, {
            name: '实际',
            type: 'bar',
            data: [60, 48, 46, 39],
            barWidth: 15, //柱图宽度
            itemStyle: {
                normal: {
                    color: '#ffba29',
                    barBorderRadius: [0, 0, 0, 0, ],
                },
            },
            xAxisIndex: 1,
            yAxisIndex: 1

        }, {
            name: '同比上月',
            type: 'line',
            data: [80, 68, 86, 79],
            barWidth: 15, //柱图宽度
            itemStyle: {
                normal: {
                   color: '#45f0ea',
                    barBorderRadius: [0, 0, 0, 0, ],
                },
            },
            xAxisIndex: 1,
            yAxisIndex: 1
        },

    ]
};