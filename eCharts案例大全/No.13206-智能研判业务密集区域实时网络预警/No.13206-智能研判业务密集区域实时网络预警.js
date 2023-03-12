var option = {
    title: {
        text: '智能研判业务密集区域实时网络预警',
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        type: 'graph',
        layout: 'none',
        symbolSize: 50, //图形的大小（示例中的圆的大小）
        roam: true, //鼠标缩放及平移
        focusNodeAdjacency: true, //是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点
        label: {
            normal: {
                show: true, //控制非高亮时节点名称是否显示
                position: 'top',
                fontSize: 20
            }
        },

        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [1, 10], //箭头的大小
        edgeLabel: {
            normal: {
                show: false
            },
            emphasis: {
                textStyle: {
                    fontSize: 20 //边节点显示的字体大小
                }
            }
        },

        //节点信息

        data: [{
                id: 'p1',
                name: '基站、小区异常清单        ',
                ip: '10.108.50.101',
                label: {
                    normal: {
                        fontSize: 30,
                        show: true,
                    }
                },
                isnode: true,
                x: 50,
                y: 300,
                // symbol:'image://服务器-20.png',
            }, {
                id: 'p2',
                name: '网络异常区域清单（聚合）',
                ip: '10.108.50.101',
                label: {
                    normal: {
                        fontSize: 30,
                        show: true
                    }
                },
                isnode: true,
                x: 200,
                y: 300,
                // symbol:'image://服务器-20.png',
            },
            {
                id: 'p4',
                name: '故障、投诉工单（历史+新增）',
                ip: '10.108.50.102',
                label: {
                    normal: {
                        fontSize: 30,
                        show: true
                    }
                },
                isnode: true,
                x: 200,
                y: 400,
                // symbol:'image://服务器-20.png',
            },
            {
                id: 'p6',
                name: '网络异常监控预警',
                ip: '10.108.50.104',
                label: {
                    normal: {
                        fontSize: 30,
                        show: true
                    }
                },
                isnode: true,
                x: 500,
                y: 300,
                // symbol:'image://服务器-20.png',
            },
            {
                id: 'p3',
                name: '小区业务量（流量、话务量、用户数）',
                ip: '10.108.50.106',
                label: {
                    normal: {
                        fontSize: 30,
                        show: true,
                    }
                },
                isnode: true,
                x: 200,
                y: 200,
                // symbol:'image://服务器-20.png',
            },
            {
                id: 'p5',
                name: '网络异常事件',
                ip: '10.108.50.107',
                label: {
                    normal: {
                        fontSize: 30,
                        show: true
                    }
                },
                isnode: true,
                x: 350,
                y: 300,
                // symbol:'image://服务器-20.png',
            },

        ],

        links: [{
                source: 'p1',
                target: 'p2',
                islink: true,
                name: 'K-means聚类分析法',
                label: {
                    normal: {
                        fontSize: 15,
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
            },
            {
                source: 'p2',
                target: 'p5',
                islink: true,
                name: 'i*∑f1(x)',
                label: {
                    normal: {
                        fontSize: 15,
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },

            }, {
                source: 'p3',
                target: 'p5',
                islink: true,
                name: 'k*∑f2(x)',
                label: {
                    normal: {
                        fontSize: 15,
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
            }, {
                source: 'p4',
                target: 'p5',
                islink: true,
                name: 'j*∑f3(x)',
                label: {
                    normal: {
                        fontSize: 15,
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
            }, {
                source: 'p5',
                target: 'p6',
                islink: true,
                name: '预警规则',
                label: {
                    normal: {
                        fontSize: 15,
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
            }, {
                source: 'p6',
                target: 'p2',
                islink: true,
                name: '预警反馈机制',
                lineStyle: {
                    normal: {
                        curveness: 0.5,
                        type: 'dashed',
                    }
                },
                label: {
                    normal: {
                        fontSize: 15,
                    
                        formatter: function(params, ticket, callback) {
                            params.name = params.data.name;
                            return params.name;
                        },
                        show: true
                    }
                },
            }
        ],
        lineStyle: {
            normal: {
                show: true,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: 'red' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: 'blue' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                },

                // curveness: 0.2

            },
            emphasis: {
                color: 'red',
                width: 3,
                type: 'dashed', //虚线

            }
        },

        tooltip: {
            position: 'bottom', //悬浮时显示的位置
            backgroundColor: 'green',
            textStyle: {
                fontSize: 18,
            },
        }, //悬浮时的提示框，不设置时是随鼠标移动

    }]
};