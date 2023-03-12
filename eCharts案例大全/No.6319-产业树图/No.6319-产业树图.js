var data2 = {
    "name": "广东省高职专业支撑产业",
    "children": [{
            "name": "战略性支柱产业群",
            "children": [{
                    "name": "新一代电子信息产业",
                    "children": [{
                        "name": "装备制造",
                        "value": 1316
                    }, {
                        "name": "电子信息",
                        "value": 1316
                    }]
                },
                {
                    "name": "绿色石化产业",
                    "children": [{
                        "name": "能源动力与材料",
                        "value": 1316
                    }, ]
                },
                {
                    "name": "智能家电产业",
                    "children": [{
                        "name": "装备制造",
                        "value": 1316
                    }, {
                        "name": "电子信息",
                        "value": 1316
                    }]
                },
                {
                    "name": "汽车产业",
                    "children": [{
                        "name": "装备制造",
                        "value": 1316
                    }, ]
                },
                {
                    "name": "先进材料产业",
                    "children": [{
                        "name": "能源动力与材料",
                        "value": 1316
                    }, ]
                },
                {
                    "name": "现代轻工纺织产业",
                    "children": [{
                        "name": "轻工业纺织",
                        "value": 1316
                    }, {
                        "name": "文化艺术",
                        "value": 1316
                    }]
                },
                {
                    "name": "软件与信息服务产业",
                    "children": [{
                        "name": "电子信息",
                        "value": 1316
                    }, ]
                },
                {
                    "name": "超高清视频显示产业",
                    "children": [{
                        "name": "装备制造",
                        "value": 1316
                    }, ]
                },
                {
                    "name": "生物医药与健康产业",
                    "children": [{
                        "name": "生物与化工",
                        "value": 1316
                    }, {
                        "name": "电子信息",
                        "value": 1316
                    }]
                },
                {
                    "name": "现代农业与食品产业",
                    "children": [{
                        "name": "食品药品与粮食",
                        "value": 1316
                    }, {
                        "name": "农林牧渔",
                        "value": 1316
                    }]
                }
            ]
        },
        {
            "name": "战略新兴产业群",
            "children": [{
                    "name": "半导体与集成电路产业",
                    "children": [{
                        "name": "装备制造",
                        "value": 1316
                    }, ]
                },
                {
                    "name": "高端装备制造产业",
                    "children": [{
                        "name": "装备制造",
                        "value": 1316
                    }, ]
                },
                {
                    "name": "智能机器人产业",
                    "children": [{
                        "name": "装备制造",
                        "value": 1316
                    }, ]
                },
                {
                    "name": "区块链与量子信息产业",
                    "children": [{
                        "name": "电子信息",
                        "value": 1316
                    }, ]
                },
                {
                    "name": "前沿新材料产业",
                    "children": [{
                        "name": "生物与化工",
                        "value": 1316
                    }, {
                        "name": "能源动力与材料",
                        "value": 1316
                    }]
                },
                {
                    "name": "新能源产业",
                    "children": [{
                        "name": "资源环境安全",
                        "value": 1316
                    }, ]
                },
                {
                    "name": "激光与增材制造产业",
                    "children": [{
                        "name": "装备制造",
                        "value": 1316
                    }, {
                        "name": "电子信息",
                        "value": 1316
                    }]
                },
                {
                    "name": "数字创意产业",
                    "children": [{
                        "name": "文化艺术",
                        "value": 1316
                    }, ]
                },
                {
                    "name": "安全应急与环保产业",
                    "children": [{
                        "name": "资源环境与安全",
                        "value": 1316
                    }, ]
                },
                {
                    "name": "精密仪器设备产业",
                    "children": [{
                        "name": "装备制造",
                        "value": 1316
                    }, ]
                }
            ]
        }
    ]
};


option = {
    backgroundColor:'rgb(255, 255, 255)',
    series: [{
        type: 'tree',
        data: [data2],
        layout: 'orthogonal',

        top: '5%',
        left: '25%',
        bottom: '5%',
        right: '20%',

        symbolSize: 10,
        edgeForkPosition:'20%',

        label: {
            position: 'left',
            distance: 5,
            fontSize: 19,
            fontWeight:'bold',
            verticalAlign: 'middle',
            align: 'right'
        },

        leaves: {
            label: {
                position: 'right',
                verticalAlign: 'middle',
                align: 'left'
            }
        },

        expandAndCollapse: true,
        initialTreeDepth: 3
    }]
};