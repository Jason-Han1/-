option = {
    series: [{
        id: 'topology',
        type: 'graph',
        layout: 'none',
        symbolSize: 60,
        roam: false,
        label: {
            normal: {
                show: true
            }
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [10, 60],
        edgeLabel: {
            normal: {
                show: true,
                textStyle: {
                    fontSize: 13
                },
                formatter: '{c}',
            },
        },
        data: [{
            id: 1,
            name: 'User',
            symbol: 'circle',
            label: {
                normal: {
                    show: false
                }
            },
            draggable: true,
            x: 0,
            y: 0,
        }, {
            id: 3,
            name: 'aaa',
            symbol: 'circle',
            label: {
                normal: {
                    show: false
                }
            },
            draggable: true,
            x: 1296,
            y: 0,
        }, {
            id: 4,
            name: 'bbb',
            symbol: 'circle',
            label: {
                normal: {
                    show: false
                }
            },
            draggable: true,
            x: 2592,
            y: 400,
        }],
        links: [{
            source: 0,
            target: 1,
            symbolSize: [10, 10],
            label: {
                normal: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#189EFF'
                }
            },
            lineStyle: {
                normal: {
                    width: 2,
                    curveness: 0,
                    color: '#189EFF',
                },
            },
        }, {
            source: 1,
            target: 4,
            symbolSize: [10, 10],
            label: {
                normal: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#189EFF'
                }
            },
            lineStyle: {
                normal: {
                    width: 2,
                    curveness: 0,
                    color: '#189EFF',
                },
            },
        }, {
            source: 1,
            target: 3,
            symbolSize: [10, 10],
            label: {
                normal: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#189EFF'
                }
            },
            lineStyle: {
                normal: {
                    width: 2,
                    curveness: 0,
                    color: '#189EFF',
                },
            },
        }, {
            source: 1,
            target: 2,
            symbolSize: [10, 10],
            label: {
                normal: {
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#189EFF'
                }
            },
            lineStyle: {
                normal: {
                    width: 2,
                    curveness: 0,
                    color: '#189EFF',
                },
            },
        }],
        lineStyle: {
            normal: {
                opacity: 0.9,
                width: 7,
                curveness: 0,
            },
        },
    }],
};