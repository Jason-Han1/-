option = {
    title: {
        show: false,
        text: '入党时间'
    },
    grid: {
        show: true,
        left: '0%',
        right: '0%',
        bottom: '0%',
        top: '0%',
        containLabel: true,
        backgroundColor: [
            // '#262e3b',
            '#2a303e'
        ]


    },
    xAxis: {
        data: ['1', '2', '3', '4', '5', '6', '7'],
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#5d94ca'
            }
        },
        axisLabel: {
            show: false
        }
    },
    yAxis: {
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#5d94ca'
            }
        },
        axisLabel: {
            show: false
        },
        splitNumber: 4,
        splitLine: {
            show: false
        },
    },
    series: [{
        type: 'line',
        data: [36, 1000, 2000, 2750, 2250, 3250, 542],
        itemStyle: {
            normal: {
                
                color:'#eedd95',
                lineStyle: {
                    color: '#eedd95'
                }
            }
        },
        symbolSize: 14,

    }],
    tooltip: {
        trigger: 'item',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
    },
};