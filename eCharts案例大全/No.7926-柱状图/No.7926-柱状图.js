var index = 0;
var colorList = ['#f36c6c', '#e6cf4e', '#20d180', '#0093ff'];
option = {
    backgroundColor: '#fff',
    color: ['#1373E9'],
    grid: {
        containLabel: true,
        top: 25,
        bottom: 0,
        left: 2,
        right: 20
    },
    legend: {
        data: ['隐患来源分布'],
        itemWidth: 6,
        itemHeight: 6
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            lineStyle: {
                color: '#CCCCCC',
                type: 'dashed'
            }
        }
    },
    yAxis: {
        type: 'category',
        data: ['企业自查', '智能识别', '政府检查', '其他'],
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            interval: 0
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#CCCCCC',
                type: 'dashed'
            }
        }
    },
    series: [{
        name: '隐患来源分布',
        type: 'bar',
        barWidth: '18px',
        label: {
            show: true,
            position: 'right',
            color: '#333333',
            fontSize: 14,
            offset: [2, 0]
        },
        data: [{
                value: 220,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                                offset: 0,
                                color: '#0286ff'
                            },
                            {
                                offset: 1,
                                color: '#00feff'
                            }
                        ])
                    }
                }
            },
            {
                value: 120,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                                offset: 0,
                                color: '#8bd46e'
                            },
                            {
                                offset: 1,
                                color: '#09bcb7'
                            }
                        ])
                    }
                }
            },
            {
                value: 20,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                                offset: 0,
                                color: '#248ff7'
                            },
                            {
                                offset: 1,
                                color: '#6851f1'
                            }
                        ])
                    }
                }
            },
            {
                value: 200,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                                offset: 0,
                                color: '#fccb05'
                            },
                            {
                                offset: 1,
                                color: '#f5804d'
                            }
                        ])
                    }
                }
            }
        ]
    }]
};