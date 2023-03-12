option = {
    backgroundColor: '#051552',
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "shadow",
            textStyle: {
                color: "#fff"
            }

        },
    },
    legend: {
        data: ['服务人数', '占服务总人数比例'],
        align: 'left',
        left: 10,
        bottom: 0,
        textStyle: {
            color: '#fff'
        }
    },
    xAxis: [{
        type: "category",
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitArea: {
            show: false
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#fff',
                fontSize: 15
            }
        },
        data: ['助餐', '助浴', '助洁', '助医', '助急', '助购(行)']
    }],
    yAxis: [{
            type: 'value',
            name: '',
            position: 'left',
            axisLine: {
                show: false

            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#fff',
                    width: 0.5,
                    type: 'dashed'
                }
            },
            axisLabel: {
                color: '#fff',
                formatter: '{value} '
            },
            axisTick: {
                show: false
            }
        },
        {
            type: 'value',
            name: '',
            position: 'right',
            axisLine: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#fff',
                    width: 0.5,
                    type: 'dashed'
                }
            },
            axisLabel: {
                color: '#fff',
                formatter: '{value} %'
            },
            axisTick: {
                show: false
            }
        }
    ],
    series: [{
            name: '服务人数',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(18,237,152,1)'
                            },
                            {
                                offset: 0.5,
                                color: 'rgba(18,237,152,.5)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(18,237,152,0.1)'
                            }
                        ]
                    )
                }
            },
            barWidth: 50,
            data: [1156, 627, 998, 797, 978, 347]
        },
        {
            name: '占服务总人数比例',
            yAxisIndex: 1,
            type: 'line',
            smooth: true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        width: 3, //折线宽度
                    },
                    opacity: 0.4,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 1,
                        color: '#f09819' // 0% 处的颜色
                    }, {
                        offset: 0,
                        color: ' #edde5d ' // 100% 处的颜色
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            data: [8.3, 4, 6.5, 4.2, 5.4, 2]
        }
    ]
};