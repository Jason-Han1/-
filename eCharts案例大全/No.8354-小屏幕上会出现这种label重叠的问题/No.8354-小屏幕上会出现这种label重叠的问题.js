option = {
    legend: {
        data: [{
            name: '金额（亿）',
            icon: 'image://../images/counterparty_risk/icon_green_circle.png'
        }, {
            name: '折扣（%）',
            icon: 'image://../images/counterparty_risk/icon_blue_circle.png'
        }],
        textStyle: {
            color: 'rgba(255,255,255,0.7)'
        },
        right: 0,
        selectedMode: false, //取消图例上的点击事件
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['AA', 'AAA', 'AA+', 'AAA', 'AA+'],
        splitLine: { //网格线
            lineStyle: {
                type: 'dashed', //设置网格线类型 dotted：虚线   solid:实线
                color: 'rgba(255,255,255,0.075)'
            },
            show: true, //隐藏或显示
        },
        axisLabel: {
            textStyle: {
                color: 'rgba(255,255,255,0.7)',
            }
        },
        axisLine: {
            lineStyle: {
                type: 'dashed', //设置网格线类型 dotted：虚线   solid:实线
                color: 'rgba(255,255,255,0.075)'
            }
        },

    },
    yAxis: [{
            type: 'value',
            position: 'left',
            offset: 6,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
            },
            splitLine: { //网格线
                lineStyle: {
                    type: 'dashed', //设置网格线类型 dotted：虚线   solid:实线
                    color: 'rgba(255,255,255,0.075)'
                },
                show: true //隐藏或显示
            },
            axisLabel: {
                textStyle: {
                    color: '#4E649E',
                }
            }

        },
        {
            type: 'value',
            min: 0,
            max: 100,
            position: 'right',
            offset: 6,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false,
            },
            splitLine: { //网格线
                lineStyle: {
                    type: 'dashed', //设置网格线类型 dotted：虚线   solid:实线
                    color: 'rgba(255,255,255,0.075)'
                },
                show: true //隐藏或显示
            },
            axisLabel: {
                textStyle: {
                    color: '#4E649E',
                }
            }

        },
    ],
    series: [{
            name: '折扣金额（亿）',
            type: 'line',
            smooth: true,
            data: [8, 13, 9, 7, 7],
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(26, 103, 108, 0.43)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(22, 74, 100, 0)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            },
            label: {
                show: true,
                fontSize: 12,
                color: '#8AFFC3'
            },
            itemStyle: {
                normal: {
                    color: "#69D39D",
                    lineStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(28, 111, 97, 0.8)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(40, 155, 141, 0.4)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                }
            },
            markPoint: {
                type: 'triangle'
            }
        },
        {
            name: '折扣率（%）',
            type: 'line',
            smooth: true,
            yAxisIndex: 1,
            data: [46, 78, 96, 55, 78],
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(57,106,232,1)' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'rgba(79,166,255, 0)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            },
            label: {
                show: true,
                fontSize: 12,
                color: '#73B2FF'
            },
            itemStyle: {
                normal: {
                    color: '#359EFF', //改变折线点的颜色
                    lineStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(57, 106, 232, 1)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(79, 166, 255, 0)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    }
                }
            }
        }
    ]

};