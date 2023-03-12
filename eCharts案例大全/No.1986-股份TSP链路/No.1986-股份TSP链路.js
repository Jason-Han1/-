var items = ['手机', 'PKI', 'TSP', 'PKI', 'TBOX'];

var data = items.map((nodeName, x) => ({
    nodeName,
    value: [x, 1],
    ...(nodeName === 'TSP'
        ? {
              label: { normal: { color: 'red', textShadowColor: 'red' } },
              itemStyle: { normal: { borderColor: 'red', shadowColor: 'red' } },
          }
        : {}),
}));
var links = items
    .map((source, idx) => [
        { source, target: items[idx + 1], value: '正常' },
        { source: items[idx + 1], target: source, value: '正常' },
    ])
    .reduce((a, v) => {
        a.push(...v);
        return a;
    }, []);

option = {
    title: {
        text: '股份TSP链路',
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    xAxis: {
        min: 0,
        max: 4,
        show: false,
        type: 'value',
    },
    yAxis: {
        min: 0,
        max: 3,
        show: false,
        type: 'value',
    },
    series: [
        {
            type: 'graph',
            coordinateSystem: 'cartesian2d',
            symbolSize: 50,
            roam: true,
            label: {
                show: true,
                normal: {
                    show: true,
                    position: 'inside',
                    color: '#5BE4FF',
                    fontSize: 14,
                    fontWeight: 'bold',
                    textShadowBlur: 20,
                    textShadowColor: '#5BE4FF',
                    formatter: ({ data: { nodeName } }) => nodeName,
                },
            },
            draggable: true,
            edgeSymbol: ['', 'arrow'],
            edgeSymbolSize: [10, 10],
            edgeLabel: {
                normal: {
                    show: true,
                    position: 'middle',
                    textStyle: {
                        color: 'green',
                        fontSize: 14,
                    },
                    formatter: '{c}',
                },
            },
            symbol: 'rect',
            itemStyle: {
                normal: {
                    borderColor: '#263348',
                    borderWidth: 1,
                    shadowBlur: 5,
                    shadowColor: '#5BE4FF',
                    color: '#1B293F',
                },
            },
            lineStyle: {
                normal: {
                    width: 2,
                    shadowColor: 'green',
                    shadowBlur: 5,
                    color: 'green',
                    curveness: 0.25,
                },
            },
            data,
            // links: [],
            links,
        },

        {
            name: 'Normal',
            type: 'lines',
            coordinateSystem: 'cartesian2d',
            z: 0,
            effect: {
                show: true,
                trailLength: 0.1,
                // symbol: 'arrow',
                // symbolSize: 10,
                symbol: 'circle',
                symbolSize: [3, 5],
                color: 'green',
            },
            lineStyle: {
                normal: {
                    color: 'green',
                    width: 1,
                    curveness: 0.25,
                    opacity: 0.8,
                },
            },
            data: [
                //[{ coord: [0, 1] }, { coord: [1, 1] }],
                //[{ coord: [1, 1] }, { coord: [2, 1] }],
                [{ coord: [2, 1] }, { coord: [3, 1] }],
                [{ coord: [3, 1] }, { coord: [4, 1] }],
                [{ coord: [1, 1] }, { coord: [0, 1] }],
                [{ coord: [2, 1] }, { coord: [1, 1] }],
                [{ coord: [3, 1] }, { coord: [2, 1] }],
                [{ coord: [4, 1] }, { coord: [3, 1] }],
            ],
        },
        {
            name: 'Warning',
            type: 'lines',
            coordinateSystem: 'cartesian2d',
            z: 0,
            effect: {
                show: true,
                trailLength: 0.3,
                symbol: 'circle',
                symbolSize: [3, 5],
                color: 'orange',
                // symbolSize: 10,
                period: 8,
            },
            lineStyle: {
                normal: {
                    color: 'orange',
                    width: 1,
                    curveness: 0.25,
                    opacity: 0.8,
                },
            },
            data: [
                [{ coord: [0, 1] }, { coord: [1, 1] }],
                // [{ coord: [1, 1] }, { coord: [2, 1] }],
                // [{ coord: [2, 1] }, { coord: [3, 1] }],
                // [{ coord: [3, 1] }, { coord: [4, 1] }],
                // [{ coord: [1, 1] }, { coord: [0, 1] }],
                // [{ coord: [2, 1] }, { coord: [1, 1] }],
                // [{ coord: [3, 1] }, { coord: [2, 1] }],
                // [{ coord: [4, 1] }, { coord: [3, 1] }]
            ],
        },
        {
            name: 'Error',
            type: 'lines',
            coordinateSystem: 'cartesian2d',
            z: 0,
            markPoint: {
                symbol: 'pin',
                symbolOffset: [0, 0],
            },
            lineStyle: {
                normal: {
                    type: 'dashed',
                    color: 'red',
                    width: 1,
                    curveness: 0.25,
                },
            },
            data: [
                // [{ coord: [0, 1] }, { coord: [1, 1] }],
                [{ coord: [1, 1] }, { coord: [2, 1] }],
                // [{ coord: [2, 1] }, { coord: [3, 1] }],
                // [{ coord: [3, 1] }, { coord: [4, 1] }],
                // [{ coord: [1, 1] }, { coord: [0, 1] }],
                // [{ coord: [2, 1] }, { coord: [1, 1] }],
                // [{ coord: [3, 1] }, { coord: [2, 1] }],
                // [{ coord: [4, 1] }, { coord: [3, 1] }]
            ],
        },
    ],
};
