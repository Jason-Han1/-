var option = {
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        type: 'graph',
        tooltip: {},
        ribbonType: true,
        layout: 'circular',

        circular: {
            rotateLabel: true
        },
        symbolSize: 30,
        roam: true,
        focusNodeAdjacency: true,

        label: {
            normal: {
                position: 'center',
                fontWeight: 'bold',
                formatter: '{b}',
                normal: {
                    textStyle: {

                        fontFamily: '宋体'
                    }
                }
            }
        },

        edgeSymbol: ['circle'],
        edgeSymbolSize: [4, 10],
        edgeLabel: {
            normal: {
                textStyle: {
                    fontSize: 13,
                    fontWeight: 'bold',
                    fontFamily: '宋体'
                }
            }
        },

        itemStyle: {
            normal: {
                label: {
                    rotate: true,
                    show: true,
                    textStyle: {
                        color: '#333',
                        fontWeight: 'bold'
                    }
                },
                color: ["#393f51", "#393f51", "#393f51", "#393f51", "#393f51", "#393f51", "#393f51", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7", "#85d6f7"] /* 内的颜色#393f51，外的颜色#85d6f7 */
            },
            emphasis: {
                label: {
                    show: true
                        // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                }
            }
        },

        data: [
                {
            name: '市发改委',
            symbolSize:12,
            itemStyle: {
                normal: {
                    color: '#4e7eed'
                }
            }
        },
        {
            name: '市国土局',
            symbolSize:12,
            itemStyle: {
                normal: {
                    color: '#4e7eed'
                }
            }
        }, {
            name: '市环保局',
            symbolSize:12,
            itemStyle: {
                normal: {
                    color: '#4e7eed'
                }
            }
        }, {
            name: '市规划局',
            symbolSize:12,
            itemStyle: {
                normal: {
                    color: '#4e7eed'
                }
            }
        }, {
            name: '市公安局',
            symbolSize:12,
            itemStyle: {
                normal: {
                    color: '#4e7eed'
                }
            }
        },  {
            name: '验收阶段',
            symbolSize:40,
            itemStyle: {
                normal: {
                    color: '#2a1469'
                }
            }
        },
        {
            name: '设计阶段',
            symbolSize:40,
            itemStyle: {
                normal: {
                    color: '#39c4bf'
                }
            }
        },
        {
            name: '用地阶段',
            symbolSize:40,
            itemStyle: {
                normal: {
                    color: '#6ac439'
                }
            }
        },
        {
            name: '规划阶段',
            symbolSize:40,
            itemStyle: {
                normal: {
                    color: '#f5c312'
                }
            }
        },
        {
            name: '立项阶段',
            symbolSize:40,
            itemStyle: {
                normal: {
                    color: '#f56e12'
                }
            }
        },{
            name: '市国安局',
            symbolSize:12,
            itemStyle: {
                normal: {
                    color: '#4e7eed'
                }
            }
        },
        {
            name: '市城乡建委',
            symbolSize:12,
            itemStyle: {
                normal: {
                    color: '#4e7eed'
                }
            }
        },
        {
            name: '市园林局',
            symbolSize:12,
            itemStyle: {
                normal: {
                    color: '#4e7eed'
                }
            }
        }, {
            name: '市气象局',
            symbolSize:12,
            itemStyle: {
                normal: {
                    color: '#4e7eed'
                }
            }
        } ,
               {
            name: '市市政委',
            symbolSize:12,
            itemStyle: {
                normal: {
                    color: '#4e7eed'
                }
            }
        }
        ],
        // links: [],
        links: [{
                source: '市发改委',
                target: '立项阶段',
                name: '批准核准备案信息',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#f56e12'
                    }
                }
            }, {
                source: '市国土局',
                target: '立项阶段',
                name: '建设项目用地预审信息',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#f56e12'
                    }
                }
            }, {
                source: '市环保局',
                target: '立项阶段',
                name: '建设项目环境影响评价审批信息',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#f56e12'
                    }
                }
            }, {
                source: '市规划局',
                target: '规划阶段',
                name: '项目选址信息、用地规划许可信息、工程规划许可信息',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#f5c312'
                    }
                }
            }, {
                source: '市国土局',
                target: '规划阶段',
                name: '地质灾害危险性评估审查信息、建设项目用地预审信息',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#f5c312'
                    }
                }
            }, {
                source: '市公安局',
                target: '规划阶段',
                name: '消防安全审查信息',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#f5c312'
                    }
                }
            }, {
                source: '市国安局',
                target: '规划阶段',
                name: '国家安全审查信息',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width:1.0,
                        curveness: 0.2,
                        color: '#f5c312'
                    }
                }
            }, {
                source: '市规划局',
                target: '用地阶段',
                name: 'yyy',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#6ac439'
                    }
                }
            }, {
                source: '市国土局',
                target: '用地阶段',
                name: '用地批准信息、国有建设用地使用权划拨/出让信息',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#6ac439'
                    }
                }
            }, {
                source: '市城乡建委',
                target: '设计阶段',
                name: '建设工程初步设计审批信息、建设工程施工许可信息',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#6c70c0'
                    }
                }
            }, {
                source: '市公安局',
                target: '设计阶段',
                name: '建设工程消防设计审核信息',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#39c4bf'
                    }
                }
            }, {
                source: '市园林局',
                target: '设计阶段',
                name: '建设工程附属绿化工程设计审查信息',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width:1.0,
                        curveness: 0.2,
                        color: '#39c4bf'
                    }
                }
            }, {
                source: '市气象局',
                target: '设计阶段',
                name: '建设工程防雷装置设计审查信息',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#39c4bf'
                    }
                }
            }, {
                source: '市市政委',
                target: '设计阶段',
                name: '市政环境卫生设计审查信息',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#39c4bf'
                    }
                }
            }, {
                source: '市城乡建委',
                target: '验收阶段',
                name: '建设工程竣工验收备案信息',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width:1.0,
                        curveness: 0.2,
                        color: '#2a1469'
                    }
                }
            }, {
                source: '市规划局',
                target: '验收阶段',
                name: '建设工程竣工规划核实信息',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#2a1469'
                    }
                }
            }, {
                source: '市公安局',
                target: '验收阶段',
                name: '建设工程消防验收信息',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width: 1.0,
                        curveness: 0.2,
                        color: '#2a1469'
                    }
                }
            },{
                source: '市环保局',
                target: '验收阶段',
                name: '建设项目竣工环境保护验收信息',
                tooltip: {
                    trigger: 'item',
                    formatter: function(params, ticket, callback) {
                        return params.data.name;
                    }
                },
                symbolSize: [5, 20],
                label: {
                    normal: {
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
                lineStyle: {
                    normal: {
                        width:1.0,
                        curveness: 0.2,
                        color: '#2a1469'
                    }
                }
            }

        ]
    }]
};
myChart.setOption(option);