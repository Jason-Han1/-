let dataInfo = [{
    name: "浮游植物",
    category: 0, // 这是种类，一级实体1二级关系2三级关系3四级关系4
    symbolSize: 50,
    draggable: true,
    fixed: true,
    value: [0, 150]
}, {
    name: "虎鲸",
    category: 0,
    symbolSize: 50,
    draggable: true,
    fixed: true,
    value: [600, 150]
}, {
    name: "磷虾",
    category: 1,
    value: [200, 200],
    draggable: true,
    fixed: true,
    symbolSize: 50
}, {
    name: "浮游动物",
    category: 1,
    value: [200, 150],
    draggable: true,
    fixed: true,
    symbolSize: 50
}, {
    name: "小鱼",
    category: 1,
    value: [200, 100],
    draggable: false,
    symbolSize: 50
}, {
    name: "须鲸",
    category: 2,
    symbolSize: 50,
    draggable: false,
    value: [300, 200]
}, {
    name: "大鱼",
    category: 2,
    symbolSize: 50,
    draggable: false,
    value: [300, 150]
}, {
    name: "海豹",
    category: 2,
    symbolSize: 50,
    draggable: false,
    value: [300, 100]
}]
let dataLink = [{
    source: "浮游植物",
    value: "132",
    target: "磷虾",
}, {
    source: "磷虾",
    value: "132",
    target: "浮游植物",
}, {
    source: "浮游植物",
    value: "778",
    target: "浮游动物",
}, {
    source: "浮游植物",
    value: "5354",
    target: "小鱼",
}, {
    source: "须鲸",
    value: "6677",
    target: "虎鲸",
}, {
    source: "大鱼",
    value: "3344",
    target: "虎鲸",
}, {
    source: "海豹",
    value: "2333",
    target: "虎鲸",
}, {
    source: "磷虾",
    value: "3737",
    target: "须鲸",
}, {
    source: "浮游动物",
    value: "6688",
    target: "大鱼",
}, {
    source: "小鱼",
    value: "7788",
    target: "海豹",
}, {
    source: "大鱼",
    value: "9933",
    target: "海豹",
}]
option = {
    title: {
        text: "实体属性关系图",
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