// 节点
let triangleNodes = [{
        name: '1',
        value: [5, 5]
    },
    {
        name: '2',
        value: [10, 15]
    },
    {
        name: '3',
        value: [15, 6]
    },
    {
        name: '4',
        value: [10, 3]
    }
];
triangleNodes = triangleNodes.map(item => Object.assign(item, {
    symbolSize: 15
}));
let squareNodes = [{
        name: '1',
        value: [5, 15]
    },
    {
        name: '2',
        value: [17, 15]
    },
    {
        name: '3',
        value: [3, 10]
    },
    {
        name: '4',
        value: [15, 10]
    },
    {
        name: '5',
        value: [3, 3]
    },
    {
        name: '6',
        value: [15, 3]
    },
    {
        name: '7',
        value: [5, 7]
    },
    {
        name: '8',
        value: [17, 7]
    }
];
squareNodes = squareNodes.map(item => Object.assign(item, {
    symbolSize: 15
}));
let podetiumNodes = [{
    name: '1',
    value: [7, 17]
}, {
    name: '2',
    value: [13, 17]
}, {
    name: '3',
    value: [5, 15]
}, {
    name: '4',
    value: [15, 15]
}, {
    name: '5',
    value: [7, 13]
}, {
    name: '6',
    value: [13, 13]
}, {
    name: '7',
    value: [7, 7]
}, {
    name: '8',
    value: [13, 7]
}, {
    name: '9',
    value: [5, 5]
}, {
    name: '10',
    value: [15, 5]
}, {
    name: '11',
    value: [7, 3]
}, {
    name: '12',
    value: [13, 3]
}];
podetiumNodes = podetiumNodes.map(item => Object.assign(item, {
    symbolSize: 15
}));

// 连接配置
const triangleLinks = [{
        source: '1',
        target: '2'
    },
    {
        source: '2',
        target: '3'
    },
    {
        source: '2',
        target: '4'
    },
    {
        source: '1',
        target: '4',
        lineStyle: {
            shadowColor: 'rgba(0, 0, 0, 0.8)',
            shadowBlur: 10,
            shadowOffsetY: 20
        }
    },
    {
        source: '4',
        target: '3',
        lineStyle: {
            shadowColor: 'rgba(0, 0, 0, 0.8)',
            shadowBlur: 10,
            shadowOffsetY: 20,
        }
    },
    {
        source: '1',
        target: '3',
        lineStyle: {
            type: 'dashed',
            width: 2,
            shadowColor: 'rgba(0, 0, 0, 0.8)',
            shadowBlur: 10,
            shadowOffsetY: 20,
        }
    }
];
const squareLinks = [{
    source: '1',
    target: '2'
}, {
    source: '3',
    target: '4'
}, {
    source: '1',
    target: '3'
}, {
    source: '2',
    target: '4'
}, {
    source: '3',
    target: '5'
}, {
    source: '5',
    target: '6',
    lineStyle: {
        shadowColor: 'rgba(0, 0, 0, 0.8)',
        shadowBlur: 10,
        shadowOffsetY: 20
    }
}, {
    source: '6',
    target: '8',
    lineStyle: {
        shadowColor: 'rgba(0, 0, 0, 0.8)',
        shadowBlur: 10,
        shadowOffsetY: 20
    }
}, {
    source: '2',
    target: '8'
}, {
    source: '4',
    target: '6'
}, {
    source: '5',
    target: '7',
    lineStyle: {
        type: 'dashed',
        shadowColor: 'rgba(0, 0, 0, 0.8)',
        shadowBlur: 10,
        shadowOffsetY: 20
    }
}, {
    source: '1',
    target: '7',
    lineStyle: {
        type: 'dashed'
    }
}, {
    source: '7',
    target: '8',
    lineStyle: {
        type: 'dashed',
        shadowColor: 'rgba(0, 0, 0, 0.8)',
        shadowBlur: 10,
        shadowOffsetY: 20
    }
}];
const podetiumLinks = [{
    source: '1',
    target: '2'
}, {
    source: '1',
    target: '3'
}, {
    source: '1',
    target: '7',
    lineStyle: {
        type: 'dashed'
    }
}, {
    source: '2',
    target: '4'
}, {
    source: '4',
    target: '10'
},{
    source: '2',
    target: '8',
    lineStyle: {
        type: 'dashed'
    }
}, {
    source: '3',
    target: '5'
}, {
    source: '3',
    target: '9'
}, {
    source: '5',
    target: '6'
}, {
    source: '5',
    target: '11'
}, {
    source: '6',
    target: '4'
}, {
    source: '6',
    target: '12'
}, {
    source: '7',
    target: '8',
    lineStyle: {
        type: 'dashed',
        shadowColor: 'rgba(0, 0, 0, 0.8)',
        shadowBlur: 10,
        shadowOffsetY: 20
    }
}, {
    source: '7',
    target: '9',
    lineStyle: {
        type: 'dashed',
        shadowColor: 'rgba(0, 0, 0, 0.8)',
        shadowBlur: 10,
        shadowOffsetY: 20
    }
}, {
    source: '8',
    target: '10',
    lineStyle: {
        type: 'dashed',
        shadowColor: 'rgba(0, 0, 0, 0.8)',
        shadowBlur: 10,
        shadowOffsetY: 20
    }
}, {
    source: '9',
    target: '11',
    lineStyle: {
        shadowColor: 'rgba(0, 0, 0, 0.8)',
        shadowBlur: 10,
        shadowOffsetY: 20
    }
}, {
    source: '11',
    target: '12',
    lineStyle: {
        shadowColor: 'rgba(0, 0, 0, 0.8)',
        shadowBlur: 10,
        shadowOffsetY: 20
    }
}, {
    source: '12',
    target: '10',
    lineStyle: {
        shadowColor: 'rgba(0, 0, 0, 0.8)',
        shadowBlur: 10,
        shadowOffsetY: 20
    }
}];

