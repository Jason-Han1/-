// 如果节点指向 end，则为叶节点
// let data = [{
//         "0": [
//             ["1", 1],
//             ["2", 1],
//             ["5", 1]
//         ]
//     },
//     {
//         "0": [["3", 1]],
//         "1": [
//             ["end", 0]
//         ],
//         "2": [
//             ["3", 1],
//             ["4", 1]
//         ],
//         "5": [
//             ["1", 1],
//             ["2", 2]
//         ]
//     }
// ]

// 如果数组最后一项全end则直接掠过不写入
let data = [{
    "亚洲": [
        ["北京", 2]
    ]
}, {
    "亚洲": [
        ["北京", 1]
    ],
    "北京": [
        ["end", 0]
    ]
}, {
    "亚洲": [
        ["广东", 1]
    ],
    "北京": [
        ["广东", 1]
    ]
}, {
    "亚洲": [
        ["北京", 2]
    ],
    "北京": [
        ["广东", 1]
    ],
    "广东": [
        ["end", 0]
    ]
}, {
    "上海": [
        ["广东", 2]
    ],
    "亚洲": [
        ["北京", 1],
        ["广东", 4]
    ],
    "北京": [
        ["end", 0]
    ],
    "广东": [
        ["end", 0]
    ]
}, {
    "亚洲": [
        ["广东", 4],
        ["上海", 1]
    ],
    "北京": [
        ["end", 0]
    ],
    "广东": [
        ["end", 0]
    ],
    "日本": [
        ["上海", 1]
    ]
}, {
    "上海": [
        ["end", 0]
    ],
    "亚洲": [
        ["北京", 4],
        ["广东", 5]
    ],
    "北京": [
        ["广东", 1]
    ],
    "广东": [
        ["end", 0]
    ],
    "日本": [
        ["北京", 1]
    ]
}, {
    "亚洲": [
        ["北京", 3],
        ["广东", 4]
    ],
    "北京": [
        ["广东", 1]
    ],
    "广东": [
        ["end", 0]
    ]
}, {
    "亚洲": [
        ["广东", 5],
        ["上海", 2]
    ],
    "北京": [
        ["end", 0]
    ],
    "广东": [
        ["end", 0]
    ],
    "日本": [
        ["广东", 1]
    ]
}, {
    "上海": [
        ["end", 0]
    ],
    "亚洲": [
        ["北京", 3],
        ["广东", 1]
    ],
    "广东": [
        ["end", 0]
    ]
}, {
    "亚洲": [
        ["北京", 1],
        ["广东", 8]
    ],
    "北京": [
        ["广东", 1]
    ],
    "广东": [
        ["end", 0]
    ]
}, {
    "亚洲": [
        ["北京", 3],
        ["广东", 4],
        ["上海", 1]
    ],
    "北京": [
        ["end", 0]
    ],
    "广东": [
        ["end", 0]
    ],
    "日本": [
        ["北京", 1]
    ]
}, {
    "上海": [
        ["广东", 1]
    ],
    "亚洲": [
        ["广东", 1]
    ],
    "北京": [
        ["end", 0]
    ],
    "广东": [
        ["end", 0]
    ]
}, {
    "上海": [
        ["广东", 1]
    ],
    "亚洲": [
        ["广东", 2],
        ["上海", 1]
    ],
    "广东": [
        ["end", 0]
    ],
    "日本": [
        ["上海", 1]
    ]
}, {
    "上海": [
        ["广东", 2]
    ],
    "亚洲": [
        ["广东", 2]
    ],
    "广东": [
        ["end", 0]
    ]
}, {
    "亚洲": [
        ["广东", 2],
        ["上海", 1]
    ],
    "广东": [
        ["end", 0]
    ]
}, {
    "上海": [
        ["end", 0]
    ],
    "亚洲": [
        ["广东", 5]
    ],
    "广东": [
        ["end", 0]
    ]
}, {
    "亚洲": [
        ["广东", 1]
    ],
    "广东": [
        ["end", 0]
    ]
}, {
    "亚洲": [
        ["广东", 1]
    ],
    "广东": [
        ["end", 0]
    ]
}, {
    "亚洲": [
        ["广东", 1]
    ],
    "广东": [
        ["end", 0]
    ]
}, {
    "亚洲": [
        ["广东", 1]
    ],
    "广东": [
        ["end", 0]
    ]
}, {
    "亚洲": [
        ["广东", 1]
    ],
    "广东": [
        ["end", 0]
    ]
}, {
    "亚洲": [
        ["广东", 1]
    ],
    "广东": [
        ["end", 0]
    ]
}, {
    "亚洲": [
        ["广东", 1]
    ],
    "广东": [
        ["end", 0]
    ]
}, {
    "亚洲": [
        ["广东", 1]
    ],
    "广东": [
        ["end", 0]
    ]
}]

