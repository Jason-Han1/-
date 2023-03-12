var fontColor = '#080b30';
option = {
    title: {
        text: 'CPU监控图表',
        top: 15,
        left: '37%',
        textStyle: {
            color: '#2ad1d2',
        },
    },
    backgroundColor: '#11183c',
    grid: {
        left: '5%',
        right: '10%',
        top: '20%',
        bottom: '15%',
        containLabel: true,
    },
    tooltip: {
        show: true,
        formatter: '{c}%',
        trigger: 'item',
    },
    legend: {
        show: false,
        x: 'center',
        y: '35',
        icon: 'stack',
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
            color: '#1bb4f6',
        },
        data: ['已采纳', '已发布'],
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            axisLabel: {
                color: '#2ad1d2',
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#397cbc',
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#195384',
                },
            },
            data: ['00:30', '01:00', '01:30', '02:00', '02:30', '03:00', '03:30', '04:00', '04:30', '05:00', '05:30', '06:00'],
        },
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            axisLabel: {
                formatter: '{value}%',
                textStyle: {
                    color: '#2ad1d2',
                },
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#27b4c2',
                },
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#11366e',
                },
            },
        },
    ],
    series: [
        {
            name: 'CPU',
            type: 'line',
            stack: '总量',
            symbol: 'circle',
            symbolSize: 5,

            itemStyle: {
                normal: {
                    color: '#00d4c7',
                    lineStyle: {
                        color: '#00d4c7',
                        width: 1,
                    },
                },
            },
            data: [20, 82, 91, 34, 90, 30, 10, 21, 54, 90, 30, 10],
        },
    ],
};

