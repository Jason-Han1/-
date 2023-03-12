var categories = [{
        name: "语文"
    },
    {
        name: "数学"
    },
    {
        name: "游戏"
    }
];

option = {
    title: {
        text: "知识图谱"
    },
    tooltip: {
        formatter: function(params) {
            return params.name + (params.value ? ' : ' + params.value : '')
        }
    },
    animationDurationUpdate: 1500,
    animationEasingUpdate: "quinticInOut",

    toolbox: {
        feature: {
            restore: {}
        }
    },
    legend: {
        show: true,
        data: categories
    },
    series: [{
        type: "graph",
        layout: "force",
        roam: true,
        hoverAnimation: true,
        focusNodeAdjacency: true,
        draggable: true,
        symbolSize: 33,
        force: {
            repulsion: 200,
            edgeLength: 100
        },
        itemStyle: {
            normal: {
                borderColor: "#fff",
                borderWidth: 1,
                shadowBlur: 10,
                shadowColor: "rgba(0, 0, 0, 0.3)"
            }
        },
        lineStyle: {
            width: 0.5,
            curveness: 0.3,
            opacity: 0.8
        },
        label: {
            emphasis: {
                position: 'right',
                show: true
            }
        },
        emphasis: {
            itemStyle: {
                borderWidth: 3
            },
            lineStyle: {
                color: '#fff',
                width: 3,
            }
        },
        data: [{
                name: "语文",
                category: '语文',
                symbolSize: 44,
                label: {
                    show: true
                }
            }, {
                name: "古典文学",
                category: '语文'
            }, {
                name: "现代文学",
                category: '语文'
            },
            {
                name: "数学",
                category: '数学',
                symbolSize: 44,
            },
            {
                name: "代数",
                category: '数学'
            },
            {
                name: "几何",
                category: '数学'
            },
            {
                name: "微积分",
                category: '数学'
            },
            {
                name: "游戏",
                category: '游戏',
                symbolSize: 44,
            },
            {
                name: "RPG",
                category: '游戏'
            }, {
                name: "FPS",
                category: '游戏'
            }, {
                name: "FTG",
                category: '游戏'
            }, {
                name: "ACT",
                category: '游戏'
            },
        ],
        links: [{
            source: "语文",
            target: "古典文学",
            value: "好好学习"
        }, {
            source: "语文",
            target: "现代文学",
            value: "好好学习"
        }, {
            source: "数学",
            target: "代数",
            value: "用心学"
        }, {
            source: "数学",
            target: "几何"
        }, {
            source: "数学",
            target: "微积分"
        }, {
            source: "游戏",
            target: "RPG"
        }, {
            source: "游戏",
            target: "FPS"
        }, {
            source: "游戏",
            target: "FTG"
        }, {
            source: "游戏",
            target: "ACT"
        }, ],
        categories: categories
    }]
}