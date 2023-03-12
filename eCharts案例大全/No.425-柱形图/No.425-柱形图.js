option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
        },
    },
    legend: {
        right: '0',
        // data: ["Forest", "Steppe", "Desert", "Wetland"],
    },
    grid: {
        left: '0',
        bottom: '3%',
        containLabel: true,
    },
    xAxis: [
        {
            type: 'category',
            axisTick: { show: false },
            axisLabel: { color: '#b3b5bb' },
            data: ['一级', '二级', '三级'],
        },
    ],
    yAxis: [
        {
            type: 'value',
            name: '单位（次）',
            nameTextStyle: {
                color: '#b3b5bb',
                alighn: 'end',
                padding: [0, 0, 0, -15],
            },
            nameGap: 30,
            axisTick: { show: false },
            axisLine: { show: false },
            axisLabel: { color: '#b3b5bb' },
            // 修改y轴分割线
            splitLine: {
                lineStyle: {
                    color: '#e6e6e6',
                    type: 'dashed',
                },
            },
        },
    ],
    series: [
        {
            name: '新增',
            type: 'bar',
            barGap: '10%',
            emphasis: {
                focus: 'series',
            },
            data: [2500, 6000, 4200],
            itemStyle: {
                color: '#0091ff',
            },
        },
        {
            name: '修改',
            type: 'bar',
            barGap: '10%',
            emphasis: {
                focus: 'series',
            },
            itemStyle: {
                color: '#44d7b6',
            },
            data: [5900, 4100, 7900],
        },
        {
            name: '删除',
            type: 'bar',
            barGap: '10%',
            emphasis: {
                focus: 'series',
            },
            itemStyle: {
                color: '#f7b500',
            },
            data: [2500, 5800, 4100],
        },
        {
            name: '导出',
            type: 'bar',
            barGap: '10%',
            emphasis: {
                focus: 'series',
            },
            itemStyle: {
                color: '#fa1f1f',
            },
            data: [1800, 1500, 1900],
        },
    ],
};
