
var data = [{
    name: 'po',
    value: [10, 1000],
    symbol: 'rect',
    symbolSize: 10,
    category: 1

}, {
    name: "bb",
    value: [8, 30],
    symbol: 'rect',
    symbolSize: [50, 100],
    category: 0
}, {
    name: "cc",
    value: [10, 50],
    symbol: 'rect',
    symbolSize: [60, 25],
    category: 0
}, {
    name: "dd",
    value: [30, 10],
    symbol: 'rect',
    symbolSize: [60, 25],
    category: 1
}, {
    name: "ee",
    value: [11, 30],
    symbol: 'rect',
    symbolSize: [20, 80],

    category: 1
}, {
    name: "ff",
    symbol: 'rect',
    symbolSize: [60, 25],
    value: [30, 50],
    category: 0
}, {
    name: "gg",
    value: [50, 30],
    symbol: 'rect',
    symbolSize: [60, 25],
    category: 1
}, {
    name: "hh",
    value: [50, 30],
    symbol: 'rect',
    symbolSize: [60, 25],
    category: 0
}, {
    name: "ii",
    symbol: 'rect',
    symbolSize: [60, 25],
    value: [70, 10],
    category: 0
}, {
    name: "jj",
    value: [70, 30],
    category: 1
}, {
    name: "kk",
    value: [70, 50],
    category: 1
}];

var colors = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'];

function getColorPalette(i) {
    return colors[i];
}


option = {
    dataZoom: [{
            id: 'dataZoomX',
            type: 'slider',
            xAxisIndex: [0],
            filterMode: 'filter'
        },
        {
            id: 'dataZoomY',
            type: 'slider',
            start: 0,
            end: 220,
            minSpan: 25,
            maxSpan: 25,
            yAxisIndex: [0],
            filterMode: 'empty'
        }
    ],
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'value'
    },

    title: {
        text: '笛卡尔坐标系上的 Graph'
    },
    tooltip: {},

    dataRange: {
        min: 0,
        max: 100,
        y: '60%',
        calculable: true,
        color: ['#ff3333', 'orange', 'yellow', 'lime', 'aqua']
    },
    legend: {
        data: ["AA", "BB"]
    },
    series: [{

        type: 'graph',
        layout: 'none',
        coordinateSystem: 'cartesian2d',
        symbolSize: 40,
        categories: [{
                name: 'AA'
            },
            {
                name: 'BB'
            }
        ],
        label: {
            normal: {
                show: true
            }
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        data: data,

        itemStyle: {
            normal: {
                label: {
                    position: ['20%', '100%'],
                    textStyle: {
                        color: 'black'
                    }
                }
            }
        },
        lineStyle: {
            normal: {
                color: '#a0a0a0',
                opacity: 1,
                width: 2,
                // curveness: 0.1
            }
        }
    }, {

        type: 'lines',
        coordinateSystem: 'cartesian2d',
        categories: [{
                name: 'AA'
            },
            {
                name: 'BB'
            }
        ],
        polyline: true,
        // zlevel: 2,
        effect: {
            show: true,
            smooth: false,
            trailLength: 0,
            symbol: "arrow",
            //color:'rgba(55,155,255,0.5)',
            symbolSize: 10
        },
        lineStyle: {
            type: 'dashed',
            normal: {
                // color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                //     offset: 0,
                //     color: 'rgb(255, 0, 0)'
                // }, {
                //     offset: 1,
                //     color: 'rgb(0, 255, 0)'
                // }]),
                // color:'#a0a0a0',
                color: function() {
                    return getColorPalette(3);
                }(),
                width: 2,
                opacity: 1,
                // curveness: 0.1//贝塞尔曲线度
            }
        },
        data: [{
                coords: [
                    [30, 30], // 起点
                    [40, 40],
                    [50, 10],
                    [10, 30]
                ],
                lineStyle: {
                    normal: {
                        type: 'dotted',
                        color: '#c23531',
                        color: 'rgb(255, 255, 255)',
                        opacity: 1,
                        width: 5
                    }
                },

            },
            {
                coords: [
                    [50, 80], // 起点
                    [50, 40],
                    [45, 20],
                    [10, 60]
                ]

            }

        ]
    }]
};