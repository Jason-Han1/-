let dataInfo = [{
    name: "建设方案",
    category: 4,
     symbol: "roundRect",
    value: [160,300],
    draggable: true,
    fixed: true,
    symbolSize: 50
}, {
    name: "网元名称",
    category: 3,
     symbol: "roundRect",
    value: [110,300],
    draggable: true,
    fixed: true,
    symbolSize: 50
},{
    name: "网络指标",
    category: 2,
     symbol: "roundRect",
    value: [60,300],
    draggable: true,
    fixed: true,
    symbolSize: 50
}, {
    name: "工单问题",
    category: 1,
     symbol: "roundRect",
    value: [10,300],
    draggable: true,
    fixed: true,
    symbolSize: 50
},{
    name: "质差\n栅格",
    category: 1,
    value: [10, 100],
    draggable: true,
    fixed: true,
    symbolSize: 50
}, {
    name: "室分\n健康",
    category: 1,
    value: [10, 250],
    draggable: true,
    fixed: true,
    symbolSize: 50
}, {
    name: "弱覆盖",
    category: 1,
    value: [10, 150],
    draggable: false,
    symbolSize: 50
}, {
    name: "用户\n投诉",
    category: 1,
    value: [10, 200],
    draggable: false,
    symbolSize: 50
}, {
    name: "PM",
    category: 2,
    symbolSize: 50,
    draggable: false,
    value: [60, 200]
}, {
    name: "感知",
    category: 2,
    symbolSize: 50,
    draggable: false,
    value: [60, 150]
}, {
    name: "XDR",
    category: 2,
    symbolSize: 50,
    draggable: false,
    value: [60, 100]
}, {
    name: "MR",
    category: 2,
    symbolSize: 50,
    draggable: false,
    value: [60, 250]
}, {
    name: "CELL4",
    category: 3,
    symbolSize: 50,
    draggable: false,
    value: [110, 200]
}, {
    name: "CELL3",
    category: 3,
    symbolSize: 50,
    draggable: false,
    value: [110, 150]
}, {
    name: "CELL2",
    category: 3,
    symbolSize: 50,
    draggable: false,
    value: [110, 100]
}, {
    name: "CELL1",
    category: 3,
    symbolSize: 50,
    draggable: false,
    value: [110, 250]
}, {
    name: "基站\n扩建",
    category: 4,
    symbolSize: 50,
    draggable: false,
    value: [160, 250]
}, {
    name: "基站\n排障",
    category: 4,
    symbolSize: 50,
    draggable: false,
    value: [160, 214]
}, {
    name: "干扰\n排查",
    category: 4,
    symbolSize: 50,
    draggable: false,
    value: [160, 176]
}, {
    name: "参数\n优化",
    category: 4,
    symbolSize: 50,
    draggable: false,
    value: [160, 138]
}, {
    name: "覆盖\n优化",
    category: 4,
    symbolSize: 50,
    draggable: false,
    value: [160, 100]
}, {
    name: "方案执行",
    category: 5,
    symbolSize: 50,
    draggable: true,
     symbol: "rect",
    value: [170, 100]
}]
let dataLink = [{
    source: "弱覆盖",
    value: "",
    target: "MR",
}, {
    source: "MR",
    value: "",
    target: "CELL3",
}, {
    source: "CELL3",
    value: "",
    target: "覆盖\n优化",
}]
option = {
    title: {
        text: "流程图",
        top: "top",
        left: "center"
    },
    itemStyle: {
        normal: {
            color: '#000',
        },
        shadowBlur: 10
    },
    animationDuration: 1500,
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
        coordinateSystem: 'cartesian2d',
        legendHoverLink: false,
        hoverAnimation: true,
        nodeScaleRatio: false,
        //建头
           edgeSymbol: ['circle', 'arrow'],
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
        categories: [{
            name: '一级关系',
            itemStyle: { //可配置颜色
                normal: {
                    color: "#A170DD",
                }
            }
        }, {
            name: '二级关系',
            itemStyle: { //可配置颜色
                normal: {
                    color: "#41B1EF",
                }
            }
        }, {
            name: '三级关系',
            itemStyle: { //可配置颜色
                normal: {
                    color: "#E8B842",
                }
            }
        }, {
            name: '四级关系',
            itemStyle: { //可配置颜色
                normal: {
                    color: "#667AED",
                }
            }
        }],
        //圆形上面的文字
        label: {
            normal: {
                position: "inside",
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 12
                },
            }
        },
        force: {
            repulsion: 1000,
        },
        force: {
            repulsion: 2500,

        },
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
            shadowBlur: 10
        },
        // lineStyle: {
        //     normal: {
        //         width: 1,
        //         shadowColor: 'none',
        //         color: '#0250FD'
        //     },
        // },
               lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 1,
                    curveness: 0.1
                }
            },
        data: dataInfo,
        links: dataLink
    }]
}