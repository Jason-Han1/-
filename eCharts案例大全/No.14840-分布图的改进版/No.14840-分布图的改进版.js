option = {
    backgroundColor:'#212121',
    color: ['#43a6f7'],
    grid: {
        left: '5%',
        right: '6%',
        top: '3%',
        bottom: '6%',
        containLabel: true
    },
    textStyle: {
        fontSize: '14',
        fontWeight: 'normal',
        color: '#eeeeee'
    },
    xAxis: {
        show: true,
        type: 'category',
        boundaryGap: false,
        data: ['11-2', '11-3', '11-4', '11-5', '11-6', '11-7', '11-8']
    },
    yAxis: {
        show: true,
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: '#3a4b61'
            }
        },
        axisLabel: {
            formatter: (params) => {
                if (params === 0) {
                    return ''
                } else {
                    return params
                }
            }
        }
    },
    series: [{
        name: '销售数据',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: [14, 14],
        itemStyle: {
            normal: {
                lineStyle: {
                    color: '#43a6f7'
                }
            }
        },
        areaStyle: {
            normal: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'rgba(67, 166, 247, 0.8)'

                    }, {
                        offset: 1,
                        color: 'rgba(67, 166, 247, 0)'
                    }],
                    globalCoord: false
                }
            }
        },
        data: [150, 113, 60, 120, 30, 280, 200]
    }]
};