var graphData = [
    { name: '外部攻击', value: [20, 200] },
    { name: '横向攻击', value: [10, 150] },
    { name: '外联攻击', value: [30, 150] }
];
var graphLink = [
    { source: '外部攻击', target: '横向攻击' },
    { source: '横向攻击', target: '外联攻击' },
    { source: '外联攻击', target: '外部攻击' },
];
var linesData = [
    // 起点的[x轴,Y轴]位置 终点的[x轴,Y轴]位置
    {
        coords: [
            [20, 200], // 起点的[x轴,Y轴]位置
            [10, 150], // 终点的[x轴,Y轴]位置
        ],
    },
    {
        coords: [
            [10, 150],
            [30, 150],
        ],
    },
    {
        coords: [
            [30, 150],
            [20, 200],
        ],
    }
];
// 指定图表的配置项和数据
option = {
    animation: true,
    tooltip: { show: false },
    xAxis: { show: false, type: 'value', max: 80 },
    yAxis: { show: false, type: 'value' },
    series: [
        {
            type: 'graph',
            coordinateSystem: 'cartesian2d',
            symbolSize: 100,
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [2, 8],
            itemStyle: {
                borderWidth: 1,
            },
            label: {
                show: true,
                lineHeight: 20,
                borderWidth: 0,
                color: '#fff',
            },
            data: graphData,
            links: graphLink,
            lineStyle: {
                opacity: 1,
                color: '#111',
            },
        },
        {
            type: 'lines',
            coordinateSystem: 'cartesian2d',
            lineStyle: {
                width: 0,
            },
            effect: {
                show: true,
                symbolSize: 6,
                period: 2,
                color: '#5470c6',
                trailLength: 0, // 拖影
            },
            data: linesData,
        },
    ],
};
