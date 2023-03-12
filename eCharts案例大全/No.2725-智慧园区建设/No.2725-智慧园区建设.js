option = {
    title: {
        text: '累计投资',
        right: 10,
        top: 10,
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#000',
            },
        },
    },
    grid: {
        top: '50',
        left: '10',
        right: '10',
        bottom: '0%',
        containLabel: true,
    },
    legend: {
        show: false,
        itemWidth: 5,
        itemHeight: 5,
        bottom: 0,
        x: 'center',
        textStyle: {
            color: '#fff',
        },
        data: ['累计投资'],
    },
    xAxis: [
        {
            type: 'category',
            data: [
                '1期',
                '2期',
                '3期',
                '4期',
                '5期',
                '6期',
                '7期',
                '8期',
                '9期',
                '10期',
                '11期',
                '12期',
                '13期',
                '14期',
                '15期',
            ],
            boundaryGap: false,
            axisPointer: {
                type: 'shadow',
            },
            axisLine: {
                show: false,
            },
        },
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#091434',
                    width: 1,
                },
            },
            axisLabel: {
                formatter: '{value}W',
            },
            splitLine: {
                show: false,
            },
            splitArea: {
                show: false,
            },
        },
    ],
    series: [
        {
            name: '累计投资',
            type: 'line',
            data: [
                17840.83,
                18434.83,
                25571.16,
                30296.16,
                33496.89,
                35746.89,
                39315.05,
                41693.83,
                42883.22,
                45262,
                45757,
                47717,
                57232.11,
                61394.97,
                67002.6,
            ],
            barWidth: 20,
            // 设置折线折点颜色
            itemStyle: {
                color: '#fff',
            },
            // 设置折线线条颜色
            lineStyle: {
                normal: {
                    color: '#76c432',
                },
            },
            label: {
                show: true,
            },
            areaStyle: {
                normal: {
                    color: {
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        type: 'linear',
                        global: false,
                        colorStops: [
                            {
                                offset: 0,
                                color: 'rgba(0,202,149,0.3)',
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,202,149,0)',
                            },
                        ],
                    },
                    shadowColor: 'rgba(0,202,149, 0.9)',
                    shadowBlur: 20,
                },
            },
        },
    ],
};
