option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#82b0ec',
                },
            },
        },
    ],
    yAxis: [
        {
            type: 'value',
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#82b0ec',
                },
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#aaa',
                },
            },
        },
    ],
    series: [
        {
            name: '案件',
            type: 'bar',
            barWidth: '25%',
            itemStyle: {
                normal: {
                    color: '#277ace',
                    barBorderRadius: 50,
                    borderWidth: 0,
                    borderColor: '#333',
                },
            },
            data: [110, 52, 200, 334, 390, 330, 220],
        },
    ],
};
