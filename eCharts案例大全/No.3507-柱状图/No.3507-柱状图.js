option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    legend: {
        data: ['2011年', '2012年', '2013年'],
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
    },
    yAxis: [
        {
            type: 'category',
            data: ['巴西'],
            axisTick: {
                show: false, // 不显示坐标轴刻度线
            },
            axisLine: {
                show: true, // 不显示坐标轴线
                lineStyle: {
                    color: '#ccc',
                    width: 2,
                },
            },
            axisLabel: {
                interval: 0,
                textStyle: {
                    color: '#333',
                    fontSize: 14,
                },
            },
        },
    ],
    series: [
        {
            name: '2012年',
            type: 'bar',
            data: [19125],
            showBackground: true,
            barWidth: 30,
            itemStyle: {
                color: 'red',
            },
        },
        {
            name: '2013年',
            type: 'bar',
            data: [15125],
            barWidth: 30,
            showBackground: true,
            itemStyle: {
                color: 'yellow',
            },
        },
        {
            name: '2011年',
            type: 'bar',
            stack: '总量',
            data: [10000],
            showBackground: true,
            y: 0,
            barWidth: 30,
            itemStyle: {
                color: '#1EF8F3',
            },
        },
    ],
};
