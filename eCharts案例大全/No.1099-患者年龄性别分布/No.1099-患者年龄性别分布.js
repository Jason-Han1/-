option = {
    title: {
        text: '患者数量（人）',
        textStyle: { color: '#666', fontSize: 14, fontWeight: 'normal' },
        padding: [5, 0, 0, 0],
    },
    legend: { orient: 'vertical', top: 0, right: 0, itemWidth: 10, itemHeight: 10, icon: 'circle', data: ['男', '女'] },
    grid: { left: 0, top: 50, bottom: 20, right: 20, containLabel: true },
    xAxis: {
        type: 'category',
        data: ['50岁以下', '50-59岁', '60-69岁', '70-79岁', '80-89岁', '90-99岁', '100岁以上'],
        axisLine: { lineStyle: { color: '#ccc' } },
        axisTick: { length: 3 },
        axisLabel: { color: '#999' },
    },
    yAxis: {
        type: 'value',
        axisLine: { show: true, lineStyle: { color: '#ccc' } },
        axisLabel: { color: '#999' },
        splitLine: { lineStyle: { color: ['#CEEDFF'], type: [5, 8], dashOffset: 3 } },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
        textStyle: { color: '#424242' },
        renderMode: 'html',
        className: 'tooltip',
        order: 'seriesDesc',
    },
    series: [
        {
            name: '女',
            type: 'bar',
            stack: 'total', // ! 多条数据总计 => 堆叠
            barWidth: 24,
            color: '#FFC53D',
            itemStyle: { borderRadius: 0 },
            data: [5, 0, 0, 2, 3, 0, 0],
        },
        {
            name: '男',
            type: 'bar',
            stack: 'total', // ! 多条数据总计 => 堆叠
            barWidth: 24,
            color: '#52A8FF',
            itemStyle: { borderRadius: [12, 12, 0, 0] },
            data: [16, 2, 3, 3, 8, 2, 1],
        },
    ],
};
