option = {
    backgroundColor: '#000',
    width:'420',
    height:'150',
    title: {
        text: '请求数',
        textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: '#F1F1F3'
        },
        left: '6%'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
        }
    },
    legend: {
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        data: ['移动'],
        right: '4%',
        textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: false
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#fff'
            }
        },
        data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55']
    }],
    yAxis: [{
        type: 'value',
        name: '单位（%）',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#000'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            }
        },
        splitLine: {
            lineStyle: {
                color: '#000'
            }
        }
    }],
    series: [{
        name: '移动',
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
                    color: 'rgba(110, 231, 47, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(221, 244, 58, 0.3)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(110,189,27)',
                borderColor: 'rgba(137,189,2,0.27)',
                borderWidth: 12

            }
        },
        data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122]
    }, ]
};