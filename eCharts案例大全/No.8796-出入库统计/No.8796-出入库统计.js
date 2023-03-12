option = {
    color: ['#09bcb7', '#ff999a'],
    grid: {
        top: '20px',
        left: '20px',
        right: '20px',
        bottom: '20px',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            label: {
                backgroundColor: '#eee'
            }
        }
    },
    legend: {
        show: true,
        icon: 'circle',
        right: 140,
        itemWidth: 8,
        itemHeight: 8,
        textStyle: {
            color: '#555'
        },
        data: ['入库数量', '出库数量']
    },
    calculable: true,
    xAxis: {
        type: 'category',
        boundaryGap: false,
        axisLine: {
            show: false,
            lineStyle: {
                color: '#eee'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#555'
            }
        },
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    yAxis: {
        type: 'value',
        axistick: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: '#eee'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#555'
            }
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: ['#999']
            }
        }
    },
    series: [{
        type: 'line',
        name: '入库数量',
        areaStyle: {
            color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(9,188,183,0.7)'
                    },
                    {
                        offset: 0.8,
                        color: 'rgba(9,188,183,0.01)'
                    }
                ], false
            ),
            shadowColor: 'rgba(0,0,0,0.01)',
            shadowBlur: 10

        },
        smooth: true,
        lineStyle: {
            color: '#09bcb7'
        },
        data: [180, 160, 140, 88, 97, 75, 100, 86, 78, 28, 39, 67]
    }, {
        type: 'line',
        name: '出库数量',
        areaStyle: {
            color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(255,153,154,0.7)'
                    },
                    {
                        offset: 0.8,
                        color: 'rgba(255,153,154,0.01)'
                    }
                ], false
            ),
            shadowColor: 'rgba(0,0,0,0.01)',
            shadowBlur: 10

        },
        smooth: true,
        lineStyle: {
            color: '#ff999a'
        },
        data: [150, 90, 30, 188, 99, 88, 40, 56, 45, 66, 78, 90]
    }]
};