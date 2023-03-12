option = {
    backgroundColor: '#00265f',
    title: {
        text: '节目收视率',
        textStyle: {
            color: '#fff',
            fontSize: 24
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    color: ['#b2f4f8', '#ffcb4d', '#12fffe'],
    legend: {
        data: ['大学教育程度', '35岁以上观众', '所有观众'],
        right: 10,
        top: 10,
        textStyle: {
            color: "#fff",
            fontSize: 16
        },
        icon: 'circle',
        itemWidth: 16,
        itemHeight: 16,
        itemGap: 35
    },
    grid: {
        left: '5%',
        right: '4%',
        bottom: '5%',
        top: '15%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: ['19:00',
            '19:10',
            '19:20',
            '19:30',
            '19:40',
            '19:50',
            '20:00',
            '20:10',
        ],
        axisLine: {
            show: true,
            lineStyle: {
                color: "#12fffe",
                width: 1,
                type: "solid"
            }
        },
        axisTick: {
            show: false,
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
        name: '%',
        nameTextStyle: {
            color: '#ffffff'
        },
        offset: 0,
        axisLabel: {
            // formatter: '{value} %',
            color: '#fff'
            
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "#12fffe",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
                color: "#076969",
                width: 1,
            }
        }
    }],
    series: [{
        name: '大学教育程度',
        type: 'line',
        data: [20, 50, 80, 58, 83, 68, 57, 80,],
        smooth: true,
        symbolSize: 0,
        markLine: {
            symbolSize:0,
            lineStyle: {
                normal: {
                    color: "#12fffe",
                    type: 'dashed',
                    width: 2,
                },
                emphasis: {
                    color: "#d9def7"
                }
            },
            data: [{
                xAxis: '19:30',
                label: {
                    show: false
                }
            },{
                xAxis: '19:50',
                label: {
                    show: false
                }
            },
            {
                xAxis: '20:00',
                label: {
                    show: false
                }
            }]
        },
        markArea: {
            silent: true,
            data: [
                [{
                    name: '新闻联播',
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        },
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'insideTopLeft',
                            fontStyle: 'normal',
                            color: "red",
                            fontSize: 20,
                            offset: [0,-100],
                            distance: 50
                        }
                    },
                    coord: ['19:10','100'],
                }, {
                    coord: [1, 0],
                }],
                [{
                    name: '天气预报',
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        },
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'insideTopLeft',
                            fontStyle: 'normal',
                            color: "#ff6046",
                            fontSize: 20,
                            offset: [0,-100],
                            distance: 50
                        }
                    },
                    coord: ['19:40','100'],
                }, {
                    coord: [4, 0],
                }],
                [{
                    name: '焦点访谈',
                    itemStyle: {
                        normal: {
                            color: 'transparent'
                        },
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'insideTopLeft',
                            fontStyle: 'normal',
                            color: "red",
                            fontSize: 20,
                            // offset: [0,-100],
                            // distance: 50
                        }
                    },
                    coord: ['20:00','100'],
                }, {
                    coord: [6, 0],
                }],
            ]
        }
    }, {
        name: '35岁以上观众',
        type: 'line',
        data: [50, 70, 60, 61, 75, 87, 60, 62],
        smooth: true,
        symbolSize: 0
    }, {
        name: '所有观众',
        type: 'bar',
        data: [1, 48, 73, 68, 53, 47, 50, 72],
        barWidth: 10,
        barGap: 1,
        itemStyle: {
            normal: {
                barBorderRadius: 10,
            }
        }
    }]
};