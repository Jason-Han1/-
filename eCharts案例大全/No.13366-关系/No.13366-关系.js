myChart.showLoading();
var webkitDep = {
    "type": "force",
    "categories": [ //关系网类别，可以写多组  
        {
            "name": "人物关系", //关系网名称  
            "keyword": {},
            "base": "人物关系"
        }
    ],
    "nodes": [ //展示的节点  
        {
            "name": "刘老太太太爷", //节点名称  
            "value": 3,
            "category": 0 //与关系网类别索引对应，此处只有一个关系网所以这里写0  
        },
        {
            "name": "霓娜",
        },
        {
            "name": "诺一",
        },
        {
            "name": "诺兰",
        },
        {
            "name": "诺二",
        },
        {
            "name": "诺三",
        },
        {
            "name": "诺三一",
        },
        {
            "name": "诺三二",
        },
        {
            "name": "诺三三",
        },
        {
            "name": "诺三三一",
        },
        {
            "name": "诺三三二",
        },
        {
            "name": "诺三三三",
        },
        {
            "name": "张老太太太爷",
        }, {
            "name": "张小二",
        }

    ],
    "links": [ //节点之间连接  
        {
            "source": 0, //起始节点，0表示第一个节点  
            "target": 1 //目标节点，1表示与索引为1的节点进行连接  
        },
        {
            "source": 0, //要连的索引
            "target": 2 //自己的索引
        },
        {
            "source": 0,
            "target": 3
        },
        {
            "source": 2,
            "target": 4
        },
        {
            "source": 4,
            "target": 5
        },
        {
            "source": 5,
            "target": 6
        },
        {
            "source": 5,
            "target": 7
        },
        {
            "source": 5,
            "target": 8
        },
        {
            "source": 8,
            "target": 9
        },
        {
            "source": 8,
            "target": 10
        },
        {
            "source": 8,
            "target": 11
        }
    ]
};
myChart.hideLoading();

option = {
    legend: {
        data: ['人物关系'] //此处的数据必须和关系网类别中name相对应  
    },
    series: [{
        type: 'graph',
        layout: 'force',
        animation: false,
        label: {
            normal: {
                show: true,
                position: 'right'
            }
        },
        draggable: true,
        data: webkitDep.nodes.map(function(node, idx) {
            node.id = idx;
            return node;
        }),
        categories: webkitDep.categories,
        force: {
            edgeLength: 10, //连线的长度  
            repulsion: 800 //子节点之间的间距  
        },
        edges: webkitDep.links
    }]
};
myChart.setOption(option);