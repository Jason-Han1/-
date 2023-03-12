option = {
    backgroundColor: '#0f375f',
    grid: {
        top: 20,
        left: 50,
        right: 50,
        bottom: 20,
        containLabel: true,
    },
    xAxis: {
        type: 'value',
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.2)',
            },
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            fontSize: 14,
            color: 'rgba(211, 232, 255, 1)',
            formatter: function (param) {
                return param + '%';
            },
        },
        min: 0,
        max: 100,
        splitLine: {
            show: false,
        },
    },
    yAxis: {
        type: 'category',
        axisLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.2)',
            },
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            fontSize: 14,
            color: 'rgba(211, 232, 255, 1)',
        },
        data: ['R', 'SQL', 'Python'],
    },
    series: [
        {
            type: 'bar',
            barGap: '-65%',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    color: 'rgba(89, 195, 255, 1)',
                    fontSize: 14,
                    formatter: function (param) {
                        // return data.visits[param.dataIndex];
                    },
                },
            },
            barWidth: 19,
            itemStyle: {
                normal: {
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    borderWidth: 1,
                    color: 'rgba(102, 102, 102,0)',
                },
            },
            z: 1,
            data: [100, 100, 100],
        },
        {
            type: 'bar',
            barGap: '-80%',
            barWidth: 11,
            itemStyle: {
                normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                        {
                            offset: 0,
                            color: 'rgba(45, 131, 232, 1)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(89, 196, 245, 1)',
                        },
                    ]),
                },
            },
            max: 1,
            labelLine: {
                show: true,
            },
            z: 2,
            data: [20, 36, 88],
        },
    ],
};
