option = {
    title : {
        text: '组织结构图'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{b}: {c}"
    },
    calculable : false,
    series : [
        {
            name:'树图',
            type:'tree',
            orient: 'vertical',  // vertical horizontal
            rootLocation: {x: '50%', y: '15%'}, // 根节点位置  {x: 'center',y: 10}
            nodePadding: 20,
            layerPadding:40,
            symbol: 'rectangle',
            borderColor:'black',
            edgeShape: 'polyline',
            itemStyle: {
                normal: {
                      color: '#fff',//节点背景色
                    label: {
                        show: true,
                        position: 'inside',
                        textStyle: {
                            color: 'black',
                            fontSize: 15,
                            //fontWeight:  'bolder'
                        }
                    },
                    lineStyle: {
                        color: '#000',
                        width: 1,
                        // type: 'broken' // 'curve'|'broken'|'solid'|'dotted'|'dashed'
                    }
                },
                emphasis: {
                    label: {
                        show: false
                    }
                }
            },
            data: [
                {
                    name: '董事会',
                        value: 6,
                        symbolSize: [70, 30],
                        symbol: 'rectangle',
                        itemStyle: {
                            normal: {
                                borderWidth: 2,
                                borderColor: 'black'
                            }
                        },
                        children: [
                    {
                        name: '总经理',
                        value: 6,
                        symbolSize: [70, 30],
                        symbol: 'rectangle',
                        itemStyle: {
                            normal: {
                                borderWidth: 2,
                                borderColor: 'black'
                            }
                        },
                        children: [
                            {
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
                                children: [
                                    {
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
                                    },
                                    {
                                        name: '客服部',
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
                                children: [
                                    {
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
                                    },
                                    {
                                         name: '项目二部',
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
                                    },
                                   {
                                         name: '项目三部',
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
                                name: '技术中心',
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
                                children: [
                                    {
                                        name: '开发部',
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
                                    },
                                    {
                                       name: '设计部',
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
                                    },
                                    {
                                         name: '系统部',
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
                                name: '行政部',
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
                                }
                            },
                          {
                                name: '财务部',
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
                                }
                            },
                          {
                                name: '其他分支',
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
                                children: [
                                    {
                                        name: '汕头分公司',
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
                                    }
                                ]
                            },
                        ]
                    }]
                }
            ]
        }
    ]
}