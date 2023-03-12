option = {
    color: ['#0083fd', '#c5c65a', '#03ba1b', '#c5c65a'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        },
        {
            type: 'category',
            position: 'bottom',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis: [
        {
            type: 'value'
        },
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            xAxisIndex: 0,
            yAxisIndex: 0,
            barWidth: '60%',
            data: ['-', '-', '-', '-', 390, 330, 220]
        },
        {
            name: '间接访问',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            barWidth: '60%',
            data: [10, 52, 200, 334, '-', '-', '-']
        },
        {
            name: '直接访问',
            type: 'line',
            xAxisIndex: 0,
            yAxisIndex: 0,
            barWidth: '60%',
            data: ['-', '-', '-', '-', 10, 2, 3]
        },
        {
            name: '间接访问',
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            barWidth: '60%',
            data: [1, 2, 3, 3.3, 10, '-', '-']
        }
    ]
};
