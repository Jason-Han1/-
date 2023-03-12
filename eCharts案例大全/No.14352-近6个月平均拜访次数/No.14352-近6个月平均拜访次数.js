option = {
    backgroundColor: '#fff',
    title: {
        text: '近6个月平均拜访次数',
        show: false,
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#333'
        },
        left: '6%'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#333'
            }
        }
    },
    legend: {
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        data: ['近6个月平均拜访次数'],
        right: 'center',
        textStyle: {
            fontSize: 12,
            color: '#333'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14,
                color: '#999'
            }
        },
        data: ['2017-07', '2017-08', '2017-09', '2017-10', '2017-11', '2017-12']
    }],
    yAxis: [{
        type: 'value',
        name: '',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14,
                color: '#999'
            }
        },
        splitLine: {
            lineStyle: {
                type: 'solid',
                color: '#ccc'
            }
        }
    }],
    series: [{
        name: '近6个月平均拜访次数',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 136, 212, 0.2)'
                }, {
                    offset: 1,
                    color: 'rgba(0, 136, 212, 0)'
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
        data: [120, 110, 145, 122, 165, 150]
    }, ]
}