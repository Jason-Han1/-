option = {
    backgroundColor: '#174973',
    title: {
        text: '分区受理情况',
        top: '5%',
        left: 'center',
        textStyle: {
            color: '#FFF',
            align: 'center',
        }
    },
    grid: {
        show: true,
        left: '5%',
        right: '5%',
        top: '20%',
        bottom: '5%',
        containLabel: true,
        backgroundColor: 'rgba(0,0,0,0.1)'
    },
    tooltip: {
        show: true,
        trigger: 'item'
    },
    legend: {
        show: true,
        top: '10%',
        right: 20,
        icon: 'rect',
        itemWidth: 22,
        itemHeight: 3,
        textStyle: {
            color: '#fff'
        },
        data: ['大户', '市中']
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLabel: {
            color: '#fff'
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(0, 204, 255, 0.5)'
            }
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false
        },
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    }],
    yAxis: [{
            type: 'value',
            name: '',
            axisLabel: {
                formatter: '{value}',
                textStyle: {
                    color: '#fff'
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 204, 255, 0.5)'
                }
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(244, 244, 244, 0.2)'
                }
            }
        },
        {
            type: 'value',
            name: '',
            axisLabel: {
                formatter: '{value} %',
                textStyle: {
                    color: '#fff'
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 204, 255, 0.5)'
                }
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(244, 244, 244, 0.3)'
                }
            }
        }
    ],
    series: [{
            name: '大户',
            type: 'line',
            stack: '总量',
            symbol: 'circle',
            symbolSize: 9,
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                                offset: 0,
                                color: "#E7FF01" // 0% 处的颜色
                            }, 
                            {
                                offset: 1,
                                color: "#86F028" // 100% 处的颜色
                            }
                        ],
                        global: false // 缺省为 false
                    },
                    lineStyle: {
                        color: "#86F028",
                        width: 1
                    }
                }
            },
            markPoint: {
                itemStyle: {
                    normal: {
                        color: 'red'
                    }
                }
            },
            data: [120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 260, 280]
        },
        {
            name: '市中',
            type: 'line',
            stack: '总量',
            symbol: 'circle',
            symbolSize: 9,
            itemStyle: {
                normal: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                                offset: 0,
                                color: "#00FFFF" // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: "#0099FF" // 100% 处的颜色
                            }
                        ],
                        global: false // 缺省为 false
                    },
                    lineStyle: {
                        color: "#3CDBFF",
                        width: 1
                    }
                }
            },
            data: [220, 182, 191, 210, 230, 270, 270, 201, 154, 140, 240, 250]
        }
    ]
};