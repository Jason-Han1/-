var webkitDep = {
    "type": "force",
    "categories": [ //关系网类别，可以写多组  
        {
            "name": "甲公司", //关系网名称  
            "keyword": {},
            "base": "网格关系"
        },
        {
            "name": "乙公司", //关系网名称  
            "keyword": {},
            "base": "网格关系"
        },
    ],
    "nodes": [ //展示的节点  
        {
            "name": "甲公司", //节点名称  
            "value": 10,
            "symbolSize": 40,
            "category": 0 //与关系网类别索引对应，此处只有一个关系网所以这里写0 

        },
        {
            "name": "甲公司A股东",
            "value": 8,
            "symbolSize": 25,
            "category": 0,
            itemStyle: {
                color: '#3398db'
            }
        },
        {
            "name": "甲公司B股东",
            "value": 10,
            "symbolSize": 25,
            "category": 0,
            itemStyle: {
                color: '#3398db'
            }
        },
        {
            "name": "子公司1",
            "value": 10,
            "symbolSize": 15,
            "category": 0,
            itemStyle: {
                color: 'green'
            }
        },
        {
            "name": "子公司2",
            "value": 110,
            "symbolSize": 15,
            "category": 0,
            itemStyle: {
                color: 'green'
            }
        },
        {
            "name": "子公司3",
            "value": 100,
            "symbolSize": 15,
            "category": 0,
            itemStyle: {
                color: 'green'
            }
        },
        {
            "name": "子公司4",
            "value": 1000,
            "symbolSize": 15,
            "category": 0,
            itemStyle: {
                color: 'green'
            }
        },
        {
            "name": "乙公司", //节点名称  
            "value": 10,
            "symbolSize": 40,
            "color": "#fff",
            "category": 1 //与关系网类别索引对应，此处只有一个关系网所以这里写0  
        },
        {
            "name": "乙公司A股东",
            "value": 8,
            "symbolSize": 25,
            "category": 1
        },
        {
            "name": "乙公司B股东",
            "value": 10,
            "symbolSize": 25,
            "category": 1
        },
        {
            "name": "乙公司C股东",
            "value": 8,
            "symbolSize": 25,
            "category": 1
        },
        {
            "name": "子公司1",
            "value": 10,
            "symbolSize": 15,
            "category": 1
        },
        {
            "name": "子公司2",
            "value": 110,
            "symbolSize": 15,
            "category": 1
        },
        {
            "name": "子公司3",
            "value": 100,
            "symbolSize": 15,
            "category": 1
        }
    ],
    "links": [ //节点之间连接  
        {
            "source": 0, //起始节点，0表示第一个节点  
            "target": 1 //目标节点，1表示与索引为1的节点进行连接  
        },
        {
            "source": 0,
            "target": 2
        },
        {
            "source": 1,
            "target": 3
        },
        {
            "source": 1,
            "target": 4
        },
        {
            "source": 2,
            "target": 5
        },
        {
            "source": 2,
            "target": 6
        },
        {
            "source": 7, //起始节点，0表示第一个节点  
            "target": 8 //目标节点，1表示与索引为1的节点进行连接  
        },
        {
            "source": 7, //起始节点，0表示第一个节点  
            "target": 9 //目标节点，1表示与索引为1的节点进行连接  
        },
        {
            "source": 7, //起始节点，0表示第一个节点  
            "target": 10 //目标节点，1表示与索引为1的节点进行连接  
        },
        {
            "source": 8, //起始节点，0表示第一个节点  
            "target": 11 //目标节点，1表示与索引为1的节点进行连接  
        },
        {
            "source": 9, //起始节点，0表示第一个节点  
            "target": 12 //目标节点，1表示与索引为1的节点进行连接  
        },
        {
            "source": 10, //起始节点，0表示第一个节点  
            "target": 13 //目标节点，1表示与索引为1的节点进行连接  
        }
    ]
};
myChart.hideLoading();

option = {
    legend: {
        data: ['甲公司', '乙公司'] //此处的数据必须和关系网类别中name相对应  
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
            edgeLength: 80, //连线的长度  
            repulsion: 100 //子节点之间的间距  
        },
        edges: webkitDep.links
    }]
};