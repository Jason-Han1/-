option = {

    title: {
        text: "ER-数据关系",
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
        // edgeSymbol: ['rect', 'none'],
        // edgeSymbolSize: [2, 15],
        // edgeLabel: {
        //     show: false,
        //     normal: {
        //         show: true,
        //         position: 'middle',
        //         textStyle: {
        //             fontSize: 12
        //         },
        //         formatter: "{c}"
        //     }
        // },
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
                name: "5G SA上网业务",
                symbolSize: [80, 30],
                symbol: "rect",
                x: 300,
                y: -100,
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
            },
            {
                name: "核心网RFS",
                symbol: "rect",
                x: 150,
                y: 0,
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
                name: "传输网RFS",
                symbol: "rect",
                x: 300,
                y: 0,
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
                name: "接入网RFS",
                x: 450,
                y: 0,
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
            {
                name: "AMF",
                x: 0,
                y: 100,
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
                name: "SMF",
                x: 75,
                y: 100,
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
                name: "VDM",
                symbol: "rect",
                x: 150,
                y: 100,
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
                name: "VPF",
                symbol: "rect",
                x: 225,
                y: 100,
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
                name: "SDN",
                x: 300,
                y: 100,
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
                name: "开通、销户、移机",
                x: 350,
                y: -100,
                symbol: 'path://M544 552.325V800a32 32 0 0 1-32 32 31.375 31.375 0 0 1-32-32V552.325L256 423.037a32 32 0 0 1-11.525-43.512A31.363 31.363 0 0 1 288 368l224 128 222.075-128a31.363 31.363 0 0 1 43.525 11.525 31.988 31.988 0 0 1-11.525 43.513L544 551.038z m0 0,M64 256v512l448 256 448-256V256L512 0z m832 480L512 960 128 736V288L512 64l384 224z m0 0',
                symbolSize: 28, //图标大小
                label: {
                    normal: {
                        position: "right",
                        distance: 10, //离图标多远					
                        show: true,
                        textStyle: {
                            fontSize: 14,
                            color: "#0ca361",
                            fontWeight: 700,
                            // backgroundColor: '#fff'
                        }
                    }
                },
                itemStyle: {
                    color: "#0ca361"
                },
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
                name: "EMS",
                x: 450,
                y: 100,
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
            // {
            //     name: "机构表",
            //     x: 50,
            //     y: 250,
            //     symbol: "rect",
            //     symbolSize: [100, 40],
            //     itemStyle: {
            //         normal: {
            //             color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            //                 offset: 0,
            //                 color: '#ffb402'
            //             }, {
            //                 offset: 1,
            //                 color: '#ffdc84'
            //             }]),
            //         }
            //     }
            // }, {
            //     name: "产品表",
            //     x: 50,
            //     y: 200,
            //     symbol: "rect",
            //     symbolSize: [100, 40],
            //     itemStyle: {
            //         normal: {
            //             color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            //                 offset: 0,
            //                 color: '#ffb402'
            //             }, {
            //                 offset: 1,
            //                 color: '#ffdc84'
            //             }]),
            //         }
            //     }
            // }, {
            //     name: "客户表",
            //     x: 50,
            //     y: 150,
            //     symbol: "rect",
            //     symbolSize: [100, 40],
            //     itemStyle: {
            //         normal: {
            //             color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            //                 offset: 0,
            //                 color: '#ffb402'
            //             }, {
            //                 offset: 1,
            //                 color: '#ffdc84'
            //             }]),
            //         }
            //     }
            // }, {
            //     name: "合同表",
            //     x: 50,
            //     y: 100,
            //     symbol: "rect",
            //     symbolSize: [100, 40],
            //     itemStyle: {
            //         normal: {
            //             color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            //                 offset: 0,
            //                 color: '#ffb402'
            //             }, {
            //                 offset: 1,
            //                 color: '#ffdc84'
            //             }]),
            //         }
            //     }
            // }, {
            //     name: "其他表",
            //     x: 50,
            //     y: 50,
            //     symbol: "rect",
            //     symbolSize: [100, 40],
            //     itemStyle: {
            //         normal: {
            //             color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            //                 offset: 0,
            //                 color: '#ffb402'
            //             }, {
            //                 offset: 1,
            //                 color: '#ffdc84'
            //             }]),
            //         }
            //     }
            // },{
            //     name: "其他表2",

            //     x: 70,
            //     y: 50,
            //     symbol: "rect",
            //     symbolSize: [100, 40],
            //     itemStyle: {
            //         normal: {
            //             color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            //                 offset: 0,
            //                 color: '#ffb402'
            //             }, {
            //                 offset: 1,
            //                 color: '#ffdc84'
            //             }]),
            //         }
            //     }
            // },  {
            //     name: "表5",
            //     x: 350,
            //     y: 250,
            //     symbol: "rect",
            //     symbolSize: [100, 40],
            //     itemStyle: {
            //         normal: {
            //             color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            //                 offset: 0,
            //                 color: '#ffb402'
            //             }, {
            //                 offset: 1,
            //                 color: '#ffdc84'
            //             }]),
            //         }
            //     }
            // }
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
            source: "贷款账户表",
            value: " ",
            target: "块4",
        }, {
            source: "贷款账户表",
            value: " ",
            target: "块5",
        }, {
            source: "贷款账户表",
            value: " ",
            target: "块6",
        }, {
            source: "贷款账户表",
            value: " ",
            target: "块7",
        }, {
            source: "贷款账户表",
            value: " ",
            target: "块8",
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
        }, {
            source: "块4",
            value: " ",
            target: "表1",
        }, {
            source: "块5",
            value: " ",
            target: "表2",
        }, {
            source: "块6",
            value: " ",
            target: "表3",
        }, {
            source: "块7",
            value: " ",
            target: "表4",
        }, {
            source: "块8",
            value: " ",
            target: "表5",
        }],
    }]
};