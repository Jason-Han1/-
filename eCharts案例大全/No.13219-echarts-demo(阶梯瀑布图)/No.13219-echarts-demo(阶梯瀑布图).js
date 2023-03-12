option = {
    backgroundColor: 'rgb(35, 43, 46)',
    tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },

    },
    legend: {
        data: ['支出', '收入'],
        textStyle: {
            color: 'white'
        },
    },
    color: ['rgba(0,193,255,0.8)', 'rgba(0,255,137,0.8)'],
    xAxis: [{
        type: 'category',
        splitLine: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#ccc',
                width: 1,
            },
        },
    }],
    yAxis: [{
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#ccc',
                width: 1,
            },
        },
    }],
    series: [{
            name: '辅助',
            type: 'bar',
            stack: '总量',
            barWidth: 35,
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [0, 900, 1245, 1530, 1376, 1376, 1511]
        },
        {
            name: '收入',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'top'
                    }
                }
            },
            data: [900, 345, 393, '-', '-', 135, 178]
        },
        {
            name: '支出',
            type: 'bar',
            stack: '总量',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'bottom'
                    }
                }
            },
            data: ['-', '-', '-', 108, 154, '-', '-']
        }
    ]
}