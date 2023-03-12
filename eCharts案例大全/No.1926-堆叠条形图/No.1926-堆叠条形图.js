option = {
    color: ['#08daaa', '#6571fc', '#ffd813', '#b8bcca'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // Use axis to trigger tooltip
            type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
        },
    },
    legend: {
        data: ['原油', '原煤', '天然气', '一次电力'],
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: {
        type: 'value',
        axisLabel: {
            show: false, //隐藏文字
        },
        splitLine: {
            show: false,
        },
        axisTick: {
            show: false, //隐藏X轴刻度
        },
        axisLine: {
            show: false, //隐藏X轴线
        },
    },
    yAxis: {
        type: 'category',
        axisLine: {
            show: false, //隐藏X轴线
        },
        axisTick: {
            show: false, //隐藏X轴刻度
        },

        data: [
            '2017',
            '2018',
            '2019',
            '2020',
            '2021',
        ],
    },
    series: [
        {
            name: '原油',
            type: 'bar',
            stack: 'total',
            label: {
                show: true,
            },
            barWidth: 15,
            emphasis: {
                focus: 'series',
            },
            data: [320, 302, 301, 334, 390, 330, 320],
        },
        {
            name: '原煤',
            type: 'bar',
            stack: 'total',
            label: {
                show: true,
            },
            emphasis: {
                focus: 'series',
            },
            data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
            name: '天然气',
            type: 'bar',
            stack: 'total',
            label: {
                show: true,
            },
            emphasis: {
                focus: 'series',
            },
            data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
            name: '一次电力',
            type: 'bar',
            stack: 'total',
            label: {
                show: true,
            },
            emphasis: {
                focus: 'series',
            },
            data: [150, 212, 201, 154, 190, 330, 410],
        },
    ],
};
