let echartstable111 = {
    xdata: ['一行', '二行', '三行', '四行', '五行'],
    data: [1000, 1000, 1000, 1000, 1000],
    data1: [1000, 1000, 1000, 2600, 1000]
}
option = {
    color: ['#0177ff','#ff7814'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    grid: {
        left: 180,
        top: 30
    },
    xAxis: [
        {
            type: 'value',
            splitLine: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    show: false,
                    color: '#D4D4D4', // 颜色
                }
            },
            axisLabel: {
                color: '#D4D4D4',
                fontSize: 18
            },
        },
    ],
    yAxis: [
        {
            type: 'category',
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
            },
            axisLine: {
                lineStyle: {
                    show: false,
                    color: '#D4D4D4', // 颜色
                }
            },
            axisLabel: {
                color: '#D4D4D4',
                fontSize: 18
            },
            data: echartstable111.xdata
        }
    ],
    series: [
        {
            type: 'bar',
            stack: '总量',
            barWidth: 40,
            label: {
                show: false
            },
            emphasis: {
                focus: 'series'
            },
            data: echartstable111.data
        },
        {
            type: 'bar',
            stack: '总量',
            barWidth: 40,
            label: {
                show: false,
                position: 'left'
            },
            emphasis: {
                focus: 'series'
            },
            data: echartstable111.data1
        }
    ]
}