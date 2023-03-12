option = {
    color: [
        '#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac', '#053061'
    ],
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    animation: false,
    series: [{
        type: 'sankey',
        bottom: '10%',
        focusNodeAdjacency: 'allEdges',
        orient: 'vertical',

        label: {
            position: ['0%', '-400%'],
            color: "#1f77b4",
            borderColor: "#1f77b4"
        },
        lineStyle: {
            color: 'source',
            curveness: 0.5
        },
        data: [{
                name: '根节点',
                "itemStyle": {
                    "normal": {
                        "color": "#246CFF",
                    }
                }
            },
            {
                name: '节点1',
                "itemStyle": {
                    "normal": {
                        "color": "#2D38C5",
                    }
                }
            },
            {
                name: '节点2',
                "itemStyle": {
                    "normal": {
                        "color": "#2D38C5",
                    }
                }
            },
            {
                name: '节点3',
                "itemStyle": {
                    "normal": {
                        "color": "#2D38C5",
                    }
                }
            },
            {
                name: '节点4',
                "itemStyle": {
                    "normal": {
                        "color": "#2D38C5",
                    }
                }
            },
            {
                name: '节点11',
                "itemStyle": {
                    "normal": {
                        "color": "#637A87",
                    }
                }
            },
            {
                name: '节点12',
                "itemStyle": {
                    "normal": {
                        "color": "#637A87",
                    }
                }
            },
            {
                name: '节点13',
                "itemStyle": {
                    "normal": {
                        "color": "#637A87",
                    }
                }
            },
            {
                name: '节点21',
                "itemStyle": {
                    "normal": {
                        "color": "#637A87",
                    }
                }
            },
            {
                name: '节点22',
                "itemStyle": {
                    "normal": {
                        "color": "#637A87",
                    }
                }
            },
            {
                name: '节点23',
                "itemStyle": {
                    "normal": {
                        "color": "#637A87",
                    }
                }
            },
            {
                name: '节点31',
                "itemStyle": {
                    "normal": {
                        "color": "#637A87",
                    }
                }
            },
            {
                name: '节点32',
                "itemStyle": {
                    "normal": {
                        "color": "#637A87",
                    }
                }
            },
            {
                name: '节点33',
                "itemStyle": {
                    "normal": {
                        "color": "#637A87",
                    }
                }
            },
            {
                name: '节点41',
                "itemStyle": {
                    "normal": {
                        "color": "#637A87",
                    }
                }
            },
            {
                name: '节点42',
                "itemStyle": {
                    "normal": {
                        "color": "#637A87",
                    }
                }
            },
            {
                name: '节点43',
                "itemStyle": {
                    "normal": {
                        "color": "#637A87",
                    }
                }
            },

        ],
        links: [{
                source: '根节点',
                target: '节点1',
                value: 1
            },
            {
                source: '根节点',
                target: '节点2',
                value: 1
            },
            {
                source: '根节点',
                target: '节点3',
                value: 1
            },
            {
                source: '根节点',
                target: '节点4',
                value: 1
            },
            {
                source: '节点1',
                target: '节点11',
                value: 1
            },
            {
                source: '节点1',
                target: '节点12',
                value: 1
            },
            {
                source: '节点1',
                target: '节点13',
                value: 1
            },
            {
                source: '节点2',
                target: '节点21',
                value: 1
            },
            {
                source: '节点2',
                target: '节点22',
                value: 1
            },
            {
                source: '节点2',
                target: '节点23',
                value: 1
            },
            {
                source: '节点3',
                target: '节点31',
                value: 1
            },
            {
                source: '节点3',
                target: '节点32',
                value: 1
            },
            {
                source: '节点3',
                target: '节点33',
                value: 1
            },
            {
                source: '节点4',
                target: '节点41',
                value: 1
            },
            {
                source: '节点4',
                target: '节点42',
                value: 1
            },
            {
                source: '节点4',
                target: '节点43',
                value: 1
            },

            {
                source: '节点1',
                target: '节点22',
                value: 1
            },
            {
                source: '节点2',
                target: '节点33',
                value: 1
            },
            {
                source: '节点3',
                target: '节点21',
                value: 1
            },
            {
                source: '节点4',
                target: '节点11',
                value: 1
            },
            {
                source: '节点4',
                target: '节点13',
                value: 1
            },

            {
                source: '节点1',
                target: '节点24',
                value: 1
            },
            {
                source: '节点2',
                target: '节点31',
                value: 1
            },
            {
                source: '节点3',
                target: '节点43',
                value: 1
            },
            {
                source: '节点4',
                target: '节点33',
                value: 1
            },
            {
                source: '节点4',
                target: '节点33',
                value: 1
            },

        ]
    }]
}