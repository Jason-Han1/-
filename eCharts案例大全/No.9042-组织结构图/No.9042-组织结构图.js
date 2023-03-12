var data = [{
    name: '总经理',
    value: 5,
    symbolSize: [70, 30],
    symbol: 'rectangle',
    itemStyle: {
        normal: {
            borderColor: '#3496eb',
            borderWidth: 0.5,
            color: '#3496eb'
        }
    },
    children: [{
            name: '营销中心',
            value: 4,
            symbolSize: [70, 30],
            symbol: 'rectangle',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'inside'
                    },
                    borderWidth: 2,
                    borderColor: 'black'
                }
            },
            children: [{
                    name: '市场部',
                    value: 4,
                    symbolSize: [60, 30],
                    symbol: 'rectangle',
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'inside'
                            },
                            borderWidth: 2,
                            borderColor: 'black'
                        }
                    },
                },
                {
                    name: '销售部',
                    value: 4,
                    symbolSize: [60, 30],
                    symbol: 'rectangle',
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'inside'
                            },
                            borderWidth: 2,
                            borderColor: 'black'
                        }
                    },
                }
            ]
        },
        {
            name: '项目中心',
            value: 4,
            symbolSize: [70, 30],
            symbol: 'rectangle',
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'inside'
                    },
                    borderWidth: 2,
                    borderColor: 'black'
                }
            },
            children: [{
                    name: '售前支持部',
                    value: 4,
                    symbolSize: [90, 30],
                    symbol: 'rectangle',
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'inside'
                            },
                            borderWidth: 2,
                            borderColor: 'black'
                        }
                    },
                    children: [{
                    name: '售前支持部',
                    value: 4,
                    symbolSize: [90, 30],
                    symbol: 'rectangle',
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'inside'
                            },
                            borderWidth: 2,
                            borderColor: 'black'
                        }
                    },
                },
                {
                    name: '项目一部',
                    value: 4,
                    symbolSize: [70, 30],
                    symbol: 'rectangle',
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'inside'
                            },
                            borderWidth: 2,
                            borderColor: 'black'
                        }
                    },
                }
            ]
                },
                {
                    name: '项目一部',
                    value: 4,
                    symbolSize: [70, 30],
                    symbol: 'rectangle',
                    itemStyle: {
                        normal: {
                            label: {
                                show: true,
                                position: 'inside'
                            },
                            borderWidth: 2,
                            borderColor: 'black'
                        }
                    },
                }
            ]
        }
    ]
}];

var option = {
    title: {
        text: '组织结构图'
    },
    
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    calculable: false,
    series: [{
        name: '树图',
        type: 'tree',
        orient: 'vertical', // vertical horizontal
        rootLocation: {
            x: '50%',
            y: '15%'
        }, // 根节点位置  {x: 'center',y: 10}
        nodePadding: 20,
        layerPadding: 40,
        symbol: 'rectangle',
        borderColor: 'black',
        itemStyle: {
            normal: {
                color: '#3496eb', //节点背景色
                borderColor: '#3496eb',
                borderWidth: 0.5,
                label: {
                    show: true,
                    position: 'inside',
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 15,
                        //fontWeight:  'bolder'
                    },
                },
                lineStyle: {
                    color: '#3496eb',
                    curveness: 0.5,
                    width: 0.5,
                    type: 'solid' // 'curve'|'broken'|'solid'|'dotted'|'dashed'
                }
            },
            emphasis: {
                label: {
                    show: false
                }
            }
        },
        data: data
    }]
};