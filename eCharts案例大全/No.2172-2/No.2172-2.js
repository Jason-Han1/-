option = {
    grid: { top: '15%', left: '5%', right: '5%', bottom: '10%', containLabel: true },
    xAxis: [
        {
            type: 'category',
            axisLine: { lineStyle: { color: 'rgba(180,180,180,0.22)' } },
            splitLine: { show: false },
            axisTick: { show: false },
            splitArea: { show: false },
            axisLabel: { interval: 0, color: 'rgba(153,153,153,1)', fontSize: 14 },
            data: ['2018年', '2019年', '2020年'],
        },
    ],
    yAxis: [
        {
            type: 'value',
            splitNumber: 3,
            axisLine: { show: true, lineStyle: { color: 'rgba(180,180,180,0.22)' } },
            axisTick: { show: false },
            axisLabel: { interval: 0, color: 'rgba(153,153,153,1)', fontSize: 14 },
            splitArea: { show: false },
            splitLine: { show: false },
        },
        {
            name: '单位：万元',
            nameTextStyle: { color: '#fff', fontSize: 14, position: 'right', padding: [10, 4, 0, -30] },
            axisLine: { show: false },
            axisTick: { show: false },
        },
    ],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        { offset: 0, color: 'rgba(0, 255, 233,0)' },
                        { offset: 0.5, color: 'rgba(255, 255, 255,1)' },
                        { offset: 1, color: 'rgba(0, 255, 233,0)' },
                    ],
                    global: false,
                },
            },
        },
    },
    series: [
        {
            name: '注册总量',
                stack: 'overlap1',//堆叠效果(字符需要统一)
            type: 'bar',
            barWidth:30,
            label: { show: false, position: 'top', textStyle: { color: '#fff' } },
            itemStyle: { color: 'rgba(0,200,83,1)' },
            data: [700, 1300, 1600],
        },
              {
            name: '注册总量1',
                stack: 'overlap1',//堆叠效果(字符需要统一)
            type: 'bar',
            barWidth:30,
            label: { show: false, position: 'top', textStyle: { color: '#fff' } },
            itemStyle: { color: 'rgba(247,181,94,1)' },
            data: [700, 1300, 1600],
        },
    ],
};
