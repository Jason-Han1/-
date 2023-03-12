var jsondatatemp = [{
        name: '美国',
        draggable: true,
        symbolSize: 120,
    }, {
        name: '纽约',
        category: 1,
        draggable: true,
        symbolSize: 90,
    }, {
        name: '旧金山',
        category: 1,
        draggable: true,
        symbolSize: 90,
    }, {
        name: '洛杉矶',
        category: 1,
        draggable: true,
        symbolSize: 90,
    },
    {
        name: "信息化建\n设预算",
        itemStyle: {
            color: '#339ca8'
        },
        symbolSize: 70,
    },
    {
        "name": "部门",
        itemStyle: {
            color: '#339ca8'
        },
        symbolSize: 70,
    },
    {
        "name": "专网",
        itemStyle: {
            color: '#339ca8'
        },
        symbolSize: 70,
    },
    {
        "name": "IT基础",
        itemStyle: {
            color: '#339ca8'
        },
        symbolSize: 70,
    },
    {
        "name": "制冷系统",
        itemStyle: {
            color: '#339ca8'
        },
        symbolSize: 70,
    },
    {
        "name": "UPS系统",
        itemStyle: {
            color: '#339ca8'
        },
        symbolSize: 70,
    },
    {
        "name": "服务器",
        itemStyle: {
            color: '#339ca8'
        },
        symbolSize: 70,

    },
    {
        "name": "存储",
        itemStyle: {
            color: '#339ca8'
        },
        symbolSize: 70,
    },
    {
        "name": "信息系统",
        itemStyle: {
            color: '#339ca8'
        },
        symbolSize: 70,
    }, {
        "name": "办公室1",
        itemStyle: {
            color: '#005eaa'
        },
        "children": [{
            "name": "B系统",
            itemStyle: {
                color: '#005eaa'
            },
            "value": "B系统"
        }]
    },
    {
        "name": "电子公文系统1",
        itemStyle: {
            color: '#005eaa'
        },
        "value": "电子公文系统1"
    }, {
        "name": "办公室2",
        itemStyle: {
            color: '#005eaa'
        },
        "children": []
    }, {
        "name": "B系统",
        itemStyle: {
            color: '#005eaa'
        },
        "value": "B系统"
    },
    {
        "name": "云",
        itemStyle: {
            color: '#339ca8'
        },
        symbolSize: 70,

    }, {
        "name": "电子政务外网",
        itemStyle: {
            color: '#005eaa'
        },
        "children": []
    },
    {
        "name": "电子政务内网",
        itemStyle: {
            color: '#005eaa'
        },
        "value": "电子政务内网"
    }, {
        "name": "年度运营情况",
        itemStyle: {
            color: '#e6b600'
        },
        "children": [{
                "name": "2018年电信100M",
                itemStyle: {
                    color: '#e6b600'
                },
                "value": "2018年电信100M"
            },
            {
                "name": "2019年电信500M",
                itemStyle: {
                    color: '#e6b600'
                },
                "value": "2019年电信500M"
            }
        ]
    },
    {
        "name": "年度运维费用",
        itemStyle: {
            color: '#e6b600'
        },
        "children": [{
                "name": "2018年800万",
                itemStyle: {
                    color: '#e6b600'
                },
                "value": "800万"
            },
            {
                "name": "2019年1000万",
                itemStyle: {
                    color: '#e6b600'
                },
                "value": "1000万"
            }
        ]
    }
]

var linkdata = [{
    source: '美国',
    target: '纽约',
    value: '',
    category: 0,
}, {
    source: '美国',
    target: '旧金山',
    value: ''
}, {
    source: '美国',
    target: '洛杉矶',
    value: ''
}, {
    source: '纽约',
    target: 'UPS系统',
    value: ''
}, {
    source: '纽约',
    target: "云",
    value: ''
}, {
    source: '纽约',
    target: "信息系统",
    value: ''
}, {
    source: '纽约',
    target: "部门",
    value: ''
}, {
    source: '纽约',
    target: "IT基础",
    value: ''
}, {
    source: '纽约',
    target: '制冷系统',
    value: ''
}, {
    source: '纽约',
    target: '服务器',
    value: ''
}, {
    source: '纽约',
    target: '信息化建\n设预算',
    value: ''
}, {
    source: '纽约',
    target: '存储',
    value: ''
}, {
    source: '部门',
    target: '办公室1',
    value: ''
}, {
    source: '部门',
    target: '办公室2',
    value: ''
}, {
    source: '办公室1',
    target: '电子公文系统1',
    value: ''
}, {
    source: '办公室1',
    target: 'B系统',
    value: ''
}, {
    source: '办公室2',
    target: 'B系统',
    value: ''
}, {
    source: '办公室2',
    target: '年度运维费用',
    value: ''
}, {
    source: '办公室2',
    target: '年度运营情况',
    value: ''
}, {
    source: '信息系统',
    target: '电子公文系统1',
    value: ''
}, {
    source: '信息系统',
    target: 'B系统',
    value: ''
}, {
    source: '专网',
    target: '电子政务内网',
    value: ''
}, {
    source: '专网',
    target: '电子政务外网',
    value: ''
}, {
    source: '纽约',
    target: '专网',
    value: ''
}]
option = {
    title: {
        text: ''
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    label: {
        normal: {
            show: true,
            textStyle: {
                fontSize: 12
            },
        }
    },
    legend: {
        x: "center",
        show: false,
        data: ["夫妻", "战友", '亲戚']
    },
    series: [

        {
            type: 'graph',
            layout: 'force',
            symbolSize: 45,
            focusNodeAdjacency: true,
            roam: true,
            categories: [{
                name: '夫妻',
                itemStyle: {
                    normal: {
                        color: "#009800",
                    }
                }
            }, {
                name: '战友',
                itemStyle: {
                    normal: {
                        color: "#4592FF",
                    }
                }
            }, {
                name: '亲戚',
                itemStyle: {
                    normal: {
                        color: "#3592F",
                    }
                }
            }],
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 12
                    },
                }
            },
            force: {
                layoutAnimation: true, //默认动态为true
                repulsion: 1000
            },
            edgeSymbolSize: [4, 50],
            edgeLabel: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 10
                    },
                    formatter: "{c}"
                }
            },
            data: jsondatatemp,
            links: linkdata,
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 1,
                    curveness: 0
                }
            }
        }
    ]
};