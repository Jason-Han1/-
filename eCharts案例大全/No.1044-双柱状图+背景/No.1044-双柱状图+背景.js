option = {
    backgroundColor: '#141E27',
    color: ['#153238'],
    series: [
        {
            data: [200, 200, 200, 200, 200],
            type: 'bar',
            xAxisIndex: 0,
            silent: true,
            barWidth: 40,
            tooltip: {
                show: false,
            },
        },
        {
            name: '类目1',
            data: [110, 20, 30, 60, 90],
            type: 'bar',
            xAxisIndex: 1,
            itemStyle: {
                color: '#22e5d1',
            },
            barWidth: 10,
        },
        {
            name: '类目2',
            data: [120, 70, 158, 89, 50],
            type: 'bar',
            xAxisIndex: 1,
            itemStyle: {
                color: '#ff8800',
            },
            barWidth: 10,
        },
    ],
    xAxis: [
        {
            data: ['系列一','系列二','系列三','系列四','系列五'],
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
        {
            data: ['系列一','系列二','系列三','系列四','系列五'],
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
        {
            data: ['系列一','系列二','系列三','系列四','系列五'],
            axisLine: {
                show: false,
            },
            axisLabel: {
                show: false,
            },
            axisTick: {
                show: false,
            },
        },
    ],
    yAxis: {
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        splitLine: {
            show: false,
        },
    },
};
