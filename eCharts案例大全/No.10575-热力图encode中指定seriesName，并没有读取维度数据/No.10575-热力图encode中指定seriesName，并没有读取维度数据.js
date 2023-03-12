option = {
    title: {
        text: 'TEST',
        left: 'center',
        top: 24,
    },
    tooltip: {
        position: 'top',
    },
    legend: {
        show: true,
        top: 42,
        left: 120,
    },
    grid: [{
        top: 96,
        bottom: '15%'
    }, {
        top: '88%',
        bottom: 48
    }],
    yAxis: [{
            type: 'category',
            show: true,
            splitArea: {
                show: true,
            },
            inverse: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
        },
        {
            type: 'category',
            show: true,
            gridIndex: 1,
            splitArea: {
                show: true,
            },
            inverse: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
        },
    ],
    xAxis: [{
            type: 'category',
            show: true,
            splitArea: {
                show: true,
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
        },
        {
            type: 'category',
            show: true,
            gridIndex: 1,
            splitArea: {
                show: true,
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
        },
    ],
    visualMap: {
        text: ['amount'],
        min: 0,
        max: 1000,
        calculable: true,
        orient: 'horizontal',
        right: 48,
        top: 36,
        dimension: 'amount',
    },
    dataset: [{
        source: [{
            lineId: 'a',
            resourceId: 'a',
            priority: 1,
            amount: 200,
            x: 0,
            y: 0
        },{
            lineId: 'b',
            resourceId: 'b',
            priority: 1,
            amount: 250,
            x: 0,
            y: 1
        },{
            lineId: 'c',
            resourceId: 'c',
            priority: 1,
            amount: 800,
            x: 1,
            y: 0
        },{
            lineId: 'd',
            resourceId: 'd',
            priority: 1,
            amount: 900,
            x: 1,
            y: 1
        }],
        dimensions: ['lineId', 'resourceId', 'priority', 'amount', 'x', 'y'],
    }, ],
    series: [{
        type: 'heatmap',
        encode: {
            x: 'x',
            y: 'y',
            itemName: 'lineId',
            seriesName: 'lineId',
            value: ['amount', 'priority'],
            itemId: 'resourceId',
            tooltip: ['amount', 'priority'],
        },
        tooltip: {
            formatter: ({
                data,
                seriesName
            }) => {
                console.log(seriesName);
                return `${data.lineId}<br/>${data.resourceId}<br/>优先级: ${
            data.priority
          }<br/>利用次数: ${data.amount}`;
            },
        },
        label: {
            color: '#006699',
            show: true,
            formatter: ({
                data
            }) => {
                return `${data.amount}`;
            },
        },
        itemStyle: {
            emphasis: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
        },
    }, ],
};