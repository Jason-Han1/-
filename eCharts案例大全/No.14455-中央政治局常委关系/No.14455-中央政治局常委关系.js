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
            name: '习近平',
            symbolSize:60,
            itemStyle: {
                normal: {
                    color: '#2a1469'
                }
            }
        },
        {
            name: '李克强',
            symbolSize:50,
            itemStyle: {
                normal: {
                    color: '#39c4bf'
                }
            }
        },
        {
            name: '栗战书',
            symbolSize:20,
            itemStyle: {
                normal: {
                    color: '#6ac439'
                }
            }
        },
        {
            name: '汪洋',
            symbolSize:30,
            itemStyle: {
                normal: {
                    color: '#f5c312'
                }
            }
        },
        {
            name: '王沪宁',
            symbolSize:30,
            itemStyle: {
                normal: {
                    color: '#f56e12'
                }
            }
        },
        
        {
            name: '赵乐际',
            symbolSize:30,
            itemStyle: {
                normal: {
                    color: '#4e7eed'
                }
            }
        },{
            name: '韩正',
            symbolSize:50,
            itemStyle: {
                normal: {
                    color: '#DB7093'
                }
            }
        },
        ],
        // links: [],
        links: [{
                source: '习近平',
                target: '李克强',
                name: '',
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
                        color: '#000000'
                    }
                }
            }, {
                source: '习近平',
                target: '赵乐际',
                name: '',
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
                        color: '#000000'
                    }
                }
            }, {
                source: '习近平',
                target: '韩正',
                name: '',
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
                        color: '#000000'
                    }
                }
            }, {
                source: '李克强',
                target: '汪洋',
                name: '',
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
                        color: '#000000'
                    }
                }
            }, {
                source: '王沪宁',
                target: '韩正',
                name: '',
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
                        color: '#000000'
                    }
                }
            }, 

        ]
    }]
};
myChart.setOption(option);