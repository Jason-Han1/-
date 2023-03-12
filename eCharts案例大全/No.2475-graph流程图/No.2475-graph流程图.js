var graphData = [
    { name: '(1)XXX', value: [10, 200] },
    { name: '(2)XXX', value: [10, 150] },
    { name: '(3)XXX', value: [10, 100] },
    { name: '(4)XXX', value: [50, 200] },
    { name: '(5)XXX', value: [40, 150] },
    { name: '(6)XXX', value: [60, 150] },
    { name: '(7)XXX', value: [50, 100] },
    { name: '(8)XXX', value: [30, 50] },
    { name: '(9)XXX', value: [20, 0] },
    { name: '(10)XXX', value: [40, 0] },
];
var graphLink = [
    { source: '(1)XXX', target: '(2)XXX' },
    { source: '(2)XXX', target: '(3)XXX' },
    { source: '(4)XXX', target: '(5)XXX' },
    { source: '(4)XXX', target: '(6)XXX' },
    { source: '(5)XXX', target: '(7)XXX' },
    { source: '(6)XXX', target: '(7)XXX' },
    { source: '(3)XXX', target: '(8)XXX' },
    { source: '(7)XXX', target: '(8)XXX' },
    { source: '(8)XXX', target: '(9)XXX' },
    { source: '(8)XXX', target: '(10)XXX' },
];
var linesData = [
    // 起点的[x轴,Y轴]位置 终点的[x轴,Y轴]位置
    {
        coords: [
            [10, 200], // 起点的[x轴,Y轴]位置
            [10, 150], // 终点的[x轴,Y轴]位置
        ],
    }, // 1-2
    {
        coords: [
            [10, 150],
            [10, 100],
        ],
    }, // 2-3
    {
        coords: [
            [50, 200],
            [40, 150],
        ],
    }, // 4-5
    {
        coords: [
            [50, 200],
            [60, 150],
        ],
    }, // 4-6
    {
        coords: [
            [40, 150],
            [50, 100],
        ],
    }, // 5-7
    {
        coords: [
            [60, 150],
            [50, 100],
        ],
    }, // 6-7
    {
        coords: [
            [10, 100],
            [30, 50],
        ],
    }, // 3-8
    {
        coords: [
            [50, 100],
            [30, 50],
        ],
    }, // 7-8
    {
        coords: [
            [30, 50],
            [20, 0],
        ],
    }, // 8-9
    {
        coords: [
            [30, 50],
            [40, 0],
        ],
    }, // 8-10
];
// 指定图表的配置项和数据
option = {
    animation: false,
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
