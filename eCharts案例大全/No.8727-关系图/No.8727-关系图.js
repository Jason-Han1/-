option = {
    series: [

        {
            type: 'graph',
            layout: 'force',
            symbolSize: 50,
            symbol: 'rect',
            focusNodeAdjacency: false,
            draggable: false,
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 12,
                        color: 'black'
                    },
                }
            },
            force: {
                repulsion: 3000,
                layoutAnimation: false
            },
            edgeSymbol: ['arrow', 'circle'],
            edgeSymbolSize: [10, 1],
            edgeLabel: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 10
                    },
                    formatter: "{c}"
                }
            },
            lineStyle: {
                normal: {
                    opacity: 1,
                    width: 1,
                    curveness: 0
                }
            },
            categories: [{
                name: 'green',
                itemStyle: {
                    normal: {
                        color: "green",
                    }
                }
            }, {
                name: 'yellow',
                itemStyle: {
                    normal: {
                        color: "yellow",
                    }
                }
            }, {
                name: 'red',
                itemStyle: {
                    normal: {
                        color: "red",
                    }
                }
            }],
            data: [{
                name: '徐贱云',
                symbol: 'circle',
                symbolSize: [120, 50]
            }, {
                name: '冯可梁',
                category: 1,
                symbolSize: [120, 30]
            }, {
                name: '邓志荣',
                category: 2
            }, {
                name: '李荣庆',
                category: 1
            }, {
                name: '郑志勇',
                category: 1
            }, {
                name: '赵英杰',
                category: 1
            }, {
                name: '赵英杰1',
                category: 2
            }, {
                name: '赵英杰2',
                category: 1
            }],
            links: [{
                source: '徐贱云',
                target: '冯可梁',
                value: '123'
            }, {
                source: 0,
                target: 2,
                value: '456'
            }, {
                source: 0,
                target: 3,
                value: '房东'
            }, {
                source: 0,
                target: 4,
                value: '朋友'
            }, {
                source: 0,
                target: 5,
                value: '朋友'
            }, {
                source: 0,
                target: 6,
                value: '朋友'
            }, {
                source: 0,
                target: 7,
                value: '朋友'
            }]
        }
    ]
};