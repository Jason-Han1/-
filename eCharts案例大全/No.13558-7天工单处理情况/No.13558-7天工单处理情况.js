option = {
    backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    grid: {
        left: "3%",
        right: "10%",
        bottom: "3%",
        containLabel: true
    },
    legend: {
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        data: ['工单总数', '解决工单数'],
        right: '4%',
        textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
        }
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                "color": "#063374",
            }
        },
        axisLabel: {
            margin: 10,
            color: "#00c7ff",
            textStyle: {
                fontSize: 14
            }
        },
        axisTick: {
            show: false
        },
        data: ['11:01', '11:01', '11:01', '11:01', '11:01', '11:01', '11:01']
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            margin: 10,
            color: "#00c7ff",
            textStyle: {
                fontSize: 14
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "#063374",
            },
        },
    }],
    series: [{
        name: '工单总数',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: true,
        lineStyle: {
            normal: {
                width: 3
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(137, 189, 27, 1)'
                }, {
                    offset: 0.3,
                    color: 'rgba(137, 189, 27, 0.8)'
                }, {
                    offset: 0.8,
                    color: 'rgba(137, 189, 27, 0.3)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(137,189,27)',
                borderColor: 'rgba(137,189,2,0.27)',
                borderWidth: 12

            }
        },
        data: [75, 60, 52, 38, 30, 25, 20]
    }, {
        name: '解决工单数',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: true,
        lineStyle: {
            normal: {
                width: 3
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 136, 212, 1)'
                }, {
                    offset: 0.3,
                    color: 'rgba(0, 136, 212, 0.8)'
                }, {
                    offset: 1,
                    color: 'rgba(0, 136, 212, 0.3)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(0,136,212)',
                borderColor: 'rgba(0,136,212,0.2)',
                borderWidth: 12

            }
        },
        data: [55, 48, 35, 28, 23, 15, 10]
    }, ]
};