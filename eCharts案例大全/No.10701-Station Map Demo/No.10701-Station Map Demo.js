option = {
    title: {
        text: 'Station Map Demo'
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',

    series: [{
        type: 'graph',
        layout: 'circular',
        symbolSize: 100,
        roam: false,
        draggable: true,
        focusNodeAdjacency: true,
        symbolOffset:['1%', '1%'],
        label: {
            normal: {
                show: true,
                position:'inside',
                fontSize:20
            }
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [10, 10],
        edgeLabel: {
            normal: {
                textStyle: {
                    fontSize: 14,
                    position:'end',
                    align:'left'
                }
            }
        },
        data: [{
            name: 'A01',
            x: 100,
            y: 0,
            itemStyle: {
                color: 'rgba(128, 255, 128, 0.5)'
            }
        }, {
            name: 'I01',
            x: 100,
            y: 0
        }, {
            name: 'O01',
            x: 100,
            y: 0
        }, {
            name: 'S01',
            x: 100,
            y: 0
        }],
        // links: [],
        links: [{
                source: 0,
                target: 2,
                symbolSize: [4, 10],
                label: {
                    normal: {
                        formatter: 'G003',
                        color: 'rgba(128, 255, 128, 0.5)',
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 4,
                        color: 'rgba(100, 255, 255, 0.9)',
                        curveness: 0
                    }
                }
            }, {
                source: 'A01',
                target: 'I01',
                label: {
                    normal: {
                        formatter: 'G001',
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        color: 'rgba(255, 0, 255, 0.9)',
                        curveness: 0.0
                    }
                }
            }, {
                source: 'I01',
                target: 'O01',
                label: {
                    normal: {
                        formatter: 'G001',
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        color: 'rgba(255, 0, 255, 0.9)',
                        curveness: 0.0
                    }
                }
            }, {
                source: 'I01',
                target: 'S01',
                label: {
                    normal: {
                        formatter: 'G005',
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        color: 'rgba(1, 255, 128, 0.9)',
                        curveness: 0.0
                    }
                }
            }, {
                source: 'O01',
                target: 'S01',
                label: {
                    normal: {
                        formatter: 'G004',
                        show: true
                    }
                }
            }, {
                source: 'A01',
                target: 'S01',
                label: {
                    normal: {
                        formatter: 'G002',
                        show: true
                    }
                },
            },
            {
                source: 'A01',
                target: 'A01',
                label: {
                    normal: {
                        formatter: 'G006',
                        show: true,
                    }
                },
            }
        ],
        lineStyle: {
            normal: {
                opacity: 0.9,
                width: 4,
                curveness: 0,
                color: 'rgba(0, 0, 0, 1)'
            }
        }
    }]
};