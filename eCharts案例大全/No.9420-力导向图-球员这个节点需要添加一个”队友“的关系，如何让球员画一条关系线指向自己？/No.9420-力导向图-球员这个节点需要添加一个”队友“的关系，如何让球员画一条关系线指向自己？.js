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
    // legend: {
    //     x: "center",
    //     show: false,
    //     data: ["夫妻", "战友", '亲戚']
    // },
    series: [

        {
            type: 'graph',
            layout: 'force',
            symbolSize: 45,
            focusNodeAdjacency: true,
            roam: true,
            categories: [{
                    name: "实体",
                    itemStyle: {
                        normal: {
                            color: "#005CB8"
                        }
                    }
                },
                {
                    name: "对象实体",
                    itemStyle: {
                        normal: {
                            color: "#f43e3e"
                        }
                    }
                }
            ],
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
            edgeSymbol: ["circle", "arrow"],
            edgeSymbolSize: [4, 10],
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
                name: "球员",
                category: 0,
                symbol: "circle",
                symbolSize: 50
            }, {
                name: "球队",
                category: 1,
            }],
            links: [{
                    source: "球员",
                    target: "球队",
                    value: "所属"
                },
                 {
                    source: "球员",
                    target: "球员",
                    value: "队友"    
                }
            ],
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