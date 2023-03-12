option = {
    title: {
        text: '项目经费',
        top: '12%',
        left: 'center'
    },
    label: {
        normal: {
            show: true
        }
    },
    legend: {
        x: "center",
        show: false,
        top: '20%',
        data: ["男性", "女性"]
    },
    series: [
        {
            type: 'graph',//关系图
            layout: 'force',//力导向图的布局
            symbolSize: 50,//节点大小
            focusNodeAdjacency: true,//鼠标悬停在节点上时，会隐藏和当前节点非直接连接的节点
            categories: [{ //节点类别
                name: '项目',
                itemStyle: {
                    normal: {
                        color: "#009800",
                    }
                }
            }, {
                name: '设备费',
                itemStyle: {
                    normal: {
                        color: "#4592FF",
                    }
                }
            }, {
                name: '业务费',
                itemStyle: {
                    normal: {
                        color: "#FFC300",
                    }
                }
            }, {
                name: '劳务费',
                itemStyle: {
                    normal: {
                        color: "#FF5733",
                    }
                }
            }],
            label: { //节点名称
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 12 //节点名称显示大小
                    },
                }
            },
            force: {
                repulsion: 500 //节点之间的排斥力
            },
            edgeLabel: {
                normal: {
                    show: false,
                    textStyle: {
                        fontSize: 10
                    },
                    formatter: "{c}"
                }
            },
            data: [{
                name: '项目',//节点名称
                category: '项目',//节点类型
                draggable: true,//节点是否可拖动
            }, {
                name: '设备费',
                category: '设备费',
                draggable: true,
            }, {
                name: '业务费',
                category: '业务费',
                draggable: true,
            }, {
                name: '劳务费',
                category: '劳务费',
                draggable: true,
            }, {
                name: 'E',
                category: 0,
                draggable: true,
            }, {
                name: 'F',
                category: 1,
                draggable: true,
            }, {
                name: 'G',
                category: 1,
                draggable: true,
            },{
                name: 'H',
                category: 1,
                draggable: true,
            }],
            links: [{
                source: '项目',//关系的起点
                target: '劳务费'
            },{
                source: '项目',
                target:  '设备费'
            }, {
                source: '项目',
                target: '业务费'
            }
            ],
            lineStyle: { //关系连接线的样式设置
                normal: {
                    opacity: 0.9,//关系连接线的不透明度为0.9
                    width: 3,//关系连接线的宽度
                    curveness: 0//关系连接线的弯曲程度
                }
            }
        }
    ]
};