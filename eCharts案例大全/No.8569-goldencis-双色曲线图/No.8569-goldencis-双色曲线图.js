option = {
    backgroundColor:"#FFFFFF",
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#57617B'
            }
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
                color: '#57617B'
            }
        },
        data: ['3-1','3-2','3-3','3-4','3-5',]
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            margin: 10,
            colro:'rgba(177, 177, 177, 1)',
            textStyle: {
                
                fontSize: 14
            }
        },
        splitLine: {
            lineStyle: {
                color: '#F1F1F1'
            }
        }
    }],
    series: [{
        name: '未确认',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1,
                color:'rgba(242, 139, 2, 1)'
            }
        },
        areaStyle: {
            normal: {
                 color:'rgba(242, 139, 2, 0.2)',
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color:'rgba(242, 139, 2, 1)',
                borderColor: 'rgba(242, 139, 2, 0.2)',
                borderWidth: 12

            }
        },
        data: [220, 182, 191, 134, 150]
    }, {
        name: '新增',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 1,
                 color:'rgba(52, 122, 255, 1)'
            }
        },
        areaStyle: {
            normal: {
                 color:'rgba(52, 122, 255, 0.2)',
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
               color:'rgba(52, 122, 255, 1)',
                borderColor: 'rgba(52, 122, 255, 0.2)',
                borderWidth: 12

            }
        },
        data: [120, 110, 125, 145, 122]
    }]
};