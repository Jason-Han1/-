option = {
    legend: {
        data:["个人","整体"],
        left: "right"
    },
    backgroundColor: '#fff',
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#999'
            }
        },
        splitLine: {
            show: false
        },
        axisLabel: {
            show: false
        }
    }],
    yAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#999'
            }
        },
        splitLine: {
            show: false
        },
    }],
    series: [{
            name: '个人',
            type: 'bar',
            stack: '个人',
            barWidth: '20%',
            label: {
                normal: {
                    show: true,
                    position: 'left',
                    formatter: function(params) {
                        return -params.value
                    },
                    textStyle: {
                        color: '#ff8400',
                    }
                }
            },
            data: [-120, -160, -120, -120],
            itemStyle: {
                normal: {
                    barBorderRadius: [20, 0, 0, 20],
                    color: new echarts.graphic.LinearGradient(
                        0, 1, 1, 0, [{
                                offset: 0,
                                color: '#ffc939'
                            },
                            {
                                offset: 1,
                                color: '#ff8400'
                            }
                        ])
                }
            },
        },
        {
            name: '整体',
            type: 'bar',
            stack: '整体',
            barWidth: '20%',
            label: {
                normal: {
                    show: true,
                    position: 'left',
                    formatter: function(params) {
                        return -params.value
                    },
                    textStyle: {
                        color: '#1192ff',
                    }
                }
            },
            data: [-120, -160, -120, -120],
            itemStyle: {
                normal: {
                    barBorderRadius: [20, 0, 0, 20],
                    color: new echarts.graphic.LinearGradient(
                        0, 1, 1, 0, [{
                                offset: 0,
                                color: '#01deff'
                            },
                            {
                                offset: 1,
                                color: '#1192ff'
                            }
                        ])
                }
            },
        },
    ]
};