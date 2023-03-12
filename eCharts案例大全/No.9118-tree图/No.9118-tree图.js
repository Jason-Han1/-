var data = {
    name: "flare",
    symbolSize: 150,
    value: 100,
    itemStyle: {
        normal: {
            color: '#F099B7',
            borderColor: '#F099B7',
        }
    },
    label: {
        normal: {
            show: true,
            position: 'inside',
            // verticalAlign: 'middle',
            // align: 'center',
            color: 'black',
            formatter: function(params) {
                return params.data.name + '\n ' + params.data.value
            },
        }
    },
    children: [{
            name: "analytics",
            lineStyle: {
                color: '#F099B7'
            },
            symbolSize: 80,
            value: 80,
            itemStyle: {
                normal: {
                    color: '#F099B7',
                    borderColor: '#F099B7',
                }
            },
            children: [{
                    name: "cluster",
                    children: [{
                            name: "AgglomerativeCluster",
                            value: 3938,
                            symbolSize: 50,
                            itemStyle: {
                                normal: {
                                    color: '#F099B7',
                                    borderColor: '#F099B7',
                                }
                            },
                        },
                        {
                            name: "CommunityStructure",
                            value: 3812,
                            itemStyle: {
                                normal: {
                                    color: '#F099B7',
                                    borderColor: '#F099B7',
                                }
                            },
                        },
                        {
                            name: "HierarchicalCluster",
                            value: 6714,
                        },
                        {
                            name: "MergeEdge",
                            value: 743,
                        },
                    ],
                },
                {
                    name: "optimization",
                    children: [{
                        name: "AspectRatioBanker",
                        value: 7074,
                    }],
                },
            ],
        },
        {
            name: "animate",
            symbolSize: 60,
            lineStyle: {
                color: '#fe9944',
            },
            itemStyle: {
                normal: {
                    color: '#F099B7',
                    borderColor: '#F099B7',
                }
            },
            children: [{
                    name: "interpolate",
                    children: [{
                            name: "ArrayInterpolator",
                            value: 1983,
                            itemStyle: {
                                normal: {
                                    color: '#fe9944',
                                    borderColor: '#fe9944',
                                }
                            },
                        },
                        {
                            name: "ColorInterpolator",
                            value: 2047,
                        },
                        {
                            name: "DateInterpolator",
                            value: 1375,
                        }
                    ],
                },
                {
                    name: "ISchedulable",
                    value: 1041,
                }
            ],
        },
        {
            name: "data",
            symbolSize: 70,
            lineStyle: {
                color: '#59B1F3',
            },
            itemStyle: {
                normal: {
                    color: '#59B1F3',
                    borderColor: '#59B1F3',
                }
            },
            children: [{
                name: "converters",
                children: [{
                    name: "Converters",
                    value: 721,
                }],
            }],
        },
        {
            name: "display",
            symbolSize: 100,
            lineStyle: {
                color: '#4dc585',
            },
            orient: {
                symbolSize: 100,
                symbol: 'circle',
            },

            label: {
                normal: {
                    show: true,
                    position: 'center',
                    verticalAlign: 'middle',
                    align: 'center',
                    color: 'black'
                }
            },
            children: [{
                    name: "DirtySprite",
                    value: 8833,
                    lineStyle: {
                        color: '#4dc585',
                    },
                },
                {
                    name: "LineSprite",
                    value: 1732,
                },
                {
                    name: "RectSprite",
                    value: 3623,
                },
                {
                    name: "TextSprite",
                    value: 10066,
                },
            ],
        },

    ],
};





myChart.setOption(option = {
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
    },
    series: [{
        type: 'tree',
        initialTreeDepth: 2,
        layout: 'radial',
        data: [data],
        // draggable:true,没有拖拽属性

        top: '10%',
        left: '10%',
        bottom: '10%',
        right: '10%',

        symbolSize: 40,
        symbol: 'circle',

        label: {
            normal: {
                position: 'bottom',
                // verticalAlign: 'middle',
                // align: 'center',
                formatter: function(params) {
                    return params.data.name + '\n' + params.data.value
                },
            }
        },

        lineStyle: {
            curveness: 0,
        },
        itemStyle: {
            normal: {
                color: '#4dc585',
                borderColor: '#4dc585',
            }
        },
        leaves: {
            label: {
                normal: {
                    position: 'bottom',
                    verticalAlign: 'middle',
                    align: 'center',
                    formatter: function(params) {
                        return params.data.name + '\n' + params.data.value
                    },
                }
            },

            // itemStyle: {
            //     normal: {
            //         color: {
            //             type: 'radial',
            //             x: 0.5,
            //             y: 0.5,
            //             r: 0.5,
            //             colorStops: [{
            //                 offset: 0,
            //                 color: 'red' // 0% 处的颜色
            //             }, {
            //                 offset: 1,
            //                 color: 'blue' // 100% 处的颜色
            //             }],
            //             globalCoord: false // 缺省为 false
            //         }
            //     }
            // },
        },


    }]
});