option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            show: true,
            status: 'shadow',
            z: -1,
            shadowStyle: {
                color: '#E6F7FF',
            },
            type: 'shadow'
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
            position: 'bottom',
            type: 'category',
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#ECF1F6'
                }
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                rotate: 0,
                fontSize: 12,
                color: '#3A3A3C'
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#ECF1F6', '#ECF1F6'],
                    width: 0,
                    type: 'dashed'
                }
            },
            gridIndex: 0,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        }
    ],
    yAxis: [
        {
            type: 'value',
            position: 'left',
            minInterval: 5,
            maxInterval: 5,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                show: true,
                rotate: 0,
                fontSize: 12,
                color: '#6E7D9C',
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#ECF1F6', '#ECF1F6'],
                    width: 1,
                    type: 'solid'
                }
            },
        }
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            data: [10, 52, 60, 50, 40, 30, 20],
            itemStyle: {
                color: '#43A7FF'
            },
            barMaxWidth: '30%',
        }
    ]
};