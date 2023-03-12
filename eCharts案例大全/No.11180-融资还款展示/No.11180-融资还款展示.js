option = {
    title: {
        text: '融资还款展示'
    },
    tooltip: {},
    legend: {
        data: ['应还款（元）', '实际还款（元）']
    },
    xAxis: {
        data: ["1月", "2月", "3月", "4月", "5月", "6月"]
    },
    yAxis: {},
    series: [{
        name: '应还款（元）',
        type: 'bar',
        label: {
            show: true,
            position: 'top',
            //formatter: '{a}:{b}: {c}'
        },
        data: [65, 60, 36, 10, 10, 20],
        itemStyle: {
            color: '#5B9BD5',
        }
    }, {
        name: '实际还款（元）',
        type: 'bar',
        label: {
            show: true,
            position: 'top',
            //formatter: '{a}:{b}: {c}'
        },
        data: [15, 35, 30, 2, 5, 9],
        itemStyle: {
            color: '#ED7D31',
        },
        barGap: '0%',
    }]
};