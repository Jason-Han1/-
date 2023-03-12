option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // Use axis to trigger tooltip
            type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
        },
    },
    legend: {
        // data: ["已完成", "进行中"],
        top: '22%',
        left: '5%',
        icon: 'rect',
        textStyle: {
            color: '#fff',
        },
    },
    grid: {
        top: '35%',
        left: '5%',
        right: '5%',
        bottom: '10%',
        containLabel: true,
    },
    xAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.8)',
            },
        },
        splitLine: {
            lineStyle: {
                color: 'rgba(255,255,255,0.3)', // 分割线颜色
            },
        },
    },
    yAxis: {
        type: 'category',
        //   data: ["已签收", "配送中", "已出库", "采购中", "接单中"],
        axisLabel: {
            color: 'rgba(255,255,255,0.8)',
        },
    },
    series: [
        {
            name: '已完成',
            type: 'bar',
            stack: 'total',
            label: {
                show: true,
            },
            emphasis: {
                focus: 'series',
            },
            // data: [121, 828, 144, 368, 390],
            barWidth: 12,
            itemStyle: {
                label: {
                    show: true,
                },
                labelLine: {
                    show: false,
                },
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    { offset: 0, color: 'rgba(7,165,255,0.2)' },
                    { offset: 1, color: 'rgba(7,165,255,1)' },
                ]),
                borderColor: 'rgba(7,165,255,0.7)',
                shadowBlur: 16,
                shadowColor: 'rgba(7,165,255,1)',
            },
        },
        {
            name: '进行中',
            type: 'bar',
            stack: 'total',
            label: {
                show: true,
            },
            emphasis: {
                focus: 'series',
            },
            // data: [271, 132, 413, 210, 521],
            barWidth: 12,
            itemStyle: {
                label: {
                    show: true,
                },
                labelLine: {
                    show: false,
                },
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                    { offset: 0, color: 'rgba(41,244,236,0)' },
                    { offset: 1, color: 'rgba(41,244,236,1)' },
                ]),
                borderColor: '#a2f9f7',
                shadowBlur: 16,
                shadowColor: '#a2f9f7',
            },
        },
    ],
    dataset: {
        source: [
            { status: '已签收', value1: 33, value2: 93 },
            { status: '配送中', value1: 53, value2: 32 },
            { status: '已出库', value1: 78, value2: 65 },
            { status: '采购中', value1: 12, value2: 35 },
            { status: '接单中', value1: 90, value2: 52 },
        ],
    },
};
