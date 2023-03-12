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

        data: [{
            name: '默特萨克',
            itemStyle: {
                normal: {
                    color: '#393f51'
                }
            }
        }, {
            name: '厄齐尔',
            itemStyle: {
                normal: {
                    color: '#393f51'
                }
            }
        }, {
            name: '波多尔斯基',
            itemStyle: {
                normal: {
                    color: '#393f51'
                }
            }
        }, {
            name: '诺伊尔',
            itemStyle: {
                normal: {
                    color: '#393f51'
                }
            }
        }, {
            name: '博阿滕',
            itemStyle: {
                normal: {
                    color: '#393f51'
                }
            }
        }, {
            name: '施魏因施泰格',
            itemStyle: {
                normal: {
                    color: '#85d6f7'
                }
            }
        }, {
            name: '拉姆',
            itemStyle: {
                normal: {
                    color: '#85d6f7'
                }
            }
        }, {
            name: '克罗斯',
            itemStyle: {
                normal: {
                    color: '#85d6f7'
                }
            }
        }, {
            name: '穆勒',
            itemStyle: {
                normal: {
                    color: '#85d6f7'
                }
            }
        }, {
            name: '格策',
            itemStyle: {
                normal: {
                    color: '#85d6f7'
                }
            }
        }, {
            name: '胡梅尔斯',
            itemStyle: {
                normal: {
                    color: '#85d6f7'
                }
            }
        }, {
            name: '魏登费勒',
            itemStyle: {
                normal: {
                    color: '#85d6f7'
                }
            }
        }, {
            name: '杜尔姆',
            itemStyle: {
                normal: {
                    color: '#85d6f7'
                }
            }
        }, {
            name: '格罗斯克罗伊茨',
            itemStyle: {
                normal: {
                    color: '#85d6f7'
                }
            }
        }, {
            name: '阿森纳',
            itemStyle: {
                normal: {
                    color: '#85d6f7'
                }
            }
        }, {
            name: '拜仁慕尼黑',
            itemStyle: {
                normal: {
                    color: '#85d6f7'
                }
            }
        }, {
            name: '多特蒙德',
            itemStyle: {
                normal: {
                    color: '#85d6f7'
                }
            }
        }],
        // links: [],
        links: [{
                source: '阿森纳',
                target: '默特萨克',
                name: 'xxx',
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
                        width: 0.5,
                        curveness: 0.2,
                        color: '#fcae00'
                    }
                }
            }, {
                source: '阿森纳',
                target: '厄齐尔',
                name: 'xxx',
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
                        width: 0.5,
                        curveness: 0.2,
                        color: '#fcae00'
                    }
                }
            }, {
                source: '阿森纳',
                target: '拜仁慕尼黑',
                name: 'xxx',
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
                        width: 0.5,
                        curveness: 0.2,
                        color: '#fcae00'
                    }
                }
            }, {
                source: '阿森纳',
                target: '多特蒙德',
                name: 'xxx',
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
                        width: 0.5,
                        curveness: 0.2,
                        color: '#fcae00'
                    }
                }
            }, {
                source: '阿森纳',
                target: '波多尔斯基',
                name: 'xxx',
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
                        width: 0.5,
                        curveness: 0.2,
                        color: '#fcae00'
                    }
                }
            }, {
                source: '拜仁慕尼黑',
                target: '诺伊尔',
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
                        width: 0.5,
                        curveness: 0.2,
                        color: '#6c70c0'
                    }
                }
            }, {
                source: '拜仁慕尼黑',
                target: '博阿滕',
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
                        width: 0.5,
                        curveness: 0.2,
                        color: '#6c70c0'
                    }
                }
            }, {
                source: '拜仁慕尼黑',
                target: '施魏因施泰格',
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
                        width: 0.5,
                        curveness: 0.2,
                        color: '#6c70c0'
                    }
                }
            }, {
                source: '拜仁慕尼黑',
                target: '拉姆',
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
                        width: 0.5,
                        curveness: 0.2,
                        color: '#6c70c0'
                    }
                }
            }, {
                source: '拜仁慕尼黑',
                target: '克罗斯',
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
                        width: 0.5,
                        curveness: 0.2,
                        color: '#6c70c0'
                    }
                }
            }, {
                source: '拜仁慕尼黑',
                target: '穆勒',
                name: 'xxx',
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
                        width: 0.5,
                        curveness: 0.2,
                        color: '#fcae00'
                    }
                }
            }, {
                source: '拜仁慕尼黑',
                target: '格策',
                name: 'zzz',
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
                        width: 0.5,
                        curveness: 0.2,
                        color: '#37bfe9'
                    }
                }
            }, {
                source: '拜仁慕尼黑',
                target: '多特蒙德',
                name: 'zzz',
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
                        width: 0.5,
                        curveness: 0.2,
                        color: '#37bfe9'
                    }
                }
            }, {
                source: '多特蒙德',
                target: '胡梅尔斯',
                name: 'zzz',
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
                        width: 0.5,
                        curveness: 0.2,
                        color: '#37bfe9'
                    }
                }
            }, {
                source: '多特蒙德',
                target: '魏登费勒',
                name: 'zzz',
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
                        width: 0.5,
                        curveness: 0.2,
                        color: '#37bfe9'
                    }
                }
            }, {
                source: '多特蒙德',
                target: '杜尔姆',
                name: 'zzz',
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
                        width: 0.5,
                        curveness: 0.2,
                        color: '#37bfe9'
                    }
                }
            }, {
                source: '多特蒙德',
                target: '格罗斯克罗伊茨',
                name: 'zzz',
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
                        width: 0.5,
                        curveness: 0.2,
                        color: '#37bfe9'
                    }
                }
            }


        ]
    }]
};
myChart.setOption(option);