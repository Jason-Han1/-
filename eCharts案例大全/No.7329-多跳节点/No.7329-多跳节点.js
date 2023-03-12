option = {
    title: {
        text: ''
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    label: {
        normal: {
            show: true,
            textStyle: {
                fontSize: 12
            },
        }
    },
    legend: {
        x: "center",
        show: false,
        data: ["1", "2", '3']
    },
    series: [

        {
            type: 'graph',
            layout: 'force',
            symbolSize: 45,
            focusNodeAdjacency: true,
            roam: true,
            categories: [{
                name: '1',
                itemStyle: {
                    normal: {
                        color: "#009800",
                    }
                }
            }, {
                name: '2',
                itemStyle: {
                    normal: {
                        color: "#4592FF",
                    }
                }
            }, {
                name: '3',
                itemStyle: {
                    normal: {
                        color: "#3592F",
                    }
                }
            }],
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 12
                    },
                }
            },
            force: {
                repulsion: 1000
            },
            edgeSymbolSize: [4, 50],
            edgeLabel: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 10
                    },
                    formatter: "{c}"
                }
            },
            data: [{
                name: '节点0',
                draggable: true,
            }, {
                name: '节点1',
                category: 1,
                draggable: true,
            }, {
                name: '节点2',
                category: 1,
                draggable: true,
            }, {
                name: '节点3',
                category: 1,
                draggable: true,
            }, {
                name: '节点4',
                category: 1,
                draggable: true,
            }, {
                name: '节点5',
                category: 1,
                draggable: true,
            }, {
                name: '节点6',
                category: 1,
                draggable: true,
            }, {
                name: '节点7',
                category: 1,
                draggable: true,
            }, {
                name: '节点8',
                category: 1,
                draggable: true,
            }, {
                name: '节点9',
                category: 1,
                draggable: true,
            }, {
                name: '节点10',
                category: 1,
                draggable: true,
            }, {
                name: '节点11',
                category: 1,
                draggable: true,
            }, {
                name: '节点12',
                category: 1,
                draggable: true,
            }],
            links: [{
                source: 0,
                target: 1,
                category: 0,
                value: '0-1'
            }, {
                source: 0,
                target: 2,
                value: '0-2'
            }, {
                source: 0,
                target: 3,
                value: '0-3'
            }, {
                source: 0,
                target: 4,
                value: '0-4'
            }, {
                source: 1,
                target: 2,
                value: '1-2'
            }, {
                source: 0,
                target: 5,
                value: '0-5'
            }, {
                source: 4,
                target: 5,
                value: '4-5'
            }, {
                source: 2,
                target: 8,
                value: '2-8'
            }, {
                source: 0,
                target: 12,
                value: '0-12'
            }, {
                source: 6,
                target: 11,
                value: '6-11'
            }, {
                source: 6,
                target: 3,
                value: '6-3'
            }, {
                source: 7,
                target: 5,
                value: '7-5'
            }, {
                source: 9,
                target: 10,
                value: '9-10'
            }, {
                source: 3,
                target: 10,
                value: '3-10'
            }, {
                source: 2,
                target: 11,
                value: '2-11'
            }],
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 1,
                    curveness: 0
                }
            }
        }
    ]
};