// 轴数据
let axisData = [];
for (let i = 0; i < 21; i++) {
    axisData.push(i);
}
// 轴配置
let axisOpt = {
    type: 'value',
    max: Math.max(...axisData),
    interval: 5,
    splitLine: {
        show: false
    },
    axisLine: {
        show: false
    },
    axisLabel: {
        show: false
    },
    axisTick: {
        show: false
    },
    data: axisData
}
// 图形通用配置
let baseOptionSeriesOpt = {
    type: 'graph',
    coordinateSystem: 'cartesian2d',
    layout: 'none',
    lineStyle: {
        type: 'solid',
        width: 2,
        curveness: 0
    },
    itemStyle: {
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: 'red' // 0% 处的颜色
            }, {
                offset: 1,
                color: 'blue' // 100% 处的颜色
            }],
            global: false // 缺省为 false
        }
    }
}

option = {
    baseOption: {
        timeline: {
            show: true,
            axisType: 'category',
            realtime: true,
            loop: true,
            autoPlay: true,
            currentIndex: 0,
            playInterval: 1500,
            data: [
                '三棱锥',
                '长方体',
                '六棱柱'
            ]
        },
        backgroundColor: '#fff',
        title: {
            subtext: '几何图形',
            subtextStyle: {
                fontSize: 20
            }
        },
        xAxis: axisOpt,
        yAxis: axisOpt,
        series: [baseOptionSeriesOpt, baseOptionSeriesOpt, baseOptionSeriesOpt]
    },
    options: [{
        title: {
            text: '三棱锥',
            left: 'center',
            textStyle: {
                fontSize: 30
            }
        },
        series: [{
            data: triangleNodes,
            links: triangleLinks
        }]
    }, {
        title: {
            text: '长方体',
            left: 'center',
            textStyle: {
                fontSize: 30
            }
        },
        series: [{
            data: squareNodes,
            links: squareLinks
        }]
    }, {
        title: {
            text: '六棱柱',
            left: 'center',
            textStyle: {
                fontSize: 30
            }
        },
        series: [{
            data: podetiumNodes,
            links: podetiumLinks
        }]
    }]

};