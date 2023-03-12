option = {
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow', textStyle: { color: '#fff' } } },
    grid: { top: '15%', left: '5%', right: '5%', bottom: '15%', containLabel: true },
    xAxis: [
        {
            type: 'category',
            axisLine: { lineStyle: { color: '#0177d4' } },
            splitLine: { show: false },
            axisTick: { show: false },
            splitArea: { show: false },
            axisLabel: { interval: 0, color: '#fff', fontSize: 16 },
            data: ['跌停', '-10%', '0%', '10%'],
        },
    ],
    yAxis: [
        {
            type: 'value',
            axisLine: { show: false, lineStyle: { color: '#144088' } },
            splitNumber: 3,
            axisTick: { show: false },
            axisLabel: { interval: 0, color: '#30ABE7', fontSize: 14 },
            splitArea: { show: false },
            splitLine: { show: true, lineStyle: { color: '#144088' } },
        },
        {
            name: '面积（平方）',
            nameTextStyle: { color: '#0195F2', fontSize: 14, position: 'right', padding: [10, 4, 0, -30] },
            axisLine: { show: false },
            axisTick: { show: false },
        },
    ],
    series: [
        {
            name: '面积',
            type: 'bar',
            barMaxWidth: 12,
            barGap: '10%',
            itemStyle: {
                normal: {
                    color: {
                        colorStops: [
                            { offset: 0, color: '#0173ff' },
                            { offset: 0.8, color: '#03fef1' },
                        ],
                        x: 0,
                        y: 1,
                        x2: 0,
                        y2: 0,
                        type: 'linear',
                        global: false,
                    },
                },
            },
            label: {
                normal: {
                    show: true,
                    lineHeight: 30,
                    width: 80,
                    height: 30,
                    color: '#1FFFF2',
                    position: ['-12', '-30'],                    fontSize: 14,
                },
            },
            data: [2500, 1200, 1800, 500],
        },
    ],
};
