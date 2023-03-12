var nodes = [
    {name: '表1'},
    {name: '表2'},
    {name: '表3'},
    {name: '表4'},
    {name: '表5'},
    {name: '表6'},
    {name: '表7'},
    {name: '表8'},
    {name: '表9'},
    {name: '表10'},
    {name: '表11'},
    {name: '表12'},
    {name: '表13'},
    {name: '表14'},
    {name: '表15'},
    {name: '表16'},
    {name: '表17'},
    {name: '表18'},
    {name: '表19'},
    {name: '表20'},
];
var links = [
    {
        source: "表1",
        target: "表3",
        value: 1
    },
    {
        source: "表1",
        target: "表4",
        value: 1
    },
    {
        source: "表1",
        target: "表5",
        value: 1
    },
    {
        source: "表2",
        target: "表3",
        value: 1
    },
    {
        source: "表2",
        target: "表6",
        value: 1
    },
    {
        source: "表2",
        target: "表7",
        value: 1
    },
    {
        source: "表3",
        target: "表8",
        value: 1
    },
    {
        source: "表3",
        target: "表9",
        value: 1
    },
    {
        source: "表8",
        target: "表10",
        value: 1
    },
    {
        source: "表4",
        target: "表6",
        value: 1
    },
    {
        source: "表9",
        target: "表11",
        value: 1
    },
    {
        source: "表12",
        target: "表3",
        value: 1
    },
];
var option = {
    tooltip: {
        trigger: "item",
        triggerOn: "mousemove"
    },
    series: {
        type: "sankey",
        layout: "none",
        top: 50,
        left: "3%",
        right: "12%",
        nodeGap: 14,
        layoutIterations: 0, // 自动优化列表，尽量减少线的交叉，为0就是按照数据排列
        data: nodes, // 节点
        links: links, // 节点之间的连线
        draggable: false,
        focusNodeAdjacency: "inEdges", // 鼠标划上时高亮的节点和连线，allEdges表示鼠标划到节点上点亮节点上的连线及连线对应的节点
        levels: [{
                depth: 0,
                itemStyle: {
                    color: "#F27E7E"
                },
                lineStyle: {
                    color: "source",
                    opacity: 0.2
                }
            },
            {
                depth: 1,
                lineStyle: {
                    color: "source",
                    opacity: 0.2
                }
            },
            {
                depth: 2,
                lineStyle: {
                    color: "source",
                    opacity: 0.2
                }
            },
            {
                depth: 3,
                label: {
                    fontSize: 12
                }
            }
        ],
        label: {
            fontSize: 14,
            color: "#666"
        },
        itemStyle: {
            normal: {
                borderWidth: 0
            }
        }
    }
};