option = {
    color: ['#00C3FF', '#FF6452'],
    legend: {
        top: '5%',
        orient: 'vertical',
        data: ['违法已反馈', '违法未反馈'],
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: {
        type: 'value',
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
        boundaryGap: [0, 0.01],
        splitLine: {
            show: false,
        },
        axisLabel: {
            // formatter: '{value}%',
        },
    },
    yAxis: {
        type: 'category',
        data: ['达达', '饿了么', '美团', '点我达', '顺丰', '闪送'],
        axisLine: {
            show: false,
        },
        axisTick: {
            show: false,
        },
    },
    series: [
        {
            name: '违法已反馈',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230],
            barMaxWidth: 3,
            emphasis: {
                label: {
                    show: true,
                    // formatter: '{c}%',
                    position: 'top',
                },
            },
        },
        {
            name: '违法未反馈',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807],
            barMaxWidth: 3,
            emphasis: {
                label: {
                    show: true,
                    // formatter: '{c}%',
                    position: 'top',
                },
            },
        },
    ],
};
