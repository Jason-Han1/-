var graph = {
    nodes: [{
            "name": "客户A",
            "value": [
                "高管",
                ""
            ],
            "category": "高信誉白名单",
            "symbolSize": 50,
            "tooltip": {
                "formatter": "{b0}:{c0}"
            }
        },
        {
            "name": "客户B",
            "category": "白名单",
            "value": [
                "员工",
                ""
            ],
            "symbolSize": 20,
            "tooltip": {
                "formatter": "{b0}:{c0}"
            }
        },
        {
            "name": "客户C",
            "category": "黑名单",
            "value": [
                "员工",
                ""
            ],
            "symbolSize": 50
        },

        {
            "name": "客户D",
            "category": "白名单",
            "value": [
                "控股人",
                ""
            ],
            "symbolSize": 50,
            "tooltip": {
                "formatter": "{b0}:{c0}"
            }
        },
        {
            "name": "客户E",
            "category": "白名单",
            "symbolSize": 20,
            "value": [
                "股东",
            
            ],
            "tooltip": {
                "formatter": "{b0}:{c0}"
            }
        },

        {
            "name": "客户F",
            "category": "白名单",
            "symbolSize": 50,
            "value": [
                "白名单",
                "员工 "
            ],
        },
        {
            "name": "客户O",
            "category": "白名单",
            "symbolSize": 50,
            "value": [
                "白名单",
                "员工 "
            ],
        },
        {
            "name": "客户P",
            "category": "白名单",
            "symbolSize": 50,
            "value": [
                "白名单",
                "员工 "
            ],
        },
        {
            "name": "客户G",
            "category": "类别B",
            "symbolSize": 20,
            "value": [
                "白名单",
                "员工 "
            ],
            "tooltip": {
                "formatter": "{b0}:{c0}"
            }
        }


    ],
    links: [{
            "source": "客户A",
            "target": "客户B",
            "value": '担保金额：1万'
        },
        {
            "source": "客户B",
            "target": "客户C",
            "value": '持股比例：30%'
        },
        {
            "source": "客户A",
            "target": "客户D",
            "value": ['担保金额：2万',
            '持股比例：60%']
        },


        {
            "source": "客户A",
            "target": "客户E",
            "value": '持股比例：10%'
        },

        {
            "source": "客户E",
            "target": "客户F",
            "value": '持股比例：1%'
        },

        {
            "source": "客户C",
            "target": "客户O",
            "value": '持股比例：1%'
        },
        {
            "source": "客户E",
            "target": "客户P",
            "value": '持股比例：1%'
        },
        {
            "source": "客户D",
            "target": "客户G",
            "value": '持股比例：1%'
        }

    ]
};
const defaultCategory = "高信誉白名单";
const graphTitle = "关系图";
const currentGraph = {
    nodes: {},
    links: {},
};
const nodeMap = {};
// 页面加载时，第一次初始化图
function init() {
    // 根据定义的常量，产生currentGraph的默认数据
    // 遍历全部nodes和links，产生node映射map
    for (let i = 0; i < graph.nodes.length; i++) {
        if (graph.nodes[i].category === defaultCategory) {
            currentGraph.nodes[graph.nodes[i].name] = graph.nodes[i];
        }
        nodeMap[graph.nodes[i].name] = graph.nodes[i];
        nodeMap[graph.nodes[i].name]['links'] = {};
        nodeMap[graph.nodes[i].name]['nodes'] = {};
        nodeMap[graph.nodes[i].name]['hasAppend'] = false;
    }
    for (let i = 0; i < graph.links.length; i++) {
        let link = graph.links[i];
        if (nodeMap[link.source] !== undefined && nodeMap[link.target] !== undefined) {
            nodeMap[link.source].links[link.target] = link;
            nodeMap[link.source].nodes[nodeMap[link.target].name] = nodeMap[link.target];
        }
    }

    for (let i = 0; i < graph.nodes.length; i++) {
        graph.nodes[i].itemStyle = null;
        graph.nodes[i].label = {
            normal: {
                show: graph.nodes[i].symbolSize > 15
            }
        };
    }
    redrawGraph();
}
// 处理点击节点展开
function append(nodeName) {
    // 根据nodeName从nodeMap里拿出对应的nodes和links，并append到currentGraph.nodes currentGraph.links
    let node = nodeMap[nodeName];
    if (node.hasAppend === true || Object.keys(node.nodes).length === 0 || Object.keys(node.links).length === 0) {
        alert("无法继续展开");
        return
    }
    Object.values(node.nodes).forEach(n => {
        currentGraph.nodes[n.name] = n;
    });
    Object.values(node.links).forEach(l => {
        currentGraph.links[l.source + "_" + l.target] = l;
    });
    node.hasAppend = true;
    redrawGraph();
}
// 处理点击节点收缩
function remove(nodeName) {
    //根据nodeName从nodeMap里拿出对应的nodes和links，从currentGraph.nodes currentGraph.links删除当前节点的nodes和links并且递归
    let node = nodeMap[nodeName];
    Object.values(node.nodes).forEach(n => {
        delete currentGraph.nodes[n.name];
        if (n.hasAppend === true && Object.keys(n.nodes).length > 0) {
            remove(n.name);
        }
    });
    Object.values(node.links).forEach(l => {
        delete currentGraph.links[l.source + '_' + l.target];
    });
    // 设置flag 等于false
    node.hasAppend = false;

    redrawGraph();
}
// 根据更新后的option重新画图
function redrawGraph() {
    option.series[0].data = Object.values(currentGraph.nodes);
    option.series[0].links = Object.values(currentGraph.links);
    console.log(option);
    myChart.setOption(option);
}


