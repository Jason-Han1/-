option = {
    title: {
        text: '患者数量（人）',
        textStyle: { color: '#666', fontSize: 14, fontWeight: 'normal' },
        padding: [5, 0, 0, 0],
    },
    legend: {
        orient: 'vertical',
        top: 0,
        right: 0,
        itemWidth: 10,
        itemHeight: 10,
        data: ['特护三级', '特护二级', '特护一级', '普护三级', '普护二级', '普护一级'],  // ! 调整系列名展示顺序
    },
    grid: { left: 0, top: 40, bottom: 20, right: 80, containLabel: true },
    xAxis: {
        type: 'category',
        data: ['神经内外科', '内分泌科', '消化内科', '呼吸内科', '骨外科', '眼耳鼻喉科', '心血管内科'],
        axisLine: { lineStyle: { color: '#ccc' } },
        axisTick: { length: 3 },
        axisLabel: { color: '#666' },
    },
    yAxis: {
        type: 'value',
        axisLine: { show: true, lineStyle: { color: '#ccc' } },
        axisLabel: { color: '#999' },
        splitLine: {
            lineStyle: {
                color: ['#CEEDFF'],
                type: [5, 8], // ! 网格虚线设置
                dashOffset: 3,
            },
        },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' },
        padding: [12, 17, 20, 23],
        textStyle: { color: '#424242' },
        renderMode: 'html',
        className: 'tooltip',
        order: 'seriesDesc', // ! 顺序调整
    },
    color: ['#008E6D', '#00B389', '#62F4D1', '#006EFE', '#52A8FF', '#A3D7FF'],
    series: [
        { name: '特护三级', type: 'bar', barWidth: 24, stack: 'total', data: [0, 0, 1, 1, 0, 0, 0] },
        { name: '特护二级', type: 'bar', barWidth: 24, stack: 'total', data: [0, 1, 0, 1, 0, 0, 2] },
        { name: '特护一级', type: 'bar', barWidth: 24, stack: 'total', data: [1, 0, 1, 3, 1, 3, 0] },
        { name: '普护三级', type: 'bar', barWidth: 24, stack: 'total', data: [0, 2, 0, 2, 0, 8, 0] },
        { name: '普护二级', type: 'bar', barWidth: 24, stack: 'total', data: [0, 2, 0, 4, 0, 9, 0] },
        { name: '普护一级', type: 'bar', barWidth: 24, stack: 'total', data: [0, 1, 0, 7, 0, 8, 1] },
    ],
};
