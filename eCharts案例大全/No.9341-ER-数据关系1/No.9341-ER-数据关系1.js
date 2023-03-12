option = {

    title: {
        text: "ER-数据关系1",
        top: "top",
        left: "center"
    },
    // itemStyle: {
    //     normal: {
    //         color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
    //             offset: 0,
    //             color: '#157eff'
    //         }, {
    //             offset: 1,
    //             color: '#35c2ff'
    //         }]),
    //     },
    //     shadowBlur: 10
    // },
    textStyle: {
        color: '#333',
        fontSize: 16,
        fontWeight: 600,
    },
    legend: [{
        formatter: function(name) {
            return echarts.format.truncateText(name, 200, '12px', '…');
        },
        tooltip: {
            show: true
        },
        selectedMode: 'false',
        bottom: 20,
    }],
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    xAxis: {
        show: false,
        type: 'value'
    },
    yAxis: {
        show: false,
        type: 'value'
    },
    series: [{
        type: 'graph',
        layout: 'none',
        // coordinateSystem: 'cartesian2d',
        // legendHoverLink: false,
        // hoverAnimation: true,
        // nodeScaleRatio: false,
        //建头
        edgeSymbol: ['circle', 'none'],
        edgeSymbolSize: [2, 15],
        edgeLabel: {
            show: false,
            normal: {
                show: true,
                position: 'middle',
                textStyle: {
                    fontSize: 12
                },
                formatter: "{c}"
            }
        },
        focusNodeAdjacency: true,
        roam: true,
        //圆形上面的文字	
        label: {
            normal: {
                position: "inside",
                show: true,
                textStyle: {
                    fontSize: 12
                },
            }
        },
        lineStyle: {
            normal: {
                width: 1,
                shadowColor: 'none',
                color: '#ff0000'
            },
        },
        data: [{
                name: "贷款账户表",
                symbolSize: 80,
                x: 80,
                y: 150,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#157eff'
                        }, {
                            offset: 1,
                            color: '#35c2ff'
                        }]),
                    },
                    // shadowBlur: 10
                },
            }, {
                name: "块1",
                symbol: "rect",
                x: 200,
                y: 210,
                symbolSize: [80, 30],
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#45D840'
                        }, {
                            offset: 1,
                            color: '#B7FF7D'
                        }]),
                    }
                }
            }, {
                name: "块2",
                symbol: "rect",
                x: 200,
                y: 180,
                symbolSize: [80, 30],
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#45D840'
                        }, {
                            offset: 1,
                            color: '#B7FF7D'
                        }]),
                    }
                }
            }, {
                name: "块3",
                x: 200,
                y: 150,
                symbol: "rect",
                symbolSize: [80, 30],
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#45D840'
                        }, {
                            offset: 1,
                            color: '#B7FF7D'
                        }]),
                    }
                }
            }, {
                name: "块n-1",
                x: 200,
                y: 120,
                symbol: "rect",
                symbolSize: [80, 30],
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#45D840'
                        }, {
                            offset: 1,
                            color: '#B7FF7D'
                        }]),
                    }
                }
            }, {
                name: "块n",
                x: 200,
                y: 90,
                symbol: "rect",
                symbolSize: [80, 30],
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#45D840'
                        }, {
                            offset: 1,
                            color: '#B7FF7D'
                        }]),
                    }
                }
            },
            //节点B,C,D ....n
            {
                name: "机构表",
                x: 300,
                y: 250,
                symbol: "rect",
                symbolSize: [100, 40],
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#ffb402'
                        }, {
                            offset: 1,
                            color: '#ffdc84'
                        }]),
                    }
                }
            }, {
                name: "产品表",
                x: 300,
                y: 200,
                symbol: "rect",
                symbolSize: [100, 40],
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#ffb402'
                        }, {
                            offset: 1,
                            color: '#ffdc84'
                        }]),
                    }
                }
            }, {
                name: "客户表",
                x: 300,
                y: 150,
                symbol: "rect",
                symbolSize: [100, 40],
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#ffb402'
                        }, {
                            offset: 1,
                            color: '#ffdc84'
                        }]),
                    }
                }
            }, {
                name: "合同表",
                x: 300,
                y: 100,
                symbol: "rect",
                symbolSize: [100, 40],
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#ffb402'
                        }, {
                            offset: 1,
                            color: '#ffdc84'
                        }]),
                    }
                }
            }, {
                name: "其他表",
                x: 300,
                y: 50,
                symbol: "rect",
                symbolSize: [100, 40],
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: '#ffb402'
                        }, {
                            offset: 1,
                            color: '#ffdc84'
                        }]),
                    }
                }
            }
        ],

        links: [{
            source: "贷款账户表",
            value: " ",
            target: "块1",
        }, {
            source: "贷款账户表",
            value: " ",
            target: "块2",
        }, {
            source: "贷款账户表",
            value: " ",
            target: "块3",
        }, {
            source: "贷款账户表",
            value: " ",
            target: "块n-1",
        }, {
            source: "贷款账户表",
            value: " ",
            target: "块n",
        }, {
            source: "块1",
            value: " ",
            target: "机构表",
        }, {
            source: "块2",
            value: " ",
            target: "产品表",
        }, {
            source: "块3",
            value: " ",
            target: "客户表",
        }, {
            source: "块n-1",
            value: " ",
            target: "合同表",
        }, {
            source: "块n",
            value: " ",
            target: "其他表",
        }],
    }]
};