var categories = [{
        name: '高信誉白名单',
        itemStyle: {
           color: '#10a050'
        },
    },
    {
        name: '白名单',
        itemStyle: {
            color: '#ff7d18'
        },

    },
    {
        name: '黑名单',
        itemStyle: {
            color: '#c23531'
        },
    }
]

const option = {
    title: {
        text: graphTitle,
        top: 'bottom',
        left: 'center',
    },
    tooltip: {
        show: true, // 默认显示
        showContent: true, // 是否显示提示框浮层
        trigger: 'item', // 触发类型，默认数据项触发
        triggerOn: 'mousemove', // 提示触发条件，mousemove鼠标移至触发，还有click点击触发
        alwaysShowContent: false, // 默认离开提示框区域隐藏，true为一直显示
        showDelay: 100, // 浮层显示的延迟，单位为 ms，默认没有延迟，也不建议设置。在 triggerOn 为 'mousemove' 时有效。
        hideDelay: 2000, // 浮层隐藏的延迟，单位为 ms，在 alwaysShowContent 为 true 的时候无效。
        enterable: false, // 鼠标是否可进入提示框浮层中，默认为false，如需详情内交互，如添加链接，按钮，可设置为 true。
        position: 'right', // 提示框浮层的位置，默认不设置时位置会跟随鼠标的位置。只在 trigger 为'item'的时候有效。
        confine: false, // 是否将 tooltip 框限制在图表的区域内。
        // 外层的 dom 被设置为 'overflow: hidden'，或者移动端窄屏，导致 tooltip 超出外界被截断时，此配置比较有用。
        transitionDuration: 0.2, // 提示框浮层的移动动画过渡时间，单位是秒，设置为 0 的时候会紧跟着鼠标移动。
    },
    legend: {
        left: 'left',
        data: categories.map(x => x.name)
    },
    animation: false,
    series: [{
        type: 'graph',
        layout: 'force',
        // name: '客户信息:', // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
        symbolSize: 48,
        data: Object.values(currentGraph.nodes),
        links: Object.values(currentGraph.links),
        categories: categories,
        roam: true,
        itemStyle: {
            normal: {
                borderColor: '#fff',
                borderWidth: 1,
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.3)'
            }
        },
        label: {
            position: 'inside',
            formatter: '{b}'
        },
        focusNodeAdjacency: true, //是否在鼠标移到节点上的时候突出显示节
        edgeSymbol: ['none', 'arrow'], //两端的标记类型
        edgeLabel: {
            normal: {
                show: true,
                textStyle: {
                    fontSize: 10
                },
                formatter: "{c}"
            }
        },
        lineStyle: {
            color: 'target',
            opacity: 0.6,
            curveness: 0.3
        },
        emphasis: {
            lineStyle: {
                width: 5
            }
        },
        force: {
            layoutAnimation: false,
            repulsion: 500
        }
    }]
};
init();
myChart.on('click', function(params) {
    if (params.dataType === "node") {
        const node = nodeMap[params.data.name];
        if (node.hasAppend === true) {
            remove(node.name)
        } else {
            append(node.name);
        }
    }
});