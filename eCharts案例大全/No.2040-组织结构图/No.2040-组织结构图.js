option = {
    title : {
        text: '组织结构图'
    },
    tooltip : {
        show: true,
        trigger: 'item',
        formatter: "{b}: {c}人"
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : false,
    series : [
        {
            name:'树图',
            type:'tree',
            orient: 'horizontal',  // vertical horizontal
            rootLocation: {x: '50%', y: '15%'}, // 根节点位置  {x: 'center',y: 10}
            // nodePadding: 20,
            // layerPadding:40,
            symbol: 'rectangle',
            // borderColor:'black',
            edgeShape:'curve', //曲线curve和折线polyline两种 
            itemStyle: {
                normal: {
                    color: '#FFF',//节点背景色
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
                        type: 'solid' // 'curve'|'broken'|'solid'|'dotted'|'dashed'
                    }
                },
                emphasis: {
                    label: {
                        show: true
                    }
                }
            },
            data: [
                // {
                //     name: '董事会',
                //         value: 6,
                //         symbolSize: [70, 30],
                //         symbol: 'rectangle',
                //         itemStyle: {
                //             normal: {
                //                 borderWidth: 2,
                //                 borderColor: 'black'
                //             }
                //         },
                //         children: [
                    {
                        name: 'xx科技',
                        value: 166,
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
                                name: '销售一部',
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
                                name: '销售二部',
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
                                name: '研发部',
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
                                        name: '开发组',
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
                                       name: 'web组',
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
                                       name: 'UI组',
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
                                       name: 'JAVA组',
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
                                       name: 'C组',
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
                                       name: '设计组',
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
                                         name: '系统组',
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
                                         name: '维护组',
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
                                        name: '上海分公司',
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
        //     ]
        // }
    ]
};