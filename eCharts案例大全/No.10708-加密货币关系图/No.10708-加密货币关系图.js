var uploadedDataURL = "/asset/get/s/data-1563352347602-EHpoMsHhm.jpg";



var size = 50;
var size1 = 50;
var option = {
    title: {
        text: "",
        top: "top",
        left: "left",
        textStyle: {
            color: '#f7f7f7'
        }
    },
    tooltip: {
        formatter: '{b}'
    },
    toolbox: {
        show: true,
        feature: {
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    animationDuration: 1000,
    animationEasingUpdate: 'quinticInOut',
    series: [{
        name: '项目',
        type: 'graph',
        layout: 'force',
        force: {
            repulsion: 60,
            gravity: 0.0001,
            edgeLength: [10, 300],
            layoutAnimation: true,
        },
        data: [{
                "name": "BTC",
                "symbolSize": 60,
                // "symbol": 'image://img/head/05.png',
                // 'symbolOffset':[0, '50%'],
                "category": "当前项目节点",
                "value": "比特币",
                "draggable": "true"
            }, {
                "name": "曹秀琴",
                "symbolSize": size,
                "category": "人物",
                "value": "联合创始人",
                "draggable": "true"

            }, {
                "name": "徐军",
                "symbolSize": size1,
                "category": "人物",
                "draggable": "true",
                "symbol": 'image://asset/get/s/data-1563352347602-EHpoMsHhm.jpg'
            }, {
                "name": "宋强",
                "symbolSize": size1,
                "category": "人物",
                "draggable": "true"
            },
            {
                "name": "韩娜",
                "symbolSize": size1,
                "category": "人物",
                "draggable": "true"
            }, {
                "name": "ETH",
                "symbolSize": size1,
                "category": "项目",
                "draggable": "true"
            }
        ],
        links: [{
                "source": "BTC",
                "target": "徐军",
                "value": "创始人"
            }, {
                "source": "BTC",
                "target": "曹秀琴",
                "value": "联合创始人"
            }, {
                "source": "BTC",
                "target": "宋强",
                "value": "联合创始人"
            }, {
                "source": "BTC",
                "target": "韩娜",
                "value": "联合创始人"
            }, {
                "source": "BTC",
                "target": "ETH",
                "value": "分叉"
            },
            {
                "source": "ETH",
                "target": "BTC",
                "value": "反哺"
            },
            {
                "source": "韩娜",
                "target": "ETH",
                "value": "联合创始人"
            }
        ],
        categories: [{
            'name': '当前项目节点',
            itemStyle: {
                normal: {
                    color: "#EAA944",
                    borderColor: '#EAA944',
                    borderWidth: 2,
                }
            }
        }, {
            'name': '人物',
            itemStyle: {
                normal: {
                    color: "#E7736F",
                    borderColor: '#DB6C68',
                    borderWidth: 2,
                },
                emphasis: {
                    borderColor: '#EAA944',
                    borderWidth: 2,
                }
            }
        }, {
            'name': '项目',
            itemStyle: {
                normal: {
                    color: "#719BE3",
                    borderColor: '#719BE3',
                    borderWidth: 2,
                }
            }
        }],
        roam: true,
        edgeSymbol: ['', 'arrow'],
        edgeSymbolSize: 4,
        edgeLabel: {
            normal: {
                show: true,
                textStyle: {
                    fontSize: 10
                },
                formatter: "{c}"
            }
        },
        label: {
            normal: {
                formatter: '{b}',
                show: true,
                position: 'insideBottom',
                fontSize: 12,
                fontStyle: '500',

            }
        },
        focusNodeAdjacency: true,
        lineStyle: {
            normal: {
                width: 1,
                color: 'source',
                curveness: 0,
                type: "solid"
            }
        }
    }]
};