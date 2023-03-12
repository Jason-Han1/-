var data = [
    {
        "node":"节点1",
        "endpoint":[
            "节点6",
            "节点8"
        ],
        "service":[
            "java.local.name_1",
            "java.local.name_11"
        ]
    },
    {
        "node":"节点2",
        "endpoint":[
            "节点6",
            "节点7"
        ],
        "service":[
            "java.local.name_2",
            "java.local.name_22"
        ]
    },{
        "node":"节点3",
        "endpoint":[
            "节点6"
        ],
        "service":[
            "java.local.name_3",
            "java.local.name_33"
        ]
    },{
        "node":"节点4",
        "endpoint":[
            "节点6"
        ],
        "service":[
            "java.local.name_4",
            "java.local.name_44"
        ]
    },{
        "node":"节点5",
        "endpoint":[
            "节点6"
        ],
        "service":[
            "java.local.name_5",
            "java.local.name_55"
        ]
    },{
        "node":"节点6",
        "endpoint":[
            "节点1",
            "节点2",
            "节点3",
            "节点4",
            "节点5",
            "节点7",
            "节点8"
        ],
        "service":[
            "java.local.name_6",
            "java.local.name_66"
        ]
    },{
        "node":"节点7",
        "endpoint":[
            "节点6",
            "节点2"
        ],
        "service":[
            "java.local.name_7",
            "java.local.name_77"
        ]
    },{
        "node":"节点8",
        "endpoint":[
            "节点6",
            "节点1"
        ],
        "service":[
            "java.local.name_8",
            "java.local.name_88"
        ]
    },{
        "node":"节点9",
        "endpoint":[
            "节点5",
            "节点1"
        ],
        "service":[
            "java.local.name_9",
            "java.local.name_99"
        ]
    }
];

function get_nodes(data) {
    var nodes = [];
    var tmp_nodes = [];
    for(var nodes_i in data) {
        tmp_nodes.push(data[nodes_i].node);
        nodes.push(
            {
                'name':data[nodes_i].node
            }
        );
    }
    return nodes;
}

function get_links(data) {
    var links = [];
    for(var nodes_i in data) {
        var node = data[nodes_i].node;
        var endpoint = data[nodes_i].endpoint;
        var service = data[nodes_i].service;
        // console.log(service);
        for(var service_i in endpoint) {
            links.push({
                'source':node,
                'target':endpoint[service_i],
                'label': {
                    'normal': {
                        'show': false,
                        'textStyle':{
                            'fontSize':5
                        },
                        'formatter': service
                    }
                },
                'lineStyle': {
                    'normal': {
                        'curveness': 0.1
                    }
                }
            })
        }
    }
    for (var i = 0, len1 = links.length; i < len1; i++) {
        for(var j = i, len2 = len1 - 1; j < len2; j++) {
            if (links[i].source==links[j].target) {
                links[j].lineStyle.normal.curveness = -0.1;
            }
        }
    }
    // console.log(links);
    return links;
}

var option = {
    title: {
        text: '调用关系demo'
    },
    // tooltip: {
        //formatter: '调用方法'
    // },
    animationDurationUpdate: 1500,
    animationEasing: 'cubicOut',
    animationEasingUpdate: 'quinticInOut',
    series : [
        {
            type: 'graph',
            layout: 'circular',
            // layout:'none',
            focusNodeAdjacency: true,
            legendHoverLink: true,
            hoverAnimation:true,
            symbolSize: 50,
            //edgeSymbolSize: 50,
            roam: true,
            symbol: "roundRect",
            label: {
                normal: {
                    show: true,
                }
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 15],
            edgeLabel: {
                normal: {
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            data: get_nodes(data),
            links: get_links(data),
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 2,
                    curveness: 0,
                    type :'dashed'
                }
            }
        },
    ]
};
//添加点击事件
myChart.on('click', function (params) {
    // 弹窗打印数据的名称
    console.log(params);
    if (params.dataType=="node") {
        alert("机器属性："+params.name);
    }else if(params.dataType=="edge"){
    alert("调用方法："+params.data.label.normal.formatter);
    }
});