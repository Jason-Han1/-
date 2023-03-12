var data = [
     
    {
        value: [0, 8, 0.354, '电费'],
        itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#DEE1D7' },
                { offset: 1, color: '#B8CFD7' },
            ]),
        },
    },
    {
        value: [8, 11, 0.866, '电费'],
        itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#A1EABF' },
                { offset: 1, color: '#02687A' },
            ]),
        },
    },
    {
        value: [11, 13, 0.354, '电费'],
        itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#DEE1D7' },
                { offset: 1, color: '#B8CFD7' },
            ]),
        },
    },
    {
        value: [13, 19, 0.866, '电费'],
        itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#A1EABF' },
                { offset: 1, color: '#02687A' },
            ]),
        },
    },
    {
        value: [19, 21, 1.164, '电费'],
        itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#A1EABF' },
                { offset: 1, color: '#02687A' },
            ]),
        },
    },
    {
        value: [21, 22, 0.866, '电费'],
        itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#A1EABF' },
                { offset: 1, color: '#02687A' },
            ]),
        },
    },
    {
        value: [22, 24, 0.354, '电费'],
        itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#DEE1D7' },
                { offset: 1, color: '#B8CFD7' },
            ]),
        },
    },
];

function renderItem(params, api) {
    var yValue = api.value(2);
    var start = api.coord([api.value(0), yValue]);
    var size = api.size([api.value(1) - api.value(0), yValue]);
    var style = api.style();

    return {
        type: 'rect',
        shape: {
            x: start[0],
            y: start[1],
            width: size[0],
            height: size[1]
        },
        style: style
    };
}

option = {
    title: {
        text: 'xx省全天电价时段分布图',
        left: 'center'
    },
    tooltip: {
    },
    xAxis: {
        name: '',
        type: 'value',
        splitNumber: 24,
        splitLine: {
            show: false
        }
    },
    yAxis: {
        name: 'Y（元/kWh）'
    },
    series: [{
        type: 'custom',
        renderItem: renderItem,
        label: {
            show: true,
            position: 'top'
        },
        encode: {
            x: [0, 1],
            y: 2,
            tooltip: [2],
            itemName: 3
        },
        data: data
    }]
};