let timeline = ['2020-03-16', '2020-03-17', '2020-03-19', '2020-03-20', '2020-03-21', '2020-03-22', '2020-03-24', '2020-03-26', '2020-03-27']


function connect2fill(source, target) {
    return {
        source: source,
        target: target,
        value: 0,
        lineStyle: {
            opacity: 0
        },
        emphasis: {
            opacity: 0
        }
    }
}

function connect(level, source, target, value) {
    return {
        "source": level + "-" + source,
        "target": (level + 1) + "-" + target,
        "value": value,
        lineStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                    offset: 0,
                    color: "#4e8ebf"
                },
                {
                    offset: 0.5,
                    color: "#dddddd"
                },
                {
                    offset: 1,
                    color: "#c84641"
                }
            ]),
            curveness: 0.3
        }
    }
}

let nodes = [{
        name: "level-0",
        itemStyle: {
            normal: {
                opacity: 0
            }
        }
    } // 根占位符
]
let links = [{
    source: "level-0",
    target: "level-1",
    value: 0,
    lineStyle: {
        opacity: 0
    },
    emphasis: {
        opacity: 0
    }
}]
let nodes_list = []
let last_temp = []
let last_list = []

// 快速创建点连接到占位符
function add_nodes(level, name) {
    let n = level + "-" + name
    if (nodes_list.indexOf(n) == -1) {
        nodes.push({
            name: n
        })
        nodes_list.push(n)
    }

}


for (let level = 0; level < data.length; level++) {
    // 首先创建各级占位符
    nodes.push({
        name: "level-" + (level + 1),
        itemStyle: {
            normal: {
                opacity: 0
            }
        },
        label: {
            show: false
        }
    })
    // 占位符需要首尾相连
    if (level > 0) {
        links.push(connect2fill("level-" + level, "level-" + (level + 1)))
    }


    // 插入各级节点及连接，命名为层级-名字，label为原名
    let level_data = data[level]
    for (let source in level_data) {
        // 添加source节点
        add_nodes(level, source)

        if (level > 0) {

            // 如果source节点是中间出现的，就需要连接到前置占位符
            if (last_list.indexOf(level + "-" + source) == -1) {
                console.log(level + "----" + source)
                links.push(connect2fill("level-" + (level - 1), level + "-" + source))
            }
        }

        let val = level_data[source]
        for (let i = 0; i < val.length; i++) {
            let target = val[i][0]
            let value = val[i][1]

            // 为end
            if (target == "end") {
                // 连接到下一级占位符
                links.push(connect2fill(level + "-" + source, "level-" + (level + 1)))
            } else {
                last_temp.push((level + 1) + "-" + target)
                // 非最低级叶节点
                if (level < data.length) {
                    // 添加连接
                    links.push(connect(level, source, target, value))
                }
                // 添加节点
                // 如果节点存在就不寸
                add_nodes(level + 1, target)

            }
        }
    }
    last_list = last_temp
    last_temp = []
}



option = {
    backgroundColor: "#FFFFFF",
    grid: {
        left: '15%',
        right: '5%',
        top: '1%',
        bottom: '1%'
    },
    xAxis: {
        type: 'category',
        position: 'top',
        boundaryGap: false,
        splitLine: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            color: '#293c55',
            inside: false,
            align: 'center',
            margin: -30,
            formatter: e => {
                return e.substring(5, 10)
            }
        },
        z: 10,

        data: timeline
    },
    yAxis: {
        show: false,
        z: 10
    },
    series: [{
        name: "sankey",
        type: "sankey",
        layout: 'none',
        draggable: false,
        left: '4.5%',
        right: '4.5%',
        top: '5%',
        bottom: '5%',
        // width: '100%',
        // nodeWidth: '16',
        data: nodes,
        // layoutIterations: 0,
        links: links,
        itemStyle: {
            color: "#1f77b4",
            borderColor: "#1f77b4"
        },
        focusNodeAdjacency: true,
        label: {
            color: "#fff",
            position: 'inside',
            rotate: -90,
            fontFamily: "Arial",
            fontSize: 18,
            formatter: e => {
                return e.name.split("-")[1]
            }
        }
    }, ],
    tooltip: {
        trigger: "item"
    }
};

myChart.setOption(option)
myChart.on("click", e => console.log(e))