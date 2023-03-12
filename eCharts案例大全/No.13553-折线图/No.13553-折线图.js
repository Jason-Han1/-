 option = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            formatter: '{value} k'
        }
    },
    series: [{
        data: [3, 5, 3, 5, 3, 5, 3,5,8,5],
        type: 'line',
        showSymbol: false,
        smooth: true,
        itemStyle: {
            normal: {
                color: "#16D9F0"
            },
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#16D9F0'
                }, {
                    offset: 1,
                    color: '#fff'
                }])
            }
        },
    }]
}